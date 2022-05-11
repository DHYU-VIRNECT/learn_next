import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { camerasSelector } from "../../../store/modules/camerasSlice";
import { currentCameraSelector } from "../../../store/modules/currentCameraSlice";
import { useMemo } from "react";
import { CameraType } from "../../../types/cameraType";

type ReturnType = {
  cameras: (CameraType & { isCurrentCamera: boolean })[];
};

export const useCameraNavigation = (): ReturnType => {
  const cameras = useSelector(camerasSelector);
  const currentCamera = useSelector(currentCameraSelector);

  const camerasWithWhetherCurrent = useMemo(() => {
    return cameras.map((camera: CameraType) => ({
      ...camera,
      isCurrentCamera: camera.id === currentCamera?.id,
    }));
  }, [cameras, currentCamera]);

  return {
    cameras: camerasWithWhetherCurrent,
  };
};
