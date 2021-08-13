import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button className={props.class} type={props.type} onClick={props.onClick}>
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
