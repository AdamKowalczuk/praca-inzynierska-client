import React from "react";
import "./menu.scss";
import MenuIcon from "./icons/MenuIcon";
import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";

const LessonTopMenu = (props) => {
  return (
    <>
      <div className="menu-container">
        <>
          <Link to={props.link} rel="noreferrer" className="link">
            <BackIcon
              primaryColor={props.primaryColor}
              secondaryColor={props.secondaryColor}
            />
          </Link>

          <h3>{props.text}</h3>
          <div
            className="lesson-number"
            style={{
              backgroundColor: props.secondaryColor,
            }}
          >
            <h3 style={{ color: props.primaryColor }}>
              {props.isLesson === true
                ? props.actualLesson + 1 + "/" + props.lessonNumber
                : props.actualQuiz + 1 + "/" + props.quizNumber}
            </h3>
          </div>
        </>
      </div>
    </>
  );
};

export default LessonTopMenu;
