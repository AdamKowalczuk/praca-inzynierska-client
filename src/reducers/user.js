import {
  SET_USER,
  UPDATE_LESSON,
  UPDATE_QUIZ,
  UPDATE_EXERCISE,
  FINISH_ACHIEVEMENT,
} from "../constants/actionTypes";

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
        return course;
      });
      return updatedUser;
    case UPDATE_QUIZ:
      let updatedQuiz = user;
      updatedQuiz.courses.map((course) => {
        if (course._id === action.courseId) {
          course.chapters[action.actualChapter].isQuizCompleted =
            action.isQuizCompleted;
        }
        return course;
      });
      return updatedQuiz;

    case UPDATE_EXERCISE:
      let updatedExercise = user;
      updatedExercise.courses.map((course) => {
        if (course._id === action.courseId) {
          course.chapters[action.actualChapter].exercises = action.form;
        }
        return course;
      });
      return updatedExercise;
    case FINISH_ACHIEVEMENT:
      user.achievements[action.achievementId].isFinished = true;
    default:
      return user;
  }
};

export default user;
