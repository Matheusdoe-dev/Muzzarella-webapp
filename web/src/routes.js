import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// routes
import Index from "./pages/Home/index";
import Menu from "./pages/Menu/index";
import AboutUs from "./pages/About-us/index";
import AboutMuzzarella from "./pages/About-Muzzarella/index";
import FAQ from "./pages/FAQ/index";
//// order routes
import OrderLocation from "./pages/Order-Location/index";
import OrderChooseWay from "./pages/Order-Choose-Way/index";
import OrderPremade from "./pages/Order-Premade/index";
import OrderCustomize from "./pages/Order-Customize/index";
import OrderSignIn from "./pages/Order-Sign-in/index";
import OrderCreateAccount from "./pages/Order-Create-Account/index";
import OrderCheckout from "./pages/Order-Checkout/index";
import OrderEnd from "./pages/Order-End/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/menu" component={Menu} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/aboutmuzzarella" component={AboutMuzzarella} />
        <Route path="/faq" component={FAQ} />
        {/* order routes */}
        <Route path="/order/location" component={OrderLocation} />
        <Route path="/order/choose" component={OrderChooseWay} />
        <Route path="/order/premade" component={OrderPremade} />
        <Route path="/order/customize" component={OrderCustomize} />
        <Route path="/order/signin" component={OrderSignIn} />
        <Route path="/order/create-account" component={OrderCreateAccount} />
        <Route path="/order/checkout" component={OrderCheckout} />
        <Route path="/order/end" component={OrderEnd} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
