import React from "react";
function importAll(r) {
  let icons = {};
  r.keys().map((item, index) => {
    icons[item.replace("./", "")] = r(item);
  });
  return icons;
}

const icons = importAll(
  require.context("./icons", false, /\.(png|jpe?g|svg)$/)
);

const Icon = (props) => {
  return (
    <>
      {props.isQuizCompleted ? (
        <img
          src={icons[props.name].default}
          height={150}
          width={150}
          style={{
            filter: "saturate(100%)",
            borderColor: props.primaryColor,
          }}
          alt={props.chapterName}
        />
      ) : (
        <img
          src={icons[props.name].default}
          height={150}
          width={150}
          style={{
            filter: "saturate(0%)",
            borderColor: props.primaryColor,
          }}
          alt={props.chapterName}
        />
      )}
    </>
  );
};

export default Icon;
