import { useNavigate } from "react-router-dom";
import IconCamera from "../../../assets/Icons/icon_postreviewCamera.png";
import {
  PostReViewContainer,
  PostReviewBottomNextButton,
  PostReviewTopIcon,
  PostReviewTopSpan,
} from "../stylePostReview";
import { PostReviewImgChkButtonWarpper } from "./stlyePostReviewImgChk";

const PostReviewImgChk = () => {
  const navigate = useNavigate();
  return (
    <PostReViewContainer>
      {/* 10.19-3.81rem */}
      <div style={{ marginTop: "6.38rem" }} />
      <PostReviewTopIcon $img={IconCamera} />
      <PostReviewTopSpan>사진도 있나요?</PostReviewTopSpan>
      <PostReviewImgChkButtonWarpper>
        <PostReviewBottomNextButton
          $width={9.0625}
          $height={3.375}
          $marginTop={3.13}
          onClick={() => navigate(`/postReview/poto`)}
        >
          네
        </PostReviewBottomNextButton>
        <div style={{ marginLeft: "1.065rem", marginRight: "1.065rem" }} />
        <PostReviewBottomNextButton
          $width={9.0625}
          $height={3.375}
          $marginTop={3.13}
          onClick={() => navigate(`/request/place`)}
        >
          아니요
        </PostReviewBottomNextButton>
      </PostReviewImgChkButtonWarpper>
    </PostReViewContainer>
  );
};

export default PostReviewImgChk;
