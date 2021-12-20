import { FETCH_ALL_COURSES, UPDATE_LESSON } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();
    dispatch({ type: FETCH_ALL_COURSES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const setActualCourse = (course) => {
  return {
    type: "SET_ACTUAL_COURSE",
    payload: course,
  };
};
export const setActualChapter = (chapter) => {
  return {
    type: "SET_ACTUAL_CHAPTER",
    payload: chapter,
  };
};
export const setActualLesson = (lesson) => {
  return {
    type: "SET_ACTUAL_LESSON",
    payload: lesson,
  };
};
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

export const setNextLesson = (actualLesson) => {
  return {
    type: "SET_NEXT_LESSON",
    payload: actualLesson + 1,
  };
};

export const updateLesson =
  (lesson, userId, courseId, chapterId, lessonId) => async (dispatch) => {
    try {
      if (lesson.isFinished === false) {
        lesson.isFinished = true;
      }
      await api.updateLesson(lesson, userId, courseId, chapterId, lessonId);
      dispatch({
        type: UPDATE_LESSON,
        lesson: lesson,
        courseId: courseId,
        actualChapter: lesson.actualChapter,
        actualLesson: lesson.actualLesson,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
