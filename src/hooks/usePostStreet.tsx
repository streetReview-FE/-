import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RequestStreet } from "../constants/interface";

const apiUrl = process.env.REACT_APP_BASE_URL;

const usePostStreet = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const postStreet = async (formData: RequestStreet) => {
    try {
      const res = await axios.post(
        `${apiUrl}/street/registration`,
        formData,
        config
      );
      console.log(res);
      if (res.status === 200) {
        const streewtId = res.data.data.streetId;
        navigate(`/request/place/potoChk`, {
          state: {
            id: streewtId,
          },
        });
        
      } else {
        throw new Error("거리요청 실패");
      }
    } catch (error) {
      console.log("error : ", error);
      navigate("/");
    }
  };

  return { postStreet };
};

export default usePostStreet;
