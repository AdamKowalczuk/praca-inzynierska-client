import React from "react";

const HtmlChapter8_1 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "100px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="html-tag">{"<"}</tspan>
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>{" "}
          <tspan className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
          {`="Wpisz `}
          <tspan x="30" y="55">{`tutaj tekst"`}</tspan>
          <tspan className="html-tag">{">"}</tspan>
          <tspan x="10" y="80" className="html-tag">
            {"<"}
          </tspan>
          <tspan className="special">
            {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
          </tspan>
          <tspan className="html-tag">{">"}</tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter8_1;
