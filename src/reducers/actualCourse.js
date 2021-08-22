import { SET_ACTUAL_COURSE } from "../constants/actionTypes";

const actualCourse = (actualCourse = "", action) => {
  switch (action.type) {
    case SET_ACTUAL_COURSE:
      return action.payload;
    default:
      return actualCourse;
  }
};

export default actualCourse;
