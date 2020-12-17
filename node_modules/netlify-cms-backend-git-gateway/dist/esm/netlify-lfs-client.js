"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClient = exports.matchPath = void 0;

var _map2 = _interopRequireDefault(require("lodash/fp/map"));

var _fromPairs2 = _interopRequireDefault(require("lodash/fp/fromPairs"));

var _flow2 = _interopRequireDefault(require("lodash/fp/flow"));

var _minimatch = _interopRequireDefault(require("minimatch"));

var _netlifyCmsLibUtil = require("netlify-cms-lib-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const matchPath = ({
  patterns
}, path) => patterns.some(pattern => (0, _minimatch.default)(path, pattern, {
  matchBase: true
})); //
// API interactions


exports.matchPath = matchPath;
const defaultContentHeaders = {
  Accept: 'application/vnd.git-lfs+json',
  ['Content-Type']: 'application/vnd.git-lfs+json'
};

const resourceExists = async ({
  rootURL,
  makeAuthorizedRequest
}, {
  sha,
  size
}) => {
  const response = await makeAuthorizedRequest({
    url: `${rootURL}/verify`,
    method: 'POST',
    headers: defaultContentHeaders,
    body: JSON.stringify({
      oid: sha,
      size
    })
  });

  if (response.ok) {
    return true;
  }

  if (response.status === 404) {
    return false;
  } // TODO: what kind of error to throw here? APIError doesn't seem
  // to fit

};

const getTransofrmationsParams = t => `?nf_resize=${t.nf_resize}&w=${t.w}&h=${t.h}`;

const getDownloadURL = ({
  rootURL,
  transformImages: t,
  makeAuthorizedRequest
}, {
  sha
}) => makeAuthorizedRequest(`${rootURL}/origin/${sha}${t && Object.keys(t).length > 0 ? getTransofrmationsParams(t) : ''}`).then(res => res.ok ? res : Promise.reject(res)).then(res => res.blob()).then(blob => URL.createObjectURL(blob)).catch(err => {
  console.error(err);
  return Promise.resolve('');
});

const uploadOperation = objects => ({
  operation: 'upload',
  transfers: ['basic'],
  objects: objects.map((_ref) => {
    let {
      sha
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["sha"]);

    return _objectSpread(_objectSpread({}, rest), {}, {
      oid: sha
    });
  })
});

const getResourceUploadURLs = async ({
  rootURL,
  makeAuthorizedRequest
}, objects) => {
  const response = await makeAuthorizedRequest({
    url: `${rootURL}/objects/batch`,
    method: 'POST',
    headers: defaultContentHeaders,
    body: JSON.stringify(uploadOperation(objects))
  });
  return (await response.json()).objects.map(object => {
    if (object.error) {
      throw new Error(object.error.message);
    }

    return object.actions.upload.href;
  });
};

const uploadBlob = (uploadURL, blob) => _netlifyCmsLibUtil.unsentRequest.fetchWithTimeout(uploadURL, {
  method: 'PUT',
  body: blob
});

const uploadResource = async (clientConfig, {
  sha,
  size
}, resource) => {
  const existingFile = await resourceExists(clientConfig, {
    sha,
    size
  });

  if (existingFile) {
    return sha;
  }

  const [uploadURL] = await getResourceUploadURLs(clientConfig, [{
    sha,
    size
  }]);
  await uploadBlob(uploadURL, resource);
  return sha;
}; //
// Create Large Media client


const configureFn = (config, fn) => (...args) => fn(config, ...args);

const clientFns = {
  resourceExists,
  getResourceUploadURLs,
  getDownloadURL,
  uploadResource,
  matchPath
};

const getClient = clientConfig => {
  return (0, _flow2.default)([Object.keys, (0, _map2.default)(key => [key, configureFn(clientConfig, clientFns[key])]), _fromPairs2.default, configuredFns => _objectSpread(_objectSpread({}, configuredFns), {}, {
    patterns: clientConfig.patterns,
    enabled: clientConfig.enabled
  })])(clientFns);
};

exports.getClient = getClient;