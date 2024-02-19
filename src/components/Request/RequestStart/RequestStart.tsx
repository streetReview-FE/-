import IconRequest from "../../../assets/Icons/icon_requst.png";
import useCheckMember from "../../../hooks/useCheckMember";
import { RequestContainer, RequestSpan } from "../stlyeRequest";
import { RequestCheckButton, RequestIcon } from "./stlyeRequestStart";

const RequestStart = () => {
  const { handleCheckMember } = useCheckMember();
  return (
    <RequestContainer>
      <RequestIcon $img={IconRequest} />
      <RequestSpan>우리 동네도 활성화 해주세요!</RequestSpan>
      <RequestCheckButton onClick={handleCheckMember}>
        요청하기
      </RequestCheckButton>
    </RequestContainer>
  );
};

export default RequestStart;
