"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NetlifyAuthenticator", {
  enumerable: true,
  get: function () {
    return _netlifyAuth.default;
  }
});
Object.defineProperty(exports, "ImplicitAuthenticator", {
  enumerable: true,
  get: function () {
    return _implicitOauth.default;
  }
});
exports.NetlifyCmsLibAuth = void 0;

var _netlifyAuth = _interopRequireDefault(require("./netlify-auth"));

var _implicitOauth = _interopRequireDefault(require("./implicit-oauth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NetlifyCmsLibAuth = {
  NetlifyAuthenticator: _netlifyAuth.default,
  ImplicitAuthenticator: _implicitOauth.default
};
exports.NetlifyCmsLibAuth = NetlifyCmsLibAuth;