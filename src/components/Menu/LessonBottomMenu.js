import React from "react";
import Book from "./icons/book";
import Communication from "./icons/communication";
import Writing from "./icons/writing";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActualQuiz } from "../../actions/quiz";
import { setActualExercise } from "../../actions/exercise";
const LessonBottomMenu = (props) => {
  const dispatch = useDispatch();

  const actualCourse = useSelector((state) => state.actualCourse);
  const actualChapter = useSelector((state) => state.actualChapter);
  const course = useSelector((state) => state.user.courses[actualCourse]);
  let exercisesNumber;
  if (course.chapters[actualChapter].exercises === undefined) {
    exercisesNumber = 0;
  } else {
    exercisesNumber = course.chapters[actualChapter].exercises.length;
  }
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
          borderColor: course.secondaryColor,
        }}
      >
        <Link
          to="/kursy/rozdzialy/lekcje"
          className="link link-menu"
          style={{ width: "50vw" }}
        >
          <div
            style={{ backgroundColor: props.firstIconBackground }}
            className="tooltip"
          >
            {exercisesNumber === 0 ? (
              <Book
                primaryColor={props.firstIconColor}
                secondaryColor={course.secondaryColor}
                width="50vw"
              />
            ) : (
              <Book
                primaryColor={props.firstIconColor}
                secondaryColor={course.secondaryColor}
              />
            )}

            <span className="tooltiptext">Lekcje</span>
          </div>
        </Link>

        {sumCompletedLessons() / chapter.lessons.length === 1 ? (
          <Link
            to="/kursy/rozdzialy/quiz"
            className="link link-menu"
            onClick={() => {
              dispatch(setActualQuiz(0));
            }}
            style={{ width: "50vw" }}
          >
            <div
              style={{ backgroundColor: props.secondIconBackground }}
              className="tooltip"
            >
              {exercisesNumber === 0 ? (
                <Communication
                  primaryColor={props.secondIconColor}
                  secondaryColor={course.secondaryColor}
                  width="50vw"
                />
              ) : (
                <Communication
                  primaryColor={props.secondIconColor}
                  secondaryColor={course.secondaryColor}
                />
              )}

              <span className="tooltiptext">Quiz</span>
            </div>
          </Link>
        ) : (
          <Link className="link link-menu" style={{ width: "50vw" }}>
            <div
              style={{ backgroundColor: props.secondIconBackground }}
              className="tooltip"
            >
              {exercisesNumber === 0 ? (
                <Communication
                  primaryColor={props.secondIconColor}
                  secondaryColor={course.secondaryColor}
                  width="50vw"
                />
              ) : (
                <Communication
                  primaryColor={props.secondIconColor}
                  secondaryColor={course.secondaryColor}
                />
              )}
              <span className="tooltiptext">
                Ukończ wszystkie lekcje, aby odblokować
              </span>
            </div>
          </Link>
        )}
        {exercisesNumber === 0 ? null : (
          <Link
            to="/kursy/rozdzialy/zadania"
            rel="noreferrer"
            className="link link-menu"
            onClick={() => {
              dispatch(setActualExercise(0));
            }}
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
        )}
      </div>
    </>
  );
};

export default LessonBottomMenu;
