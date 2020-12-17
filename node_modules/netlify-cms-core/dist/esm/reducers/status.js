"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.selectStatus = void 0;

var _immutable = require("immutable");

var _status = require("../actions/status");

const status = (state = (0, _immutable.Map)(), action) => {
  switch (action.type) {
    case _status.STATUS_REQUEST:
      return state.set('isFetching', true);

    case _status.STATUS_SUCCESS:
      return state.withMutations(map => {
        map.set('isFetching', false);
        map.set('status', (0, _immutable.fromJS)(action.payload.status));
      });

    case _status.STATUS_FAILURE:
      return state.withMutations(map => {
        map.set('isFetching', false);
        map.set('error', action.payload.error);
      });

    default:
      return state;
  }
};

const selectStatus = status => {
  var _status$get;

  return ((_status$get = status.get('status')) === null || _status$get === void 0 ? void 0 : _status$get.toJS()) || {};
};

exports.selectStatus = selectStatus;
var _default = status;
exports.default = _default;