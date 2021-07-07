import React from "react";
import "./courses.scss";
import BookLover from "../../images/book_lover.svg";
import Learn from "../../images/learn.svg";
import Nav from "../Nav/Nav";

const SingleCourse = (props) => {
  return (
    <>
      <div className="courses-box">
        <div className="courses-icon">
          <img className="courses-small-image" src={Learn} alt="Learn" />
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
      <div className="courses-container">
        <Nav />
        <img src={BookLover} className="courses-big-image" alt="Book Lover" />
        <SingleCourse name="HTML" percent="15%" />
        <SingleCourse name="CSS" percent="7%" />
        <SingleCourse name="JavaScript" percent="56%" />
      </div>
    </>
  );
};

export default Course;
