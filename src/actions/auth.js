import {
  AUTH,
  // ADD_USER_COURSES
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push("/kursy");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    // dispatch({ type: ADD_USER_COURSES, courses });
    router.push("/kursy");
  } catch (error) {
    console.log(error);
  }
};

// export const addCoursesToUser = (courses) => async (dispatch) => {
//   try {
//     const { data } = await api.addCoursesToUser(courses);
//     dispatch({ type: ADD_USER_COURSES, payload: courses });
//   } catch (error) {
//     console.log(error);
//   }
// };
