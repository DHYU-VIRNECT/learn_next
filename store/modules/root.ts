import currentCamera from "./currentCameraSlice";
import cameras from "./camerasSlice";
import { AnyAction, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    currentCamera,
    cameras,
  })(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
