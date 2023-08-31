import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RouterApp from "./RouterApp.tsx";

import "./index.css";
import { Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);
