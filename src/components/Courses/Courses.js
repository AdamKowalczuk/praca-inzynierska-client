import React, { useEffect } from "react";
import "./courses.scss";
import BookLover from "../../images/book_lover.svg";
import Learn from "../../images/learn.svg";
import Nav from "../Nav/Nav";
import MenuBar from "../../images/menu-bars-white.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActualCourse } from "../../actions/courses";
import { getUsers, setUser } from "../../actions/user";

const SingleCourse = (props) => {
  const dispatch = useDispatch();
  function sumCompleted() {
    let sum = 0;
    let finishedLessons = 0;
    props.userCourse.chapters.forEach((chapter) => {
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
        to={sumCompleted() > 0 ? "/kursy/rozdziały" : "/kursy/kurs"}
      >
        <div className="courses-box">
          <div className="courses-icon">
            <img className="courses-small-image" src={Learn} alt="Learn" />
          </div>
          <h4>{props.userCourse.name}</h4>
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
  return (
    <>
      <div className="courses-container">
        <Nav color="rgba(12, 12, 13, 1)" image={MenuBar} />
        <img src={BookLover} className="courses-big-image" alt="Book Lover" />
        {user.courses.map((singleCourse, id) => {
          return (
            <SingleCourse
              userCourse={singleCourse}
              key={singleCourse._id}
              number={id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Courses;
