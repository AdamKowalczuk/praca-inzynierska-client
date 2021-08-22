import { SET_USER, UPDATE_LESSON, UPDATE_QUIZ } from "../constants/actionTypes";

const user = (user = [], action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case UPDATE_LESSON:
      let updatedUser = user;
      updatedUser.courses.map((course) => {
        if (course._id === action.courseId) {
          course.chapters[action.actualChapter].lessons[action.actualLesson] =
            action.lesson;
        }
      });
      return updatedUser;
    case UPDATE_QUIZ:
      let updatedQuiz = user;
      updatedQuiz.courses.map((course) => {
        if (course._id === action.courseId) {
          course.chapters[action.actualChapter].isQuizCompleted =
            action.isQuizCompleted;
        }
      });
      return updatedQuiz;
    default:
      return user;
  }
};

export default user;
