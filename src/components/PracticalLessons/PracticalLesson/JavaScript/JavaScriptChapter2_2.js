import React from "react";

const JavaScriptChapter2_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "50px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan x="10" y="30" className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}{" "}
          </tspan>
          <tspan className="javascript-name">name</tspan>
          =&quot;Gimli&quot;;
        </text>
      </svg>
    </>
  );
};

export default JavaScriptChapter2_2;
