import React, { useState } from "react";
import "./lesson.scss";
import Menu from "../Menu/Menu";
// import WorkTime from "../../images/work-time.svg";
import { useDispatch, useSelector } from "react-redux";
// import ButtonBack from "../Button/ButtonBack";
import "./button.scss";
import { updateLesson, setNextLesson } from "../../actions/courses";
import { setActualQuiz } from "../../actions/quiz";
import { Link } from "react-router-dom";
import LessonMenu from "../Menu/LessonMenu";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import images from "./images";
console.log(images);

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

  const [form] = useState(initialState);

  return (
    <>
      <Menu
        link="/kursy/rozdziały"
        text={lesson.name}
        isColored={true}
        primaryColor={course.primaryColor}
        secondaryColor={course.secondaryColor}
      />
      <div className="lesson-container">
        <img className="lesson-image" src={lesson.image} alt="Work Time" />
        <p>{lesson.description}</p>
        <LessonMenu
          firstIconBackground={course.secondaryColor}
          secondIconBackground="transparent"
          thirdIconBackground="transparent"
          firstIconColor={course.primaryColor}
          secondIconColor={course.secondaryColor}
          thirdIconColor={course.secondaryColor}
        />
        {actualLesson === chapter.length - 1 ? (
          <Link to="/kursy/rozdziały/quiz">
            <button
              className="btn-lesson"
              style={{
                backgroundColor: course.secondaryColor,
                color: course.primaryColor,
              }}
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
            style={{
              backgroundColor: course.secondaryColor,
              color: course.primaryColor,
            }}
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
