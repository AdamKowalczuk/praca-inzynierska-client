import React from "react";

const JavaScriptChapter3_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "95px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan x="10" y="30" className="variable">
            let{" "}
          </tspan>
          <tspan className="javascript-name">a</tspan>=5;
          <tspan x="10" y="55" className="variable">
            let{" "}
          </tspan>
          <tspan className="javascript-name">b</tspan>=5;
          <tspan x="10" y="80" className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default JavaScriptChapter3_2;
