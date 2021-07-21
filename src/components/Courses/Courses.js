import React, { useEffect } from "react";
import "./courses.scss";
import BookLover from "../../images/book_lover.svg";
import Learn from "../../images/learn.svg";
import Nav from "../Nav/Nav";
import MenuBar from "../../images/menu-bars-white.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActualCourse } from "../../actions/courses";
import { getUsers, setUser } from "../../actions/users";

const SingleCourse = (props) => {
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
    dispatch(getUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.auth.authData.result);
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
      </div>
    </>
  );
};

export default Courses;
