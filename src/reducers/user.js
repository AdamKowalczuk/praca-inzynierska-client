import { SET_USER } from "../constants/actionTypes";

export default (user = "", action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return user;
  }
};
