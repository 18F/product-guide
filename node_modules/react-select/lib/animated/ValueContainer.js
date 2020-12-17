"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return _react.default.createElement(_reactTransitionGroup.TransitionGroup, _extends({
      component: WrappedComponent
    }, props));
  };
};

var _default = AnimatedValueContainer;
exports.default = _default;