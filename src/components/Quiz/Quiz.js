import React from "react";
import "./quiz.scss";
import Nav from "../Nav/Nav.js";
import MenuBar from "../../images/menu-bars-black.svg";
import "../Button/Button";
import { setNextQuiz } from "../../actions/quiz";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AnswerButton = (props) => {
  return (
    <button className="btn btn_dark answer-button">
      <h3>{props.answer}</h3>
    </button>
  );
};
const Quiz = () => {
  const dispatch = useDispatch();
  const actualCourse = useSelector((state) => state.actualCourse);
  const actualChapter = useSelector((state) => state.actualChapter);
  const actualQuiz = useSelector((state) => state.actualQuiz);
  const chapter = useSelector(
    (state) => state.user.courses[actualCourse].chapters[actualChapter]
  );
  let question = chapter.quiz[actualQuiz].question;
  let answers = chapter.quiz[actualQuiz].answers;

  return (
    <>
      <div className="quiz-container">
        <Nav color="#f1f1f2" image={MenuBar} />
        <h2>{question}</h2>

        {answers.map((answer) => {
          return <AnswerButton answer={answer} />;
        })}

        {actualQuiz === chapter.quiz.length - 1 ? (
          <Link to="/kursy/rozdziały/">
            <button>Zakończ</button>
          </Link>
        ) : (
          <button onClick={() => dispatch(setNextQuiz(actualQuiz))}>
            Następny
          </button>
        )}
      </div>
    </>
  );
};

export default Quiz;
