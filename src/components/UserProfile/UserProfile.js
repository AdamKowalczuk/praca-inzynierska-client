import React from "react";
import "./userProfile.scss";
import { Link } from "react-router-dom";
import BackIcon from "../Menu/icons/BackIcon";
import Menu from "../Menu/Menu";
import Badge from "./images/Badge";
import Rocket from "./images/Rocket";
import Space from "./images/Space";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const actualCourse = useSelector((state) => state.actualCourse);
  const course = useSelector((state) => state.user.courses[actualCourse]);
  const courses = useSelector((state) => state.user.courses);

  let color = "#fff";
  console.log(color);
  if (course.name === "JavaScript") {
    color = "#000";
  }

  if (actualCourse === "") {
    course.primaryColor = "rgb(255, 255, 255)";
    course.primaryColor = "rgb(255, 255, 255,20%)";
    course.primaryColor = "rgb(255, 255, 255)";
  }
  let finishedArray = [];

  // function achievementsFinishedNumber(){
  //   let achievementsFinished=0;
  //   courses.forEach(course => {
  //     if(course.achievements.isFinished===true){
  //       achievementsFinished++
  //     }
  //   });
  //   return achievementsFinished
  // }
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
  return (
    <>
      <Menu text="Mój profil" link="/kursy" isColored={true} />
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
              {/* <h4>07.09.2021</h4> */}
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
              <h3 style={{ color: course.primaryColor }}>5</h3>
              {/* <h3 style={{ color: course.primaryColor }}>{achievementsFinishedNumber()}</h3> */}
            </div>
          </div>
        </div>

        <h4 className="acomplished-h4">Lista ukończonych</h4>
        <div
          className="big-box"
          style={{ backgroundColor: course.secondaryColor }}
        >
          <div className="completed-box">
            <h3>Kursów</h3>
            <div className="number">
              {/* <h2 style={{ color: "rgb(255, 255, 255,40%)" }}>
                {finishedArray[0]}
              </h2> */}
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
      </div>
    </>
  );
};

export default UserProfile;
