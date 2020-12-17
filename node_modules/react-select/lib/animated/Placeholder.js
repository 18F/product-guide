"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _transitions = require("./transitions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// fade in when last multi-value removed, otherwise instant
var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return _react.default.createElement(_transitions.Fade, _extends({
      component: WrappedComponent,
      duration: props.isMulti ? _transitions.collapseDuration : 1
    }, props));
  };
};

var _default = AnimatedPlaceholder;
exports.default = _default;