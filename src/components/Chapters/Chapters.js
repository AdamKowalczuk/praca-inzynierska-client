import React from "react";
import "./chapters.scss";
import Menu from "../Menu/Menu";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import icons from "./icons";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActualChapter, setActualLesson } from "../../actions/courses";
import { setActualQuiz } from "../../actions/quiz";
console.log(icons);
const Chapter = (props) => {
  const dispatch = useDispatch();
  let isQuizCompleted = props.chapter.isQuizCompleted;
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
                fill: props.chapter.isQuizCompleted
                  ? props.primaryColor
                  : "#fff",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordion-img-background">
            {props.chapter.isQuizCompleted ? (
              <img
                src={props.chapter.icon}
                style={{
                  filter: "saturate(100%)",
                  borderColor: props.primaryColor,
                }}
                alt={props.chapter.name}
              />
            ) : (
              <img
                src={props.chapter.icon}
                style={{
                  filter: "saturate(0%)",
                }}
                alt={props.chapter.name}
              />
            )}
          </div>

          <div className="accordion-chapter-header">
            {props.chapter.isQuizCompleted ? (
              <>
                <h3 style={{ color: props.primaryColor }}>
                  {props.chapter.name}
                </h3>
                <h4 style={{ color: props.primaryColor, opacity: 0.5 }}>
                  {sumCompletedLessons()}/{props.chapter.lessons.length}{" "}
                  Completed
                </h4>
              </>
            ) : (
              <>
                <h3 style={{ color: "#fff" }}>{props.chapter.name}</h3>
                <h4 style={{ color: "hsl(0, 0%, 100%,30%)" }}>
                  {sumCompletedLessons()}/{props.chapter.lessons.length}{" "}
                  Completed
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
                to="/kursy/rozdziały/quiz"
                onClick={() => {
                  dispatch(setActualChapter(props.number));
                  dispatch(setActualQuiz(0));
                }}
                className="link"
              >
                <div className="accordion-lesson-container">
                  {props.chapter.isQuizCompleted === true ? (
                    <>
                      <h5 style={{ color: props.primaryColor }}>Quiz</h5>
                      <ArrowForwardIosIcon
                        className="accordion-arrow-forward"
                        style={{ fill: props.primaryColor }}
                      />
                    </>
                  ) : (
                    <>
                      <h5 style={{ color: "hsl(0, 0%, 100%, 40%)" }}>Quiz</h5>
                      <ArrowForwardIosIcon
                        className="accordion-arrow-forward"
                        style={{ fill: "hsl(0, 0%, 100%, 40%)" }}
                      />
                    </>
                  )}
                </div>
              </Link>
            ) : (
              <div className="accordion-lesson-container quiz-locked">
                <h5>Quiz</h5>
                <ArrowForwardIosIcon className="accordion-arrow-forward" />
              </div>
            )}
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
      to="/kursy/rozdziały/lekcje"
      key={props.number}
      onClick={() => {
        dispatch(setActualLesson(props.number));
        dispatch(setActualChapter(props.chapterNumber));
      }}
      className="link"
    >
      <div className="accordion-lesson-container">
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

const Chapters = () => {
  const actualCourse = useSelector((state) => state.actualCourse);

  const course = useSelector((state) => state.user.courses[actualCourse]);
  return (
    <>
      <Menu text="Rozdziały" link="/kursy" />
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
