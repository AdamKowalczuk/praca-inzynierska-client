import React from "react";
import Book from "./icons/book";
import Communication from "./icons/communication";
import Writing from "./icons/writing";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { setActualChapter, setActualLesson } from "../../actions/courses";
import { setActualQuiz } from "../../actions/quiz";
const LessonBottomMenu = (props) => {
  const dispatch = useDispatch();

  const actualCourse = useSelector((state) => state.actualCourse);
  const actualChapter = useSelector((state) => state.actualChapter);
  const course = useSelector((state) => state.user.courses[actualCourse]);
  const chapter = useSelector(
    (state) => state.user.courses[actualCourse].chapters[actualChapter]
  );

  function sumCompletedLessons() {
    let sum = 0;
    course.chapters[actualChapter].lessons.forEach((lesson) => {
      if (lesson.isFinished === true) {
        sum += 1;
      }
    });
    return sum;
  }
  return (
    <>
      <div
        className="button-container"
        style={{
          // backgroundColor: "#0c0c0d",
          borderColor: course.secondaryColor,
        }}
      >
        <Link to="/kursy/rozdziały/lekcje" className="link link-menu">
          <div
            style={{ backgroundColor: props.firstIconBackground }}
            className="tooltip"
          >
            <Book
              primaryColor={props.firstIconColor}
              secondaryColor={course.secondaryColor}
            />
            <span className="tooltiptext">Lekcje</span>
          </div>
        </Link>

        {sumCompletedLessons() / chapter.lessons.length === 1 ? (
          <Link
            to="/kursy/rozdziały/quiz"
            className="link link-menu"
            onClick={() => {
              dispatch(setActualQuiz(0));
            }}
          >
            <div
              style={{ backgroundColor: props.secondIconBackground }}
              className="tooltip"
            >
              <Communication
                primaryColor={props.secondIconColor}
                secondaryColor={course.secondaryColor}
              />

              <span className="tooltiptext">Quiz</span>
            </div>
          </Link>
        ) : (
          <Link className="link link-menu">
            <div
              style={{ backgroundColor: props.secondIconBackground }}
              className="tooltip"
            >
              <Communication
                primaryColor={props.secondIconColor}
                secondaryColor={course.secondaryColor}
              />
              <span className="tooltiptext">
                Ukończ wszystkie lekcje, aby odblokować
              </span>
            </div>
          </Link>
        )}

        <Link
          to="/kursy/rozdziały/zadania"
          rel="noreferrer"
          className="link link-menu"
        >
          <div
            style={{ backgroundColor: props.thirdIconBackground }}
            className="tooltip"
          >
            <Writing
              primaryColor={props.thirdIconColor}
              secondaryColor={course.secondaryColor}
            />
            <span className="tooltiptext">Zadania</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default LessonBottomMenu;
