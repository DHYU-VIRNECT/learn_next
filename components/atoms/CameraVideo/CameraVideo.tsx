import { useCameraVideo } from "./useCameraVideo";
import VideoOverlay from "../../molecules/VideoOverlay/VideoOverlay";
import styles from "./CameraVideo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CameraVideo = () => {
  const { videoRef, isLoading, errorMessage, cameraNum } = useCameraVideo();

  return (
    <div className={cx("container")}>
      <video ref={videoRef} className={cx("video")} />
      {typeof cameraNum === "number" && (
        <p className={cx("title")}>{cameraNum}번 카메라</p>
      )}
      {isLoading && <VideoOverlay text={"접근 권한을 허용해주세요"} />}
      {!isLoading && errorMessage && <VideoOverlay text={errorMessage} />}
    </div>
  );
};

export default CameraVideo;
