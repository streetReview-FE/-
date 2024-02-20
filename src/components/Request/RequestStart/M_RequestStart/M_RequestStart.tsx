import IconRequest from "../../../../assets/Icons/icon_requst.png";
import useCheckMember from "../../../../hooks/useCheckMember";
import * as M from "./M_stlyeRequestStart";

const M_RequestStart = () => {
  const { handleCheckMember } = useCheckMember();
  return (
    <M.RequestContainer>
      <M.RequestSpan>우리 동네도 활성화 해주세요!</M.RequestSpan>
      <M.RequestIcon $img={IconRequest} />
      <M.RequestCheckButton onClick={handleCheckMember}>
        요청하기
      </M.RequestCheckButton>
    </M.RequestContainer>
  );
};

export default M_RequestStart;
