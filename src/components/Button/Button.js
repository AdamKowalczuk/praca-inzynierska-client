import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      className={props.class}
      type={props.type}
      onClick={props.onClick}
      style={{
        backgroundColor: props.secondaryColor,
        color: props.primaryColor,
        borderColor: props.borderColor,
      }}
    >
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
