import { combineReducers } from "redux";

import courses from "./courses";
import auth from "./auth";
import actualCourse from "./actualCourse";

export const reducers = combineReducers({ auth, courses, actualCourse });
