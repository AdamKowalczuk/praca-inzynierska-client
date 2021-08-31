import React from "react";
import "./menu.scss";
import MenuIcon from "./icons/MenuIcon";

const HomeMenu = (props) => {
  return (
    <>
      <div className="menu-container">
        {props.isColored === true ? (
          <>
            <MenuIcon
              primaryColor={props.primaryColor}
              secondaryColor={props.secondaryColor}
            />
            <h3>{props.text}</h3>
            <MenuIcon
              primaryColor={props.primaryColor}
              secondaryColor={props.secondaryColor}
            />
          </>
        ) : (
          <>
            <MenuIcon primaryColor="#fff" />
            <h3>{props.text}</h3>
            <MenuIcon primaryColor="#fff" />
          </>
        )}
      </div>
    </>
  );
};

export default HomeMenu;
