import { useNavigate } from "react-router-dom";
import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import IconPostReviewText from "../../../assets/Icons/icon_postreviewtext.png";
import {
  PostReViewContainer,
  PostReviewTopIcon,
  PostReviewTopSpan,
} from "../stylePostReview";
import { ArrowIcon, PostReviewTextArea } from "./stlyePostReviewText";

const PostReviewText = () => {
  const navigate = useNavigate();
  return (
    <PostReViewContainer>
      <PostReviewTopIcon $img={IconPostReviewText} />
      <PostReviewTopSpan>의 방문은 어떠셨나요?</PostReviewTopSpan>
      <PostReviewTextArea
        id="searchKetword"
        placeholder={"리뷰를 작성해주세요!"}
      />
      <ArrowIcon
        onClick={() => navigate(`/postReview/potoChk`)}
        fill={"rgba(239, 125, 22, 1)"}
        as={Iconarrow}
      />
    </PostReViewContainer>
  );
};

export default PostReviewText;
