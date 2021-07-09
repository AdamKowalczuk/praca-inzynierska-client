import React from "react";
import "./quiz.scss";
import Nav from "../Nav/Nav.js";
import MenuBar from "../../images/menu-bars-black.svg";
import "../Button/Button";

const AnswerButton = (props) => {
  return (
    <button className="btn btn_dark answer-button">
      <h3>{props.answer}</h3>
    </button>
  );
};
const Quiz = () => {
  return (
    <>
      <div className="quiz-container">
        <Nav color="#f1f1f2" image={MenuBar} />
        <h2>Jak stworzyć funkcję w JavaScript?</h2>
        <AnswerButton answer="function:myFunction" />
        <AnswerButton answer="function:myFunction()" />
        <AnswerButton answer="function myFunction()" />
        <AnswerButton answer="function = myFunction()" />
      </div>
    </>
  );
};

export default Quiz;
