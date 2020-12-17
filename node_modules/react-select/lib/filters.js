"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilter = void 0;

var _diacritics = require("./diacritics");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = (0, _diacritics.stripDiacritics)(input);
      candidate = (0, _diacritics.stripDiacritics)(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

exports.createFilter = createFilter;