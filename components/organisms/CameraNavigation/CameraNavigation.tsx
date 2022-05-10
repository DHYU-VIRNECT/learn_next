import { dehydrate, QueryClient, useQuery } from "react-query";
import { getCameras } from "../../../queries/useCameraQuery";
import Camera from "../../molecules/Camera/Camera";
import { CameraType } from "../../../types/cameraType";
import classNames from "classnames/bind";
import styles from "./CameraNavigation.module.scss";
import { useSelector } from "react-redux";
import { currentCameraSelector } from "../../../store/modules/currentCameraSlice";

const cx = classNames.bind(styles);

const CameraNavigation = () => {
  const { data } = useQuery("cameras", getCameras);
  const currentCamera = useSelector(currentCameraSelector);

  return (
    <div className={cx("container")}>
      <p className={cx("title")}>다른 카메라 확인하기</p>
      <div className={cx("cameras")}>
        {data.map((camera: CameraType) => {
          return (
            <Camera
              key={camera.id}
              {...camera}
              className={cx({
                "current-camera": camera.id === currentCamera?.id,
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  await queryClient.prefetchQuery("cameras", getCameras);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default CameraNavigation;
