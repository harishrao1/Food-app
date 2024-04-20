import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css"
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ScrolltoTop from "./utils/ScrolltoTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <Router>
      <React.StrictMode>
        <ScrolltoTop/>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);
