import { Coordinates, Review } from "../../constants/interface";
import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

export const getReviews = async (coords: Coordinates): Promise<Review[]> => {
  try {
    const response = await axios.get("/reviews/all", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json;charset=utf-8",
      },
      params: coords, // coords 객체를 직접 쿼리 파라미터로 전달
    });
    return response.data;
  } catch (error) {
    console.log(`Error fetching reviews:`);
    throw error;
  }
};
