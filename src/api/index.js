import axios from "axios";

const url_course = "http://localhost:5000/courses";
const url_user = "http://localhost:5000/users";
const API = axios.create({ baseURL: "http://localhost:5000" });

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
// export const fetchUsers = (id) => API.get(`${url_course}/${id}`);
export const fetchCourses = () => API.get("/courses");
// export const fetchCourses = () => API.get("/auth");

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
