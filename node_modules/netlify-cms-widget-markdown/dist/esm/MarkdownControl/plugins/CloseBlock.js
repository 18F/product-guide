"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isHotkey = _interopRequireDefault(require("is-hotkey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseBlock = ({
  defaultType
}) => ({
  onKeyDown(event, editor, next) {
    const {
      selection,
      startBlock
    } = editor.value;
    const isBackspace = (0, _isHotkey.default)('backspace', event);

    if (!isBackspace) {
      return next();
    }

    if (selection.isExpanded) {
      return editor.delete();
    }

    if (!selection.start.isAtStartOfNode(startBlock) || startBlock.text.length > 0) {
      return next();
    }

    if (startBlock.type !== defaultType) {
      return editor.setBlocks(defaultType);
    }

    return next();
  }

});

var _default = CloseBlock;
exports.default = _default;