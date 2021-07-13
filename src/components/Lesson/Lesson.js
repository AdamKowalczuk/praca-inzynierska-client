import React from "react";
import "./lesson.scss";
import Nav2 from "../Nav2/Nav2";
import WorkTime from "../../images/work-time.svg";
import { useSelector } from "react-redux";

const Lesson = (lesson) => {
  return (
    <>
      <Nav2 />

      <div className="lesson-container">
        <h2>HyperText Markup</h2>
        <img className="lesson-image" src={WorkTime} alt="Work Time" />
        <p>
          The HyperText Markup Language, or HTML is the standard markup language
          for documents designed to be displayed in a web browser. It can be
          assisted by technologies such as Cascading Style Sheets (CSS) and
          scripting languages such as JavaScript.
        </p>
        <p>
          Web browsers receive HTML documents from a web server or from local
          storage and render the documents into multimedia web pages.
        </p>
      </div>
    </>
  );
};

export default Lesson;
