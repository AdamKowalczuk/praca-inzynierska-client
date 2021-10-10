// import { UPDATE_EXERCISE } from "../constants/actionTypes";

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
// export const updateQuiz =
//   (form, userId, courseId, chapterId, actualChapter, isQuizCompleted) =>
//   async (dispatch) => {
//     try {
//       // const { data } = await api.updateQuiz(form, userId, courseId, chapterId);
//       await api.updateQuiz(form, userId, courseId, chapterId);
//       dispatch({
//         type: UPDATE_QUIZ,
//         courseId: courseId,
//         actualChapter: actualChapter,
//         isQuizCompleted: isQuizCompleted,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
