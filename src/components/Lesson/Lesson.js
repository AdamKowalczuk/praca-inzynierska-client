import React, { useState } from "react";
import "./lesson.scss";
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import "./button.scss";
import { updateLesson, setNextLesson } from "../../actions/courses";
import { setActualQuiz } from "../../actions/quiz";
import { Link } from "react-router-dom";
import LessonBottomMenu from "../Menu/LessonBottomMenu";
import LessonTopMenu from "../Menu/LessonTopMenu";
function importAll(r) {
  let icons = {};
  r.keys().map((item, index) => {
    icons[item.replace("./", "")] = r(item);
  });
  return icons;
}
let icons = "";
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
    dayOfFinish: lesson.dayOfFinish,
  };

  switch (actualCourse) {
    case 0:
      icons = importAll(
        require.context("./images/html", false, /\.(png|jpe?g|bmp|svg)$/)
      );

      break;
    case 1:
      icons = importAll(
        require.context("./images/css", false, /\.(png|jpe?g|bmp|svg)$/)
      );
      break;
    case 2:
      icons = importAll(
        require.context("./images/javascript", false, /\.(png|jpe?g|bmp|svg)$/)
      );
      break;
    default:
      icons = "";
  }

  let updateForm = () => {
    let newDayOfFinish;
    if (lesson.dayOfFinish === undefined) {
      newDayOfFinish = new Date().getTime();
    } else {
      newDayOfFinish = lesson.dayOfFinish;
    }
    return {
      name: lesson.name,
      description: lesson.description,
      isFinished: lesson.isFinished,
      _id: lesson._id,
      image: lesson.image,
      actualCourse: actualCourse,
      actualChapter: actualChapter,
      actualLesson: actualLesson,
      dayOfFinish: newDayOfFinish,
    };
  };

  const [form] = useState(initialState);

  return (
    <>
      <LessonTopMenu
        link="/kursy/rozdzialy"
        text={lesson.name}
        primaryColor={course.primaryColor}
        secondaryColor={course.secondaryColor}
        actualLesson={actualLesson}
        lessonNumber={chapter.length}
        isLesson={true}
        courseName={course.name}
      />
      <div className="lesson-container">
        <Icon lessonName={lesson.name} lessonImage={lesson.image} />

        <p>{lesson.description}</p>
        <LessonBottomMenu
          firstIconBackground={course.secondaryColor}
          secondIconBackground="transparent"
          thirdIconBackground="transparent"
          firstIconColor={course.primaryColor}
          secondIconColor={course.secondaryColor}
          thirdIconColor={course.secondaryColor}
        />
        {actualLesson === chapter.length - 1 ? (
          <Link to="/kursy/rozdzialy/quiz" rel="noreferrer">
            <button
              className="btn-lesson"
              aria-label="Go to quiz"
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
            aria-label="Next"
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
const Icon = (props) => {
  return (
    <>
      <img
        className="lesson-image"
        src={icons[props.lessonImage].default}
        alt={props.lessonName}
      />
    </>
  );
};
export default Lesson;
