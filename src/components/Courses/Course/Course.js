import React from "react";
import "./course.scss";
// import Teaching from "../../../images/teaching.svg";
import Menu from "../../Menu/Menu";
import Knowledge from "../../../images/knowledge.svg";
import ButtonRight from "../../Button/ButtonRight";
import { useSelector } from "react-redux";
import Teacher from "./undraw_teacher.svg";
import { Link } from "react-router-dom";

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
      <div
        className="course-container"
        // style={{ color: course.primaryColor }}
        style={{ color: "#fff" }}
      >
        <Menu text={course.name} link="/kursy" />
        <img src={Teacher} className="course-big-image" alt="Teacher" />

        <p>{course.description}</p>
        <div className="course-icon-container">
          <CourseInfo
            image={Knowledge}
            number={course.chapters.length}
            text="Chapters"
          />
          <CourseInfo
            image={course.icon}
            number={sumLessons()}
            text="Lessons"
          />

          <Link to="/kursy/rozdziały" className="link">
            <ButtonRight
              text="Dalej"
              backgroundColor="#fff"
              color="#0c0c0d"
              class="btn btn_right2"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
