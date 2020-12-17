"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.placeholderCSS = void 0;

var _react = _interopRequireDefault(require("react"));

var _emotion = require("emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

exports.placeholderCSS = placeholderCSS;

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return _react.default.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    (0, _emotion.css)(getStyles('placeholder', props)), {
      'placeholder': true
    }, className)
  }, innerProps), children);
};

var _default = Placeholder;
exports.default = _default;