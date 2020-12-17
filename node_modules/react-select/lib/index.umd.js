"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Select = _interopRequireDefault(require("./Select"));

var _stateManager = _interopRequireDefault(require("./stateManager"));

var _Async = _interopRequireDefault(require("./Async"));

var _AsyncCreatable = _interopRequireDefault(require("./AsyncCreatable"));

var _Creatable = _interopRequireDefault(require("./Creatable"));

var _filters = require("./filters");

var _index = require("./components/index");

var _styles = require("./styles");

var _theme = require("./theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file exists as an entry point for bundling our umd builds.
// Both in rollup and in webpack, umd builds built from es6 modules are not
// compatible with mixed imports (which exist in index.js)
// This file does away with named imports in favor of a single export default.
var Select = (0, _stateManager.default)(_Select.default);
Select.Async = _Async.default;
Select.AsyncCreatable = _AsyncCreatable.default;
Select.Creatable = _Creatable.default;
Select.SelectBase = _Select.default;
Select.createFilter = _filters.createFilter;
Select.components = _index.components;
Select.mergeStyles = _styles.mergeStyles;
Select.defaultTheme = _theme.defaultTheme;
var _default = Select;
exports.default = _default;