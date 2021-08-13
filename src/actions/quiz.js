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
