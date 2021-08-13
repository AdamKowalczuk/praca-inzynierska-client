import React from "react";
import "./lesson.scss";
import Nav2 from "../Nav2/Nav2";
import WorkTime from "../../images/work-time.svg";
import { useDispatch, useSelector } from "react-redux";
import ButtonBack from "../Button/ButtonBack";
import "./button.scss";
import { setNextLesson } from "../../actions/courses";
import { setActualQuiz } from "../../actions/quiz";
import { Link } from "react-router-dom";

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
  const chapter = useSelector(
    (state) => state.user.courses[actualCourse].chapters[actualChapter].lessons
  );

  return (
    <>
      <Nav2 />
      <ButtonBack link="/kursy/rozdziały" />
      <div className="lesson-container">
        <h2>{lesson.name}</h2>
        <img className="lesson-image" src={WorkTime} alt="Work Time" />
        <p>{lesson.description}</p>
        {actualLesson === chapter.length - 1 ? (
          <Link to="/kursy/rozdziały/quiz">
            <button
              className="btn-lesson"
              onClick={() => dispatch(setActualQuiz(0))}
            >
              Przejdź do quizu
            </button>
          </Link>
        ) : (
          <button
            className="btn-lesson"
            onClick={() => dispatch(setNextLesson(actualLesson))}
          >
            Dalej
          </button>
        )}
      </div>
    </>
  );
};

export default Lesson;
