"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ValueContainer = exports.SingleValue = exports.Placeholder = exports.MultiValue = exports.Input = void 0;

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _reactFastCompare = _interopRequireDefault(require("../internal/react-fast-compare"));

var _index = require("../components/index");

var _Input = _interopRequireDefault(require("./Input"));

var _MultiValue = _interopRequireDefault(require("./MultiValue"));

var _Placeholder = _interopRequireDefault(require("./Placeholder"));

var _SingleValue = _interopRequireDefault(require("./SingleValue"));

var _ValueContainer = _interopRequireDefault(require("./ValueContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var makeAnimated = function makeAnimated() {
  var externalComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components = (0, _index.defaultComponents)({
    components: externalComponents
  });

  var Input = components.Input,
      MultiValue = components.MultiValue,
      Placeholder = components.Placeholder,
      SingleValue = components.SingleValue,
      ValueContainer = components.ValueContainer,
      rest = _objectWithoutProperties(components, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

  return _objectSpread({
    Input: (0, _Input.default)(Input),
    MultiValue: (0, _MultiValue.default)(MultiValue),
    Placeholder: (0, _Placeholder.default)(Placeholder),
    SingleValue: (0, _SingleValue.default)(SingleValue),
    ValueContainer: (0, _ValueContainer.default)(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();
var Input = AnimatedComponents.Input;
exports.Input = Input;
var MultiValue = AnimatedComponents.MultiValue;
exports.MultiValue = MultiValue;
var Placeholder = AnimatedComponents.Placeholder;
exports.Placeholder = Placeholder;
var SingleValue = AnimatedComponents.SingleValue;
exports.SingleValue = SingleValue;
var ValueContainer = AnimatedComponents.ValueContainer;
exports.ValueContainer = ValueContainer;

var _default = (0, _memoizeOne.default)(makeAnimated, _reactFastCompare.default);

exports.default = _default;