"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class StringControl extends _react.default.Component {
  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    return (0, _core.jsx)("input", {
      type: "text",
      id: forID,
      className: classNameWrapper,
      value: value || '',
      onChange: e => onChange(e.target.value),
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle
    });
  }

}

exports.default = StringControl;

_defineProperty(StringControl, "propTypes", {
  onChange: _propTypes.default.func.isRequired,
  forID: _propTypes.default.string,
  value: _propTypes.default.node,
  classNameWrapper: _propTypes.default.string.isRequired,
  setActiveStyle: _propTypes.default.func.isRequired,
  setInactiveStyle: _propTypes.default.func.isRequired
});

_defineProperty(StringControl, "defaultProps", {
  value: ''
});