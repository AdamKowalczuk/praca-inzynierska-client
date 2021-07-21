import React from "react";
import "./nav2.scss";
import MenuBar from "../../images/menu-bars-black.svg";

const Nav2 = (props) => {
  return (
    <>
      <div className="nav2-container">
        <img src={MenuBar} alt="menu bar" />
        <h2>{props.text}</h2>
      </div>
    </>
  );
};

export default Nav2;
