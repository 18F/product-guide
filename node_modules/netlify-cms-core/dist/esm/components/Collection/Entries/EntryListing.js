"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));

var _reactWaypoint = require("react-waypoint");

var _immutable = require("immutable");

var _collections = require("../../../reducers/collections");

var _EntryCard = _interopRequireDefault(require("./EntryCard"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const CardsGrid = (0, _styledBase.default)("ul", {
  target: "e1hbvtjf0",
  label: "CardsGrid"
})(process.env.NODE_ENV === "production" ? {
  name: "c1vo2d",
  styles: "display:flex;flex-flow:row wrap;list-style-type:none;margin-left:-12px;margin-top:16px;margin-bottom:16px;"
} : {
  name: "c1vo2d",
  styles: "display:flex;flex-flow:row wrap;list-style-type:none;margin-left:-12px;margin-top:16px;margin-bottom:16px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyeUxpc3RpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzJCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyeUxpc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBXYXlwb2ludCB9IGZyb20gJ3JlYWN0LXdheXBvaW50JztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgeyBzZWxlY3RGaWVsZHMsIHNlbGVjdEluZmVyZWRGaWVsZCB9IGZyb20gJ1JlZHVjZXJzL2NvbGxlY3Rpb25zJztcbmltcG9ydCBFbnRyeUNhcmQgZnJvbSAnLi9FbnRyeUNhcmQnO1xuXG5jb25zdCBDYXJkc0dyaWQgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnlMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb2xsZWN0aW9uczogSW1tdXRhYmxlUHJvcFR5cGVzLml0ZXJhYmxlLmlzUmVxdWlyZWQsXG4gICAgZW50cmllczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgdmlld1N0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1cnNvcjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIGhhbmRsZUN1cnNvckFjdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBoYXNNb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhc01vcmUgPSB0aGlzLnByb3BzLmN1cnNvcj8uYWN0aW9ucz8uaGFzKCdhcHBlbmRfbmV4dCcpO1xuICAgIHJldHVybiBoYXNNb3JlO1xuICB9O1xuXG4gIGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmhhc01vcmUoKSkge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDdXJzb3JBY3Rpb25zKCdhcHBlbmRfbmV4dCcpO1xuICAgIH1cbiAgfTtcblxuICBpbmZlckZpZWxkcyA9IGNvbGxlY3Rpb24gPT4ge1xuICAgIGNvbnN0IHRpdGxlRmllbGQgPSBzZWxlY3RJbmZlcmVkRmllbGQoY29sbGVjdGlvbiwgJ3RpdGxlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25GaWVsZCA9IHNlbGVjdEluZmVyZWRGaWVsZChjb2xsZWN0aW9uLCAnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBpbWFnZUZpZWxkID0gc2VsZWN0SW5mZXJlZEZpZWxkKGNvbGxlY3Rpb24sICdpbWFnZScpO1xuICAgIGNvbnN0IGZpZWxkcyA9IHNlbGVjdEZpZWxkcyhjb2xsZWN0aW9uKTtcbiAgICBjb25zdCBpbmZlcmVkRmllbGRzID0gW3RpdGxlRmllbGQsIGRlc2NyaXB0aW9uRmllbGQsIGltYWdlRmllbGRdO1xuICAgIGNvbnN0IHJlbWFpbmluZ0ZpZWxkcyA9XG4gICAgICBmaWVsZHMgJiYgZmllbGRzLmZpbHRlcihmID0+IGluZmVyZWRGaWVsZHMuaW5kZXhPZihmLmdldCgnbmFtZScpKSA9PT0gLTEpO1xuICAgIHJldHVybiB7IHRpdGxlRmllbGQsIGRlc2NyaXB0aW9uRmllbGQsIGltYWdlRmllbGQsIHJlbWFpbmluZ0ZpZWxkcyB9O1xuICB9O1xuXG4gIHJlbmRlckNhcmRzRm9yU2luZ2xlQ29sbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zLCBlbnRyaWVzLCB2aWV3U3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5mZXJlZEZpZWxkcyA9IHRoaXMuaW5mZXJGaWVsZHMoY29sbGVjdGlvbnMpO1xuICAgIGNvbnN0IGVudHJ5Q2FyZFByb3BzID0geyBjb2xsZWN0aW9uOiBjb2xsZWN0aW9ucywgaW5mZXJlZEZpZWxkcywgdmlld1N0eWxlIH07XG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChlbnRyeSwgaWR4KSA9PiA8RW50cnlDYXJkIHsuLi5lbnRyeUNhcmRQcm9wc30gZW50cnk9e2VudHJ5fSBrZXk9e2lkeH0gLz4pO1xuICB9O1xuXG4gIHJlbmRlckNhcmRzRm9yTXVsdGlwbGVDb2xsZWN0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zLCBlbnRyaWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzU2luZ2xlQ29sbGVjdGlvbkluTGlzdCA9IGNvbGxlY3Rpb25zLnNpemUgPT09IDE7XG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChlbnRyeSwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IGVudHJ5LmdldCgnY29sbGVjdGlvbicpO1xuICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoY29sbCA9PiBjb2xsLmdldCgnbmFtZScpID09PSBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uTGFiZWwgPSAhaXNTaW5nbGVDb2xsZWN0aW9uSW5MaXN0ICYmIGNvbGxlY3Rpb24uZ2V0KCdsYWJlbCcpO1xuICAgICAgY29uc3QgaW5mZXJlZEZpZWxkcyA9IHRoaXMuaW5mZXJGaWVsZHMoY29sbGVjdGlvbik7XG4gICAgICBjb25zdCBlbnRyeUNhcmRQcm9wcyA9IHsgY29sbGVjdGlvbiwgZW50cnksIGluZmVyZWRGaWVsZHMsIGNvbGxlY3Rpb25MYWJlbCB9O1xuICAgICAgcmV0dXJuIDxFbnRyeUNhcmQgey4uLmVudHJ5Q2FyZFByb3BzfSBrZXk9e2lkeH0gLz47XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sbGVjdGlvbnMsIHBhZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENhcmRzR3JpZD5cbiAgICAgICAgICB7TWFwLmlzTWFwKGNvbGxlY3Rpb25zKVxuICAgICAgICAgICAgPyB0aGlzLnJlbmRlckNhcmRzRm9yU2luZ2xlQ29sbGVjdGlvbigpXG4gICAgICAgICAgICA6IHRoaXMucmVuZGVyQ2FyZHNGb3JNdWx0aXBsZUNvbGxlY3Rpb25zKCl9XG4gICAgICAgICAge3RoaXMuaGFzTW9yZSgpICYmIDxXYXlwb2ludCBrZXk9e3BhZ2V9IG9uRW50ZXI9e3RoaXMuaGFuZGxlTG9hZE1vcmV9IC8+fVxuICAgICAgICA8L0NhcmRzR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

class EntryListing extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hasMore", () => {
      var _this$props$cursor, _this$props$cursor$ac;

      const hasMore = (_this$props$cursor = this.props.cursor) === null || _this$props$cursor === void 0 ? void 0 : (_this$props$cursor$ac = _this$props$cursor.actions) === null || _this$props$cursor$ac === void 0 ? void 0 : _this$props$cursor$ac.has('append_next');
      return hasMore;
    });

    _defineProperty(this, "handleLoadMore", () => {
      if (this.hasMore()) {
        this.props.handleCursorActions('append_next');
      }
    });

    _defineProperty(this, "inferFields", collection => {
      const titleField = (0, _collections.selectInferedField)(collection, 'title');
      const descriptionField = (0, _collections.selectInferedField)(collection, 'description');
      const imageField = (0, _collections.selectInferedField)(collection, 'image');
      const fields = (0, _collections.selectFields)(collection);
      const inferedFields = [titleField, descriptionField, imageField];
      const remainingFields = fields && fields.filter(f => inferedFields.indexOf(f.get('name')) === -1);
      return {
        titleField,
        descriptionField,
        imageField,
        remainingFields
      };
    });

    _defineProperty(this, "renderCardsForSingleCollection", () => {
      const {
        collections,
        entries,
        viewStyle
      } = this.props;
      const inferedFields = this.inferFields(collections);
      const entryCardProps = {
        collection: collections,
        inferedFields,
        viewStyle
      };
      return entries.map((entry, idx) => (0, _core.jsx)(_EntryCard.default, _extends({}, entryCardProps, {
        entry: entry,
        key: idx
      })));
    });

    _defineProperty(this, "renderCardsForMultipleCollections", () => {
      const {
        collections,
        entries
      } = this.props;
      const isSingleCollectionInList = collections.size === 1;
      return entries.map((entry, idx) => {
        const collectionName = entry.get('collection');
        const collection = collections.find(coll => coll.get('name') === collectionName);
        const collectionLabel = !isSingleCollectionInList && collection.get('label');
        const inferedFields = this.inferFields(collection);
        const entryCardProps = {
          collection,
          entry,
          inferedFields,
          collectionLabel
        };
        return (0, _core.jsx)(_EntryCard.default, _extends({}, entryCardProps, {
          key: idx
        }));
      });
    });
  }

  render() {
    const {
      collections,
      page
    } = this.props;
    return (0, _core.jsx)("div", null, (0, _core.jsx)(CardsGrid, null, _immutable.Map.isMap(collections) ? this.renderCardsForSingleCollection() : this.renderCardsForMultipleCollections(), this.hasMore() && (0, _core.jsx)(_reactWaypoint.Waypoint, {
      key: page,
      onEnter: this.handleLoadMore
    })));
  }

}

exports.default = EntryListing;

_defineProperty(EntryListing, "propTypes", {
  collections: _reactImmutableProptypes.default.iterable.isRequired,
  entries: _reactImmutableProptypes.default.list,
  viewStyle: _propTypes.default.string,
  cursor: _propTypes.default.any.isRequired,
  handleCursorActions: _propTypes.default.func.isRequired,
  page: _propTypes.default.number
});