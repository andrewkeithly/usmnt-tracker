import React from "react";
import { Switch, Route } from "react-router-dom";
import FullLayout from "./layout/FullLayout";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={FullLayout} />
    </Switch>
  );
};

export default Routes;
