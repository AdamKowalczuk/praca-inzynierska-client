import React from "react";

const HtmlChapter9_1 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "120px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="html-tag">{"<a"}</tspan>
          <tspan x="10" y="55" className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>
          {`="https://www.website.com" `}
          <tspan x="10" y="80" className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
          {"="}
          <tspan className="special">
            {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
          </tspan>
          <tspan x="10" y="105" className="html-tag">
            {">"}
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter9_1;
