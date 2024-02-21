import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewDetail } from "../constants/interface";

const apiUrl = process.env.REACT_APP_BASE_URL;

const useGetReviewDetail = () => {
  const navigate = useNavigate();
  const [reviewDetailArr, setReviewDetailArr] = useState<ReviewDetail[] | null>(
    null
  );
  const accessToken = localStorage.getItem("token");

  const getReviewDetail = async (x: string, y: string): Promise<void> => {
    const PostData = {
      x: x,
      y: y,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await axios.post(
        `${apiUrl}/reviews/all`,
        PostData,
        config
      );
      console.log(response);
      if (response.data.statusCode === 200) {
        setReviewDetailArr(response.data.data);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  return { getReviewDetail, reviewDetailArr };
};

export default useGetReviewDetail;
