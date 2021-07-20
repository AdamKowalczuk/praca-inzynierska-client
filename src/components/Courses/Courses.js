import React, { useEffect } from "react";
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
import { getUsers, setUser } from "../../actions/users";

const SingleCourse = (props) => {
  // const actualCourse = useSelector((state) => state.actualCourse);
  // const users use
  // dispatch(setActualCourse(props.course))
  const dispatch = useDispatch();
  function sumCompleted() {
    let sum = 0;
    let finishedLessons = 0;
    props.course.chapters.forEach((chapter) => {
      chapter.lessons.forEach((lesson) => {
        if (lesson.isFinished === true) {
          finishedLessons += 1;
        }
        sum += 1;
      });
    });
    return Math.round((finishedLessons / sum) * 100);
  }
  return (
    <>
      <Link
        onClick={() => dispatch(setActualCourse(props.number))}
        to="/kursy/kurs"
      >
        <div className="courses-box">
          <div className="courses-icon">
            <img className="courses-small-image" src={Learn} alt="Learn" />
          </div>
          <h4>{props.course.name}</h4>
          <h5>{sumCompleted()}%</h5>
        </div>
      </Link>
    </>
  );
};
const Courses = ({ setCurrentId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCourses());
    dispatch(getUsers());
  }, [dispatch]);
  // const users = useSelector((state) => state.users);
  // console.log(users);
  // const userID =useSelector((state) => state.auth.authData.result.);
  // console.log("USER ID:", userID);

  const user = useSelector((state) => state.auth.authData.result);
  console.log("USEEER", user);
  dispatch(setUser(user));
  const course = user.courses;
  return (
    <>
      <div className="courses-container">
        <Nav color="rgba(12, 12, 13, 1)" image={MenuBar} />
        <img src={BookLover} className="courses-big-image" alt="Book Lover" />
        <SingleCourse course={course[0]} number={0} />
        <SingleCourse course={course[1]} number={1} />
        <SingleCourse course={course[2]} number={2} />

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
