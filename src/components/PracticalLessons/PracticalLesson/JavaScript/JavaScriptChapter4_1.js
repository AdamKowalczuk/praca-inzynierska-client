import React from "react";

const JavaScriptChapter4_1 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "230px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan x="10" y="30" className="variable">
            let{" "}
          </tspan>
          <tspan className="javascript-name">number</tspan>=5;
          <tspan className="variable" x="10" y="55">
            {"if"}
          </tspan>
          {"("}
          <tspan className="special">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>{" "}
          <tspan className="special">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>{" "}
          10{"){"}
          <tspan className="javascript-name" x="20" y="80">
            {"console.log"}
          </tspan>
          <tspan>
            {"("}&quot;{"Liczba jest"}
          </tspan>
          <tspan x="40" y="105">
            {"większa od 10"}&quot;{")"};
          </tspan>
          <tspan x="10" y="130">
            {"} "}
          </tspan>
          <tspan className="special">
            {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
          </tspan>
          {" {"}
          <tspan className="javascript-name" x="20" y="155">
            {"console.log"}
          </tspan>
          <tspan>
            {"("}&quot;{"Liczba jest"}
          </tspan>
          <tspan x="40" y="180">
            {"mniejsza lub równa 10"}&quot;{")"};
          </tspan>
          <tspan x="10" y="205">
            {"}"};
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default JavaScriptChapter4_1;
