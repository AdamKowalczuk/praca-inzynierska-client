import React from "react";
import "./Nav.scss";

import Wave from "./wave";

const Nav = (props) => {
  return (
    <>
      <Wave color={props.color} />
      <div className="nav-container">
        <img src={props.image} alt="menu bar" />
      </div>
    </>
  );
};

export default Nav;
