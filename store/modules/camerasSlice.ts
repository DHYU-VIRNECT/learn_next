import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CameraType } from "../../types/cameraType";
import { RootState } from "./root";

export type CamerasState = CameraType[];

const camerasSlice = createSlice({
  //array of active cameras
  name: "cameras",
  initialState: [] as CamerasState,
  reducers: {
    setCameras: (state, action: PayloadAction<CameraType[]>) => {
      return action.payload;
    },
    clearCameras: () => {
      return [];
    },
  },
});

export const camerasSelector = (state: RootState) => state.cameras;

export const {
  actions: { setCameras, clearCameras },
} = camerasSlice;

export default camerasSlice.reducer;
