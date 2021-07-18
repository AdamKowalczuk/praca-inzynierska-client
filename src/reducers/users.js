import { FETCH_ALL_USERS } from "../constants/actionTypes";

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    default:
      return users;
  }
};
