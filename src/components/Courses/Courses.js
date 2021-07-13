import React from "react";
import "./courses.scss";
import BookLover from "../../images/book_lover.svg";
import Learn from "../../images/learn.svg";
import Nav from "../Nav/Nav";
import MenuBar from "../../images/menu-bars-white.svg";
import { useSelector, useDispatch } from "react-redux";
import Course from "./Course/Course";
import { Link } from "react-router-dom";
import { Grid, CircularProgress } from "@material-ui/core";
import { setActualCourse } from "../../actions/courses";

const SingleCourse = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Link
        onClick={() => dispatch(setActualCourse(props.course))}
        to="/kursy/kurs"
      >
        <div className="courses-box">
          <div className="courses-icon">
            <img className="courses-small-image" src={Learn} alt="Learn" />
          </div>
          <h4>{props.course.name}</h4>
          <h5>{props.course.percent} Brak</h5>
        </div>
      </Link>
    </>
  );
};
const Courses = ({ setCurrentId }) => {
  const courses = useSelector((state) => state.courses);
  return (
    <>
      <div className="courses-container">
        <Nav color="rgba(12, 12, 13, 1)" image={MenuBar} />
        <img src={BookLover} className="courses-big-image" alt="Book Lover" />
        <SingleCourse course={courses[0]} />
        <SingleCourse course={courses[1]} />
        <SingleCourse course={courses[2]} />

        {/* {courses.map((course) => (
          <Grid key={course._id} item xs={12} sm={6} md={6}>
            <Course course={course} setCurrentId={setCurrentId} />
          </Grid>
        ))} */}
      </div>
    </>
  );
};

export default Courses;
