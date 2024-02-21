import { useNavigate } from "react-router-dom";
import { ReactComponent as Iconarrow } from "../../../../assets/Icons/fi-sr-arrow-small-right.svg";
import {
    PostReViewContainer,
} from "../../stylePostReview";
import { ArrowIcon, PostReviewTextArea, PostReviewTopSpan } from "./M_stlyePostReviewText";

const M_PostReviewText = () => {
  const navigate = useNavigate();
  return (
    <PostReViewContainer>
      <PostReviewTopSpan>방문은 어떠셨나요?</PostReviewTopSpan>
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

export default M_PostReviewText;
