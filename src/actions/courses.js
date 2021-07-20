import { FETCH_ALL_COURSES } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();
    console.log("Get Courses", data);
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
