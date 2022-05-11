import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/root";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const reduxWrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
