import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import { Context, ContextProvider } from "./Context";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </CookiesProvider>
  </React.StrictMode>
);
