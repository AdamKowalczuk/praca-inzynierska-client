import React from "react";
import "./course.scss";
import Teaching from "../../../images/teaching.svg";
import Nav2 from "../../Nav2/Nav2";
import Hourglass from "../../../images/hourglass.svg";

import OpenBook from "../../../images/open-book.svg";
import Knowledge from "../../../images/knowledge.svg";
import ButtonRight from "../../Button/ButtonRight";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonBack from "../../Button/ButtonBack";

const CourseInfo = (props) => {
  return (
    <>
      <div className="course-icon-box ">
        <img src={props.image} className="course-icon" alt="Open Book" />
        <h4 className="first-h4">{props.number}</h4>
        <h4 className="second-h4">{props.text}</h4>
      </div>
    </>
  );
};
const Course = (props, { setCurrentId }) => {
  const courseNumber = useSelector((state) => state.actualCourse);
  const course = useSelector((state) => state.user.courses[courseNumber]);
  function sumLessons() {
    let sum = 0;
    course.chapters.forEach((chapter) => {
      sum += chapter.lessons.length;
    });
    return sum;
  }

  return (
    <>
      <div className="course-container">
        <ButtonBack link="/kursy" />
        <Nav2 text={course.name} />
        <img src={Teaching} className="course-big-image" alt="Teaching" />

        <p>{course.description}</p>
        <div className="course-icon-container">
          <CourseInfo
            image={Knowledge}
            number={course.chapters.length}
            text="Chapters"
          />
          <CourseInfo image={OpenBook} number={sumLessons()} text="Lessons" />

          <Link to="/kursy/rozdziały">
            <ButtonRight text="Next" class="btn btn_right2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
