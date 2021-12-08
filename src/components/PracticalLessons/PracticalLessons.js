import React, { useState } from "react";
import LessonBottomMenu from "../Menu/LessonBottomMenu";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/Menu";
import {
  setNextExercise,
  updateExercise,
  setActualExercise,
} from "../../actions/exercise";
import "./PracticalLessons.scss";
import Undo from "./images/Undo";
import { Link } from "react-router-dom";
import Transfer from "./images/transfer.svg";
import HtmlChapter2_1 from "./PracticalLesson/HTML/HtmlChapter2_1";
import HtmlChapter2_2 from "./PracticalLesson/HTML/HtmlChapter2_2";
import HtmlChapter3_1 from "./PracticalLesson/HTML/HtmlChapter3_1";
import HtmlChapter3_2 from "./PracticalLesson/HTML/HtmlChapter3_2";
import HtmlChapter4_1 from "./PracticalLesson/HTML/HtmlChapter4_1";
import HtmlChapter4_2 from "./PracticalLesson/HTML/HtmlChapter4_2";
import HtmlChapter4_3 from "./PracticalLesson/HTML/HtmlChapter4_3";
import HtmlChapter5_1 from "./PracticalLesson/HTML/HtmlChapter5_1";
import HtmlChapter5_2 from "./PracticalLesson/HTML/HtmlChapter5_2";
import HtmlChapter7_1 from "./PracticalLesson/HTML/HtmlChapter7_1";
import HtmlChapter7_2 from "./PracticalLesson/HTML/HtmlChapter7_2";
import HtmlChapter8_1 from "./PracticalLesson/HTML/HtmlChapter8_1";
import HtmlChapter9_1 from "./PracticalLesson/HTML/HtmlChapter9_1";
import HtmlChapter10_1 from "./PracticalLesson/HTML/HtmlChapter10_1";
import HtmlChapter10_2 from "./PracticalLesson/HTML/HtmlChapter10_2";
import HtmlChapter10_3 from "./PracticalLesson/HTML/HtmlChapter10_3";

import CssChapter10_1 from "./PracticalLesson/CSS/CssChapter10_1";
import CssChapter10_2 from "./PracticalLesson/CSS/CssChapter10_2";

import JavaScriptChapter2_1 from "./PracticalLesson/JavaScript/JavaScriptChapter2_1";
import JavaScriptChapter2_2 from "./PracticalLesson/JavaScript/JavaScriptChapter2_2";
import JavaScriptChapter3_1 from "./PracticalLesson/JavaScript/JavaScriptChapter3_1";
import JavaScriptChapter3_2 from "./PracticalLesson/JavaScript/JavaScriptChapter3_2";
import JavaScriptChapter4_1 from "./PracticalLesson/JavaScript/JavaScriptChapter4_1";
import JavaScriptChapter4_2 from "./PracticalLesson/JavaScript/JavaScriptChapter4_2";
import JavaScriptChapter5_1 from "./PracticalLesson/JavaScript/JavaScriptChapter5_1";
import JavaScriptChapter6_1 from "./PracticalLesson/JavaScript/JavaScriptChapter6_1";
const PracticalLessons = () => {
  const dispatch = useDispatch();
  const actualCourse = useSelector((state) => state.actualCourse);
  const actualChapter = useSelector((state) => state.actualChapter);
  const userId = useSelector((state) => state.user._id);

  let actualExercise = useSelector((state) => state.actualExercise);
  const course = useSelector((state) => state.user.courses[actualCourse]);
  const courseId = useSelector((state) => state.user.courses[actualCourse]._id);
  const chapterId = course._id;
  const [completed, setCompleted] = useState("");
  const [form, setForm] = useState(course.chapters[actualChapter].exercises);

  let exercises = course.chapters[actualChapter].exercises;
  let [options, setOptions] = useState(exercises[actualExercise].options);
  let [answers, setAnswers] = useState(() => declareAnswers());
  const limit = options.length - 1;
  let isUsedNumber = 0;
  let correctNumber = 0;
  function declareAnswers() {
    let answers = [];
    for (let i = 0; i < options.length; i++) {
      answers.push({
        name: "",
      });
    }
    return answers;
  }

  function checkCorrectNumber() {
    let number = 0;
    for (let i = 0; i < options.length; i++) {
      if (options[i].correctNumber !== "") {
        number++;
      }
    }
    correctNumber = number;
  }
  checkCorrectNumber();
  function checkIsUsedNumber() {
    let number = 0;
    for (let i = 0; i < options.length; i++) {
      if (options[i].isUsed === true) {
        number++;
      }
    }
    isUsedNumber = number;
  }
  function chooseAnswer(e, id) {
    let freeIndex = 0;
    for (let i = 0; i < options.length; i++) {
      if (options[i].selectedNumber === "") {
        freeIndex = id;
        break;
      }
    }
    checkIsUsedNumber();
    if (options[freeIndex].isUsed === true) {
      setOptions([...options], (options[freeIndex].isUsed = false));
    } else {
      if (isUsedNumber >= correctNumber) {
      } else {
        setOptions([...options], (options[freeIndex].isUsed = true));
        let minNumber = 1;
        for (let k = 0; k < options.length; k++) {
          for (let j = 0; j < options.length; j++) {
            if (
              options[j].selectedNumber === minNumber &&
              minNumber < options.length
            ) {
              minNumber++;
            }
          }
        }
        setOptions(
          [...options],
          (options[freeIndex].selectedNumber = minNumber)
        );
        let answerId = answers.length;
        for (let i = 0; i < answers.length; i++) {
          if (answers[i] === undefined || answers[i].name === "") {
            answerId = id;
            break;
          }
        }
      }
    }
    changeAnswersArray();
  }

  function backward(e, id) {
    setOptions([...options], (options[id].isUsed = false));
    setOptions([...options], (options[id].selectedNumber = ""));
    changeAnswersArray();
  }
  function changeAnswersArray() {
    for (let k = 0; k < answers.length; k++) {
      setAnswers([...answers], (answers[k].name = ""));
    }
    for (let i = 0; i < options.length; i++) {
      for (let j = 0; j < options.length; j++) {
        if (options[j].selectedNumber === i + 1) {
          setAnswers([...answers], (answers[i].name = options[j].name));
          break;
        }
      }
    }
  }
  function checkAnswer() {
    let result = true;
    for (let i = 0; i < options.length; i++) {
      if (options[i].correctNumber == options[i].selectedNumber) {
      } else {
        result = false;
        break;
      }
    }
    if (result === true) {
      setCompleted(true);
    } else {
      let element = document.getElementById("practical-lesson-wrong-answer");
      if (element !== null) {
        element.style.animation = "none";
        element.offsetHeight;
        element.style.animation = null;
      }
      setCompleted(false);
    }
    return result;
  }
  return (
    <>
      <LessonBottomMenu
        firstIconBackground="transparent"
        secondIconBackground="transparent"
        thirdIconBackground={course.secondaryColor}
        firstIconColor={course.secondaryColor}
        secondIconColor={course.secondaryColor}
        thirdIconColor={course.primaryColor}
      />

      <Menu
        link="/kursy/rozdzialy"
        text="Uzupełnij kod tak, aby pomiędzy nagłówkami znajdowała się pozioma linia"
        isColored={true}
        primaryColor={course.primaryColor}
        secondaryColor={course.secondaryColor}
        changeAlign={true}
      />

      <div className="practical-lesson">
        <HtmlChapter10_3 answers={answers} />
        <div className="result-container">
          <div className="options">
            {options.map((option, id) => {
              return (
                <>
                  <h3
                    key={id}
                    onClick={(e) => {
                      option.isUsed === true
                        ? backward(e, id)
                        : chooseAnswer(e, id);
                    }}
                    value={option.name}
                    id={id}
                    style={{
                      borderColor:
                        option.isUsed === true ? course.primaryColor : "#fff",
                      color:
                        option.isUsed === true ? course.primaryColor : "#fff",
                    }}
                  >
                    {option.isUsed === false ? null : (
                      <h4
                        style={{
                          backgroundColor: course.primaryColor,
                        }}
                      >
                        {option.selectedNumber}
                      </h4>
                    )}

                    {option.name}
                  </h3>
                </>
              );
            })}
          </div>
        </div>
        <div className="buttons-container">
          <div className="check-answer-container">
            {completed === false ? (
              <h4
                style={{
                  backgroundColor: course.secondaryColor,
                  color: course.primaryColor,
                }}
                id="practical-lesson-wrong-answer"
                className="shake"
                onClick={() => checkAnswer()}
              >
                Błąd! Sprawdź jeszcze raz
              </h4>
            ) : (
              [
                completed === "" ? (
                  <h4
                    style={{
                      backgroundColor: course.secondaryColor,
                      color: course.primaryColor,
                    }}
                    onClick={() => checkAnswer()}
                  >
                    Sprawdź
                  </h4>
                ) : (
                  <>
                    <div className="practical-lesson-button-container">
                      <Link
                        to="/kursy/rozdzialy/"
                        rel="noreferrer"
                        className="link"
                      >
                        <h4
                          style={{
                            backgroundColor: course.secondaryColor,
                            color: course.primaryColor,
                          }}
                          onClick={() => {
                            dispatch(setActualExercise(""));
                          }}
                          // onClick={
                          //   course.chapters[actualChapter].exercises.length -
                          //     1 >
                          //   actualExercise
                          //     ? () => {
                          //         setForm(
                          //           [...form],
                          //           (form[actualExercise].isFinished = true)
                          //         );
                          //         setOptions(
                          //           exercises[actualExercise + 1].options
                          //         );
                          //         dispatch(setNextExercise(actualExercise));
                          //         // setOptions(
                          //         //   [...options],
                          //         //   (options.isFinished = true)
                          //         // );

                          //         // setCompleted("");
                          //         // console.log("FORM2", form);
                          //         // console.log("bląd w updateExercise");
                          //         // dispatch(
                          //         //   updateExercise(
                          //         //     form,
                          //         //     userId,
                          //         //     courseId,
                          //         //     chapterId,
                          //         //     // form._id
                          //         //     actualChapter,
                          //         //     actualExercise
                          //         //   )
                          //         // );
                          //       }
                          //     : null
                          // }

                          // onClick={() => checkAnswer()}
                        >
                          Poprawna odpowiedź!
                          <br /> Zakończ
                        </h4>
                      </Link>
                      {/* <Link
                        to="/kursy/rozdzialy"
                        rel="noreferrer"
                        className="link"
                        style={{ color: "#fff" }}
                      >
                        <h4
                          style={{
                            backgroundColor: course.secondaryColor,
                            // color: course.primaryColor,
                            marginTop: "10px",
                            width: "auto",
                          }}
                          // onClick={() => checkAnswer()}
                        >
                          Powrót
                        </h4>
                      </Link> */}
                    </div>
                  </>
                ),
              ]
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticalLessons;
