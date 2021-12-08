import React from "react";

const HtmlChapter10_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "190px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="html-tag">{`<`}</tspan>
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>
          <tspan className="html-tag">{`>`}</tspan>

          <tspan x="20" y="55" className="html-tag">{`<`}</tspan>
          <tspan className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
          <tspan className="html-tag">{`>`}</tspan>

          <tspan x="30" y="80" className="html-tag">{`<h1>`}</tspan>
          {`Witam w kursie HTML`}
          <tspan className="html-tag">{`</h1>`}</tspan>

          <tspan x="30" y="105" className="html-tag">{`<img `}</tspan>
          <tspan className="special">
            {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
          </tspan>
          {`="html.png" `}
          <tspan x="30" y="130" className="special">
            {props.answers[3].name === "" ? "(4)" : props.answers[3].name}
          </tspan>
          {`="logo_html"`}
          <tspan className="html-tag">{`>`}</tspan>

          <tspan x="20" y="155" className="html-tag">{`<`}</tspan>
          <tspan className="special">
            {props.answers[4].name === "" ? "(5)" : props.answers[4].name}
          </tspan>
          <tspan className="html-tag">{`>`}</tspan>

          <tspan x="10" y="180" className="html-tag">{`<`}</tspan>
          <tspan className="special">
            {props.answers[5].name === "" ? "(6)" : props.answers[5].name}
          </tspan>
          <tspan className="html-tag">{`>`}</tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter10_2;
