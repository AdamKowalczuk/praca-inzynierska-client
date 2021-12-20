import React from "react";
import "./menu.scss";
import MenuIcon from "./icons/MenuIcon";
import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";

const LessonTopMenu = (props) => {
  let color = "#fff";
  if (props.courseName === "JavaScript") {
    color = "#000";
  }

  return (
    <>
      <div className="menu-container">
        <>
          <BackIcon
            primaryColor={props.primaryColor}
            secondaryColor={props.secondaryColor}
            thirdColor={props.thirdColor}
            link={props.link}
            color={color}
          />

          <h3 className="bungee" style={{ lineHeight: "1", marginTop: "4px" }}>
            {props.text}
          </h3>
          <div
            className="lesson-number"
            style={{
              backgroundColor: props.primaryColor,
            }}
          >
            <h3
              style={{
                color: color,
              }}
            >
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
