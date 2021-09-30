import { FETCH_ALL_COURSES } from "../constants/actionTypes";

const courses = (courses = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COURSES:
      return action.payload;

    default:
      return courses;
  }
};

export default courses;
