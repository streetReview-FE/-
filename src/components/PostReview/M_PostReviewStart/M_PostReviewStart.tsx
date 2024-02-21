import { useNavigate } from "react-router-dom";
import IconPostReviewText from "../../../assets/Icons/icon_postreviewtext.png";
import * as M from "./M_stlyePostReviewStart";
const M_PostReviewStart = () => {
  const navigate = useNavigate();
  const handlePostReviewPostContent = () => {
    navigate("/postReview/content");
  };
  return (
    <M.RequestContainer>
      <M.RequestSpan>우리 동네도 활성화 해주세요!</M.RequestSpan>
      <M.RequestIcon $img={IconPostReviewText} />
      <M.RequestCheckButton onClick={handlePostReviewPostContent}>
        요청하기
      </M.RequestCheckButton>
    </M.RequestContainer>
  );
};

export default M_PostReviewStart;
