import React from "react";
import "./chapters.scss";
import Menu from "../Menu/Menu";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setActualChapter,
  setActualLesson,
  setActualExercise,
} from "../../actions/courses";
import { setActualQuiz } from "../../actions/quiz";
import Icon from "./Icon";

const Chapter = (props) => {
  const dispatch = useDispatch();
  let isQuizCompleted = props.chapter.isQuizCompleted;

  let exercisesNumber;
  if (props.chapter.exercises === undefined) {
    exercisesNumber = 0;
  } else {
    exercisesNumber = props.chapter.exercises.length;
  }
  let isExerciseCompleted;

  if (exercisesNumber === 0) {
    isExerciseCompleted = true;
  } else {
    isExerciseCompleted = IsExerciseCompleted();
  }
  function IsExerciseCompleted() {
    for (let i = 0; i < props.chapter.exercises.length; i++) {
      if (props.chapter.exercises[i].isFinished === true) {
      } else {
        return false;
      }
    }
    return true;
  }
  function sumCompletedLessons() {
    let sum = 0;
    props.chapter.lessons.forEach((lesson) => {
      if (lesson.isFinished === true) {
        sum += 1;
      }
    });
    return sum;
  }
  return (
    <>
      <Accordion key={props.key}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{
                fill:
                  isQuizCompleted && isExerciseCompleted
                    ? props.primaryColor
                    : "#fff",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordion-img-background">
            <Icon
              name={props.chapter.icon}
              isQuizCompleted={isQuizCompleted}
              isExerciseCompleted={isExerciseCompleted}
              chapterName={props.chapter.name}
              primaryColor={props.primaryColor}
            />
          </div>

          <div className="accordion-chapter-header">
            {isQuizCompleted && isExerciseCompleted ? (
              <>
                <h3 style={{ color: props.primaryColor }}>
                  {props.chapter.name}
                </h3>
                <h4 style={{ color: props.primaryColor, opacity: 0.5 }}>
                  {sumCompletedLessons()}/{props.chapter.lessons.length}{" "}
                  Ukończonych
                </h4>
              </>
            ) : (
              <>
                <h3 style={{ color: "#fff" }}>{props.chapter.name}</h3>
                <h4 style={{ color: "hsl(0, 0%, 100%,30%)" }}>
                  {sumCompletedLessons()}/{props.chapter.lessons.length}{" "}
                  Ukończonych
                </h4>
              </>
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {props.chapter.lessons.map((item, id) => {
            return (
              <>
                {item.isFinished === true ? (
                  <div key={item._id}>
                    <Lesson
                      name={item.name}
                      number={id}
                      chapterNumber={props.number}
                      primaryColor={props.primaryColor}
                      secondaryColor={props.secondaryColor}
                    />
                  </div>
                ) : (
                  <div key={item._id}>
                    <Lesson
                      name={item.name}
                      number={id}
                      chapterNumber={props.number}
                      primaryColor="#fff"
                    />
                  </div>
                )}
              </>
            );
          })}

          <div
            className={
              isQuizCompleted === true
                ? "chapter-quiz-finished"
                : "chapter-quiz"
            }
          >
            {sumCompletedLessons() / props.chapter.lessons.length === 1 ? (
              <Link
                to="/kursy/rozdzialy/quiz"
                rel="noreferrer"
                onClick={() => {
                  dispatch(setActualChapter(props.number));
                  dispatch(setActualQuiz(0));
                }}
                className="link"
              >
                {isQuizCompleted === true ? (
                  <>
                    <div
                      className="accordion-lesson-container border-top"
                      style={{ borderColor: props.primaryColor }}
                    >
                      <h5 style={{ color: props.primaryColor }}>Quiz</h5>
                      <ArrowForwardIosIcon
                        className="accordion-arrow-forward"
                        style={{ fill: props.primaryColor }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="accordion-lesson-container border-top">
                      <h5
                        className="uppercase"
                        style={{ color: "hsl(0, 0%, 100%, 100%)" }}
                      >
                        Quiz
                      </h5>
                      <ArrowForwardIosIcon
                        className="accordion-arrow-forward"
                        style={{ fill: "hsl(0, 0%, 100%, 100%)" }}
                      />
                    </div>
                  </>
                )}
              </Link>
            ) : (
              <Link
                to="/kursy/rozdzialy/quiz"
                rel="noreferrer"
                onClick={() => {
                  dispatch(setActualChapter(props.number));
                  dispatch(setActualQuiz(0));
                }}
                className="link"
              >
                <div className="accordion-lesson-container quiz-locked border-top">
                  <h5 className="uppercase">Quiz</h5>
                  <ArrowForwardIosIcon
                    className="accordion-arrow-forward"
                    style={{ fill: "hsl(0, 0%, 100%, 40%)" }}
                  />
                </div>
              </Link>
            )}
            {props.chapter.exercises !== undefined ? (
              <>
                {props.chapter.exercises.map((item, id) => {
                  return (
                    <>
                      {item.isFinished === true ? (
                        <div key={item._id}>
                          <Exercise
                            number={id}
                            chapterNumber={props.number}
                            primaryColor={props.primaryColor}
                            secondaryColor={props.secondaryColor}
                          />
                        </div>
                      ) : (
                        <div key={item._id}>
                          <Exercise
                            number={id}
                            chapterNumber={props.number}
                            primaryColor="#fff"
                          />
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            ) : null}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
const Lesson = (props) => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/kursy/rozdzialy/lekcje"
      rel="noreferrer"
      key={props.number}
      onClick={() => {
        dispatch(setActualLesson(props.number));
        dispatch(setActualChapter(props.chapterNumber));
      }}
      className="link"
    >
      <div
        className="accordion-lesson-container"
        style={{ borderColor: props.primaryColor }}
      >
        <h5 style={{ color: props.primaryColor }}>{props.name}</h5>
        <ArrowForwardIosIcon
          className="accordion-arrow-forward"
          style={{
            fill: props.primaryColor,
          }}
        />
      </div>
    </Link>
  );
};

const Exercise = (props) => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/kursy/rozdzialy/zadania"
      rel="noreferrer"
      key={props.number}
      onClick={() => {
        dispatch(setActualExercise(props.number));
        dispatch(setActualChapter(props.chapterNumber));
      }}
      className="link"
    >
      <div
        className="accordion-lesson-container"
        style={{ borderColor: props.primaryColor }}
      >
        <h5 style={{ color: props.primaryColor }}>
          Zadanie {props.number + 1}
        </h5>
        <ArrowForwardIosIcon
          className="accordion-arrow-forward"
          style={{
            fill: props.primaryColor,
          }}
        />
      </div>
    </Link>
  );
};

const Chapters = () => {
  const actualCourse = useSelector((state) => state.actualCourse);

  const course = useSelector((state) => state.user.courses[actualCourse]);
  return (
    <>
      <Menu text="Rozdziały" link="/kursy" isColored={true} />
      <div className="chapters-container">
        {course.chapters.map((item, id) => {
          return (
            <>
              <Chapter
                icon={item.icon}
                key={item._id}
                number={id}
                chapter={item}
                primaryColor={course.primaryColor}
                secondaryColor={course.secondaryColor}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Chapters;
