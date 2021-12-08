import React from "react";

const HtmlChapter10_3 = (props) => {
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
          <tspan className="variable">{` href`}</tspan>
          {`="/html/"`}
          <tspan className="html-tag">{`>`}</tspan>
          <tspan x="30" y="80">{`HTML`}</tspan>
          <tspan x="20" y="105" className="html-tag">{`</a>`}</tspan>

          <tspan x="20" y="130" className="html-tag">{`<a`}</tspan>
          <tspan className="variable">{` href`}</tspan>
          {`="/css/"`}
          <tspan className="html-tag">{`>`}</tspan>
          {"HTML"}
          <tspan className="html-tag">{`</a>`}</tspan>
          <tspan x="10" y="155" className="html-tag">
            {`<`}
          </tspan>
          <tspan className="special">
            {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
          </tspan>
          <tspan className="html-tag">{`>`}</tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter10_3;
