import React, { useState } from "react";
import "./lesson.scss";
import Nav2 from "../Nav2/Nav2";
import WorkTime from "../../images/work-time.svg";
import { useDispatch, useSelector } from "react-redux";
import ButtonBack from "../Button/ButtonBack";
import "./button.scss";
import { updateLesson, setNextLesson } from "../../actions/courses";
import { setActualQuiz } from "../../actions/quiz";
import { Link } from "react-router-dom";

const Lesson = () => {
  const dispatch = useDispatch();

  const actualCourse = useSelector((state) => state.actualCourse);
  const actualChapter = useSelector((state) => state.actualChapter);
  let actualLesson = useSelector((state) => state.actualLesson);
  const course = useSelector((state) => state.user.courses[actualCourse]);

  let lesson = course.chapters[actualChapter].lessons[actualLesson];
  const chapter = course.chapters[actualChapter].lessons;
  const courseId = course._id;

  const chapterId = course.chapters[actualChapter]._id;
  const userId = useSelector((state) => state.user._id);
  let initialState = {
    name: lesson.name,
    description: lesson.description,
    isFinished: lesson.isFinished,
    _id: lesson._id,
    image: lesson.image,
    actualCourse: actualCourse,
    actualChapter: actualChapter,
    actualLesson: actualLesson,
  };
  let updateForm = () => {
    return {
      name: lesson.name,
      description: lesson.description,
      isFinished: lesson.isFinished,
      _id: lesson._id,
      image: lesson.image,
      actualCourse: actualCourse,
      actualChapter: actualChapter,
      actualLesson: actualLesson,
    };
  };

  const [form, setForm] = useState(initialState);

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
              onClick={() => {
                dispatch(
                  updateLesson(
                    updateForm(),
                    userId,
                    courseId,
                    chapterId,
                    form._id
                  )
                );
                dispatch(setActualQuiz(0));
              }}
            >
              Przejdź do quizu
            </button>
          </Link>
        ) : (
          <button
            className="btn-lesson"
            onClick={() => {
              dispatch(
                updateLesson(
                  updateForm(),
                  userId,
                  courseId,
                  chapterId,
                  form._id
                )
              );
              dispatch(setNextLesson(actualLesson));
            }}
          >
            Dalej
          </button>
        )}
      </div>
    </>
  );
};

export default Lesson;
