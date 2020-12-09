import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bulma/css/bulma.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

window.PHRASEAPP_CONFIG.projectId =
  process.env.REACT_APP_PHRASE_PROJECT_ID;
window.PHRASEAPP_INIT_ICE();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
