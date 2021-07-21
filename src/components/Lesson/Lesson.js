import React from "react";
import "./lesson.scss";
import Nav2 from "../Nav2/Nav2";
import WorkTime from "../../images/work-time.svg";
import { useDispatch, useSelector } from "react-redux";
import ButtonBack from "../Button/ButtonBack";

const Lesson = () => {
  const dispatch = useDispatch();
  const actualCourse = useSelector((state) => state.actualCourse);
  const actualChapter = useSelector((state) => state.actualChapter);
  const actualLesson = useSelector((state) => state.actualLesson);
  const lesson = useSelector(
    (state) =>
      state.user.courses[actualCourse].chapters[actualChapter].lessons[
        actualLesson
      ]
  );
  console.log(lesson);
  return (
    <>
      <Nav2 />
      <ButtonBack link="/kursy/rozdziały" />
      <div className="lesson-container">
        <h2>{lesson.name}</h2>
        <img className="lesson-image" src={WorkTime} alt="Work Time" />
        <p>{lesson.description}</p>
      </div>
    </>
  );
};

export default Lesson;
