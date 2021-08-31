import React from "react";

const MenuIcon = (props) => {
  return (
    <>
      <svg
        id="Layer_1"
        fill={props.primaryColor}
        style={{ backgroundColor: props.secondaryColor }}
        viewBox="0 0 511.333 511.333"
        x="0px"
        y="0px"
      >
        <path d="m490.333 160.008h-224.329l-.008-96.342c-.002-17.911-21.073-27.594-34.667-15.942l-224 192c-9.771 8.374-9.773 23.512 0 31.889l224 192c13.558 11.621 34.665 2.024 34.667-15.942l.008-96.342h224.329c11.598 0 21-9.402 21-21v-149.32c0-11.599-9.403-21.001-21-21.001z" />
      </svg>
    </>
  );
};

export default MenuIcon;
