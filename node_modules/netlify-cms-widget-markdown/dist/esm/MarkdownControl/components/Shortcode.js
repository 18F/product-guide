"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _immutable = require("immutable");

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1xfnuhy-Shortcode",
  styles: "margin-top:0;margin-bottom:16px;&:first-of-type{margin-top:0;};label:Shortcode;"
} : {
  name: "1xfnuhy-Shortcode",
  styles: "margin-top:0;margin-bottom:16px;&:first-of-type{margin-top:0;};label:Shortcode;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9NYXJrZG93bkNvbnRyb2wvY29tcG9uZW50cy9TaG9ydGNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvTWFya2Rvd25Db250cm9sL2NvbXBvbmVudHMvU2hvcnRjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgTWFwLCBmcm9tSlMgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBnZXRFZGl0b3JDb250cm9sLCBnZXRFZGl0b3JDb21wb25lbnRzIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGNvZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBmaWVsZDogTWFwKCksXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBub2RlLCB0eXBlT3ZlcmxvYWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGx1Z2luID0gZ2V0RWRpdG9yQ29tcG9uZW50cygpLmdldCh0eXBlT3ZlcmxvYWQgfHwgbm9kZS5kYXRhLmdldCgnc2hvcnRjb2RlJykpO1xuICAgIGNvbnN0IGZpZWxkS2V5cyA9IFsnaWQnLCAnZnJvbUJsb2NrJywgJ3RvQmxvY2snLCAndG9QcmV2aWV3JywgJ3BhdHRlcm4nLCAnaWNvbiddO1xuICAgIGNvbnN0IGZpZWxkID0gZnJvbUpTKG9taXQocGx1Z2luLCBmaWVsZEtleXMpKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmllbGQgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlZGl0b3IsIG5vZGUsIGRhdGFLZXkgPSAnc2hvcnRjb2RlRGF0YScgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmaWVsZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBFZGl0b3JDb250cm9sID0gZ2V0RWRpdG9yQ29udHJvbCgpO1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YUtleSA9PT0gZmFsc2UgPyBub2RlLmRhdGEgOiBmcm9tSlMobm9kZS5kYXRhLmdldChkYXRhS2V5KSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZmllbGROYW1lLCB2YWx1ZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFWYWx1ZSA9IGRhdGFLZXkgPT09IGZhbHNlID8gdmFsdWUgOiBub2RlLmRhdGEuc2V0KCdzaG9ydGNvZGVEYXRhJywgdmFsdWUpO1xuICAgICAgZWRpdG9yLnNldE5vZGVCeUtleShub2RlLmtleSwgeyBkYXRhOiBkYXRhVmFsdWUgfHwgTWFwKCksIG1ldGFkYXRhIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IGVkaXRvci5tb3ZlVG9SYW5nZU9mTm9kZShub2RlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAhZmllbGQuaXNFbXB0eSgpICYmIChcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVGb2N1c30gb25Gb2N1cz17aGFuZGxlRm9jdXN9PlxuICAgICAgICAgIDxFZGl0b3JDb250cm9sXG4gICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaXNFZGl0b3JDb21wb25lbnQ9e3RydWV9XG4gICAgICAgICAgICBpc05ld0VkaXRvckNvbXBvbmVudD17bm9kZS5kYXRhLmdldCgnc2hvcnRjb2RlTmV3Jyl9XG4gICAgICAgICAgICBpc1NlbGVjdGVkPXtlZGl0b3IuaXNTZWxlY3RlZChub2RlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

class Shortcode extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      field: (0, _immutable.Map)()
    });
  }

  componentDidMount() {
    const {
      node,
      typeOverload
    } = this.props;
    const plugin = (0, _index.getEditorComponents)().get(typeOverload || node.data.get('shortcode'));
    const fieldKeys = ['id', 'fromBlock', 'toBlock', 'toPreview', 'pattern', 'icon'];
    const field = (0, _immutable.fromJS)((0, _omit2.default)(plugin, fieldKeys));
    this.setState({
      field
    });
  }

  render() {
    const {
      editor,
      node,
      dataKey = 'shortcodeData'
    } = this.props;
    const {
      field
    } = this.state;
    const EditorControl = (0, _index.getEditorControl)();
    const value = dataKey === false ? node.data : (0, _immutable.fromJS)(node.data.get(dataKey));

    const handleChange = (fieldName, value, metadata) => {
      const dataValue = dataKey === false ? value : node.data.set('shortcodeData', value);
      editor.setNodeByKey(node.key, {
        data: dataValue || (0, _immutable.Map)(),
        metadata
      });
    };

    const handleFocus = () => editor.moveToRangeOfNode(node);

    return !field.isEmpty() && (0, _core.jsx)("div", {
      onClick: handleFocus,
      onFocus: handleFocus
    }, (0, _core.jsx)(EditorControl, {
      css: _ref,
      value: value,
      field: field,
      onChange: handleChange,
      isEditorComponent: true,
      isNewEditorComponent: node.data.get('shortcodeNew'),
      isSelected: editor.isSelected(node)
    }));
  }

}

exports.default = Shortcode;