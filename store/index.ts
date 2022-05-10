import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/root";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: rootReducer,
});

const makeStore = () => store;

export const reduxWrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default store;
