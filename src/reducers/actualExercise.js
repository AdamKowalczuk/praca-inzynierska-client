import {
  SET_ACTUAL_EXERCISE,
  SET_NEXT_EXERCISE,
} from "../constants/actionTypes";

const actualExercice = (actualExercice = "", action) => {
  switch (action.type) {
    case SET_ACTUAL_EXERCISE:
      return action.payload;
    case SET_NEXT_EXERCISE:
      return action.payload;
    default:
      return actualExercice;
  }
};

export default actualExercice;
