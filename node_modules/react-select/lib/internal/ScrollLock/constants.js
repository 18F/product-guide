"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCK_STYLES = exports.STYLE_KEYS = void 0;
var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
exports.STYLE_KEYS = STYLE_KEYS;
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};
exports.LOCK_STYLES = LOCK_STYLES;