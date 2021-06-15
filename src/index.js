import React from "react";
import ReactDOM from "react-dom";
import "../src/stylesheets/index.scss";
import App from "../src/components/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
