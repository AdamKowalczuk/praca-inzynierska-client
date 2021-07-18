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
import { getCourses } from "./actions/courses";

import "./App.scss";

const App = () => {
  const [currentId, , setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    // dispatch(getUsers());
  }, [currentId, dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />

        <Route path="/kursy" exact component={Courses} />
        <Route path="/kursy/kurs" exact component={Course} />
        {/* <Route path="/" exact component={Chapters} /> */}
        {/* <Route path="/kursy/kurs/" exact component={Lesson} /> */}
        {/* <Route path="/" exact component={Quiz} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
