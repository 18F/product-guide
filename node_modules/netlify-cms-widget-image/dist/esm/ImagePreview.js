"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = require("immutable");

var _netlifyCmsUiDefault = require("netlify-cms-ui-default");

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const StyledImage = ( /*#__PURE__*/0, _styledBase.default)(({
  src
}) => (0, _core.jsx)("img", {
  src: src || '',
  role: "presentation"
}), {
  target: "e1ksx8c40",
  label: "StyledImage"
})(process.env.NODE_ENV === "production" ? {
  name: "6b4u1g",
  styles: "display:block;max-width:100%;height:auto;"
} : {
  name: "6b4u1g",
  styles: "display:block;max-width:100%;height:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbWFnZVByZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9GIiwiZmlsZSI6Ii4uLy4uL3NyYy9JbWFnZVByZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgV2lkZ2V0UHJldmlld0NvbnRhaW5lciB9IGZyb20gJ25ldGxpZnktY21zLXVpLWRlZmF1bHQnO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZCgoeyBzcmMgfSkgPT4gPGltZyBzcmM9e3NyYyB8fCAnJ30gcm9sZT1cInByZXNlbnRhdGlvblwiIC8+KWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2VBc3NldCA9ICh7IGdldEFzc2V0LCB2YWx1ZSwgZmllbGQgfSkgPT4ge1xuICByZXR1cm4gPFN0eWxlZEltYWdlIHNyYz17Z2V0QXNzZXQodmFsdWUsIGZpZWxkKX0gLz47XG59O1xuXG5jb25zdCBJbWFnZVByZXZpZXdDb250ZW50ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHZhbHVlLCBnZXRBc3NldCwgZmllbGQgfSA9IHByb3BzO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgTGlzdC5pc0xpc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcCh2YWwgPT4gKFxuICAgICAgPFN0eWxlZEltYWdlQXNzZXQga2V5PXt2YWx9IHZhbHVlPXt2YWx9IGdldEFzc2V0PXtnZXRBc3NldH0gZmllbGQ9e2ZpZWxkfSAvPlxuICAgICkpO1xuICB9XG4gIHJldHVybiA8U3R5bGVkSW1hZ2VBc3NldCB7Li4ucHJvcHN9IC8+O1xufTtcblxuY29uc3QgSW1hZ2VQcmV2aWV3ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXaWRnZXRQcmV2aWV3Q29udGFpbmVyPlxuICAgICAge3Byb3BzLnZhbHVlID8gPEltYWdlUHJldmlld0NvbnRlbnQgey4uLnByb3BzfSAvPiA6IG51bGx9XG4gICAgPC9XaWRnZXRQcmV2aWV3Q29udGFpbmVyPlxuICApO1xufTtcblxuSW1hZ2VQcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgZ2V0QXNzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlUHJldmlldztcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const StyledImageAsset = ({
  getAsset,
  value,
  field
}) => {
  return (0, _core.jsx)(StyledImage, {
    src: getAsset(value, field)
  });
};

const ImagePreviewContent = props => {
  const {
    value,
    getAsset,
    field
  } = props;

  if (Array.isArray(value) || _immutable.List.isList(value)) {
    return value.map(val => (0, _core.jsx)(StyledImageAsset, {
      key: val,
      value: val,
      getAsset: getAsset,
      field: field
    }));
  }

  return (0, _core.jsx)(StyledImageAsset, props);
};

const ImagePreview = props => {
  return (0, _core.jsx)(_netlifyCmsUiDefault.WidgetPreviewContainer, null, props.value ? (0, _core.jsx)(ImagePreviewContent, props) : null);
};

ImagePreview.propTypes = {
  getAsset: _propTypes.default.func.isRequired,
  value: _propTypes.default.node
};
var _default = ImagePreview;
exports.default = _default;