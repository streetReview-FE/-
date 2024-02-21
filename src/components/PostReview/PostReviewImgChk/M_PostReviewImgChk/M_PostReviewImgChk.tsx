import { message } from "antd";
import { useNavigate } from "react-router-dom";
import IconCamera from "../../../../assets/Icons/icon_postreviewCamera.png";
import * as M from "./M_stlyePostReviewImgChk";

const M_PostReviewImgChk = () => {
  const handleHome = () => {
    message.success("요청했습니다!");
    navigate(`/`);
  };
  const navigate = useNavigate();
  return (
    <M.PostReViewContainer>
      <M.PostReviewTopSpan>사진도 있나요?</M.PostReviewTopSpan>
      <M.PostReviewTopIcon $img={IconCamera} />
      <M.PostReviewImgChkButtonWarpper>
        <M.PostReviewBottomNextButton
          $width={7.1875}
          $height={2.1875}
          $marginTop={0}
          onClick={() => navigate(`/postReview/poto`)}
        >
          네
        </M.PostReviewBottomNextButton>
        <div style={{ marginLeft: "0.62rem", marginRight: "0.62rem" }} />
        <M.PostReviewBottomNextButton
          $width={7.1875}
          $height={2.1875}
          $marginTop={0}
          onClick={handleHome}
        >
          아니요
        </M.PostReviewBottomNextButton>
      </M.PostReviewImgChkButtonWarpper>
    </M.PostReViewContainer>
  );
};

export default M_PostReviewImgChk;
