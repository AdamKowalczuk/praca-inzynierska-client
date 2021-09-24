import React, { useState } from "react";
import LessonBottomMenu from "../Menu/LessonBottomMenu";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import Menu from "../Menu/Menu";
import "./PracticalLessons.scss";
import Undo from "./images/Undo";
import Transfer from "./images/transfer.svg";
const PracticalLessons = () => {
  const actualCourse = useSelector((state) => state.actualCourse);
  const course = useSelector((state) => state.user.courses[actualCourse]);

  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState("");

  const [options, setOptions] = useState([
    {
      name: "<h2>",
      correctNumber: 0,
    },
    {
      name: "</h2>",
      correctNumber: 3,
    },
    {
      name: "<i>World</i>",
      correctNumber: 2,
    },
    {
      name: "<b>Hello</b>",
      correctNumber: 1,
    },
  ]);
  function chooseAnswer(e, id) {
    setAnswers(
      answers.concat({ name: e.target.innerText, correctNumber: e.target.id })
    );
    let item = options[id];
    setOptions(options.filter((e) => e !== item));
  }
  function backward(e, id) {
    setOptions(
      options.concat({ name: e.target.innerText, correctNumber: e.target.id })
    );
    let item = answers[id];
    setAnswers(answers.filter((e) => e !== item));
  }
  function checkAnswer() {
    let correctAnswers = 0;
    answers.forEach((answer, id) => {
      if (answer.correctNumber == id) {
        correctAnswers++;
      } else {
      }
    });
    if (correctAnswers === answers.length + options.length) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
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
        // text="Zadania"
        text="Uzupełnij kod tak, aby wyświetlić napis Hello World"
        isColored={true}
        primaryColor={course.primaryColor}
        secondaryColor={course.secondaryColor}
        changeAlign={true}
      />

      <div className="practical-lesson">
        {/* <h3 style={{ color: "white" }}>
          Uzupełnij kod tak, aby wyświetlić napis Hello World
        </h3> */}
        <div className="test">Hello World</div>
        <div className="result-container">
          <div className="options">
            {options.map((option, id) => {
              return (
                <h3
                  key={id}
                  onClick={(e) => chooseAnswer(e, id)}
                  value={option.name}
                  id={option.correctNumber}
                >
                  {option.name}
                </h3>
              );
            })}
          </div>
          <div className="transfer-icon">
            <img src={Transfer} alt="transfer" />
          </div>
          <div className="answers">
            {answers.map((answer, id) => {
              return (
                <h3
                  key={id}
                  onClick={(e) => backward(e, id)}
                  value={answer.name}
                  id={answer.correctNumber}
                  style={{
                    color: course.primaryColor,
                    borderColor: course.primaryColor,
                  }}
                >
                  {answer.name}
                </h3>
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
