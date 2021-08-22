import React, { useState } from "react";
import "./quiz.scss";
import Nav from "../Nav/Nav.js";
import MenuBar from "../../images/menu-bars-black.svg";
import "../Button/Button";
import { setNextQuiz, updateQuiz } from "../../actions/quiz";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ButtonBack from "../Button/ButtonBack";

const Quiz = () => {
  const dispatch = useDispatch();
  const actualCourse = useSelector((state) => state.actualCourse);
  const actualChapter = useSelector((state) => state.actualChapter);
  const actualQuiz = useSelector((state) => state.actualQuiz);
  const user = useSelector((state) => state.user);
  const course = useSelector((state) => state.user.courses[actualCourse]);
  const chapter = useSelector(
    (state) => state.user.courses[actualCourse].chapters[actualChapter]
  );
  let question = chapter.quiz[actualQuiz].question;
  let correctAnswer = chapter.quiz[actualQuiz].correctAnswer;
  let answers = chapter.quiz[actualQuiz].answers;
  let score = 0;
  let initialState = {
    name: chapter.name,
    description: chapter.description,
    lessons: chapter.lessons,
    icon: chapter.icon,
    _id: chapter._id,
    quiz: chapter.quiz,
    isQuizCompleted: false,
    actualCourse: actualCourse,
    actualChapter: actualChapter,
  };
  let [form, setForm] = useState(initialState);
  let quizState = {
    isCompleted: false,
    score: 0,
  };
  let [quizForm, setQuizForm] = useState(quizState);

  function addScore() {
    setQuizForm({ ...quizForm, score: (quizForm.score += 1) });
  }
  function endQuiz() {
    setQuizForm({ ...quizForm, isCompleted: true });
    if (Math.floor((quizForm.score * 100) / chapter.quiz.length) >= 80) {
      form.isQuizCompleted = true;
      setForm({ ...form, isQuizCompleted: form.isQuizCompleted });
      dispatch(
        updateQuiz(
          form,
          user._id,
          course._id,
          chapter._id,
          actualChapter,
          form.isQuizCompleted
        )
      );
    }
  }

  return (
    <>
      <div className="quiz-container">
        <Nav color="#f1f1f2" image={MenuBar} />
        <ButtonBack link="/kursy/rozdziały" />
        <h3>{form.isQuizCompleted === true ? "TRUE" : "FALSE"} </h3>
        {quizForm.isCompleted === true ? (
          <>
            <h2>{Math.floor((quizForm.score * 100) / chapter.quiz.length)}%</h2>
            <h2>
              {Math.floor((quizForm.score * 100) / chapter.quiz.length) >= 80
                ? "Rozdział ukończony"
                : "Rozdział nieukończony"}
            </h2>
            <Button text="Rozpocznij lekcję od nowa" class="btn btn_white" />
            <Link to="/kursy/rozdziały" className="link">
              <Button text="Powrót" class="btn btn_white" />
            </Link>
          </>
        ) : (
          <>
            <h2>{question}</h2>
            {answers.map((answer) => {
              return (
                <AnswerButton
                  answer={answer}
                  correctAnswer={correctAnswer}
                  actualQuiz={actualQuiz}
                  quizLength={chapter.quiz.length}
                  endQuiz={endQuiz.bind(this)}
                  addScore={addScore.bind(this)}
                  quiz={form.quiz}
                  isQuizCompleted={form.isQuizCompleted}
                  userId={user._id}
                  courseId={course._id}
                  chapterId={chapter._id}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const AnswerButton = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      {props.actualQuiz === props.quizLength - 1 ? (
        <button
          className="btn btn_dark answer-button"
          onClick={
            props.answer === props.correctAnswer
              ? () => {
                  props.addScore();
                  props.endQuiz();

                  // dispatch(
                  //   updateQuiz(
                  //     props.quiz,
                  //     props.userId,
                  //     props.courseId,
                  //     props.chapterId,
                  //     props.isQuizCompleted
                  //   )
                  // );
                }
              : () => {
                  props.endQuiz();
                  // dispatch(
                  //   updateQuiz(
                  //     props.quiz,
                  //     props.userId,
                  //     props.courseId,
                  //     props.chapterId,
                  //     props.isQuizCompleted
                  //   )
                  // );
                }
          }
        >
          <h3>{props.answer}</h3>
          <h3>{props.isQuizCompleted === true ? "TRUE" : "FALSE"} </h3>
        </button>
      ) : (
        <button
          className="btn btn_dark answer-button"
          onClick={
            props.answer === props.correctAnswer
              ? () => {
                  dispatch(setNextQuiz(props.actualQuiz));
                  props.addScore();
                }
              : () => dispatch(setNextQuiz(props.actualQuiz))
          }
        >
          <h3>{props.answer}</h3>
        </button>
      )}
    </>
  );
};

export default Quiz;
