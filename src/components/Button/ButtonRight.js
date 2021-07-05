import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button className={props.class}>
      <p>{props.text}</p>
      <ArrowForwardIosIcon className="arrow-icon" />
    </button>
  );
};

export default Button;
