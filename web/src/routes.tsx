import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeachersForm from "./pages/TeachersForm";
import TeachersList from "./pages/TeachersList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeachersList} />
      <Route path="/give-classes" component={TeachersForm} />
    </BrowserRouter>
  );
};

export default Routes;
