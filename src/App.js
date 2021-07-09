import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Courses from "./components/Courses/Courses";
import Course from "./components/Courses/Course/Course";
import Quiz from "./components/Quiz/Quiz";
import Lesson from "./components/Lesson/Lesson";
import "./App.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} /> */}

      {/* <Route path="/" exact component={Course} /> */}
      {/* <Route path="/" exact component={Courses} /> */}
      {/* <Route path="/" exact component={Quiz} /> */}
      <Route path="/" exact component={Lesson} />
    </Switch>
  </BrowserRouter>
);

export default App;
