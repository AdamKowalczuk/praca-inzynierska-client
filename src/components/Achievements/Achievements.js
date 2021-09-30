import React from "react";
import "./achievements.scss";
import { Link } from "react-router-dom";
import BackIcon from "../Menu/icons/BackIcon";
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
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

const Achievement = (props) => {
  return (
    <>
      <div className="achievement">
        <div
          className="achievement-icon"
          style={{ backgroundColor: props.secondaryColor }}
        >
          <props.image primaryColor={props.primaryColor} color={props.color} />
        </div>

        <div
          className="achievement-text"
          style={{ backgroundColor: props.secondaryColor }}
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
  let color = "#fff";
  if (course === undefined) {
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
      <Menu text="Osiągnięcia" link="/kursy" isColored={true} />
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
        />
        <Achievement
          text1="Wytrwały zawodnik"
          text2="Bądź z nami przez jeden tydzień"
          image={Ringing}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
        />
        <Achievement
          text1="Stały bywalec"
          text2="Bądź z nami przez miesiąc"
          image={Alarm}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
        />

        <Achievement
          text1="Mistrz HTML-a"
          text2="Ukończ kurs HTML"
          image={Launch}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
        />
        <Achievement
          text1="Grafik"
          text2="Ukończ kurs CSS"
          image={Virus}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
        />
        <Achievement
          text1="Koder"
          text2="Ukończ kurs JavaScript"
          image={Settings}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
        />
        <Achievement
          text1="Cudowne dziecko"
          text2="Oblej quiz 10 razy"
          image={Carving}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
        />
        <Achievement
          text1="Prymus"
          text2="Ukończ 10 zadań"
          image={Head}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
        />

        <Achievement
          text1="Czempion"
          text2="Ukończ wszystkie kursy"
          image={Knight}
          primaryColor={course.primaryColor}
          secondaryColor={course.secondaryColor}
          thirdColor={course.thirdColor}
          color={color}
        />
      </div>
    </>
  );
};

export default Achievements;
