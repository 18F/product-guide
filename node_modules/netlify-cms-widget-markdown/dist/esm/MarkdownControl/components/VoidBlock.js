"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _netlifyCmsUiDefault = require("netlify-cms-ui-default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const InsertionPoint = props => (0, _core.jsx)("div", _extends({
  css: /*#__PURE__*/(0, _core.css)("height:32px;cursor:text;position:relative;z-index:", _netlifyCmsUiDefault.zIndex.zIndex1, ";margin-top:-16px;;label:InsertionPoint;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9NYXJrZG93bkNvbnRyb2wvY29tcG9uZW50cy9Wb2lkQmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT1kiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL01hcmtkb3duQ29udHJvbC9jb21wb25lbnRzL1ZvaWRCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHpJbmRleCB9IGZyb20gJ25ldGxpZnktY21zLXVpLWRlZmF1bHQnO1xuXG5jb25zdCBJbnNlcnRpb25Qb2ludCA9IHByb3BzID0+IChcbiAgPGRpdlxuICAgIGNzcz17Y3NzYFxuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogJHt6SW5kZXguekluZGV4MX07XG4gICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICBgfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmNvbnN0IFZvaWRCbG9jayA9ICh7IGVkaXRvciwgYXR0cmlidXRlcywgbm9kZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLmF0dHJpYnV0ZXN9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIHshZWRpdG9yLmNhbkluc2VydEJlZm9yZU5vZGUobm9kZSkgJiYgKFxuICAgICAgICA8SW5zZXJ0aW9uUG9pbnQgb25DbGljaz17KCkgPT4gZWRpdG9yLmZvcmNlSW5zZXJ0QmVmb3JlTm9kZShub2RlKX0gLz5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7IWVkaXRvci5jYW5JbnNlcnRBZnRlck5vZGUobm9kZSkgJiYgKFxuICAgICAgICA8SW5zZXJ0aW9uUG9pbnQgb25DbGljaz17KCkgPT4gZWRpdG9yLmZvcmNlSW5zZXJ0QWZ0ZXJOb2RlKG5vZGUpfSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZvaWRCbG9jaztcbiJdfQ== */"))
}, props));

const VoidBlock = ({
  editor,
  attributes,
  node,
  children
}) => {
  const handleClick = event => {
    event.stopPropagation();
  };

  return (0, _core.jsx)("div", _extends({}, attributes, {
    onClick: handleClick
  }), !editor.canInsertBeforeNode(node) && (0, _core.jsx)(InsertionPoint, {
    onClick: () => editor.forceInsertBeforeNode(node)
  }), children, !editor.canInsertAfterNode(node) && (0, _core.jsx)(InsertionPoint, {
    onClick: () => editor.forceInsertAfterNode(node)
  }));
};

var _default = VoidBlock;
exports.default = _default;