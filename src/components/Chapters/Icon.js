import React from "react";
import { useSelector, useDispatch } from "react-redux";
function importAll(r) {
  let icons = {};
  r.keys().map((item, index) => {
    icons[item.replace("./", "")] = r(item);
  });
  return icons;
}
const Icon = (props) => {
  const actualCourse = useSelector((state) => state.actualCourse);

  let icons;
  switch (actualCourse) {
    case 0:
      icons = importAll(
        require.context("./icons/html", false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case 1:
      icons = importAll(
        require.context("./icons/css", false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case 2:
      icons = importAll(
        require.context("./icons/javascript", false, /\.(png|jpe?g|svg)$/)
      );
      break;
    default:
      icons = "";
  }

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
