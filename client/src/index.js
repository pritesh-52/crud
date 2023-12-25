import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProvider from "./Component/context/ContextProvider";


ReactDOM.render(
  <ContextProvider>
    <Router>
      <App></App>
    </Router>
  </ContextProvider>, document.getElementById("root")
)