"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _transitions = require("./transitions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// instant fade; all transition-group children must be transitions
var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return _react.default.createElement(_transitions.Fade, _extends({
      component: WrappedComponent
    }, props));
  };
};

var _default = AnimatedSingleValue;
exports.default = _default;