"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchingEntries = searchingEntries;
exports.searchSuccess = searchSuccess;
exports.searchFailure = searchFailure;
exports.querying = querying;
exports.querySuccess = querySuccess;
exports.queryFailure = queryFailure;
exports.clearSearch = clearSearch;
exports.searchEntries = searchEntries;
exports.query = query;
exports.SEARCH_CLEAR = exports.QUERY_FAILURE = exports.QUERY_SUCCESS = exports.QUERY_REQUEST = exports.SEARCH_ENTRIES_FAILURE = exports.SEARCH_ENTRIES_SUCCESS = exports.SEARCH_ENTRIES_REQUEST = void 0;

var _backend = require("../backend");

var _integrations = require("../integrations");

var _reducers = require("../reducers");

var _immutable = require("immutable");

/*
 * Constant Declarations
 */
const SEARCH_ENTRIES_REQUEST = 'SEARCH_ENTRIES_REQUEST';
exports.SEARCH_ENTRIES_REQUEST = SEARCH_ENTRIES_REQUEST;
const SEARCH_ENTRIES_SUCCESS = 'SEARCH_ENTRIES_SUCCESS';
exports.SEARCH_ENTRIES_SUCCESS = SEARCH_ENTRIES_SUCCESS;
const SEARCH_ENTRIES_FAILURE = 'SEARCH_ENTRIES_FAILURE';
exports.SEARCH_ENTRIES_FAILURE = SEARCH_ENTRIES_FAILURE;
const QUERY_REQUEST = 'INIT_QUERY';
exports.QUERY_REQUEST = QUERY_REQUEST;
const QUERY_SUCCESS = 'QUERY_OK';
exports.QUERY_SUCCESS = QUERY_SUCCESS;
const QUERY_FAILURE = 'QUERY_ERROR';
exports.QUERY_FAILURE = QUERY_FAILURE;
const SEARCH_CLEAR = 'SEARCH_CLEAR';
/*
 * Simple Action Creators (Internal)
 * We still need to export them for tests
 */

exports.SEARCH_CLEAR = SEARCH_CLEAR;

function searchingEntries(searchTerm, searchCollections, page) {
  return {
    type: SEARCH_ENTRIES_REQUEST,
    payload: {
      searchTerm,
      searchCollections,
      page
    }
  };
}

function searchSuccess(searchTerm, searchCollections, entries, page) {
  return {
    type: SEARCH_ENTRIES_SUCCESS,
    payload: {
      searchTerm,
      searchCollections,
      entries,
      page
    }
  };
}

function searchFailure(searchTerm, error) {
  return {
    type: SEARCH_ENTRIES_FAILURE,
    payload: {
      searchTerm,
      error
    }
  };
}

function querying(namespace, collection, searchFields, searchTerm) {
  return {
    type: QUERY_REQUEST,
    payload: {
      namespace,
      collection,
      searchFields,
      searchTerm
    }
  };
}

function querySuccess(namespace, collection, searchFields, searchTerm, response) {
  return {
    type: QUERY_SUCCESS,
    payload: {
      namespace,
      collection,
      searchFields,
      searchTerm,
      response
    }
  };
}

function queryFailure(namespace, collection, searchFields, searchTerm, error) {
  return {
    type: QUERY_FAILURE,
    payload: {
      namespace,
      collection,
      searchFields,
      searchTerm,
      error
    }
  };
}
/*
 * Exported simple Action Creators
 */


function clearSearch() {
  return {
    type: SEARCH_CLEAR
  };
}
/*
 * Exported Thunk Action Creators
 */
// SearchEntries will search for complete entries in all collections.


function searchEntries(searchTerm, searchCollections = null, page = 0) {
  return (dispatch, getState) => {
    const state = getState();
    const {
      search
    } = state;
    const backend = (0, _backend.currentBackend)(state.config);
    const allCollections = searchCollections || state.collections.keySeq().toArray();
    const collections = allCollections.filter(collection => (0, _reducers.selectIntegration)(state, collection, 'search'));
    const integration = (0, _reducers.selectIntegration)(state, collections[0], 'search'); // avoid duplicate searches

    if (search.get('isFetching') === true && search.get('term') === searchTerm && search.get('collections') !== null && (0, _immutable.List)(allCollections).equals(search.get('collections')) && ( // if an integration doesn't exist, 'page' is not used
    search.get('page') === page || !integration)) {
      return;
    }

    dispatch(searchingEntries(searchTerm, allCollections, page));
    const searchPromise = integration ? (0, _integrations.getIntegrationProvider)(state.integrations, backend.getToken, integration).search(collections, searchTerm, page) : backend.search(state.collections.filter((_, key) => allCollections.indexOf(key) !== -1).valueSeq().toArray(), searchTerm);
    return searchPromise.then(response => dispatch(searchSuccess(searchTerm, allCollections, response.entries, response.pagination)), error => dispatch(searchFailure(searchTerm, error)));
  };
} // Instead of searching for complete entries, query will search for specific fields
// in specific collections and return raw data (no entries).


function query(namespace, collectionName, searchFields, searchTerm, file, limit) {
  return async (dispatch, getState) => {
    dispatch(querying(namespace, collectionName, searchFields, searchTerm));
    const state = getState();
    const backend = (0, _backend.currentBackend)(state.config);
    const integration = (0, _reducers.selectIntegration)(state, collectionName, 'search');
    const collection = state.collections.find(collection => collection.get('name') === collectionName);
    const queryPromise = integration ? (0, _integrations.getIntegrationProvider)(state.integrations, backend.getToken, integration).searchBy(searchFields.map(f => `data.${f}`), collectionName, searchTerm) : backend.query(collection, searchFields, searchTerm, file, limit);

    try {
      const response = await queryPromise;
      return dispatch(querySuccess(namespace, collectionName, searchFields, searchTerm, response));
    } catch (error) {
      return dispatch(queryFailure(namespace, collectionName, searchFields, searchTerm, error));
    }
  };
}