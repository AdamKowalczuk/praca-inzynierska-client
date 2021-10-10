import React, { useState } from "react";
import LessonBottomMenu from "../Menu/LessonBottomMenu";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import Menu from "../Menu/Menu";
import { setNextExercise, updateExercise } from "../../actions/exercise";
import "./PracticalLessons.scss";
import Undo from "./images/Undo";
import Transfer from "./images/transfer.svg";
const PracticalLessons = () => {
  const actualCourse = useSelector((state) => state.actualCourse);
  const actualChapter = useSelector((state) => state.actualChapter);
  const course = useSelector((state) => state.user.courses[actualCourse]);
  const [completed, setCompleted] = useState("");
  let [options, setOptions] = useState(
    // course.chapters[actualChapter].exercises
    [
      {
        name: "</h1>",
        correctNumber: 1,
        isUsed: false,
        selectedNumber: "",
      },
      {
        name: "</h2>",
        correctNumber: 3,
        isUsed: false,
        selectedNumber: "",
      },
      {
        name: "</br>",
        correctNumber: 2,
        isUsed: false,
        selectedNumber: "",
      },
      {
        name: "<br>",
        correctNumber: "",
        isUsed: false,
        selectedNumber: "",
      },
      {
        name: "<h1>",
        correctNumber: "",
        isUsed: false,
        selectedNumber: "",
      },
    ]
  );
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
    console.log("OPTIONS", options);
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
    console.log("ANSWERS", answers);
  }
  function checkAnswer() {
    let result = true;
    for (let i = 0; i < options.length; i++) {
      if (options[i].correctNumber === options[i].selectedNumber) {
      } else {
        result = false;
        break;
      }
    }
    if (result === true) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
    console.log(result);
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
            <h4
              style={{
                backgroundColor: course.secondaryColor,
                color: course.primaryColor,
              }}
              onClick={() => checkAnswer()}
            >
              {completed === false
                ? "Błąd! Sprawdź jeszcze raz"
                : [completed === "" ? "Sprawdź" : "Poprawnie! Przejdź dalej"]}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticalLessons;
