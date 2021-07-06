import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Course from "./components/Courses/Course";
import "./App.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} /> */}

      <Route path="/" exact component={Course} />
    </Switch>
  </BrowserRouter>
);

export default App;
