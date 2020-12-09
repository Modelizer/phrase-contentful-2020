import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bulma/css/bulma.css";
import "./index.css";
import "./services/i18n";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);
