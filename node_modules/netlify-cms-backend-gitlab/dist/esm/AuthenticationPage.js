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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const LoginButtonIcon = ( /*#__PURE__*/0, _styledBase.default)(_netlifyCmsUiDefault.Icon, {
  target: "e1224wm40",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "x0sdsu",
  styles: "margin-right:18px;"
} : {
  name: "x0sdsu",
  styles: "margin-right:18px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE5ldGxpZnlBdXRoZW50aWNhdG9yLCBJbXBsaWNpdEF1dGhlbnRpY2F0b3IgfSBmcm9tICduZXRsaWZ5LWNtcy1saWItYXV0aCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhZ2UsIEljb24gfSBmcm9tICduZXRsaWZ5LWNtcy11aS1kZWZhdWx0JztcblxuY29uc3QgTG9naW5CdXR0b25JY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRMYWJBdXRoZW50aWNhdGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uTG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5Qcm9ncmVzczogUHJvcFR5cGVzLmJvb2wsXG4gICAgYmFzZV91cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l0ZUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGF1dGhFbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjbGVhckhhc2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRoX3R5cGU6IGF1dGhUeXBlID0gJycsXG4gICAgICBiYXNlX3VybCA9ICdodHRwczovL2dpdGxhYi5jb20nLFxuICAgICAgYXV0aF9lbmRwb2ludCA9ICdvYXV0aC9hdXRob3JpemUnLFxuICAgICAgYXBwX2lkID0gJycsXG4gICAgfSA9IHRoaXMucHJvcHMuY29uZmlnLmJhY2tlbmQ7XG5cbiAgICBpZiAoYXV0aFR5cGUgPT09ICdpbXBsaWNpdCcpIHtcbiAgICAgIHRoaXMuYXV0aCA9IG5ldyBJbXBsaWNpdEF1dGhlbnRpY2F0b3Ioe1xuICAgICAgICBiYXNlX3VybCxcbiAgICAgICAgYXV0aF9lbmRwb2ludCxcbiAgICAgICAgYXBwX2lkLFxuICAgICAgICBjbGVhckhhc2g6IHRoaXMucHJvcHMuY2xlYXJIYXNoLFxuICAgICAgfSk7XG4gICAgICAvLyBDb21wbGV0ZSBpbXBsaWNpdCBhdXRoZW50aWNhdGlvbiBpZiB3ZSB3ZXJlIHJlZGlyZWN0ZWQgYmFjayB0byBmcm9tIHRoZSBwcm92aWRlci5cbiAgICAgIHRoaXMuYXV0aC5jb21wbGV0ZUF1dGgoKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2luRXJyb3I6IGVyci50b1N0cmluZygpIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gbmV3IE5ldGxpZnlBdXRoZW50aWNhdG9yKHtcbiAgICAgICAgYmFzZV91cmw6IHRoaXMucHJvcHMuYmFzZV91cmwsXG4gICAgICAgIHNpdGVfaWQ6XG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5zcGxpdCgnOicpWzBdID09PSAnbG9jYWxob3N0J1xuICAgICAgICAgICAgPyAnY21zLm5ldGxpZnkuY29tJ1xuICAgICAgICAgICAgOiB0aGlzLnByb3BzLnNpdGVJZCxcbiAgICAgICAgYXV0aF9lbmRwb2ludDogdGhpcy5wcm9wcy5hdXRoRW5kcG9pbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmF1dGguYXV0aGVudGljYXRlKHsgcHJvdmlkZXI6ICdnaXRsYWInLCBzY29wZTogJ2FwaScgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9naW5FcnJvcjogZXJyLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25Mb2dpbihkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpblByb2dyZXNzLCBjb25maWcsIHQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXRoZW50aWNhdGlvblBhZ2VcbiAgICAgICAgb25Mb2dpbj17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgbG9naW5EaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgbG9naW5FcnJvck1lc3NhZ2U9e3RoaXMuc3RhdGUubG9naW5FcnJvcn1cbiAgICAgICAgbG9nb1VybD17Y29uZmlnLmxvZ29fdXJsfVxuICAgICAgICBzaXRlVXJsPXtjb25maWcuc2l0ZV91cmx9XG4gICAgICAgIHJlbmRlckJ1dHRvbkNvbnRlbnQ9eygpID0+IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TG9naW5CdXR0b25JY29uIHR5cGU9XCJnaXRsYWJcIiAvPnsnICd9XG4gICAgICAgICAgICB7aW5Qcm9ncmVzcyA/IHQoJ2F1dGgubG9nZ2luZ0luJykgOiB0KCdhdXRoLmxvZ2luV2l0aEdpdExhYicpfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHQ9e3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

class GitLabAuthenticationPage extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleLogin", e => {
      e.preventDefault();
      this.auth.authenticate({
        provider: 'gitlab',
        scope: 'api'
      }, (err, data) => {
        if (err) {
          this.setState({
            loginError: err.toString()
          });
          return;
        }

        this.props.onLogin(data);
      });
    });
  }

  componentDidMount() {
    const {
      auth_type: authType = '',
      base_url = 'https://gitlab.com',
      auth_endpoint = 'oauth/authorize',
      app_id = ''
    } = this.props.config.backend;

    if (authType === 'implicit') {
      this.auth = new _netlifyCmsLibAuth.ImplicitAuthenticator({
        base_url,
        auth_endpoint,
        app_id,
        clearHash: this.props.clearHash
      }); // Complete implicit authentication if we were redirected back to from the provider.

      this.auth.completeAuth((err, data) => {
        if (err) {
          this.setState({
            loginError: err.toString()
          });
          return;
        }

        this.props.onLogin(data);
      });
    } else {
      this.auth = new _netlifyCmsLibAuth.NetlifyAuthenticator({
        base_url: this.props.base_url,
        site_id: document.location.host.split(':')[0] === 'localhost' ? 'cms.netlify.com' : this.props.siteId,
        auth_endpoint: this.props.authEndpoint
      });
    }
  }

  render() {
    const {
      inProgress,
      config,
      t
    } = this.props;
    return (0, _core.jsx)(_netlifyCmsUiDefault.AuthenticationPage, {
      onLogin: this.handleLogin,
      loginDisabled: inProgress,
      loginErrorMessage: this.state.loginError,
      logoUrl: config.logo_url,
      siteUrl: config.site_url,
      renderButtonContent: () => (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)(LoginButtonIcon, {
        type: "gitlab"
      }), ' ', inProgress ? t('auth.loggingIn') : t('auth.loginWithGitLab')),
      t: t
    });
  }

}

exports.default = GitLabAuthenticationPage;

_defineProperty(GitLabAuthenticationPage, "propTypes", {
  onLogin: _propTypes.default.func.isRequired,
  inProgress: _propTypes.default.bool,
  base_url: _propTypes.default.string,
  siteId: _propTypes.default.string,
  authEndpoint: _propTypes.default.string,
  config: _propTypes.default.object.isRequired,
  clearHash: _propTypes.default.func,
  t: _propTypes.default.func.isRequired
});