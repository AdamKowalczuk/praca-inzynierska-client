import React from "react";
import "./course.scss";
import BookLover from "../../images/book_lover.svg";
import Learn from "../../images/learn.svg";
import Nav from "../Nav/Nav";

const SingleCourse = (props) => {
  return (
    <>
      <div className="course-box">
        <div className="course-icon">
          <img className="course-small-image" src={Learn} alt="Learn" />
        </div>
        <h4>{props.name}</h4>
        <h5>{props.percent}</h5>
      </div>
    </>
  );
};
const Course = () => {
  return (
    <>
      <div className="course-container">
        <Nav />
        <img src={BookLover} className="course-big-image" alt="Book Lover" />
        <SingleCourse name="HTML" percent="15%" />
        <SingleCourse name="CSS" percent="7%" />
        <SingleCourse name="JavaScript" percent="56%" />
        {/* <div className="course-box">
          <div className="course-icon">
            <img className="course-small-image" src={Learn} alt="Learn" />
          </div>
          <h4>HTML</h4>
          <h5>15%</h5>
        </div> */}
      </div>
    </>
  );
};

export default Course;
