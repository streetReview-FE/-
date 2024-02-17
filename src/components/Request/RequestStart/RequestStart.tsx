import axios from "axios";
import { useNavigate } from "react-router-dom";
import IconRequest from "../../../assets/Icons/icon_requst.png";
import { RequestContainer, RequestSpan } from "../stlyeRequest";
import { RequestCheckButton, RequestIcon } from "./stlyeRequestStart";

const RequestStart = () => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const accessToken = localStorage.getItem("token");
  const handleCheckManager = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await axios.get(`${apiUrl}/member/m/manager`, config);
      console.log(response);
      if (response.data.statusCode === 200) {
        navigate("/request/place");
      }
      // 해당부분은 문의하기
      else if (response.data.statusCode === 400) {
        window.alert("로그인 후 이용해 주세요.");
        navigate("/");
      } else {
        window.alert("권한이 없습니다.");
        navigate("/");
      }
    } catch (error) {
      // 에러처리
      if (axios.isAxiosError(error)) {
        const err = error.response?.data.code;
        if (err === 400) {
          window.alert("로그인 후 이용해 주세요.");
          navigate("/");
        } else {
          window.alert("권한이 없습니다.!!!!!!");
          navigate("/");
        }
      }
    }
  };
  return (
    <RequestContainer>
      <RequestIcon $img={IconRequest} />
      <RequestSpan>우리 동네도 활성화 해주세요!</RequestSpan>
      <RequestCheckButton onClick={handleCheckManager}>
        요청하기
      </RequestCheckButton>
    </RequestContainer>
  );
};

export default RequestStart;
