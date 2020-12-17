"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flowAsync = exports.onlySuccessfulPromises = exports.then = void 0;

var _flow = _interopRequireDefault(require("lodash/flow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const then = fn => p => Promise.resolve(p).then(fn);

exports.then = then;
const filterPromiseSymbol = Symbol('filterPromiseSymbol');

const onlySuccessfulPromises = promises => {
  return Promise.all(promises.map(p => p.catch(() => filterPromiseSymbol))).then(results => results.filter(result => result !== filterPromiseSymbol));
};

exports.onlySuccessfulPromises = onlySuccessfulPromises;

const wrapFlowAsync = fn => async arg => fn(await arg);

const flowAsync = fns => (0, _flow.default)(fns.map(fn => wrapFlowAsync(fn)));

exports.flowAsync = flowAsync;