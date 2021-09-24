import React from "react";

const Wireframe = (props) => {
  return (
    <>
      <svg
        height="512"
        viewBox="0 0 32 32"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.onClick}
        className="menu-icon wireframe"
      >
        <path
          d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
          // fill={props.secondaryColor}
          fill={props.primaryColor}
        />
        <path
          d="m22.833 20h-8.333c-.643 0-1.167.523-1.167 1.167v1.667c0 .643.523 1.167 1.167 1.167h8.333c.644-.001 1.167-.524 1.167-1.168v-1.667c0-.643-.523-1.166-1.167-1.166z"
          // fill={props.primaryColor}
          fill={props.color}
        />
        <path
          d="m22.833 8h-8.333c-.643 0-1.167.523-1.167 1.167v1.667c0 .643.523 1.167 1.167 1.167h8.333c.644-.001 1.167-.524 1.167-1.168v-1.666c0-.644-.523-1.167-1.167-1.167z"
          // fill={props.primaryColor}
          fill={props.color}
        />
        {/* <circle cx="10" cy="10" fill={props.primaryColor} r="2" />
        <circle cx="10" cy="22" fill={props.primaryColor} r="2" /> */}
        <path
          d="m9.167 18h8.333c.643 0 1.167-.523 1.167-1.167v-1.667c0-.643-.523-1.167-1.167-1.167h-8.333c-.644.001-1.167.524-1.167 1.168v1.667c0 .643.523 1.166 1.167 1.166z"
          // fill={props.primaryColor}
          fill={props.color}
        />
        {/* <circle cx="22" cy="16" fill={props.primaryColor} r="2" /> */}
      </svg>
    </>
  );
};

export default Wireframe;
