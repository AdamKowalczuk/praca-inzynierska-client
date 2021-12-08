import React from "react";

const JavaScriptChapter4_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "280px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan x="10" y="30" className="variable">
            let{" "}
          </tspan>
          <tspan className="javascript-name">number</tspan>=2;
          <tspan x="10" y="55" className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>
          {" (number) {"}
          <tspan x="20" y="80" className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
          {" 2:"}
          <tspan className="javascript-name" x="30" y="105">
            {"console.log"}
          </tspan>
          {`("Wybrana`}
          <tspan x="40" y="130">
            {`liczba to dwa");`}
          </tspan>
          <tspan x="20" y="155" className="special">
            {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
          </tspan>
          <tspan x="10" y="180" className="special">
            {props.answers[3].name === "" ? "(4)" : props.answers[3].name}
          </tspan>
          :
          <tspan className="javascript-name" x="30" y="205">
            {"console.log"}
          </tspan>
          {`("Wybrana liczba`}
          <tspan x="40" y="230">
            {`jest różna od dwóch");`}
          </tspan>
          <tspan x="10" y="255">
            {"}"}
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default JavaScriptChapter4_2;
