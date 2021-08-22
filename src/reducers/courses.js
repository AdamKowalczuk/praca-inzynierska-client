import { FETCH_ALL_COURSES } from "../constants/actionTypes";

// export default (courses = [], action) => {
//   switch (action.type) {
//     case FETCH_ALL_COURSES:
//       return action.payload;
//     case UPDATE_LESSON:
//       return courses.map((course) => {
//         if (course._id === action.courseId) {
//           course.chapters[action.actualChapter].lessons[action.actualLesson] =
//             action.lesson;
//         }
//         return course;
//       });
//     default:
//       return courses;
//   }
// };

const courses = (courses = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COURSES:
      return action.payload;

    default:
      return courses;
  }
};

export default courses;
