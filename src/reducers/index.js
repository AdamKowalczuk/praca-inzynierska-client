import { combineReducers } from "redux";

// import courses from "./courses";
import user from "./user";
// import users from "./users";
import auth from "./auth";
// import actualCourse from "./actualCourse";

export const reducers = combineReducers({
  auth,
  user,
  //   users,
  //   actualCourse,
  //   courses,
});
