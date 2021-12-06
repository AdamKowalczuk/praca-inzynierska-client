import {
  FETCH_ALL_USERS,
  DELETE_USER,
  FINISH_ACHIEVEMENT,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: FETCH_ALL_USERS, payload: data });
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
export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    // dispatch({ type: DELETE_USER, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const finishAchievement =
  (userId, achievementId) => async (dispatch) => {
    try {
      await api.finishAchievement(userId, { achievementId: achievementId });
      dispatch({ type: FINISH_ACHIEVEMENT, achievementId: achievementId });
    } catch (error) {
      console.log(error.message);
    }
  };
