import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      className={props.class}
      aria-label={props.text}
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <h3 className="bungee">{props.text}</h3>
      <ArrowForwardIosIcon className="arrow-icon" />
    </button>
  );
};

export default Button;
