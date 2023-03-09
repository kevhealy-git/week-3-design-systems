import React from "react";

const Card = (props) => {
  return (
    <div
      className="dscard"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "8px",
        marginTop: "16px",
      }}
    >
      <img
        alt={props.alt}
        src={props.image}
        style={{ width: "200px", borderRadius: "4px" }}
      ></img>
      <p style={{ color: "#000000", fontSize: "16px" }}>{props.description}</p>
    </div>
  );
};

export default Card;
