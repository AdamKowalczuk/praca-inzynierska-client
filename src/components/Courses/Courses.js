import React, { useEffect } from "react";
import "./courses.scss";
import RoadSign from "../../images/undraw_road_sign.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActualCourse } from "../../actions/courses";
import { getUsers, setUser } from "../../actions/user";
import Hello from "./icons/hello.svg";
// import icons from "./icons";
import Menu from "../Menu/Menu";

function importAll(r) {
  let icons = {};
  r.keys().map((item, index) => {
    icons[item.replace("./", "")] = r(item);
  });
  return icons;
}

const icons = importAll(
  require.context("./icons", false, /\.(png|jpe?g|svg)$/)
);

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
        to={sumCompleted() > 0 ? "/kursy/rozdzialy" : "/kursy/kurs"}
        rel="noreferrer"
        className="link"
      >
        <div
          className="courses-box"
          style={{
            border: "2px solid",
            borderColor: "#fff",
            color: "#fff",
          }}
        >
          <div className="courses-icon">
            <img
              className="courses-small-image"
              style={{
                backgroundColor: "rgb(255,255,255,20%)",
                color: "#fff",
              }}
              src={icons[props.userCourse.icon].default}
              alt={icons[props.userCourse.icon].default}
            />
          </div>
          <h4>{props.userCourse.name}</h4>
          {isNaN(sumCompleted()) ? <h5>0%</h5> : <h5>{sumCompleted()}%</h5>}
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

  let firstName = "";
  let lastName = "";
  function divideName() {
    let isTextChanged = false;
    for (let i = 0; i < user.name.length; i++) {
      if (user.name[i] === " ") {
        isTextChanged = true;
        i++;
      }
      if (isTextChanged === false) {
        firstName += user.name[i];
      } else {
        lastName += user.name[i];
      }
    }
  }
  divideName();
  dispatch(setUser(user));
  return (
    <>
      <Menu text="" link="/kursy" />
      <div className="courses-container">
        {/* <img src={RoadSign} className="courses-big-image" alt="Book Lover" /> */}
        <div className="welcome-container">
          <div className="welcome-user">
            <h3>
              <b>Cześć</b>
            </h3>
            <h3>{firstName}!</h3>
          </div>

          <img src={Hello} alt="hello" />
        </div>
        <h3 className="question-text">
          Czego chcesz się dziś <b>nauczyć?</b>
        </h3>
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
