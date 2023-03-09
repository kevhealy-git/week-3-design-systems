"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dsbutton",
    style: {
      backgroundColor: "#EC6337",
      color: "white",
      fontFamily: "BlinkMacSystemFont, -apple-system, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif",
      fontSize: "16px",
      border: "none",
      padding: "8px",
      marginTop: "16px",
      borderRadius: "8px"
    }
  }, props.label);
};
var _default = Button;
exports.default = _default;