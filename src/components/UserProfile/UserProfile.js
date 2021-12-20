import React from "react";
import "./userProfile.scss";
import { Link } from "react-router-dom";
import BackIcon from "../Menu/icons/BackIcon";
import Menu from "../Menu/Menu";
import Badge from "./images/Badge";
import Rocket from "./images/Rocket";
import Space from "./images/Space";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../actions/user";
import moment from "moment";
import { useHistory } from "react-router-dom";
import * as actionType from "../../constants/actionTypes";

const UserProfile = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  const actualCourse = useSelector((state) => state.actualCourse);
  let course = useSelector((state) => state.user.courses[actualCourse]);
  const courses = useSelector((state) => state.user.courses);
  const history = useHistory();
  let color = "#fff";
  let isColored = true;
  if (course === undefined) {
    isColored = false;
    course = {
      primaryColor: "rgb(255, 255, 255,40%)",
      secondaryColor: "rgb(255, 255, 255,20%)",
      thirdColor: "rgb(255, 255, 255)",
    };
  } else {
    if (course.name === "JavaScript") {
      color = "#000";
    }
  }

  let finishedArray = [];

  function achievementsFinishedNumber() {
    let achievementsFinished = 0;
    user.achievements.forEach((achievement) => {
      if (achievement.isFinished === true) {
        achievementsFinished++;
      }
    });
    return achievementsFinished;
  }
  let firstName = "";
  let lastName = "";
  function divideName() {
    let isTextChanged = false;
    for (let i = 0; i < user.name.length; i++) {
      if (user.name[i] === " ") {
        isTextChanged = true;
        i++;
      }
      if (isTextChanged === false) {
        firstName += user.name[i];
      } else {
        lastName += user.name[i];
      }
    }
  }
  divideName();
  function finishedList() {
    let finishedCourses = 0;
    let finishedChapters = 0;
    let finishedLessons = 0;
    courses.forEach((item) => {
      if (item.isFinished === true) {
        finishedCourses++;
      }
      item.chapters.forEach((chapter) => {
        if (chapter.isFinished === true) {
          finishedChapters++;
        }
        chapter.lessons.forEach((lesson) => {
          if (lesson.isFinished === true) {
            finishedLessons++;
          }
        });
      });
    });
    finishedArray = [finishedCourses, finishedChapters, finishedLessons];
  }
  finishedList();
  function confirmation() {
    var result = confirm("Czy na pewno chcesz usunąć konto?");
    if (result) {
      dispatch(deleteUser(user._id));
      dispatch({ type: actionType.LOGOUT });
      history.push("/auth");
    }
  }
  return (
    <>
      <Menu text="Mój profil" link="/kursy" isColored={isColored} />
      <div className="profile-container">
        <div className="basic-info">
          <Space
            primaryColor={course.primaryColor}
            secondaryColor={course.secondaryColor}
          />
          <h3>
            {firstName} <b>{lastName}</b>
          </h3>
        </div>

        <div className="box-container">
          <div
            className="small-box"
            style={{ backgroundColor: course.secondaryColor }}
          >
            <Rocket primaryColor={course.primaryColor} />
            <div className="text">
              <h4>Data dołączenia</h4>
              <h4>{user.createdAt.slice(0, 10)}</h4>
            </div>
          </div>
          <div
            className="small-box"
            style={{ backgroundColor: course.secondaryColor }}
          >
            <Badge primaryColor={course.primaryColor} />
            <div className="text">
              <h4>Zdobyte osiągnięcia</h4>
              <h3 style={{ color: course.primaryColor }}>
                {achievementsFinishedNumber()}
              </h3>
            </div>
          </div>
        </div>

        <h3 className="acomplished-h4">Lista ukończonych</h3>
        <div
          className="big-box"
          style={{ backgroundColor: course.secondaryColor }}
        >
          <div className="completed-box">
            <h3>Kursów</h3>
            <div className="number">
              <h2
                style={{
                  backgroundColor: course.primaryColor,
                  color: color,
                }}
              >
                {finishedArray[0]}
              </h2>
            </div>
          </div>
          <div className="completed-box">
            <h3>Rozdziałów</h3>
            <div className="number">
              <h2
                style={{ backgroundColor: course.primaryColor, color: color }}
              >
                {finishedArray[1]}
              </h2>
            </div>
          </div>
          <div className="completed-box">
            <h3>Lekcji</h3>
            <div className="number">
              <h2
                style={{ backgroundColor: course.primaryColor, color: color }}
              >
                {finishedArray[2]}
              </h2>
            </div>
          </div>
        </div>
        <div className="delete-account center">
          <button
            className="btn_dark"
            onClick={() => {
              confirmation();
            }}
          >
            Usuń konto
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
