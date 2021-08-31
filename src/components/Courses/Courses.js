import React, { useEffect } from "react";
import "./courses.scss";
// import CityLife from "../../images/undraw_city_life.svg";
import RoadSign from "../../images/undraw_road_sign.svg";
// import Nav from "../Nav/Nav";
// import MenuBar from "../../images/menu-bars-white.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActualCourse } from "../../actions/courses";
import { getUsers, setUser } from "../../actions/user";
// import icons from "./icons";
import HomeMenu from "../Menu/HomeMenu";

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
        className="link"
      >
        <div
          className="courses-box"
          style={{
            border: "2px solid",
            borderColor: props.primaryColor,
            color: props.primaryColor,
          }}
        >
          <div className="courses-icon">
            <img
              className="courses-small-image"
              style={{
                backgroundColor: props.secondaryColor,
                color: props.primaryColor,
              }}
              src={props.icon}
              alt={props.icon}
            />
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
      <HomeMenu text="Kursy" link="/kursy" />
      <div className="courses-container">
        <img src={RoadSign} className="courses-big-image" alt="Book Lover" />
        {user.courses.map((singleCourse, id) => {
          return (
            <SingleCourse
              userCourse={singleCourse}
              key={singleCourse._id}
              number={id}
              primaryColor={singleCourse.primaryColor}
              secondaryColor={singleCourse.secondaryColor}
              icon={singleCourse.icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default Courses;
