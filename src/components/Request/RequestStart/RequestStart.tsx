import { useNavigate } from "react-router-dom";
import IconRequest from "../../../assets/Icons/icon_requst.png";
import { RequestContainer, RequestSpan } from "../stlyeRequest";
import { RequestCheckButton, RequestIcon } from "./stlyeRequestStart";
const RequestStart = () => {
  const navigate = useNavigate();
  return (
    <RequestContainer>
      <RequestIcon $img={IconRequest} />
      <RequestSpan>우리 동네도 활성화 해주세요!</RequestSpan>
      <RequestCheckButton onClick={() => navigate(`/request/place`)}>
        요청하기
      </RequestCheckButton>
    </RequestContainer>
  );
};

export default RequestStart;
