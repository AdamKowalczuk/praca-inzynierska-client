import React from "react";
import "./Nav.scss";
import MenuBar from "../../images/menu-bars.svg";
import Wave from "./wave";

const Nav = () => {
  return (
    <>
      <Wave />
      <div className="nav-container">
        <img src={MenuBar} alt="menu bar" />
      </div>
    </>
  );
};

export default Nav;
