import React from "react";
import "./course.scss";
import Menu from "../../Menu/Menu";
import Book from "./images/book.svg";
import Learn from "./images/learn.svg";
import ButtonRight from "../../Button/ButtonRight";
import { useSelector } from "react-redux";
import Teacher from "./undraw_teacher.svg";
import { Link } from "react-router-dom";

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
const Course = (props, { setCurrentId }) => {
  const actualCourse = useSelector((state) => state.actualCourse);
  const course = useSelector((state) => state.user.courses[actualCourse]);
  function sumLessons() {
    let sum = 0;
    course.chapters.forEach((chapter) => {
      sum += chapter.lessons.length;
    });
    return sum;
  }

  return (
    <>
      <div className="course-container" style={{ color: "#fff" }}>
        <Menu text={course.name} link="/kursy" secondColor="#fff" />
        <img src={Teacher} className="course-big-image" alt="Teacher" />

        <p className="course-description">{course.description}</p>
        <div className="course-icon-container">
          <CourseInfo
            image={Book}
            number={course.chapters.length}
            text="Rozdziałów"
          />
          <CourseInfo image={Learn} number={sumLessons()} text="Lekcji" />

          <Link to="/kursy/rozdzialy" rel="noreferrer" className="link">
            <ButtonRight text="Dalej" color="#fff" class="btn btn_right2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
