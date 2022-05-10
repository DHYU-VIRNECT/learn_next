import CameraPlayer from "../../../components/organisms/CameraPlayer/CameraPlayer";
import classNames from "classnames/bind";
import styles from "./CameraPage.module.scss";
import CameraNavigation from "../../../components/organisms/CameraNavigation/CameraNavigation";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCamera } from "../../../queries/useCameraQuery";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { setCurrentCamera } from "../../../store/modules/currentCameraSlice";
import { GetServerSideProps } from "next";
import WithErrorBoundary, {
  ErrorProps,
} from "../../../components/wrappers/HOC/WithErrorBoundary";
import ErrorFallback from "../../../components/molecules/ErrorFallback/ErrorFallback";

const cx = classNames.bind(styles);

const CameraPage = () => {
  useCameraPage();

  return (
    <div className={cx("container")}>
      <CameraPlayer />
      <CameraNavigation />
    </div>
  );
};

const useCameraPage = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { id } = query;

  const { data } = useQuery(["camera", id], () => getCameraQuery(id));

  useEffect(() => {
    dispatch(setCurrentCamera(data));
  }, [data, dispatch]);
};

const getCameraQuery = (id: string | string[] | undefined) => {
  if (!id) return null;
  return getCamera(+id);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;
  const queryClient = new QueryClient();
  try {
    await queryClient.fetchQuery(["camera", id], () => getCameraQuery(id));
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: error.response.status,
      },
    };
  }
};

const OnError = ({ errorCode }: ErrorProps) => {
  const errorMessages = {
    403: "해당 카메라에 접근 권한이 없습니다",
    404: "해당 카메라를 찾을 수 없습니다",
  };
  return <ErrorFallback errorMessages={errorMessages} errorCode={errorCode} />;
};

export default WithErrorBoundary(CameraPage, OnError);
