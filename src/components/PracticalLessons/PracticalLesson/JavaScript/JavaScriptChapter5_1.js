import React from "react";

const JavaScriptChapter5_1 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "145px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan x="10" y="30" className="variable">
            let{" "}
          </tspan>
          <tspan className="javascript-name">i</tspan>={`0;`}
          <tspan className="javascript-name" x="10" y="55">
            {`while`}
          </tspan>
          {`(i `}
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>{" "}
          <tspan className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
          {`){`}
          <tspan className="variable" x="30" y="80">
            {`console.log(`}
          </tspan>
          <tspan className="javascript-name">{"i"}</tspan>
          <tspan>{");"}</tspan>
          <tspan className="javascript-name" x="30" y="105">
            {"i"}
          </tspan>
          {"++;"}
          <tspan className="javascript-name" x="10" y="130">
            {"}"}
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default JavaScriptChapter5_1;
