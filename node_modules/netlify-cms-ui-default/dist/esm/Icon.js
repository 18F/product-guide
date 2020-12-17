"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = _interopRequireDefault(require("./Icon/icons"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IconWrapper = (0, _styledBase.default)("span", {
  target: "ei6fm2r0",
  label: "IconWrapper"
})("display:inline-block;line-height:0;width:", props => props.size, ";height:", props => props.size, ";transform:", props => `rotate(${props.rotation})`, ";& path:not(.no-fill),& circle:not(.no-fill),& polygon:not(.no-fill),& rect:not(.no-fill){fill:currentColor;}& path.clipped{fill:transparent;}svg{width:100%;height:100%;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUsrQiIsImZpbGUiOiIuLi8uLi9zcmMvSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IGljb25zIGZyb20gJy4vSWNvbi9pY29ucyc7XG5cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnNpemV9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuc2l6ZX07XG4gIHRyYW5zZm9ybTogJHtwcm9wcyA9PiBgcm90YXRlKCR7cHJvcHMucm90YXRpb259KWB9O1xuXG4gICYgcGF0aDpub3QoLm5vLWZpbGwpLFxuICAmIGNpcmNsZTpub3QoLm5vLWZpbGwpLFxuICAmIHBvbHlnb246bm90KC5uby1maWxsKSxcbiAgJiByZWN0Om5vdCgubm8tZmlsbCkge1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gICYgcGF0aC5jbGlwcGVkIHtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5gO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgcm90YXRpb24gZm9yIGljb25zIHRoYXQgaGF2ZSBhIGBkaXJlY3Rpb25gIHByb3BlcnR5IGNvbmZpZ3VyZWRcbiAqIGluIHRoZSBpbXBvcnRlZCBpY29uIGRlZmluaXRpb24gb2JqZWN0LiBJZiBubyBkaXJlY3Rpb24gaXMgY29uZmlndXJlZCwgYVxuICogbmV1dHJhbCByb3RhdGlvbiB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBSZXR1cm5lZCB2YWx1ZSBpcyBhIHN0cmluZyBvZiBzaGFwZSBgJHtkZWdyZWVzfWRlZ2AsIGZvciB1c2UgaW4gYSBDU1NcbiAqIHRyYW5zZm9ybS5cbiAqL1xuY29uc3QgZ2V0Um90YXRpb24gPSAoaWNvbkRpcmVjdGlvbiwgbmV3RGlyZWN0aW9uKSA9PiB7XG4gIGlmICghaWNvbkRpcmVjdGlvbiB8fCAhbmV3RGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuICcwZGVnJztcbiAgfVxuICBjb25zdCByb3RhdGlvbnMgPSB7IHJpZ2h0OiA5MCwgZG93bjogMTgwLCBsZWZ0OiAyNzAsIHVwOiAzNjAgfTtcbiAgY29uc3QgZGVncmVlcyA9IHJvdGF0aW9uc1tuZXdEaXJlY3Rpb25dIC0gcm90YXRpb25zW2ljb25EaXJlY3Rpb25dO1xuICByZXR1cm4gYCR7ZGVncmVlc31kZWdgO1xufTtcblxuY29uc3Qgc2l6ZXMgPSB7XG4gIHhzbWFsbDogJzEycHgnLFxuICBzbWFsbDogJzE4cHgnLFxuICBtZWRpdW06ICcyNHB4JyxcbiAgbGFyZ2U6ICczMnB4Jyxcbn07XG5cbmNvbnN0IEljb24gPSAoeyB0eXBlLCBkaXJlY3Rpb24sIHNpemUgPSAnbWVkaXVtJywgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgSWNvblN2ZyA9IGljb25zW3R5cGVdLmltYWdlO1xuXG4gIHJldHVybiAoXG4gICAgPEljb25XcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHNpemU9e3NpemVzW3NpemVdIHx8IHNpemV9XG4gICAgICByb3RhdGlvbj17Z2V0Um90YXRpb24oaWNvbnNbdHlwZV0uZGlyZWN0aW9uLCBkaXJlY3Rpb24pfVxuICAgID5cbiAgICAgIDxJY29uU3ZnIC8+XG4gICAgPC9JY29uV3JhcHBlcj5cbiAgKTtcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncmlnaHQnLCAnZG93bicsICdsZWZ0JywgJ3VwJ10pLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoSWNvbilgYDtcbiJdfQ== */"));
/**
 * Calculates rotation for icons that have a `direction` property configured
 * in the imported icon definition object. If no direction is configured, a
 * neutral rotation value is returned.
 *
 * Returned value is a string of shape `${degrees}deg`, for use in a CSS
 * transform.
 */

const getRotation = (iconDirection, newDirection) => {
  if (!iconDirection || !newDirection) {
    return '0deg';
  }

  const rotations = {
    right: 90,
    down: 180,
    left: 270,
    up: 360
  };
  const degrees = rotations[newDirection] - rotations[iconDirection];
  return `${degrees}deg`;
};

const sizes = {
  xsmall: '12px',
  small: '18px',
  medium: '24px',
  large: '32px'
};

const Icon = ({
  type,
  direction,
  size = 'medium',
  className
}) => {
  const IconSvg = _icons.default[type].image;
  return (0, _core.jsx)(IconWrapper, {
    className: className,
    size: sizes[size] || size,
    rotation: getRotation(_icons.default[type].direction, direction)
  }, (0, _core.jsx)(IconSvg, null));
};

Icon.propTypes = {
  type: _propTypes.default.string.isRequired,
  direction: _propTypes.default.oneOf(['right', 'down', 'left', 'up']),
  size: _propTypes.default.string,
  className: _propTypes.default.string
};

var _default = ( /*#__PURE__*/0, _styledBase.default)(Icon, {
  target: "ei6fm2r1"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFMkIiLCJmaWxlIjoiLi4vLi4vc3JjL0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBpY29ucyBmcm9tICcuL0ljb24vaWNvbnMnO1xuXG5jb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5zaXplfTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnNpemV9O1xuICB0cmFuc2Zvcm06ICR7cHJvcHMgPT4gYHJvdGF0ZSgke3Byb3BzLnJvdGF0aW9ufSlgfTtcblxuICAmIHBhdGg6bm90KC5uby1maWxsKSxcbiAgJiBjaXJjbGU6bm90KC5uby1maWxsKSxcbiAgJiBwb2x5Z29uOm5vdCgubm8tZmlsbCksXG4gICYgcmVjdDpub3QoLm5vLWZpbGwpIHtcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAmIHBhdGguY2xpcHBlZCB7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICBzdmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuYDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHJvdGF0aW9uIGZvciBpY29ucyB0aGF0IGhhdmUgYSBgZGlyZWN0aW9uYCBwcm9wZXJ0eSBjb25maWd1cmVkXG4gKiBpbiB0aGUgaW1wb3J0ZWQgaWNvbiBkZWZpbml0aW9uIG9iamVjdC4gSWYgbm8gZGlyZWN0aW9uIGlzIGNvbmZpZ3VyZWQsIGFcbiAqIG5ldXRyYWwgcm90YXRpb24gdmFsdWUgaXMgcmV0dXJuZWQuXG4gKlxuICogUmV0dXJuZWQgdmFsdWUgaXMgYSBzdHJpbmcgb2Ygc2hhcGUgYCR7ZGVncmVlc31kZWdgLCBmb3IgdXNlIGluIGEgQ1NTXG4gKiB0cmFuc2Zvcm0uXG4gKi9cbmNvbnN0IGdldFJvdGF0aW9uID0gKGljb25EaXJlY3Rpb24sIG5ld0RpcmVjdGlvbikgPT4ge1xuICBpZiAoIWljb25EaXJlY3Rpb24gfHwgIW5ld0RpcmVjdGlvbikge1xuICAgIHJldHVybiAnMGRlZyc7XG4gIH1cbiAgY29uc3Qgcm90YXRpb25zID0geyByaWdodDogOTAsIGRvd246IDE4MCwgbGVmdDogMjcwLCB1cDogMzYwIH07XG4gIGNvbnN0IGRlZ3JlZXMgPSByb3RhdGlvbnNbbmV3RGlyZWN0aW9uXSAtIHJvdGF0aW9uc1tpY29uRGlyZWN0aW9uXTtcbiAgcmV0dXJuIGAke2RlZ3JlZXN9ZGVnYDtcbn07XG5cbmNvbnN0IHNpemVzID0ge1xuICB4c21hbGw6ICcxMnB4JyxcbiAgc21hbGw6ICcxOHB4JyxcbiAgbWVkaXVtOiAnMjRweCcsXG4gIGxhcmdlOiAnMzJweCcsXG59O1xuXG5jb25zdCBJY29uID0gKHsgdHlwZSwgZGlyZWN0aW9uLCBzaXplID0gJ21lZGl1bScsIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IEljb25TdmcgPSBpY29uc1t0eXBlXS5pbWFnZTtcblxuICByZXR1cm4gKFxuICAgIDxJY29uV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBzaXplPXtzaXplc1tzaXplXSB8fCBzaXplfVxuICAgICAgcm90YXRpb249e2dldFJvdGF0aW9uKGljb25zW3R5cGVdLmRpcmVjdGlvbiwgZGlyZWN0aW9uKX1cbiAgICA+XG4gICAgICA8SWNvblN2ZyAvPlxuICAgIDwvSWNvbldyYXBwZXI+XG4gICk7XG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCcsICd1cCddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEljb24pYGA7XG4iXX0= */");

exports.default = _default;