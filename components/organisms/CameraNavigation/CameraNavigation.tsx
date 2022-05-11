import Camera from "../../atoms/Camera/Camera";
import classNames from "classnames/bind";
import styles from "./CameraNavigation.module.scss";
import { useCameraNavigation } from "./useCameraNavigation";

const cx = classNames.bind(styles);

const CameraNavigation = () => {
  const { cameras } = useCameraNavigation();

  return (
    <div className={cx("container")}>
      <p className={cx("title")}>다른 카메라 확인하기</p>
      <div className={cx("cameras")}>
        {cameras.map((camera) => {
          return (
            <Camera
              key={camera.id}
              id={camera.id}
              num={camera.num}
              image={camera.image}
              className={cx({
                "current-camera": camera.isCurrentCamera,
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CameraNavigation;
