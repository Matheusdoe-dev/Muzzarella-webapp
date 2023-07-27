import React from "react";
// routes
import Routes from "./routes";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import Colors from "./styles/settings/colors";
import Fonts from "./styles/settings/fonts";
import Gaps from "./styles/settings/gaps";
import Container from "./styles/generic/container";
import Elements from "./styles/base/elements";
// contexts
import { Order } from "./hooks/order";

const App = () => {
  return (
    <>
      <Colors />
      <Fonts />
      <Gaps />
      <Container />
      <Elements />

      <Order>
        <Routes />
      </Order>
    </>
  );
};

export default App;
