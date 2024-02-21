import iconComment from "../../../../assets/Icons/fi-rr-comments.svg";
import iconHeart2 from "../../../../assets/Icons/fi-sr-heart.svg";
import test_userimg from "../../../../assets/test-userimg.svg";
import { ReviewDetail } from "../../../../constants/interface";
import * as M from "./M_stlyeStreetDetailComment";

interface ReviewDetailProps {
  reviewDetail: ReviewDetail[];
}
const M_StreetDetailComment: React.FC<ReviewDetailProps> = ({
  reviewDetail,
}) => {
  return (
    <M.ModalContentComment>
      {/* 댓글 매핑 */}
      <>
        {reviewDetail.map((comment, index) => {
          // 날짜 파싱
          const dateObject = new Date(comment.createdDate);
          const year = dateObject.getFullYear().toString().slice(2);
          const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
          const day = dateObject.getDate().toString().padStart(2, "0");
          const hours = dateObject.getHours().toString().padStart(2, "0");
          const minutes = dateObject.getMinutes().toString().padStart(2, "0");
          // 변경된 날짜 형식
          const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
          return (
            <M.ModalContentCommentCardWrapper key={index}>
              {comment.member.picture !== null ? (
                <M.ModalContentCommentCardUserImg
                  src={comment.member.picture}
                  alt="userImg"
                />
              ) : (
                <M.ModalContentCommentCardUserImg
                  src={test_userimg}
                  alt="userImg"
                />
              )}
              {/* 수정 */}
              <M.ModalContentCommentCardContent>
                <M.ModalContentCommentCardContentTop>
                  {/* 삭제된거에 대해서는 이름을 없애기 위해 */}
                  {comment.member.nickName && (
                    <M.ModalContentCommentCardContentName>
                      {comment.member.nickName}
                    </M.ModalContentCommentCardContentName>
                  )}
                  <M.ModalContentCommentCardContentDate>
                    {formattedDate}
                  </M.ModalContentCommentCardContentDate>
                </M.ModalContentCommentCardContentTop>
                <M.ModalContentCommentCardContentText>
                {comment.content}
                </M.ModalContentCommentCardContentText>
              </M.ModalContentCommentCardContent>
              <M.ModalContentCommentCardContentImg $img={comment.photoList[0]} />
              <M.MainReviewCommentandHeart>
                <M.MainReviewCommentIcon src={iconComment} alt="iconComment" />

                <M.MainReviewCommentIcon
                  // onClick={() => toggleHeart(comment.reviewId)}
                  src={iconHeart2}
                  alt="iconHeart"
                />
              </M.MainReviewCommentandHeart>
            </M.ModalContentCommentCardWrapper>
          );
        })}
      </>
    </M.ModalContentComment>
  );
};
export default M_StreetDetailComment;
