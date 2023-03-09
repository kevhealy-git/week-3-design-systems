import React from "react";

const Button = (props) => {
  return (
    <button
      className="dsbutton"
      style={{
        backgroundColor: "#EC6337",
        color: "white",
        fontFamily:
          "BlinkMacSystemFont, -apple-system, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif",
        fontSize: "16px",
        border: "none",
        padding: "8px",
        marginTop: "16px",
        borderRadius: "8px",
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
