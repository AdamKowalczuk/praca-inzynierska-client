import { FETCH_ALL_COURSES } from "../constants/actionTypes";

export default (courses = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COURSES:
      return action.payload;
    default:
      return courses;
  }
};
