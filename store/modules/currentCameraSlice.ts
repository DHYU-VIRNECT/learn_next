import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CameraType } from "../../types/cameraType";
import { RootState } from "./root";

export type CurrentCameraState = CameraType | null;

const currentCameraSlice = createSlice({
  name: "currentCamera",
  initialState: null as CurrentCameraState,
  reducers: {
    setCurrentCamera: (state, action: PayloadAction<CameraType>) => {
      return action.payload;
    },
    clearCurrentCamera: (_, __) => {
      return null;
    },
  },
});

export const currentCameraSelector = (state: RootState) => state.currentCamera;

export const {
  actions: { setCurrentCamera, clearCurrentCamera },
} = currentCameraSlice;

export default currentCameraSlice.reducer;
