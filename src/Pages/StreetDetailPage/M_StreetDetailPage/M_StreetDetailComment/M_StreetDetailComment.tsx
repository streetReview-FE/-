import iconComment from "../../../../assets/Icons/fi-rr-comments.svg";
import iconHeart2 from "../../../../assets/Icons/fi-sr-heart.svg";
import test_userimg from "../../../../assets/test-userimg.svg";
import { ReviewDetail } from "../../../../constants/interface";
import {
  MainReviewCommentIcon,
  MainReviewCommentandHeart,
  ModalContentComment,
  ModalContentCommentCardContent,
  ModalContentCommentCardContentDate,
  ModalContentCommentCardContentImg,
  ModalContentCommentCardContentName,
  ModalContentCommentCardContentText,
  ModalContentCommentCardContentTop,
  ModalContentCommentCardUserImg,
  ModalContentCommentCardWrapper
} from "./M_stlyeStreetDetailComment";

interface ReviewDetailProps {
  reviewDetail: ReviewDetail[];
}
const M_StreetDetailComment: React.FC<ReviewDetailProps> = ({
  reviewDetail,
}) => {
  // const toggleHeart = (reviewId: number) => {
  //   setCommentList(
  //     commentList.map((comment) =>
  //       comment.reviewId === reviewId
  //         ? {
  //             ...comment,
  //             replyContent: {
  //               ...comment.replyContent,
  //               heart: !comment.replyContent.heart,
  //             },
  //           }
  //         : comment
  //     )
  //   );
  // };
  // const addComment = () => {
  //   const newCommentObj = {
  //     reviewId: commentList.length + 1, // 아이디 우케 나오노
  //     replyPhoto: "newPhotoURL",
  //     replyContent: {
  //       id: "NewUser",
  //       userimg: "",
  //       date: new Date().toLocaleDateString(),
  //       content: newComment,
  //       heart: false,
  //     },
  //   };
  //   setCommentList([...commentList, newCommentObj]);
  //   setNewComment("");
  // };
  // const addReply = (reviewId: number, replyContent: string) => {
  //   setCommentList(
  //     commentList.map((comment) => {
  //       if (comment.reviewId === reviewId) {
  //         const newReply: ReplyContent = {
  //           id: "ReplyUser", // 대댓글 작성자 ID
  //           userimg: test_userimg, // 대댓글 작성자 이미지
  //           date: new Date().toLocaleDateString(),
  //           content: replyContent,
  //           heart: false,
  //         };
  //         const updatedReplies = comment.replyContent.replies
  //           ? [...comment.replyContent.replies, newReply]
  //           : [newReply];
  //         return {
  //           ...comment,
  //           replyContent: {
  //             ...comment.replyContent,
  //             replies: updatedReplies,
  //           },
  //         };
  //       }
  //       return comment;
  //     })
  //   );
  // };

  return (
    <ModalContentComment>
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
            <ModalContentCommentCardWrapper key={index}>
              {comment.member.picture !== null ? (
                <ModalContentCommentCardUserImg
                  src={comment.member.picture}
                  alt="userImg"
                />
              ) : (
                <ModalContentCommentCardUserImg
                  src={test_userimg}
                  alt="userImg"
                />
              )}
              {/* 수정 */}
              <ModalContentCommentCardContent>
                <ModalContentCommentCardContentTop>
                  {/* 삭제된거에 대해서는 이름을 없애기 위해 */}
                  {comment.member.nickName && (
                    <ModalContentCommentCardContentName>
                      {comment.member.nickName}
                    </ModalContentCommentCardContentName>
                  )}
                  <ModalContentCommentCardContentDate>
                    {formattedDate}
                  </ModalContentCommentCardContentDate>
                </ModalContentCommentCardContentTop>
                <ModalContentCommentCardContentText>
                  {comment.content}
                </ModalContentCommentCardContentText>
              </ModalContentCommentCardContent>
              <ModalContentCommentCardContentImg $img={comment.photoList[0]} />
              <MainReviewCommentandHeart>
                <MainReviewCommentIcon src={iconComment} alt="iconComment" />

                <MainReviewCommentIcon
                  // onClick={() => toggleHeart(comment.reviewId)}
                  src={iconHeart2}
                  alt="iconHeart"
                />
              </MainReviewCommentandHeart>
            </ModalContentCommentCardWrapper>
          );
        })}
      </>
    </ModalContentComment>
  );
};
export default M_StreetDetailComment;
