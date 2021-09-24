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
      <img src={icons[props.name].default} alt={icons[props.name].default} />
    </>
  );
};
// <img
//   src={props.chapter.icon}
//   style={{
//     filter: "saturate(100%)",
//     borderColor: props.primaryColor,
//   }}
//   alt={props.chapter.name}
// />

export default Icon;
