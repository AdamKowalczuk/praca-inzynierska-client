import React from "react";

const HtmlChapter2_2 = (props) => {
  return (
    <>
      <svg className="practical" style={{ height: "220px" }}>
        <text x="10" y="30" style={{ fill: "#ABB2BF" }}>
          <tspan className="html-tag">&lt;p&gt;</tspan>
          <tspan className="special" x="20" y="55">
            {props.answers[0].name === "" ? "(1)" : props.answers[0].name}
          </tspan>
          <tspan x="40" y="80">
            Nic nie wiesz Jonie Snow
          </tspan>
          <tspan className="special" x="20" y="105">
            {props.answers[1].name === "" ? "(2)" : props.answers[1].name}
          </tspan>
          <tspan className="html-tag" x="10" y="130">
            &lt;/p&gt;
          </tspan>
          <tspan className="html-tag" x="10" y="155">
            &lt;p&gt;
          </tspan>
          Autor:
          <tspan x="20" y="180">
            <tspan className="special">
              {props.answers[2].name === "" ? "(3)" : props.answers[2].name}
            </tspan>
            Ygritte
            <tspan className="special">
              {props.answers[3].name === "" ? "(4)" : props.answers[3].name}
            </tspan>
          </tspan>
          <tspan className="html-tag" x="10" y="205">
            &lt;/p&gt;
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default HtmlChapter2_2;
