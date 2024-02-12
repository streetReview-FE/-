import { useNavigate } from "react-router-dom";
import IconPostReviewCheck from "../../../assets/Icons/icon_postreviewcheck.png";
import {
  PostReViewContainer,
  PostReviewBottomNextButton,
  PostReviewTopIcon,
  PostReviewTopSpan,
} from "../stylePostReview";
import { PostReviewArea } from "./stlyePostReviewCheck";
const PostReviewCheck = () => {
  const navigate = useNavigate();
  return (
    <PostReViewContainer>
      <PostReviewTopIcon $img={IconPostReviewCheck} />
      <PostReviewTopSpan>님의 리뷰</PostReviewTopSpan>
      <PostReviewArea
        id="searchKetword"
        placeholder={"리뷰를 작성해주세요!"}
      />
      <PostReviewBottomNextButton
        $width={20.75}
        $height={2.5625}
        $marginTop={3.63}
        onClick={() => navigate(`/postReview/check`)}
      >
        리뷰올리기
      </PostReviewBottomNextButton>
    </PostReViewContainer>
  );
};

export default PostReviewCheck;
