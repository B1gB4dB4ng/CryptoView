import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CoinsContextProvider } from "./context/CoinsContext";
import { AuthContextProvider } from "./context/AuthContext";

import { LikeProvider } from "./context/LikeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LikeProvider>
        <CoinsContextProvider>
          <App />
        </CoinsContextProvider>
      </LikeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
