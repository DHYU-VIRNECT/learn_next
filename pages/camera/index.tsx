import { dehydrate, QueryClient, useQuery } from "react-query";
import { getCameras } from "../../queries/useCameraQuery";
import Camera from "../../components/molecules/Camera/Camera";
import { CameraType } from "../../types/cameraType";
import styles from "./Cameras.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Cameras = () => {
  const { data } = useQuery("cameras", getCameras);

  return (
    <div className={cx("cameras")}>
      {data?.map((camera: CameraType) => (
        <Camera key={camera.id} {...camera} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
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

export default Cameras;
