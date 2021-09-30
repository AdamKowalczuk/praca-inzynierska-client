import {
  AUTH,
  // ADD_USER_COURSES
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push("/kursy");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push("/kursy");
  } catch (error) {
    console.log(error);
  }
};
