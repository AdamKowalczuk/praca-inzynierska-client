import React from "react";

const JavaScriptChapter3_1 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "70px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan x="10" y="30" className="variable">
            let{" "}
          </tspan>
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>
          ;
          <tspan x="10" y="55" className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
          ;
        </text>
      </svg>
    </>
  );
};

export default JavaScriptChapter3_1;
