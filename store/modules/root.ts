import currentCamera, { CurrentCameraState } from "./currentCameraSlice";
import { Action, AnyAction, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

// const rootReducer = combineReducers({
//   currentCamera,
// });
const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    currentCamera,
  })(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
