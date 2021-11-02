import { UPDATE_EXERCISE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const setActualExercise = (exercise) => {
  return {
    type: "SET_ACTUAL_EXERCISE",
    payload: exercise,
  };
};

export const setNextExercise = (actualExercise) => {
  return {
    type: "SET_NEXT_EXERCISE",
    payload: actualExercise + 1,
  };
};

export const updateExercise =
  (form, userId, courseId, chapterId, actualChapter, actualExercise) =>
  async (dispatch) => {
    try {
      console.log("FORM IN ", form);

      // const { data } = await api.updateQuiz(form, userId, courseId, chapterId);
      await api.updateExercise(form, userId, courseId, chapterId);
      dispatch({
        type: UPDATE_EXERCISE,
        form: form,
        courseId: courseId,
        actualChapter: actualChapter,
        // actualExercise: actualExercise,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
