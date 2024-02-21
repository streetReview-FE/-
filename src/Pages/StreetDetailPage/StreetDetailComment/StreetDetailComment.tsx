import iconComment from "../../../assets/Icons/fi-rr-comments.svg";
import iconHeart2 from "../../../assets/Icons/fi-sr-heart.svg";
import test_userimg from "../../../assets/test-userimg.svg";
import { ReviewDetail } from "../../../constants/interface";
import * as W from "./stlyeStreetDetailComment";
interface ReviewDetailProps {
  reviewDetail: ReviewDetail[];
}

const StreetDetailComment: React.FC<ReviewDetailProps> = ({ reviewDetail }) => {
  return (
    <W.ModalContentComment>
      {/* 댓글 매핑 */}
      {reviewDetail.map((comment, index) => {
        const dateObject = new Date(comment.createdDate);
        const year = dateObject.getFullYear().toString().slice(2);
        const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
        const day = dateObject.getDate().toString().padStart(2, "0");
        const hours = dateObject.getHours().toString().padStart(2, "0");
        const minutes = dateObject.getMinutes().toString().padStart(2, "0");
        // 변경된 날짜 형식
        const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
        return (
          <W.ModalContentCommentCardWrapper key={index}>
            {comment.member.picture !== null ? (
              <W.ModalContentCommentCardUserImg
                src={comment.member.picture}
                alt="userImg"
              />
            ) : (
              <W.ModalContentCommentCardUserImg
                src={test_userimg}
                alt="userImg"
              />
            )}
            {/* 수정 */}
            <W.ModalContentCommentCardContent>
              <W.ModalContentCommentCardContentTop>
                {/* 삭제된거에 대해서는 이름을 없애기 위해 */}
                {comment.member.nickName && (
                  <W.ModalContentCommentCardContentName>
                    {comment.member.nickName}
                  </W.ModalContentCommentCardContentName>
                )}
                <W.ModalContentCommentCardContentDate>
                  {formattedDate}
                </W.ModalContentCommentCardContentDate>
              </W.ModalContentCommentCardContentTop>
              <W.ModalContentCommentCardContentText>
                {comment.content}
              </W.ModalContentCommentCardContentText>
            </W.ModalContentCommentCardContent>
            <W.ModalContentCommentCardContentImg $img={comment.photoList[0]} />
            <W.MainReviewCommentandHeart>
              <W.MainReviewCommentIcon src={iconComment} alt="iconComment" />
              {/* 좋아요 기능 나오면 입히기 */}
              <W.MainReviewCommentIcon src={iconHeart2} alt="iconHeart" />
            </W.MainReviewCommentandHeart>
          </W.ModalContentCommentCardWrapper>
        );
      })}
    </W.ModalContentComment>
  );
};
export default StreetDetailComment;
