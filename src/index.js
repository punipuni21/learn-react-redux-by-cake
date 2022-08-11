import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CommonPage from "./pages/commonPage";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cakeListReducer from "./reducer/cakeListReducer";

let store = configureStore(cakeListReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CommonPage />
  </Provider>
);
