import axios from "axios";
import { Coordinates, Review } from "../../constants/interface";

const accessToken = localStorage.getItem("token");
const apiUrl = process.env.REACT_APP_BASE_URL;

export const getnearReviews = async (
  coords: Coordinates
): Promise<Review[]> => {
  const getData = {
    myX: coords.lat,
    myY: coords.lng,
  };
  console.log(getData);
  try {
    const response = await axios.post(`${apiUrl}/street/near/view`, getData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
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
