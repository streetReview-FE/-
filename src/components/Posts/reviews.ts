import { Coordinates, Review } from "../../constants/interface";
import axios from "axios";

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
    console.log(response);
    if (response.data.data && typeof response.data.data === "object") {
      const reviewsArray = Object.values(response.data.data) as Review[];
      return reviewsArray;
    } else {
      console.error("res.data.data is not an object", response.data);
      return [];
    }
    // if (Array.isArray(response.data)) {
    //   return response.data as Review[];
    // } else {
    //   console.error("res.data is not an array", response.data);
    //   return [];
    // }
  } catch (error) {
    console.log(`Error fetching reviews:`);
    throw error;
  }
};
