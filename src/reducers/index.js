import { combineReducers } from "redux";

import courses from "./courses";
import user from "./user";
import auth from "./auth";
import actualCourse from "./actualCourse";
import actualChapter from "./actualChapter";
import actualLesson from "./actualLesson";
import actualQuiz from "./actualQuiz";
import actualExercise from "./actualExercise";

export const reducers = combineReducers({
  auth,
  user,
  actualCourse,
  actualChapter,
  actualLesson,
  actualQuiz,
  actualExercise,
  courses,
});
