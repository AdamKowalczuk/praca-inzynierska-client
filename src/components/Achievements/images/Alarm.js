import React from "react";

const Alarm = (props) => {
  return (
    <>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
          fill={props.primaryColor}
        />
        <g fill={props.color}>
          <path d="m9.666 24c-.148 0-.296-.049-.42-.15-.286-.232-.329-.652-.096-.938l1.458-1.792c.232-.285.652-.329.938-.096.286.232.329.652.096.938l-1.458 1.792c-.132.162-.324.246-.518.246z" />
          <path d="m22.334 24c-.194 0-.386-.084-.518-.246l-1.458-1.792c-.232-.285-.189-.705.096-.938.286-.233.706-.188.938.096l1.458 1.792c.232.285.189.705-.096.938-.124.101-.272.15-.42.15z" />
          <path d="m8.667 12.5c-.171 0-.341-.065-.471-.195-.26-.26-.26-.682 0-.943l3.167-3.167c.26-.26.682-.26.943 0s.26.682 0 .943l-3.167 3.167c-.131.13-.302.195-.472.195z" />
          <path d="m23.333 12.5c-.171 0-.341-.065-.471-.195l-3.167-3.167c-.26-.26-.26-.682 0-.943s.682-.26.943 0l3.167 3.167c.26.26.26.682 0 .943-.13.13-.301.195-.472.195z" />
        </g>
        <path
          d="m16 10c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm4.167 7.667h-4.167c-.368 0-.667-.298-.667-.667v-4c0-.368.298-.667.667-.667.368 0 .667.298.667.667v3.333h3.5c.368 0 .667.298.667.667-.001.368-.299.667-.667.667z"
          fill={props.color}
        />
      </svg>
    </>
  );
};

export default Alarm;
