import { UPDATE_EXERCISE, FINISH_EXERCISES } from "../constants/actionTypes";

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
      await api.updateExercise(
        { form: form },
        { actualExercise: actualExercise },
        userId,
        courseId,
        chapterId
      );
      dispatch({
        type: UPDATE_EXERCISE,
        form: form,
        courseId: courseId,
        actualChapter: actualChapter,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const finishExercises =
  (form, userId, courseId, chapterId) => async (dispatch) => {
    try {
      // await api.finishExercises({ form: form }, userId, courseId, chapterId);
      dispatch({
        type: FINISH_EXERCISES,
        courseId: courseId,
        actualChapter: form[0].actualChapter,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
