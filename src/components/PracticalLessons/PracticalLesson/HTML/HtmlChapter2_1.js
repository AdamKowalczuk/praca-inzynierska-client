import React from "react";

const HtmlChapter2_1 = (props) => {
  return (
    <>
      <svg className="practical">
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="html-tag">&lt;h1&gt;</tspan>
          Pierwszy nagłówek
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>
          <tspan x="10" y="55">
            <tspan className="special">
              {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
            </tspan>
          </tspan>
          <tspan x="10" y="80">
            <tspan className="html-tag">&lt;h2&gt;</tspan>Drugi nagłówek
            <tspan className="special">
              {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
            </tspan>
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter2_1;
