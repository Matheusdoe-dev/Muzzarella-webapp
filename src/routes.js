import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// routes
import Index from "./pages/Home/index";
import Menu from "./pages/Menu/index";
import AboutUs from "./pages/About-us/index";
import AboutMuzzarella from "./pages/About-Muzzarella/index";
import FAQ from "./pages/FAQ/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/menu" component={Menu} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/aboutmuzzarella" component={AboutMuzzarella} />
        <Route path="/faq" component={FAQ} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
