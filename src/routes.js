import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// routes
import Index from "./pages/Home/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
