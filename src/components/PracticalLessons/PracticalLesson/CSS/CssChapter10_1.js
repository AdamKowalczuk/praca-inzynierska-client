import React from "react";

const CssChapter10_1 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "170px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          @
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>{" "}
          only{" "}
          <tspan className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>{" "}
          <tspan x="10" y="55">
            and{" "}
            <tspan className="special">
              {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
            </tspan>
            {"{"}
          </tspan>
          <tspan className="html-tag" x="20" y="80">
            body
          </tspan>
          {"{"}
          <tspan x="40" y="105">
            <tspan className="css-tag">font-size</tspan>:20px;
          </tspan>
          <tspan x="20" y="130">
            {"}"}
          </tspan>
          <tspan x="10" y="155">
            {"}"}
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default CssChapter10_1;
