import { SET_ACTUAL_LESSON } from "../constants/actionTypes";

export default (actualLesson = "", action) => {
  switch (action.type) {
    case SET_ACTUAL_LESSON:
      return action.payload;
    default:
      return actualLesson;
  }
};
