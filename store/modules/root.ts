import currentCamera, { CurrentCameraState } from "./currentCameraSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentCamera,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
