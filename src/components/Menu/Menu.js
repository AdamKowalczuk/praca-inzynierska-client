import React from "react";
import "./menu.scss";
import MenuIcon from "./icons/MenuIcon";
import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
      <div className="menu-container">
        {props.isColored === true ? (
          <>
            <Link to={props.link} className="link">
              <BackIcon
                primaryColor={props.primaryColor}
                secondaryColor={props.secondaryColor}
              />
            </Link>

            <h3>{props.text}</h3>
            <MenuIcon
              primaryColor={props.primaryColor}
              secondaryColor={props.secondaryColor}
            />
          </>
        ) : (
          <>
            <Link to={props.link} className="link" style={{ height: "50px" }}>
              <BackIcon primaryColor="#fff" />
            </Link>

            <h3>{props.text}</h3>
            <MenuIcon primaryColor="#fff" />
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
