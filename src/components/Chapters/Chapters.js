import React from "react";
import "./chapters.scss";
import Nav from "../Nav2/Nav2";
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
import ButtonBack from "../Button/ButtonBack";

const Chapter = (props) => {
  const dispatch = useDispatch();
  function sumCompletedLessons() {
    let sum = 0;
    props.chapter.lessons.forEach((lesson) => {
      if (lesson.isFinished === true) {
        sum += 1;
      }
    });
    return sum;
  }
  function isQuizCompleted() {
    let isCompleted = true;
    props.chapter.quiz.forEach((quiz) => {
      if (quiz.isFinished === false) {
        isCompleted = false;
      }
    });
    return isCompleted;
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordion-img-background">
            <img src={props.icon} alt="password" />
          </div>
          <div className="accordion-chapter-header">
            <h3>{props.chapter.name}</h3>
            <h4>
              {sumCompletedLessons()}/{props.chapter.lessons.length} Completed
            </h4>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {props.chapter.lessons.map((item, id) => {
            return (
              <>
                <div
                  className={
                    item.isFinished === true
                      ? "chapters-lesson lesson-finished"
                      : "chapters-lesson"
                  }
                  key={item._id}
                >
                  <Lesson
                    name={item.name}
                    number={id}
                    chapterNumber={props.number}
                  />
                </div>
              </>
            );
          })}
          <div
            className={
              isQuizCompleted() === true
                ? "chapter-quiz chapter-quiz-finished"
                : "chapter-quiz"
            }
          >
            <Link
              to="/kursy/rozdziały/quiz"
              onClick={() => {
                dispatch(setActualChapter(props.number));
                dispatch(setActualQuiz(0));
              }}
              className="link"
            >
              <div className="accordion-lesson-container">
                <h5>Quiz</h5>
                <ArrowForwardIosIcon className="accordion-arrow-forward" />
              </div>
            </Link>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
const Lesson = (props) => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/kursy/rozdziały/lekcje"
      onClick={() => {
        dispatch(setActualLesson(props.number));
        dispatch(setActualChapter(props.chapterNumber));
      }}
      className="link"
    >
      <div className="accordion-lesson-container">
        <h5>{props.name}</h5>
        <ArrowForwardIosIcon className="accordion-arrow-forward" />
      </div>
    </Link>
  );
};

const Chapters = () => {
  const actualCourse = useSelector((state) => state.actualCourse);

  const course = useSelector((state) => state.user.courses[actualCourse]);
  return (
    <>
      <Nav />
      <ButtonBack link="/kursy" />
      <div className="chapters-container">
        {course.chapters.map((item, id) => {
          return (
            <>
              <Chapter
                icon={item.icon}
                key={item._id}
                number={id}
                chapter={item}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Chapters;
