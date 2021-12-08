import React from "react";

const CssChapter10_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "130px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="html-tag">body</tspan>
          {"{"}

          <tspan x="20" y="55">
            <tspan className="css-tag">width</tspan>:100
            <tspan className="special">
              {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
            </tspan>
            ;
          </tspan>
          <tspan x="20" y="80">
            <tspan className="css-tag">height</tspan>:50
            <tspan className="special">
              {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
            </tspan>
            ;
          </tspan>

          <tspan x="10" y="105">
            {"}"}
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default CssChapter10_2;
