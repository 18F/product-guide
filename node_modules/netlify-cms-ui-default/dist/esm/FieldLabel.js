"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stateColors = {
  default: {
    background: _styles.colors.textFieldBorder,
    text: _styles.colors.controlLabel
  },
  active: {
    background: _styles.colors.active,
    text: _styles.colors.textLight
  },
  error: {
    background: _styles.colors.errorText,
    text: _styles.colorsRaw.white
  }
};

const getStateColors = ({
  isActive,
  hasErrors
}) => {
  if (hasErrors) return stateColors.error;
  if (isActive) return stateColors.active;
  return stateColors.default;
};

const FieldLabel = (0, _styledBase.default)("label", {
  target: "e1j7dp4t0",
  label: "FieldLabel"
})(_styles.text.fieldLabel, ";color:", props => getStateColors(props).text, ";background-color:", props => getStateColors(props).background, ";display:inline-block;border:0;border-radius:3px 3px 0 0;padding:3px 6px 2px;margin:0;transition:all ", _styles.transitions.main, ";position:relative;&:before,&:after{content:'';display:block;position:absolute;top:0;right:-4px;height:100%;width:4px;background-color:inherit;}&:after{border-bottom-left-radius:3px;background-color:#fff;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZExhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCK0IiLCJmaWxlIjoiLi4vLi4vc3JjL0ZpZWxkTGFiZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjb2xvcnMsIGNvbG9yc1JhdywgdHJhbnNpdGlvbnMsIHRleHQgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IHN0YXRlQ29sb3JzID0ge1xuICBkZWZhdWx0OiB7XG4gICAgYmFja2dyb3VuZDogY29sb3JzLnRleHRGaWVsZEJvcmRlcixcbiAgICB0ZXh0OiBjb2xvcnMuY29udHJvbExhYmVsLFxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuYWN0aXZlLFxuICAgIHRleHQ6IGNvbG9ycy50ZXh0TGlnaHQsXG4gIH0sXG4gIGVycm9yOiB7XG4gICAgYmFja2dyb3VuZDogY29sb3JzLmVycm9yVGV4dCxcbiAgICB0ZXh0OiBjb2xvcnNSYXcud2hpdGUsXG4gIH0sXG59O1xuXG5jb25zdCBnZXRTdGF0ZUNvbG9ycyA9ICh7IGlzQWN0aXZlLCBoYXNFcnJvcnMgfSkgPT4ge1xuICBpZiAoaGFzRXJyb3JzKSByZXR1cm4gc3RhdGVDb2xvcnMuZXJyb3I7XG4gIGlmIChpc0FjdGl2ZSkgcmV0dXJuIHN0YXRlQ29sb3JzLmFjdGl2ZTtcbiAgcmV0dXJuIHN0YXRlQ29sb3JzLmRlZmF1bHQ7XG59O1xuXG5jb25zdCBGaWVsZExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICAke3RleHQuZmllbGRMYWJlbH07XG4gIGNvbG9yOiAke3Byb3BzID0+IGdldFN0YXRlQ29sb3JzKHByb3BzKS50ZXh0fTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBnZXRTdGF0ZUNvbG9ycyhwcm9wcykuYmFja2dyb3VuZH07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgcGFkZGluZzogM3B4IDZweCAycHg7XG4gIG1hcmdpbjogMDtcbiAgdHJhbnNpdGlvbjogYWxsICR7dHJhbnNpdGlvbnMubWFpbn07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAvKipcbiAgICogRmF1eCBvdXRzaWRlIGN1cnZlIGludG8gdG9wIG9mIGlucHV0XG4gICAqL1xuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogLTRweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkTGFiZWw7XG4iXX0= */"));
var _default = FieldLabel;
exports.default = _default;