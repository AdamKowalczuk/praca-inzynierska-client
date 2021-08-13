import { SET_ACTUAL_QUIZ, SET_NEXT_QUIZ } from "../constants/actionTypes";

export default (actualQuiz = "", action) => {
  switch (action.type) {
    case SET_ACTUAL_QUIZ:
      return action.payload;
    case SET_NEXT_QUIZ:
      return action.payload;
    default:
      return actualQuiz;
  }
};
