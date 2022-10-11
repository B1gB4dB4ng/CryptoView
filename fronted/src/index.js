import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CoinsContextProvider } from "./context/CoinsContext";
import { AuthContextProvider } from "./context/AuthContext";
import { FavCoinsContextProvider } from "./context/FavCoinsContext";
import { LikeProvider } from "./context/LikeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LikeProvider>
        <CoinsContextProvider>
          <FavCoinsContextProvider>
            <App />
          </FavCoinsContextProvider>
        </CoinsContextProvider>
      </LikeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
