"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.navigateToEntry = exports.navigateToNewEntry = exports.navigateToCollection = void 0;

var _history = require("history");

const history = (0, _history.createHashHistory)();

const navigateToCollection = collectionName => history.push(`/collections/${collectionName}`);

exports.navigateToCollection = navigateToCollection;

const navigateToNewEntry = collectionName => history.replace(`/collections/${collectionName}/new`);

exports.navigateToNewEntry = navigateToNewEntry;

const navigateToEntry = (collectionName, slug) => history.replace(`/collections/${collectionName}/entries/${slug}`);

exports.navigateToEntry = navigateToEntry;
var _default = history;
exports.default = _default;