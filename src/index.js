import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CommonPage from "./pages/commonPage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cakeListReducer from "./Reducer/cakeListReducer";
import materialListReducer from "./Reducer/materialListReducer";

const rootReducer = combineReducers({
  cakeProps: cakeListReducer,
  materialProps: materialListReducer,
});

let store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CommonPage />
  </Provider>
);
