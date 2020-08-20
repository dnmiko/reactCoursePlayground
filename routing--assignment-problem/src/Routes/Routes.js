import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Users from "../containers/Users/Users";
import Courses from "../containers/Courses/Courses";
import Instructions from '../components/Instructions/Instructions';
import Main from '../components/Main/Main';
import Course from '../containers/Course/Course';
import Error404 from '../components/404/404';

const routes = (props) => {
  return (
    <Switch>
      <Route exact path="/users" render={() => <Users />} />
      <Route exact path="/courses" render={() => <Courses />} />
      <Route exact path="/instructions" render={() => <Instructions />} />
      <Route exact path="/course/:courseId" render={() => <Course />} />
      <Route
        exact
        path="/all-courses"
        render={() => <Redirect to="/courses" />}
      />
      <Route exact path="/" render={() => <Main />} />
      <Route render={() => <Error404 />} />
    </Switch>
  );
};

export default routes;
