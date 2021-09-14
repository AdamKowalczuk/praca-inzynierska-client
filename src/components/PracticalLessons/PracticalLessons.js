import React, { useState } from "react";
import LessonBottomMenu from "../Menu/LessonBottomMenu";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import Menu from "../Menu/Menu";
const PracticalLessons = () => {
  // const dispatch = useDispatch();
  const actualCourse = useSelector((state) => state.actualCourse);
  // const user = useSelector((state) => state.user);
  const course = useSelector((state) => state.user.courses[actualCourse]);
  const initialState = {
    answer: "Hello",
    color: "white",
  };
  let answers = [
    {
      name: "<h2>",
      correctNumber: 0,
      selectName: "answer1",
    },
    {
      name: "</h2>",
      correctNumber: 3,
      selectName: "answer2",
    },
    {
      name: "<i>World</i>",
      correctNumber: 2,
      selectName: "answer3",
    },
    {
      name: "<b>Hello</b>",
      correctNumber: 1,
      selectName: "answer4",
    },
  ];
  let correctAnswers = [];
  let result = { isCompleted: "not completed" };
  function clearArray() {
    for (let i = 0; i < answers.length; i++) {
      correctAnswers.push("");
    }
  }
  clearArray();

  function addAnswer(i, e) {
    let s = document.getElementsByName(`answer${i + 1}`)[0];
    var text = s.options[e.target.value].text;
    correctAnswers[i] = text;
  }
  function checkAnswers() {
    for (let i = 0; i < correctAnswers.length; i++) {
      for (let j = 0; j < answers.length; j++) {
        if (answers[j].correctNumber === i) {
          if (answers[j].name === correctAnswers[i]) {
          } else {
            setForm({ ...form, isCompleted: "not correct" });
            return;
          }
        }
      }
    }
    setForm({ ...form, isCompleted: "correct" });
  }

  const Options = () => {
    return (
      <>
        {answers.map((answer, id) => {
          return (
            <option key={id} value={id}>
              {answers[id].name}
            </option>
          );
        })}
      </>
    );
  };

  const [form, setForm] = useState(result);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
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
        link="/kursy/rozdziały"
        text="Zadania"
        isColored={true}
        primaryColor={course.primaryColor}
        secondaryColor={course.secondaryColor}
      />

      <div className="practical-lesson">
        <h3 style={{ color: "white" }}>
          Uzupełnij kod tak, aby wyświetlić napis Hello World
        </h3>
        <img src="" alt="zadanie" />
        <div className="answers">
          {answers.map((answer, id) => {
            return (
              <>
                <select
                  key={id}
                  name={answer.selectName}
                  onChange={(e) => addAnswer(id, e)}
                  style={{ display: "flex", padding: "10px 20px" }}
                >
                  <Options />
                </select>
              </>
            );
          })}
          <div
            style={{
              marginTop: "50px",
              padding: "20px",
              backgroundColor: "red",
            }}
            onClick={() => checkAnswers()}
          >
            SPRAWDŹ
          </div>
          {form.isCompleted === "not completed" ? (
            <h2>Nie ukończono</h2>
          ) : (
            [
              form.isCompleted === "correct" ? (
                <h2>Poprawnie</h2>
              ) : (
                <h2>Nie poprawnie</h2>
              ),
            ]
          )}
        </div>
      </div>
    </>
  );
};

export default PracticalLessons;
