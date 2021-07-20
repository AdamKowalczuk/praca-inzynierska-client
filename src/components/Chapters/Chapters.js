import React from "react";
import "./chapters.scss";
import Nav from "../Nav2/Nav2";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Password from "../../images/programming-icons/001-password.svg";
import Server from "../../images/programming-icons/002-server.svg";
import Wall from "../../images/programming-icons/003-wall.svg";
import Code from "../../images/programming-icons/004-code.svg";
import Security from "../../images/programming-icons/005-security.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActualChapter, setActualLesson } from "../../actions/courses";

const Chapter = (props) => {
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
                <Lesson
                  name={item.name}
                  number={id}
                  chapterNumber={props.number}
                />
              </>
            );
          })}
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
    >
      <div className="accordion-lesson-container">
        <h5>{props.name}</h5>
        <ArrowForwardIosIcon className="accordion-arrow-forward" />
      </div>
    </Link>
  );
};

const Chapters = () => {
  const dispatch = useDispatch();
  const courseNumber = useSelector((state) => state.actualCourse);
  const course = useSelector((state) => state.user.courses[courseNumber]);
  return (
    <>
      <Nav />
      <div className="chapters-container">
        {course.chapters.map((item, id) => {
          return (
            <>
              <Chapter icon={Server} number={id} chapter={item} />
            </>
          );
        })}
        {/* <Chapter icon={Password} />
        <Chapter icon={Server} />
        <Chapter icon={Wall} />
        <Chapter icon={Code} />
        <Chapter icon={Security} /> */}
      </div>
    </>
  );
};

export default Chapters;
