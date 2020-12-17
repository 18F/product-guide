"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _netlifyCmsLibAuth = require("netlify-cms-lib-auth");

var _netlifyCmsUiDefault = require("netlify-cms-ui-default");

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const LoginButtonIcon = ( /*#__PURE__*/0, _styledBase.default)(_netlifyCmsUiDefault.Icon, {
  target: "e191r7590",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "x0sdsu",
  styles: "margin-right:18px;"
} : {
  name: "x0sdsu",
  styles: "margin-right:18px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE5ldGxpZnlBdXRoZW50aWNhdG9yIH0gZnJvbSAnbmV0bGlmeS1jbXMtbGliLWF1dGgnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYWdlLCBJY29uIH0gZnJvbSAnbmV0bGlmeS1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IExvZ2luQnV0dG9uSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuYDtcblxuY29uc3QgRm9ya0FwcHJvdmFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1ncm93OiAwLjI7XG5gO1xuY29uc3QgRm9ya0J1dHRvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0SHViQXV0aGVudGljYXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkxvZ2luOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluUHJvZ3Jlc3M6IFByb3BUeXBlcy5ib29sLFxuICAgIGJhc2VfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpdGVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdXRoRW5kcG9pbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY2xlYXJIYXNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgZ2V0UGVybWlzc2lvblRvRm9yayA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlcXVlc3RpbmdGb3JrOiB0cnVlLFxuICAgICAgICBhcHByb3ZlRm9yazogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXF1ZXN0aW5nRm9yazogZmFsc2UgfSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICByZWZ1c2VGb3JrOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcXVlc3RpbmdGb3JrOiBmYWxzZSB9KTtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGxvZ2luV2l0aE9wZW5BdXRob3JpbmcoZGF0YSkge1xuICAgIGNvbnN0IHsgYmFja2VuZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaW5kaW5nRm9yazogdHJ1ZSB9KTtcbiAgICByZXR1cm4gYmFja2VuZFxuICAgICAgLmF1dGhlbnRpY2F0ZVdpdGhGb3JrKHsgdXNlckRhdGE6IGRhdGEsIGdldFBlcm1pc3Npb25Ub0Zvcms6IHRoaXMuZ2V0UGVybWlzc2lvblRvRm9yayB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaW5kaW5nRm9yazogZmFsc2UgfSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjZmcgPSB7XG4gICAgICBiYXNlX3VybDogdGhpcy5wcm9wcy5iYXNlX3VybCxcbiAgICAgIHNpdGVfaWQ6XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhvc3Quc3BsaXQoJzonKVswXSA9PT0gJ2xvY2FsaG9zdCdcbiAgICAgICAgICA/ICdjbXMubmV0bGlmeS5jb20nXG4gICAgICAgICAgOiB0aGlzLnByb3BzLnNpdGVJZCxcbiAgICAgIGF1dGhfZW5kcG9pbnQ6IHRoaXMucHJvcHMuYXV0aEVuZHBvaW50LFxuICAgIH07XG4gICAgY29uc3QgYXV0aCA9IG5ldyBOZXRsaWZ5QXV0aGVudGljYXRvcihjZmcpO1xuXG4gICAgY29uc3Qge1xuICAgICAgb3Blbl9hdXRob3Jpbmc6IG9wZW5BdXRob3JpbmcgPSBmYWxzZSxcbiAgICAgIGF1dGhfc2NvcGU6IGF1dGhTY29wZSA9ICcnLFxuICAgIH0gPSB0aGlzLnByb3BzLmNvbmZpZy5iYWNrZW5kO1xuXG4gICAgY29uc3Qgc2NvcGUgPSBhdXRoU2NvcGUgfHwgKG9wZW5BdXRob3JpbmcgPyAncHVibGljX3JlcG8nIDogJ3JlcG8nKTtcbiAgICBhdXRoLmF1dGhlbnRpY2F0ZSh7IHByb3ZpZGVyOiAnZ2l0aHViJywgc2NvcGUgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9naW5FcnJvcjogZXJyLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcGVuQXV0aG9yaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luV2l0aE9wZW5BdXRob3JpbmcoZGF0YSkudGhlbigoKSA9PiB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luKGRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlckxvZ2luQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5Qcm9ncmVzcywgdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gaW5Qcm9ncmVzcyB8fCB0aGlzLnN0YXRlLmZpbmRpbmdGb3JrID8gKFxuICAgICAgdCgnYXV0aC5sb2dnaW5nSW4nKVxuICAgICkgOiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxMb2dpbkJ1dHRvbkljb24gdHlwZT1cImdpdGh1YlwiIC8+XG4gICAgICAgIHt0KCdhdXRoLmxvZ2luV2l0aEdpdEh1YicpfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9O1xuXG4gIGdldEF1dGhlbnRpY2F0aW9uUGFnZVJlbmRlckFyZ3MoKSB7XG4gICAgY29uc3QgeyByZXF1ZXN0aW5nRm9yayB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChyZXF1ZXN0aW5nRm9yaykge1xuICAgICAgY29uc3QgeyBhcHByb3ZlRm9yaywgcmVmdXNlRm9yayB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclBhZ2VDb250ZW50OiAoeyBMb2dpbkJ1dHRvbiB9KSA9PiAoXG4gICAgICAgICAgPEZvcmtBcHByb3ZhbENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPcGVuIEF1dGhvcmluZyBpcyBlbmFibGVkOiB3ZSBuZWVkIHRvIHVzZSBhIGZvcmsgb24geW91ciBnaXRodWIgYWNjb3VudC4gKElmIGEgZm9ya1xuICAgICAgICAgICAgICBhbHJlYWR5IGV4aXN0cywgd2UmIzM5O2xsIHVzZSB0aGF0LilcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxGb3JrQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPExvZ2luQnV0dG9uIG9uQ2xpY2s9e2FwcHJvdmVGb3JrfT5Gb3JrIHRoZSByZXBvPC9Mb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPExvZ2luQnV0dG9uIG9uQ2xpY2s9e3JlZnVzZUZvcmt9PkRvbiYjMzk7dCBmb3JrIHRoZSByZXBvPC9Mb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ya0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPC9Gb3JrQXBwcm92YWxDb250YWluZXI+XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXJCdXR0b25Db250ZW50OiB0aGlzLnJlbmRlckxvZ2luQnV0dG9uLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpblByb2dyZXNzLCBjb25maWcsIHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsb2dpbkVycm9yLCByZXF1ZXN0aW5nRm9yaywgZmluZGluZ0ZvcmsgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEF1dGhlbnRpY2F0aW9uUGFnZVxuICAgICAgICBvbkxvZ2luPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICBsb2dpbkRpc2FibGVkPXtpblByb2dyZXNzIHx8IGZpbmRpbmdGb3JrIHx8IHJlcXVlc3RpbmdGb3JrfVxuICAgICAgICBsb2dpbkVycm9yTWVzc2FnZT17bG9naW5FcnJvcn1cbiAgICAgICAgbG9nb1VybD17Y29uZmlnLmxvZ29fdXJsfVxuICAgICAgICBzaXRlVXJsPXtjb25maWcuc2l0ZV91cmx9XG4gICAgICAgIHsuLi50aGlzLmdldEF1dGhlbnRpY2F0aW9uUGFnZVJlbmRlckFyZ3MoKX1cbiAgICAgICAgdD17dH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const ForkApprovalContainer = (0, _styledBase.default)("div", {
  target: "e191r7591",
  label: "ForkApprovalContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "1u9l27n",
  styles: "display:flex;flex-flow:column nowrap;justify-content:space-around;flex-grow:0.2;"
} : {
  name: "1u9l27n",
  styles: "display:flex;flex-flow:column nowrap;justify-content:space-around;flex-grow:0.2;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXdDIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE5ldGxpZnlBdXRoZW50aWNhdG9yIH0gZnJvbSAnbmV0bGlmeS1jbXMtbGliLWF1dGgnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYWdlLCBJY29uIH0gZnJvbSAnbmV0bGlmeS1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IExvZ2luQnV0dG9uSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuYDtcblxuY29uc3QgRm9ya0FwcHJvdmFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1ncm93OiAwLjI7XG5gO1xuY29uc3QgRm9ya0J1dHRvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0SHViQXV0aGVudGljYXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkxvZ2luOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluUHJvZ3Jlc3M6IFByb3BUeXBlcy5ib29sLFxuICAgIGJhc2VfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpdGVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdXRoRW5kcG9pbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY2xlYXJIYXNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgZ2V0UGVybWlzc2lvblRvRm9yayA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlcXVlc3RpbmdGb3JrOiB0cnVlLFxuICAgICAgICBhcHByb3ZlRm9yazogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXF1ZXN0aW5nRm9yazogZmFsc2UgfSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICByZWZ1c2VGb3JrOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcXVlc3RpbmdGb3JrOiBmYWxzZSB9KTtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGxvZ2luV2l0aE9wZW5BdXRob3JpbmcoZGF0YSkge1xuICAgIGNvbnN0IHsgYmFja2VuZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaW5kaW5nRm9yazogdHJ1ZSB9KTtcbiAgICByZXR1cm4gYmFja2VuZFxuICAgICAgLmF1dGhlbnRpY2F0ZVdpdGhGb3JrKHsgdXNlckRhdGE6IGRhdGEsIGdldFBlcm1pc3Npb25Ub0Zvcms6IHRoaXMuZ2V0UGVybWlzc2lvblRvRm9yayB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaW5kaW5nRm9yazogZmFsc2UgfSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjZmcgPSB7XG4gICAgICBiYXNlX3VybDogdGhpcy5wcm9wcy5iYXNlX3VybCxcbiAgICAgIHNpdGVfaWQ6XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhvc3Quc3BsaXQoJzonKVswXSA9PT0gJ2xvY2FsaG9zdCdcbiAgICAgICAgICA/ICdjbXMubmV0bGlmeS5jb20nXG4gICAgICAgICAgOiB0aGlzLnByb3BzLnNpdGVJZCxcbiAgICAgIGF1dGhfZW5kcG9pbnQ6IHRoaXMucHJvcHMuYXV0aEVuZHBvaW50LFxuICAgIH07XG4gICAgY29uc3QgYXV0aCA9IG5ldyBOZXRsaWZ5QXV0aGVudGljYXRvcihjZmcpO1xuXG4gICAgY29uc3Qge1xuICAgICAgb3Blbl9hdXRob3Jpbmc6IG9wZW5BdXRob3JpbmcgPSBmYWxzZSxcbiAgICAgIGF1dGhfc2NvcGU6IGF1dGhTY29wZSA9ICcnLFxuICAgIH0gPSB0aGlzLnByb3BzLmNvbmZpZy5iYWNrZW5kO1xuXG4gICAgY29uc3Qgc2NvcGUgPSBhdXRoU2NvcGUgfHwgKG9wZW5BdXRob3JpbmcgPyAncHVibGljX3JlcG8nIDogJ3JlcG8nKTtcbiAgICBhdXRoLmF1dGhlbnRpY2F0ZSh7IHByb3ZpZGVyOiAnZ2l0aHViJywgc2NvcGUgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9naW5FcnJvcjogZXJyLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcGVuQXV0aG9yaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luV2l0aE9wZW5BdXRob3JpbmcoZGF0YSkudGhlbigoKSA9PiB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luKGRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlckxvZ2luQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5Qcm9ncmVzcywgdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gaW5Qcm9ncmVzcyB8fCB0aGlzLnN0YXRlLmZpbmRpbmdGb3JrID8gKFxuICAgICAgdCgnYXV0aC5sb2dnaW5nSW4nKVxuICAgICkgOiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxMb2dpbkJ1dHRvbkljb24gdHlwZT1cImdpdGh1YlwiIC8+XG4gICAgICAgIHt0KCdhdXRoLmxvZ2luV2l0aEdpdEh1YicpfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9O1xuXG4gIGdldEF1dGhlbnRpY2F0aW9uUGFnZVJlbmRlckFyZ3MoKSB7XG4gICAgY29uc3QgeyByZXF1ZXN0aW5nRm9yayB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChyZXF1ZXN0aW5nRm9yaykge1xuICAgICAgY29uc3QgeyBhcHByb3ZlRm9yaywgcmVmdXNlRm9yayB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclBhZ2VDb250ZW50OiAoeyBMb2dpbkJ1dHRvbiB9KSA9PiAoXG4gICAgICAgICAgPEZvcmtBcHByb3ZhbENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPcGVuIEF1dGhvcmluZyBpcyBlbmFibGVkOiB3ZSBuZWVkIHRvIHVzZSBhIGZvcmsgb24geW91ciBnaXRodWIgYWNjb3VudC4gKElmIGEgZm9ya1xuICAgICAgICAgICAgICBhbHJlYWR5IGV4aXN0cywgd2UmIzM5O2xsIHVzZSB0aGF0LilcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxGb3JrQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPExvZ2luQnV0dG9uIG9uQ2xpY2s9e2FwcHJvdmVGb3JrfT5Gb3JrIHRoZSByZXBvPC9Mb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPExvZ2luQnV0dG9uIG9uQ2xpY2s9e3JlZnVzZUZvcmt9PkRvbiYjMzk7dCBmb3JrIHRoZSByZXBvPC9Mb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ya0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPC9Gb3JrQXBwcm92YWxDb250YWluZXI+XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXJCdXR0b25Db250ZW50OiB0aGlzLnJlbmRlckxvZ2luQnV0dG9uLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpblByb2dyZXNzLCBjb25maWcsIHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsb2dpbkVycm9yLCByZXF1ZXN0aW5nRm9yaywgZmluZGluZ0ZvcmsgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEF1dGhlbnRpY2F0aW9uUGFnZVxuICAgICAgICBvbkxvZ2luPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICBsb2dpbkRpc2FibGVkPXtpblByb2dyZXNzIHx8IGZpbmRpbmdGb3JrIHx8IHJlcXVlc3RpbmdGb3JrfVxuICAgICAgICBsb2dpbkVycm9yTWVzc2FnZT17bG9naW5FcnJvcn1cbiAgICAgICAgbG9nb1VybD17Y29uZmlnLmxvZ29fdXJsfVxuICAgICAgICBzaXRlVXJsPXtjb25maWcuc2l0ZV91cmx9XG4gICAgICAgIHsuLi50aGlzLmdldEF1dGhlbnRpY2F0aW9uUGFnZVJlbmRlckFyZ3MoKX1cbiAgICAgICAgdD17dH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const ForkButtonsContainer = (0, _styledBase.default)("div", {
  target: "e191r7592",
  label: "ForkButtonsContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "qh5xse",
  styles: "display:flex;flex-flow:row nowrap;justify-content:space-around;"
} : {
  name: "qh5xse",
  styles: "display:flex;flex-flow:row nowrap;justify-content:space-around;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J1QyIsImZpbGUiOiIuLi8uLi9zcmMvQXV0aGVudGljYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBOZXRsaWZ5QXV0aGVudGljYXRvciB9IGZyb20gJ25ldGxpZnktY21zLWxpYi1hdXRoJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFnZSwgSWNvbiB9IGZyb20gJ25ldGxpZnktY21zLXVpLWRlZmF1bHQnO1xuXG5jb25zdCBMb2dpbkJ1dHRvbkljb24gPSBzdHlsZWQoSWNvbilgXG4gIG1hcmdpbi1yaWdodDogMThweDtcbmA7XG5cbmNvbnN0IEZvcmtBcHByb3ZhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZ3JvdzogMC4yO1xuYDtcbmNvbnN0IEZvcmtCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdEh1YkF1dGhlbnRpY2F0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25Mb2dpbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpblByb2dyZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBiYXNlX3VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXRlSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXV0aEVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNsZWFySGFzaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0ZSA9IHt9O1xuXG4gIGdldFBlcm1pc3Npb25Ub0ZvcmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZXF1ZXN0aW5nRm9yazogdHJ1ZSxcbiAgICAgICAgYXBwcm92ZUZvcms6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVxdWVzdGluZ0Zvcms6IGZhbHNlIH0pO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVmdXNlRm9yazogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXF1ZXN0aW5nRm9yazogZmFsc2UgfSk7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBsb2dpbldpdGhPcGVuQXV0aG9yaW5nKGRhdGEpIHtcbiAgICBjb25zdCB7IGJhY2tlbmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZmluZGluZ0Zvcms6IHRydWUgfSk7XG4gICAgcmV0dXJuIGJhY2tlbmRcbiAgICAgIC5hdXRoZW50aWNhdGVXaXRoRm9yayh7IHVzZXJEYXRhOiBkYXRhLCBnZXRQZXJtaXNzaW9uVG9Gb3JrOiB0aGlzLmdldFBlcm1pc3Npb25Ub0ZvcmsgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmluZGluZ0Zvcms6IGZhbHNlIH0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTG9naW4gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2ZnID0ge1xuICAgICAgYmFzZV91cmw6IHRoaXMucHJvcHMuYmFzZV91cmwsXG4gICAgICBzaXRlX2lkOlxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LnNwbGl0KCc6JylbMF0gPT09ICdsb2NhbGhvc3QnXG4gICAgICAgICAgPyAnY21zLm5ldGxpZnkuY29tJ1xuICAgICAgICAgIDogdGhpcy5wcm9wcy5zaXRlSWQsXG4gICAgICBhdXRoX2VuZHBvaW50OiB0aGlzLnByb3BzLmF1dGhFbmRwb2ludCxcbiAgICB9O1xuICAgIGNvbnN0IGF1dGggPSBuZXcgTmV0bGlmeUF1dGhlbnRpY2F0b3IoY2ZnKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIG9wZW5fYXV0aG9yaW5nOiBvcGVuQXV0aG9yaW5nID0gZmFsc2UsXG4gICAgICBhdXRoX3Njb3BlOiBhdXRoU2NvcGUgPSAnJyxcbiAgICB9ID0gdGhpcy5wcm9wcy5jb25maWcuYmFja2VuZDtcblxuICAgIGNvbnN0IHNjb3BlID0gYXV0aFNjb3BlIHx8IChvcGVuQXV0aG9yaW5nID8gJ3B1YmxpY19yZXBvJyA6ICdyZXBvJyk7XG4gICAgYXV0aC5hdXRoZW50aWNhdGUoeyBwcm92aWRlcjogJ2dpdGh1YicsIHNjb3BlIH0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2luRXJyb3I6IGVyci50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3BlbkF1dGhvcmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbldpdGhPcGVuQXV0aG9yaW5nKGRhdGEpLnRoZW4oKCkgPT4gdGhpcy5wcm9wcy5vbkxvZ2luKGRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25Mb2dpbihkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXJMb2dpbkJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGluUHJvZ3Jlc3MsIHQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGluUHJvZ3Jlc3MgfHwgdGhpcy5zdGF0ZS5maW5kaW5nRm9yayA/IChcbiAgICAgIHQoJ2F1dGgubG9nZ2luZ0luJylcbiAgICApIDogKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8TG9naW5CdXR0b25JY29uIHR5cGU9XCJnaXRodWJcIiAvPlxuICAgICAgICB7dCgnYXV0aC5sb2dpbldpdGhHaXRIdWInKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcblxuICBnZXRBdXRoZW50aWNhdGlvblBhZ2VSZW5kZXJBcmdzKCkge1xuICAgIGNvbnN0IHsgcmVxdWVzdGluZ0ZvcmsgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAocmVxdWVzdGluZ0ZvcmspIHtcbiAgICAgIGNvbnN0IHsgYXBwcm92ZUZvcmssIHJlZnVzZUZvcmsgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJQYWdlQ29udGVudDogKHsgTG9naW5CdXR0b24gfSkgPT4gKFxuICAgICAgICAgIDxGb3JrQXBwcm92YWxDb250YWluZXI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3BlbiBBdXRob3JpbmcgaXMgZW5hYmxlZDogd2UgbmVlZCB0byB1c2UgYSBmb3JrIG9uIHlvdXIgZ2l0aHViIGFjY291bnQuIChJZiBhIGZvcmtcbiAgICAgICAgICAgICAgYWxyZWFkeSBleGlzdHMsIHdlJiMzOTtsbCB1c2UgdGhhdC4pXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Rm9ya0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgICAgIDxMb2dpbkJ1dHRvbiBvbkNsaWNrPXthcHByb3ZlRm9ya30+Rm9yayB0aGUgcmVwbzwvTG9naW5CdXR0b24+XG4gICAgICAgICAgICAgIDxMb2dpbkJ1dHRvbiBvbkNsaWNrPXtyZWZ1c2VGb3JrfT5Eb24mIzM5O3QgZm9yayB0aGUgcmVwbzwvTG9naW5CdXR0b24+XG4gICAgICAgICAgICA8L0ZvcmtCdXR0b25zQ29udGFpbmVyPlxuICAgICAgICAgIDwvRm9ya0FwcHJvdmFsQ29udGFpbmVyPlxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyQnV0dG9uQ29udGVudDogdGhpcy5yZW5kZXJMb2dpbkJ1dHRvbixcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5Qcm9ncmVzcywgY29uZmlnLCB0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbG9naW5FcnJvciwgcmVxdWVzdGluZ0ZvcmssIGZpbmRpbmdGb3JrIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXRoZW50aWNhdGlvblBhZ2VcbiAgICAgICAgb25Mb2dpbj17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgbG9naW5EaXNhYmxlZD17aW5Qcm9ncmVzcyB8fCBmaW5kaW5nRm9yayB8fCByZXF1ZXN0aW5nRm9ya31cbiAgICAgICAgbG9naW5FcnJvck1lc3NhZ2U9e2xvZ2luRXJyb3J9XG4gICAgICAgIGxvZ29Vcmw9e2NvbmZpZy5sb2dvX3VybH1cbiAgICAgICAgc2l0ZVVybD17Y29uZmlnLnNpdGVfdXJsfVxuICAgICAgICB7Li4udGhpcy5nZXRBdXRoZW50aWNhdGlvblBhZ2VSZW5kZXJBcmdzKCl9XG4gICAgICAgIHQ9e3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

class GitHubAuthenticationPage extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "getPermissionToFork", () => {
      return new Promise((resolve, reject) => {
        this.setState({
          requestingFork: true,
          approveFork: () => {
            this.setState({
              requestingFork: false
            });
            resolve();
          },
          refuseFork: () => {
            this.setState({
              requestingFork: false
            });
            reject();
          }
        });
      });
    });

    _defineProperty(this, "handleLogin", e => {
      e.preventDefault();
      const cfg = {
        base_url: this.props.base_url,
        site_id: document.location.host.split(':')[0] === 'localhost' ? 'cms.netlify.com' : this.props.siteId,
        auth_endpoint: this.props.authEndpoint
      };
      const auth = new _netlifyCmsLibAuth.NetlifyAuthenticator(cfg);
      const {
        open_authoring: openAuthoring = false,
        auth_scope: authScope = ''
      } = this.props.config.backend;
      const scope = authScope || (openAuthoring ? 'public_repo' : 'repo');
      auth.authenticate({
        provider: 'github',
        scope
      }, (err, data) => {
        if (err) {
          this.setState({
            loginError: err.toString()
          });
          return;
        }

        if (openAuthoring) {
          return this.loginWithOpenAuthoring(data).then(() => this.props.onLogin(data));
        }

        this.props.onLogin(data);
      });
    });

    _defineProperty(this, "renderLoginButton", () => {
      const {
        inProgress,
        t
      } = this.props;
      return inProgress || this.state.findingFork ? t('auth.loggingIn') : (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)(LoginButtonIcon, {
        type: "github"
      }), t('auth.loginWithGitHub'));
    });
  }

  loginWithOpenAuthoring(data) {
    const {
      backend
    } = this.props;
    this.setState({
      findingFork: true
    });
    return backend.authenticateWithFork({
      userData: data,
      getPermissionToFork: this.getPermissionToFork
    }).catch(err => {
      this.setState({
        findingFork: false
      });
      console.error(err);
      throw err;
    });
  }

  getAuthenticationPageRenderArgs() {
    const {
      requestingFork
    } = this.state;

    if (requestingFork) {
      const {
        approveFork,
        refuseFork
      } = this.state;
      return {
        renderPageContent: ({
          LoginButton
        }) => (0, _core.jsx)(ForkApprovalContainer, null, (0, _core.jsx)("p", null, "Open Authoring is enabled: we need to use a fork on your github account. (If a fork already exists, we'll use that.)"), (0, _core.jsx)(ForkButtonsContainer, null, (0, _core.jsx)(LoginButton, {
          onClick: approveFork
        }, "Fork the repo"), (0, _core.jsx)(LoginButton, {
          onClick: refuseFork
        }, "Don't fork the repo")))
      };
    }

    return {
      renderButtonContent: this.renderLoginButton
    };
  }

  render() {
    const {
      inProgress,
      config,
      t
    } = this.props;
    const {
      loginError,
      requestingFork,
      findingFork
    } = this.state;
    return (0, _core.jsx)(_netlifyCmsUiDefault.AuthenticationPage, _extends({
      onLogin: this.handleLogin,
      loginDisabled: inProgress || findingFork || requestingFork,
      loginErrorMessage: loginError,
      logoUrl: config.logo_url,
      siteUrl: config.site_url
    }, this.getAuthenticationPageRenderArgs(), {
      t: t
    }));
  }

}

exports.default = GitHubAuthenticationPage;

_defineProperty(GitHubAuthenticationPage, "propTypes", {
  onLogin: _propTypes.default.func.isRequired,
  inProgress: _propTypes.default.bool,
  base_url: _propTypes.default.string,
  siteId: _propTypes.default.string,
  authEndpoint: _propTypes.default.string,
  config: _propTypes.default.object.isRequired,
  clearHash: _propTypes.default.func,
  t: _propTypes.default.func.isRequired
});