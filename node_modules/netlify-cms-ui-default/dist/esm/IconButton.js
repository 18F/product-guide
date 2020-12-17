"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _styles = require("./styles");

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sizes = {
  small: '28px',
  large: '40px'
};
const ButtonRound = (0, _styledBase.default)("button", {
  target: "e32dhqu0",
  label: "ButtonRound"
})(_styles.buttons.button, ";", _styles.shadows.dropMiddle, ";background-color:", _styles.colorsRaw.white, ";color:", props => _styles.colors[props.isActive ? `active` : `inactive`], ";border-radius:32px;display:flex;justify-content:center;align-items:center;width:", props => sizes[props.size], ";height:", props => sizes[props.size], ";padding:0;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVpQyIsImZpbGUiOiIuLi8uLi9zcmMvSWNvbkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IHsgYnV0dG9ucywgY29sb3JzLCBjb2xvcnNSYXcsIHNoYWRvd3MgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IHNpemVzID0ge1xuICBzbWFsbDogJzI4cHgnLFxuICBsYXJnZTogJzQwcHgnLFxufTtcblxuY29uc3QgQnV0dG9uUm91bmQgPSBzdHlsZWQuYnV0dG9uYFxuICAke2J1dHRvbnMuYnV0dG9ufTtcbiAgJHtzaGFkb3dzLmRyb3BNaWRkbGV9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yc1Jhdy53aGl0ZX07XG4gIGNvbG9yOiAke3Byb3BzID0+IGNvbG9yc1twcm9wcy5pc0FjdGl2ZSA/IGBhY3RpdmVgIDogYGluYWN0aXZlYF19O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gc2l6ZXNbcHJvcHMuc2l6ZV19O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gc2l6ZXNbcHJvcHMuc2l6ZV19O1xuICBwYWRkaW5nOiAwO1xuYDtcblxuY29uc3QgSWNvbkJ1dHRvbiA9ICh7IHNpemUsIGlzQWN0aXZlLCB0eXBlLCBvbkNsaWNrLCBjbGFzc05hbWUsIHRpdGxlIH0pID0+IChcbiAgPEJ1dHRvblJvdW5kXG4gICAgc2l6ZT17c2l6ZX1cbiAgICBpc0FjdGl2ZT17aXNBY3RpdmV9XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgICB0aXRsZT17dGl0bGV9XG4gID5cbiAgICA8SWNvbiB0eXBlPXt0eXBlfSBzaXplPXtzaXplfSAvPlxuICA8L0J1dHRvblJvdW5kPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbkJ1dHRvbjtcbiJdfQ== */"));

const IconButton = ({
  size,
  isActive,
  type,
  onClick,
  className,
  title
}) => (0, _core.jsx)(ButtonRound, {
  size: size,
  isActive: isActive,
  className: className,
  onClick: onClick,
  title: title
}, (0, _core.jsx)(_Icon.default, {
  type: type,
  size: size
}));

var _default = IconButton;
exports.default = _default;