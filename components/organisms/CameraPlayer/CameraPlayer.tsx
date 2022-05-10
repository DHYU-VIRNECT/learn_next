import CameraVideo from "../../atoms/CameraVideo/CameraVideo";
import classNames from "classnames/bind";
import styles from "./CameraPlayer.module.scss";

const cx = classNames.bind(styles);

const CameraPlayer = () => {
  return (
    <div className={cx("container")}>
      <CameraVideo />
    </div>
  );
};

export default CameraPlayer;
