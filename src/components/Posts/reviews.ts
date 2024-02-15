import { Coordinates, Review } from "../../constants/interface";
import axios from "axios";

const accessToken = localStorage.getItem("token");

export const getReviews = async (coords: Coordinates): Promise<Review[]> => {
  const getData = {
    x: coords.lat,
    y: coords.lng,
  };
  try {
    const response = await axios.get("/reviews/all", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      params: getData,
    });
    const reviewsArray = Object.values(response.data.data) as Review[];
    return reviewsArray;
  } catch (error) {
    console.log(`Error fetching reviews:`);
    throw error;
  }
};
