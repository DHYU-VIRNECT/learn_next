import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { currentCameraSelector } from "../../../store/modules/currentCameraSlice";

export const useCameraVideo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentCamera = useSelector(currentCameraSelector);

  useEffect(() => {
    if (!videoRef.current) return;
    if (!currentCamera) {
      setErrorMessage("해당 카메라를 찾을 수 없습니다");
    }
    setErrorMessage("");
    loadVideo();
  }, [currentCamera]);

  const loadVideo = useCallback(async () => {
    const mediaDevices = navigator.mediaDevices;
    try {
      const stream = await mediaDevices.getUserMedia({
        video: true,
      });
      playVideo(stream);
    } catch (error) {
      handleVideoLoadFail();
    } finally {
      setIsLoading(false);
    }
  }, []);

  const playVideo = useCallback(
    (stream: MediaStream) => {
      const video = videoRef.current as HTMLVideoElement;
      video.muted = true;
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    },
    [videoRef.current]
  );

  const handleVideoLoadFail = useCallback(() => {
    setErrorMessage("장비 혹은 권한 문제로 영상을 재생할 수 없습니다");
  }, []);

  return {
    videoRef,
    isLoading,
    errorMessage,
    cameraNum: currentCamera?.num,
  };
};
