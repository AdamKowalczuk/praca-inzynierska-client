import { UPDATE_QUIZ } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const setActualQuiz = (quiz) => {
  return {
    type: "SET_ACTUAL_QUIZ",
    payload: quiz,
  };
};

export const setNextQuiz = (actualQuiz) => {
  return {
    type: "SET_NEXT_QUIZ",
    payload: actualQuiz + 1,
  };
};
export const updateQuiz =
  (form, userId, courseId, chapterId, actualChapter, isQuizCompleted) =>
  async (dispatch) => {
    try {
      // const { data } = await api.updateQuiz(form, userId, courseId, chapterId);
      await api.updateQuiz(form, userId, courseId, chapterId);
      dispatch({
        type: UPDATE_QUIZ,
        courseId: courseId,
        actualChapter: actualChapter,
        isQuizCompleted: isQuizCompleted,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
