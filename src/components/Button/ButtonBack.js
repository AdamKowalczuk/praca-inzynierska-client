import React from "react";
import "./button.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const ButtonBack = (props) => {
  return (
    <>
      <Link to={props.link}>
        <div className="button-back-container">
          <ArrowBackIcon />
        </div>
      </Link>
    </>
  );
};

export default ButtonBack;
