import React, { useState } from "react";
import LessonBottomMenu from "../Menu/LessonBottomMenu";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/Menu";

import { setNextExercise, updateExercise } from "../../actions/exercise";
import "./PracticalLessons.scss";
import Undo from "./images/Undo";
import { Link } from "react-router-dom";
import Transfer from "./images/transfer.svg";
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
  console.log(form);
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
        element.offsetHeight; /* trigger reflow */
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
        text="Uzupełnij kod tak, aby wyświetlić napis Hello World"
        isColored={true}
        primaryColor={course.primaryColor}
        secondaryColor={course.secondaryColor}
        changeAlign={true}
      />

      <div className="practical-lesson">
        <svg className="test">
          <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
            {/* Several lines: */}1{" "}
            <tspan className="html-tag">&lt;h1&gt;</tspan>Pierwszy nagłówek
            <tspan className="special">
              {answers[0].name === "" ? "(1)" : answers[0].name}
            </tspan>
            <tspan x="10" y="55">
              2{" "}
              <tspan className="special">
                {answers[1].name === "" ? "(2)" : answers[1].name}
              </tspan>
            </tspan>
            <tspan x="10" y="80">
              3 <tspan className="html-tag">&lt;h2&gt;</tspan>Drugi nagłówek
              <tspan className="special">
                {answers[2].name === "" ? "(3)" : answers[2].name}
              </tspan>
            </tspan>
          </text>
        </svg>
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
                          onClick={
                            course.chapters[actualChapter].exercises.length -
                              1 >
                            actualExercise
                              ? () => {
                                  setForm(
                                    [...form],
                                    (form[actualExercise].isFinished = true)
                                  );
                                  setOptions(
                                    exercises[actualExercise + 1].options
                                  );
                                  dispatch(setNextExercise(actualExercise));
                                  // setOptions(
                                  //   [...options],
                                  //   (options.isFinished = true)
                                  // );

                                  setCompleted("");
                                  console.log("FORM2", form);
                                  console.log("bląd w updateExercise");
                                  dispatch(
                                    updateExercise(
                                      form,
                                      userId,
                                      courseId,
                                      chapterId,
                                      // form._id
                                      actualChapter,
                                      actualExercise
                                    )
                                  );
                                }
                              : null
                          }

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
