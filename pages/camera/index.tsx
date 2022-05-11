import { useQuery } from "react-query";
import { getCameras } from "../../queries/useCameraQuery";
import Camera from "../../components/atoms/Camera/Camera";
import { CameraType } from "../../types/cameraType";
import styles from "./Cameras.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CamerasPage = () => {
  const { data } = useQuery("cameras", getCameras);

  return (
    <div className={cx("cameras")}>
      {data?.map((camera: CameraType) => (
        <Camera key={camera.id} {...camera} />
      ))}
    </div>
  );
};

export default CamerasPage;
