import React from "react";

const HtmlChapter5_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "240px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="html-tag">{`<table>`}</tspan>
          <tspan x="20" y="55" className="html-tag">
            {`<tr>`}
          </tspan>
          <tspan x="30" y="80" className="html-tag">
            {`<`}
          </tspan>
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>{" "}
          <tspan className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
          {`="2"`}
          <tspan className="html-tag">{`>`}</tspan>
          {`Imię`}
          <tspan className="html-tag">{`<`}</tspan>
          <tspan className="special">
            {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
          </tspan>
          <tspan className="html-tag">{`>`}</tspan>
          <tspan x="30" y="105" className="html-tag">{`<td>`}</tspan>
          <tspan>{`Gandalf`}</tspan>
          <tspan className="html-tag">{`</td>`}</tspan>
          <tspan x="20" y="130" className="html-tag">{`</tr>`}</tspan>
          <tspan x="20" y="155" className="html-tag">{`<tr>`}</tspan>
          <tspan x="30" y="180" className="html-tag">{`<td>`}</tspan>
          <tspan>{`Frodo`}</tspan>
          <tspan className="html-tag">{`</td>`}</tspan>
          <tspan x="20" y="205" className="html-tag">{`</tr>`}</tspan>
          <tspan x="10" y="230" className="html-tag">{`</table>`}</tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter5_2;
