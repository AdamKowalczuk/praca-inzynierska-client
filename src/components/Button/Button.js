import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button className={props.class} type={props.type}>
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
