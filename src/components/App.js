import React from "react";
import Routes from "../routes";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import Colors from "../styles/settings/colors";
import Fonts from "../styles/settings/fonts";

function App() {
  return (
    <>
      <Colors />
      <Fonts />

      <Routes />
    </>
  );
}

export default App;
