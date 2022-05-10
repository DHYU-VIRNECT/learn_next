import axios from "axios";

export const getCameras = async () => {
  const { data } = await axios.get("http://localhost:3000/api/camera");
  return data;
};

export const getCamera = async (id: number) => {
  const { data } = await axios.get(`http://localhost:3000/api/camera/${id}`);
  return data;
};
