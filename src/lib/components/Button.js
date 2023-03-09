import React from "react";

const Button = (props) => {
  return (
    <button
      className="dsbutton"
      style={{
        backgroundColor: "#EC6337",
        color: "white",
        fontFamily: "Comic Sans MS",
        fontSize: "16px",
        border: "none",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
