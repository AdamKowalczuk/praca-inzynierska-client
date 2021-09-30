import React from "react";
import "./menu.scss";
import MenuIcon from "./icons/MenuIcon";
import Wireframe from "./icons/Wireframe";
import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./icons/HomePage";
import Graduate from "./icons/Graduate";
import Star from "./icons/Star";
import Logout from "./icons/Logout";
import CloseIcon from "./icons/Close";
import * as actionType from "../../constants/actionTypes";
import { useHistory } from "react-router-dom";
const Menu = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const actualCourse = useSelector((state) => state.actualCourse);
  let course = useSelector((state) => state.user.courses[actualCourse]);
  if (course === undefined) {
    course = {
      primaryColor: "rgb(255, 255, 255,100%)",
      secondaryColor: "rgb(255, 255, 255,20%)",
      thirdColor: "rgb(255, 255, 255)",
    };
  }
  let color = "#fff";
  if (course.name === "JavaScript") {
    color = "#000";
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    // setUser(null);
  };
  return (
    <>
      <div className="menu-container">
        {props.isColored === true ? (
          <>
            <div className="menu-icon">
              <BackIcon
                primaryColor={course.primaryColor}
                secondaryColor={course.secondaryColor}
                thirdColor={course.thirdColor}
                color={color}
                link={props.link}
              />
            </div>

            <h3 className={props.changeAlign === true ? "changeAlign" : null}>
              {props.text}
            </h3>
            <div className="menu-icon" onClick={() => handleOpen()}>
              <Wireframe
                primaryColor={course.primaryColor}
                secondaryColor={course.secondaryColor}
                thirdColor={course.thirdColor}
                color={color}
              />
            </div>
          </>
        ) : (
          <>
            <div style={{ height: "50px", width: "50px" }}></div>
            <h3>{props.text}</h3>
            <div className="menu-icon" onClick={() => handleOpen()}>
              <Wireframe primaryColor="rgb(255, 255, 255,20%)" color={color} />
            </div>
          </>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="modal">
            <CloseIcon
              className="close-icon"
              onClick={() => handleClose()}
              primaryColor={course.primaryColor}
              secondaryColor={course.secondaryColor}
              thirdColor={course.thirdColor}
            />
            <div className="menu-option-container">
              <Link
                to="/kursy"
                rel="noreferrer"
                className="link menu-link"
                onClick={() => handleClose()}
              >
                <div
                  className="menu-option"
                  style={{ borderColor: course.primaryColor }}
                >
                  <HomePage
                    primaryColor={course.primaryColor}
                    secondaryColor={course.secondaryColor}
                    thirdColor={course.thirdColor}
                  />
                  <h3>Ekran główny</h3>
                </div>
              </Link>

              <Link
                to="/moj-profil"
                rel="noreferrer"
                className="link menu-link"
              >
                <div
                  className="menu-option"
                  style={{ borderColor: course.primaryColor }}
                >
                  <Graduate
                    primaryColor={course.primaryColor}
                    secondaryColor={course.secondaryColor}
                    thirdColor={course.thirdColor}
                  />
                  <h3>Mój profil</h3>
                </div>
              </Link>

              <Link
                to="/osiagniecia"
                rel="noreferrer"
                className="link menu-link"
              >
                <div
                  className="menu-option"
                  style={{ borderColor: course.primaryColor }}
                >
                  <Star
                    primaryColor={course.primaryColor}
                    secondaryColor={course.secondaryColor}
                    thirdColor={course.thirdColor}
                  />
                  <h3>Osiągnięcia</h3>
                </div>
              </Link>

              <div
                className="menu-option"
                style={{ borderColor: course.primaryColor }}
                onClick={logout}
              >
                <Logout
                  primaryColor={course.primaryColor}
                  secondaryColor={course.secondaryColor}
                  thirdColor={course.thirdColor}
                />
                <h3>Wyloguj</h3>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Menu;
