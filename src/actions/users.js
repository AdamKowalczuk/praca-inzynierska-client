import { FETCH_ALL_USERS, FETCH_USER } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    console.log("Get Users", data);
    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUser(id);
    console.log("Get Single User", data);
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
