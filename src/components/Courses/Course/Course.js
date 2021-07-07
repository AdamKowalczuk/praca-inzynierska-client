import React from "react";
import "./course.scss";
import Teaching from "../../../images/teaching.svg";
import Nav2 from "../../Nav2/Nav2";
import Hourglass from "../../../images/hourglass.svg";
import OpenBook from "../../../images/open-book.svg";
import ButtonRight from "../../Button/ButtonRight";
const CourseInfo = (props) => {
  return (
    <>
      <div className="course-icon-box">
        <img src={props.image} className="course-icon" alt="Open Book" />
        <h4 className="first-h4">{props.number}</h4>
        <h4 className="second-h4">{props.text}</h4>
      </div>
    </>
  );
};
const Course = () => {
  return (
    <>
      <div className="course-container">
        <Nav2 />
        <img src={Teaching} className="course-big-image" alt="Teaching" />
        <h3>HTML Course</h3>
        <p>HTML is the standard markup language for Web pages.</p>
        <p>With HTML you can create your own Website.</p>
        <div className="course-icon-container">
          <CourseInfo image={OpenBook} number="24" text="Lessons" />
          <CourseInfo image={Hourglass} number="12" text="Hours" />
          <ButtonRight text="Next" class="btn btn_right2" />
        </div>
      </div>
    </>
  );
};

export default Course;
