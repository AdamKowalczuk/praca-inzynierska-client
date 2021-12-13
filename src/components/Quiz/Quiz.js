import React, { useState } from "react";
import "./quiz.scss";
// import Nav from "../Nav/Nav.js";
// import MenuBar from "../../images/menu-bars-black.svg";
import "../Button/Button";
import { setNextQuiz, updateQuiz } from "../../actions/quiz";
import { setActualExercise } from "../../actions/exercise";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Trophy from "./Trophy";
// import ButtonBack from "../Button/ButtonBack";
// import { setActualChapter, setActualLesson } from "../../actions/courses";
import {
  setActualChapter,
  setActualLesson,
  // setActualExercise,
} from "../../actions/courses";
import { setActualQuiz } from "../../actions/quiz";
import LessonTopMenu from "../Menu/LessonTopMenu";
import LessonBottomMenu from "../Menu/LessonBottomMenu";

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

  // const exercisesNumber = course.chapters[actualChapter].exercises.length;
  let exercisesNumber;
  if (course.chapters[actualChapter].exercises === undefined) {
    exercisesNumber = 0;
  } else {
    exercisesNumber = course.chapters[actualChapter].exercises.length;
  }
  let initialState = {
    name: chapter.name,
    description: chapter.description,
    lessons: chapter.lessons,
    icon: chapter.icon,
    _id: chapter._id,
    quiz: chapter.quiz,
    exercises: chapter.exercises,
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
      <LessonTopMenu
        link="/kursy/rozdzialy"
        text="Quiz"
        primaryColor={course.primaryColor}
        secondaryColor={course.secondaryColor}
        actualQuiz={actualQuiz}
        quizNumber={chapter.quiz.length}
        isLesson={false}
      />
      <div className="quiz-container">
        {quizForm.isCompleted === true ? (
          <>
            <Trophy
              primaryColor={course.primaryColor}
              secondaryColor={course.secobdaryColor}
            />
            <h2 className="quiz-result">
              {Math.floor((quizForm.score * 100) / chapter.quiz.length) >= 80
                ? "Rozdział ukończony"
                : "Rozdział nieukończony"}
            </h2>
            <h2>{Math.floor((quizForm.score * 100) / chapter.quiz.length)}%</h2>
            {exercisesNumber === 0 ? (
              [
                actualChapter ===
                course.chapters.length -
                  1 ? //     secondaryColor={course.secondaryColor} //     primaryColor={course.primaryColor} //     class="btn btn_white" //     text="Ukończono kurs! Powrót" //   <Button // <Link to="/kursy/rozdzialy" rel="noreferrer" className="link">
                //     borderColor={course.primaryColor}
                //   />
                // </Link>
                null : (
                  <Link
                    to="/kursy/rozdzialy/lekcje"
                    rel="noreferrer"
                    className="link"
                    onClick={() => {
                      dispatch(setActualLesson(0));
                      dispatch(setActualChapter(actualChapter + 1));
                      dispatch(setActualQuiz(0));
                      dispatch(setActualExercise(0));
                    }}
                  >
                    <Button
                      text="Przejdź do następnego rozdziału"
                      class="btn btn_white"
                      primaryColor={course.primaryColor}
                      secondaryColor={course.secondaryColor}
                      borderColor={course.primaryColor}
                    />
                  </Link>
                ),
              ]
            ) : (
              <Link
                to="/kursy/rozdzialy/zadania"
                rel="noreferrer"
                className="link"
                onClick={() => {
                  dispatch(setActualLesson(0));
                  dispatch(setActualQuiz(0));
                  dispatch(setActualExercise(0));
                }}
              >
                <Button
                  text="Przejdź do zadań"
                  class="btn btn_white"
                  primaryColor={course.primaryColor}
                  secondaryColor={course.secondaryColor}
                  borderColor={course.primaryColor}
                />
              </Link>
            )}
            {/* <Link
              to="/kursy/rozdzialy/zadania"
              rel="noreferrer"
              className="link"
            >
              <Button
                text="Przejdź do zadań"
                class="btn btn_white"
                primaryColor={course.primaryColor}
                secondaryColor={course.secondaryColor}
                borderColor={course.primaryColor}
              />
            </Link> */}
            <Link to="/kursy/rozdzialy" rel="noreferrer" className="link">
              <Button
                text="Powrót"
                class="btn btn_white"
                primaryColor="#0c0c0d"
                secondaryColor={course.primaryColor}
                borderColor={course.secondaryColor}
              />
            </Link>
          </>
        ) : (
          <>
            <h2>{question}</h2>
            {answers.map((answer, id) => {
              return (
                <AnswerButton
                  key={id}
                  answer={answer}
                  correctAnswer={correctAnswer}
                  actualQuiz={actualQuiz}
                  quizLength={chapter.quiz.length}
                  endQuiz={endQuiz.bind(this)}
                  addScore={addScore.bind(this)}
                  quiz={form.quiz}
                  id={id}
                  isQuizCompleted={form.isQuizCompleted}
                  userId={user._id}
                  courseId={course._id}
                  chapterId={chapter._id}
                  primaryColor={course.primaryColor}
                  secondaryColor={course.secondaryColor}
                />
              );
            })}
          </>
        )}
        <LessonBottomMenu
          firstIconBackground="transparent"
          secondIconBackground={course.secondaryColor}
          thirdIconBackground="transparent"
          firstIconColor={course.secondaryColor}
          secondIconColor={course.primaryColor}
          thirdIconColor={course.secondaryColor}
        />
      </div>
    </>
  );
};

const AnswerButton = (props) => {
  const dispatch = useDispatch();
  function changeColor(e) {
    e.target.style.backgroundColor = props.secondaryColor;
    e.target.style.borderColor = props.primaryColor;
    e.target.style.color = props.primaryColor;
  }

  function changeColorClose(e) {
    e.target.style.backgroundColor = "#0c0c0d";
    e.target.style.borderColor = "#fff";
    e.target.style.color = "#fff";
  }
  return (
    <>
      {props.actualQuiz === props.quizLength - 1 ? (
        <h3
          className="btn btn_dark answer-button"
          key={props.id}
          onMouseOver={(e) => changeColor(e)}
          onMouseOut={(e) => changeColorClose(e)}
          onClick={
            props.answer === props.correctAnswer
              ? () => {
                  props.addScore();
                  props.endQuiz();
                }
              : () => {
                  props.endQuiz();
                }
          }
        >
          {props.answer}
        </h3>
      ) : (
        <h3
          className="btn btn_dark answer-button"
          key={props.id}
          onMouseOver={(e) => changeColor(e)}
          onMouseOut={(e) => changeColorClose(e)}
          onClick={
            props.answer === props.correctAnswer
              ? () => {
                  dispatch(setNextQuiz(props.actualQuiz));
                  props.addScore();
                }
              : () => dispatch(setNextQuiz(props.actualQuiz))
          }
        >
          {props.answer}
        </h3>
      )}
    </>
  );
};

export default Quiz;
