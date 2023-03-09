"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dscard",
    style: {
      backgroundColor: "#FFFFFF",
      border: "1px solid #000000",
      borderRadius: "8px",
      padding: "8px",
      marginTop: "16px"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: props.alt,
    src: props.image,
    style: {
      width: "200px",
      borderRadius: "4px"
    }
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "#000000",
      fontSize: "16px"
    }
  }, props.description));
};
var _default = Card;
exports.default = _default;