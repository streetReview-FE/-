import axios from "axios";
import { useSelector } from "react-redux";
import { Coordinates, StoreState } from "../constants/interface";
import useUploadImg from "./useUploadImg";

// 리뷰 작성 훅
export const useWriteReview = () => {
  const { postUploadImg } = useUploadImg();
  const { coordinates } = useSelector((state: StoreState) => state.map); //현재위치 정보
  const accessToken = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const writeReview = async (coords: Coordinates, postContent: string, imgs: File[]) => {
    const postData = {
      content: postContent,
      reviewX: coords.lat,
      reviewY: coords.lng,
      myX: coordinates.lat,
      myY: coordinates.lng,
    };
    try {
      const res = await axios.post("/reviews/write", postData, config);
      console.log(res.data);
      if (res.data.statusCode === 200 && imgs.length > 0) {
        await postUploadImg("REVIEW", res.data.data.reviewId, imgs);
        console.log("성공");
      }
    } catch (error) {
      console.log("Error fetching reviews : ", error);
      throw error;
    }
  };
  return { writeReview };
};
