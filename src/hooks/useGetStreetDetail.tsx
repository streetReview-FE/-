import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StreetDetail } from "../constants/interface";

const apiUrl = process.env.REACT_APP_BASE_URL;

const useGetStreetDetail = () => {
  const navigate = useNavigate();
  const [streetDetail, setStreetDetail] = useState<StreetDetail | null>(null);
  const accessToken = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const getStreetDetail = async (x: string, y: string): Promise<void> => {
    const PostData = {
      x: x,
      y: y,
    };
    try {
      const response = await axios.post(
        `${apiUrl}/street/view`,
        PostData,
        config
      );
      console.log(response);
      if (response.data.statusCode === 200) {
        setStreetDetail(response.data.data);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  return { getStreetDetail, streetDetail };
};

export default useGetStreetDetail;