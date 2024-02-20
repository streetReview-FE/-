import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_BASE_URL;

const useUploadImg = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");

  const postUploadImg = async (
    target: string,
    reviewId: string,
    files: File[]
  ): Promise<void> => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('image', file);
    });

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await axios.post(
        `${apiUrl}/upload/${target}/${reviewId}`,
        formData,
        config
      );
      console.log(response);
      if (target === "STREET") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { postUploadImg };
};

export default useUploadImg;
