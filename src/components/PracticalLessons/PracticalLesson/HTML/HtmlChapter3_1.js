import React from "react";

const HtmlChapter2_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "130px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="html-tag">&lt;head&gt;</tspan>

          <tspan x="20" y="55">
            <tspan className="html-tag">
              &lt;
              <tspan className="special">
                {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
              </tspan>
            </tspan>
          </tspan>
          <tspan x="20" y="80">
            <tspan>
              <tspan className="special">
                {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
              </tspan>
              =&quot;
              <tspan className="special">
                {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
              </tspan>
              &quot;
              <tspan className="html-tag">&gt;</tspan>
            </tspan>
          </tspan>

          <tspan className="html-tag" x="10" y="105">
            &lt;/head&gt;
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter2_2;
