import axios from "axios";
import { Coordinates, Review } from "../../constants/interface";

const accessToken = localStorage.getItem("token");

export const getReviews = async (coords: Coordinates): Promise<Review[]> => {
  const getData = {
    x: coords.lat,
    y: coords.lng,
  };
  console.log(getData);
  try {
    const response = await axios.get("/reviews/all", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      params: getData,
    });
    console.log("리뷰목록",response);
    if (
      response.data.data &&
      Array.isArray(response.data.data) &&
      response.data.data.length > 0
    ) {
      const reviewsArray = Object.values(response.data.data) as Review[];
      return reviewsArray;
    } else {
      console.error("res.data.data is not an object", response.data);
      return [];
    }
  } catch (error) {
    console.log("Error fetching reviews : ", error);
    throw error;
  }
};
