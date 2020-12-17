"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MultiValueRemove = exports.MultiValueLabel = exports.MultiValueContainer = exports.MultiValueGeneric = exports.multiValueRemoveCSS = exports.multiValueLabelCSS = exports.multiValueCSS = void 0;

var _react = _interopRequireWildcard(require("react"));

var _emotion = require("emotion");

var _indicators = require("./indicators");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};

exports.multiValueCSS = multiValueCSS;

var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};

exports.multiValueLabelCSS = multiValueLabelCSS;

var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};

exports.multiValueRemoveCSS = multiValueRemoveCSS;

var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return _react.default.createElement("div", innerProps, children);
};

exports.MultiValueGeneric = MultiValueGeneric;
var MultiValueContainer = MultiValueGeneric;
exports.MultiValueContainer = MultiValueContainer;
var MultiValueLabel = MultiValueGeneric;
exports.MultiValueLabel = MultiValueLabel;

var MultiValueRemove =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiValueRemove, _Component);

  function MultiValueRemove() {
    _classCallCheck(this, MultiValueRemove);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiValueRemove).apply(this, arguments));
  }

  _createClass(MultiValueRemove, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerProps = _this$props.innerProps;
      return _react.default.createElement("div", innerProps, children || _react.default.createElement(_indicators.CrossIcon, {
        size: 14
      }));
    }
  }]);

  return MultiValueRemove;
}(_react.Component);

exports.MultiValueRemove = MultiValueRemove;

var MultiValue =
/*#__PURE__*/
function (_Component2) {
  _inherits(MultiValue, _Component2);

  function MultiValue() {
    _classCallCheck(this, MultiValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiValue).apply(this, arguments));
  }

  _createClass(MultiValue, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          components = _this$props2.components,
          cx = _this$props2.cx,
          data = _this$props2.data,
          getStyles = _this$props2.getStyles,
          innerProps = _this$props2.innerProps,
          isDisabled = _this$props2.isDisabled,
          removeProps = _this$props2.removeProps,
          selectProps = _this$props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;

      var containerInnerProps = _objectSpread({
        className: cx(
        /*#__PURE__*/
        (0, _emotion.css)(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className)
      }, innerProps);

      var labelInnerProps = {
        className: cx(
        /*#__PURE__*/
        (0, _emotion.css)(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className)
      };

      var removeInnerProps = _objectSpread({
        className: cx(
        /*#__PURE__*/
        (0, _emotion.css)(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      }, removeProps);

      return _react.default.createElement(Container, {
        data: data,
        innerProps: containerInnerProps,
        selectProps: selectProps
      }, _react.default.createElement(Label, {
        data: data,
        innerProps: labelInnerProps,
        selectProps: selectProps
      }, children), _react.default.createElement(Remove, {
        data: data,
        innerProps: removeInnerProps,
        selectProps: selectProps
      }));
    }
  }]);

  return MultiValue;
}(_react.Component);

_defineProperty(MultiValue, "defaultProps", {
  cropWithEllipsis: true
});

var _default = MultiValue;
exports.default = _default;