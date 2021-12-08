import React from "react";

const HtmlChapter4_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "145px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>
          <tspan className="html-tag" x="30" y="55">
            {`<li>`}
          </tspan>
          Coffee
          <tspan className="html-tag">{`</li>`}</tspan>
          <tspan className="html-tag" x="30" y="80">
            {`<li>`}
          </tspan>
          Tea
          <tspan className="html-tag">{`</li>`}</tspan>
          <tspan className="html-tag" x="30" y="105">
            {`<li>`}
          </tspan>
          Milk
          <tspan className="html-tag">{`</li>`}</tspan>
          <tspan x="10" y="130" className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter4_2;
