import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import { useDispatch } from "react-redux";
import Auth from "./components/Auth/Auth";
import Courses from "./components/Courses/Courses";
import Course from "./components/Courses/Course/Course";
import Chapters from "./components/Chapters/Chapters";
import Quiz from "./components/Quiz/Quiz";
import Lesson from "./components/Lesson/Lesson";
import UserProfile from "./components/UserProfile/UserProfile";
import Achievements from "./components/Achievements/Achievements";
import PracticalLesson from "./components/PracticalLessons/PracticalLessons";
import Offline from "./components/Offline/Offline";
import { getCourses } from "./actions/courses";

import "./App.scss";

const App = () => {
  const [currentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [currentId, dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/kursy" exact component={Courses} />
        <Route path="/kursy/kurs" exact component={Course} />
        <Route path="/osiagniecia" exact component={Achievements} />
        <Route path="/moj-profil" exact component={UserProfile} />
        <Route path="/kursy/rozdzialy" exact component={Chapters} />
        <Route path="/kursy/rozdzialy/lekcje" exact component={Lesson} />
        <Route path="/kursy/rozdzialy/quiz" exact component={Quiz} />
        <Route
          path="/kursy/rozdzialy/zadania"
          exact
          component={PracticalLesson}
        />
        <Route path="/offline" exact component={Offline} />
      </Switch>
    </BrowserRouter>
  );
};
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("serviceWorker.js");
  });
}
export default App;
