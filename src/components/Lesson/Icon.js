import React from "react";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const Icon = (props) => {
  return (
    <>
      <img
        className="lesson-image"
        src={props.lessonImage}
        alt={props.lessonName}
      />
    </>
  );
};

export default Icon;
