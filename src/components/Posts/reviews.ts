import { Coordinates, Review } from "../../constants/interface";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6eHo0NjQxQGdtYWlsLmNvbSIsIklEIjoiMSIsIlJPTEUiOiJVU0VSIiwiaWF0IjoxNzA2NjE2NTM1LCJleHAiOjE3MDcyMjEzMzV9.FbS7Tu43HGN0gCUlwf-NqLGh_imPUfNBReAQi4Sebgw";

export const getReviews = async (coords: Coordinates): Promise<Review[]> => {
  try {
    const response = await axios.get(
      "http://semtle.catholic.ac.kr:8085/street/all/view",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        params: coords, // coords 객체를 직접 쿼리 파라미터로 전달
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error fetching reviews:`);
    throw error;
  }
};
