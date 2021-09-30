import axios from "axios";

// const url_course = "http://localhost:5000/courses";
// const url_user = "http://localhost:5000/users";
// const API = axios.create({ baseURL: "http://localhost:5000" });
const url_user = "https://front-web-praca-inzynierska.herokuapp.com/users";

const API = axios.create({
  baseURL: "https://front-web-praca-inzynierska.herokuapp.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const fetchUser = (id) => API.get("/users", id);
export const fetchUsers = () => API.get("/users");
export const fetchCourses = () => API.get("/courses");
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const updateLesson = (lesson, userId, courseId, chapterId, lessonId) =>
  axios.patch(
    `${url_user}/${userId}/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`,
    lesson
  );
export const updateQuiz = (form, userId, courseId, chapterId) =>
  axios.patch(
    `${url_user}/${userId}/courses/${courseId}/chapters/${chapterId}`,
    form
  );
