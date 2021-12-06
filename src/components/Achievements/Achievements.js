import React from "react";
import "./achievements.scss";
import { Link } from "react-router-dom";
import BackIcon from "../Menu/icons/BackIcon";
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { finishAchievement } from "../../actions/user";
import Mission from "./images/Mission";
import HTML from "./images/winners-orange.svg";
import CSS from "./images/winners-blue.svg";
import JavaScript from "./images/winners-yellow.svg";
import WinnersDefault from "./images/winners-white.svg";

import Alarm from "./images/Alarm";
import Carving from "./images/Carving";
import Flag from "./images/Flag";
import Head from "./images/Head";
import Knight from "./images/Knight";
import Launch from "./images/Launch";
import Ringing from "./images/Ringing";
import Settings from "./images/Settings";
import Virus from "./images/Virus";

import moment from "moment";
import DateDiff from "date-diff";

const Achievement = (props) => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  let courses = useSelector((state) => state.user.courses);
  let userId = user._id;
  let primaryColor;
  let secondaryColor;
  if (props.achievement.isFinished === true) {
    primaryColor = props.primaryColor;
    secondaryColor = props.secondaryColor;
  } else {
    primaryColor = "rgb(255,255,255,20%)";
    secondaryColor = "rgb(255,255,255,20%)";
  }

  let startDateYear = moment().format("YYYY");
  let startDateMonth = moment().format("MM");
  let startDateDay = moment().format("DD");
  var startDate = new Date(startDateYear, startDateMonth, startDateDay);

  let year = moment(user.createdAt).format("YYYY");
  let month = moment(user.createdAt).format("MM");
  let day = moment(user.createdAt).format("DD");
  var date2 = new Date(year, month, day);
  var diff = new DateDiff(startDate, date2);
  function IsRegisteredByWeek() {
    if (diff.days() >= 7) {
      dispatch(finishAchievement(userId, 1));
    }
  }

  function IsRegisteredByMonth() {
    if (diff.days() >= 30) {
      dispatch(finishAchievement(userId, 2));
    }
  }

  function IsCoursesFinished() {
    if (courses[0].isFinished === true) {
      dispatch(finishAchievement(userId, 3));
    }
    if (courses[1].isFinished === true) {
      dispatch(finishAchievement(userId, 4));
    }
    if (courses[2].isFinished === true) {
      dispatch(finishAchievement(userId, 5));
    }
    if (
      courses[0].isFinished === true &&
      courses[1].isFinished === true &&
      courses[2].isFinished === true
    ) {
      dispatch(finishAchievement(userId, 8));
    }
    function sumExercises() {
      let sum = 0;
      courses.map((course) => {
        course.chapters.map((chapter) => {
          chapter.exercises.map((exercise) => {
            if (exercise.isFinished) {
              sum++;
            }
          });
        });
      });
      if (sum >= 10) {
        dispatch(finishAchievement(userId, 7));
      }
    }
    function sumQuizes() {
      let sum = 0;
      courses.map((course) => {
        course.chapters.map((chapter) => {
          chapter.quiz.map((singlequiz) => {
            if (singlequiz.isFinished) {
              sum++;
            }
          });
        });
      });
      if (sum >= 10) {
        dispatch(finishAchievement(userId, 6));
      }
    }
    function checkAchievements() {
      IsRegisteredByWeek();
      IsRegisteredByMonth();
      IsCoursesFinished();
      sumQuizes();
      // sumExercises()
    }
    checkAchievements();
  }
  return (
    <>
      <div className="achievement">
        <div
          className="achievement-icon"
          style={{ backgroundColor: secondaryColor }}
        >
          <props.image primaryColor={primaryColor} color={props.color} />
        </div>

        <div
          className="achievement-text"
          style={{ backgroundColor: secondaryColor }}
        >
          <h4>{props.text1}</h4>
          <h5>{props.text2}</h5>
        </div>
      </div>
    </>
  );
};

const Achievements = () => {
  const dispatch = useDispatch();
  const actualCourse = useSelector((state) => state.actualCourse);

  let course = useSelector((state) => state.user.courses[actualCourse]);
  let achievements = useSelector((state) => state.user.achievements);
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

  function chooseImage() {
    switch (course.name) {
      case "HTML":
        return HTML;
      case "CSS":
        return CSS;
      case "JavaScript":
        return JavaScript;
      default:
        return WinnersDefault;
    }
  }
  return (
    <>
      <Menu text="Osiągnięcia" link="/kursy" isColored={isColored} />
      <div className="achievements-container">
        {/* <Winners
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
        /> */}

        <img src={chooseImage()} alt="Winners" />
        <Achievement
          text1="Nowy uczeń"
          text2="Zarejestruj się"
          image={Flag}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[0]}
        />
        <Achievement
          text1="Wytrwały zawodnik"
          text2="Bądź z nami przez jeden tydzień"
          image={Ringing}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[1]}
        />
        <Achievement
          text1="Stały bywalec"
          text2="Bądź z nami przez miesiąc"
          image={Alarm}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[2]}
        />

        <Achievement
          text1="Mistrz HTML-a"
          text2="Ukończ kurs HTML"
          image={Launch}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[3]}
        />
        <Achievement
          text1="Grafik"
          text2="Ukończ kurs CSS"
          image={Virus}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[4]}
        />
        <Achievement
          text1="Koder"
          text2="Ukończ kurs JavaScript"
          image={Settings}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[5]}
        />
        <Achievement
          text1="Cudowne dziecko"
          text2="Ukończ quiz 10 razy"
          image={Carving}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[6]}
        />
        <Achievement
          text1="Prymus"
          text2="Ukończ 10 zadań"
          image={Head}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[7]}
        />

        <Achievement
          text1="Czempion"
          text2="Ukończ wszystkie kursy"
          image={Knight}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
          achievement={achievements[8]}
        />
      </div>
    </>
  );
};

export default Achievements;
