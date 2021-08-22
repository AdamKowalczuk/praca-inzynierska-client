import { SET_ACTUAL_CHAPTER } from "../constants/actionTypes";

const actualChapter = (actualChapter = "", action) => {
  switch (action.type) {
    case SET_ACTUAL_CHAPTER:
      return action.payload;
    default:
      return actualChapter;
  }
};

export default actualChapter;
