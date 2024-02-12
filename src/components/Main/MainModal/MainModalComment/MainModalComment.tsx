import { useEffect, useState } from "react";
import iconComment from "../../../../assets/Icons/fi-rr-comments.svg";
import iconHeart from "../../../../assets/Icons/fi-rr-heart.svg";
import iconHeart2 from "../../../../assets/Icons/fi-sr-heart.svg";
import iconPlus from "../../../../assets/Icons/icon_plus.svg";
import test_review from "../../../../assets/test-review.svg";
import test_userimg from "../../../../assets/test-userimg.svg";
import {
  MainReviewCommentIcon,
  MainReviewCommentInput,
  MainReviewCommentInputButton,
  MainReviewCommentInputWrapper,
  MainReviewCommentandHeart,
  ModalContentComment,
  ModalContentCommentCardContent,
  ModalContentCommentCardContentDate,
  ModalContentCommentCardContentImg,
  ModalContentCommentCardContentName,
  ModalContentCommentCardContentText,
  ModalContentCommentCardContentTop,
  ModalContentCommentCardUserImg,
  ModalContentCommentCardWrapper,
} from "./stlyeMainModalComment";
interface ReplyContent {
  id: string;
  userimg: string;
  date: string;
  content: string;
  heart: boolean;
  replies?: ReplyContent[];
}

interface Comment {
  reviewId: number;
  replyPhoto: string;
  replyContent: ReplyContent;
}

const MainModalComment = () => {
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  useEffect(() => {
    setCommentList([
      {
        reviewId: 1,
        replyPhoto: test_review,
        replyContent: {
          id: "Yeondu",
          userimg: test_userimg,
          date: "2023.01.03",
          content: "몰랐는데 저도 가봐야겠네요!",
          heart: false,
        },
      },
      {
        reviewId: 2,
        replyPhoto: test_review,
        replyContent: {
          id: "Yeondu",
          userimg: test_userimg,
          date: "2023.01.03",
          content: "몰랐는데 저도 가봐야겠네요!",
          heart: false,
        },
      },
      {
        reviewId: 3,
        replyPhoto: test_review,
        replyContent: {
          id: "Yeondu",
          userimg: test_userimg,
          date: "2023.01.03",
          content: "몰랐는데 저도 가봐야겠네요!",
          heart: false,
        },
      },
    ]);
  }, []);
  const toggleHeart = (reviewId: number) => {
    setCommentList(
      commentList.map((comment) =>
        comment.reviewId === reviewId
          ? {
              ...comment,
              replyContent: {
                ...comment.replyContent,
                heart: !comment.replyContent.heart,
              },
            }
          : comment
      )
    );
  };
  const addComment = () => {
    const newCommentObj = {
      reviewId: commentList.length + 1, // 아이디 우케 나오노
      replyPhoto: "newPhotoURL",
      replyContent: {
        id: "NewUser",
        userimg: "",
        date: new Date().toLocaleDateString(),
        content: newComment,
        heart: false,
      },
    };
    setCommentList([...commentList, newCommentObj]);
    setNewComment("");
  };
  const addReply = (reviewId: number, replyContent: string) => {
    setCommentList(
      commentList.map((comment) => {
        if (comment.reviewId === reviewId) {
          const newReply: ReplyContent = {
            id: "ReplyUser", // 대댓글 작성자 ID
            userimg: test_userimg, // 대댓글 작성자 이미지
            date: new Date().toLocaleDateString(),
            content: replyContent,
            heart: false,
          };
          const updatedReplies = comment.replyContent.replies
            ? [...comment.replyContent.replies, newReply]
            : [newReply];
          return {
            ...comment,
            replyContent: {
              ...comment.replyContent,
              replies: updatedReplies,
            },
          };
        }
        return comment;
      })
    );
  };
  
  return (
    <ModalContentComment>
      {/* 댓글 매핑 */}
      <>
        {commentList.map((comment) => (
          <ModalContentCommentCardWrapper key={comment.reviewId}>
            <ModalContentCommentCardUserImg
              src={comment.replyContent.userimg}
              alt="testUserImg"
            />
            {/* 수정 */}
            <ModalContentCommentCardContent>
              <ModalContentCommentCardContentTop>
                <ModalContentCommentCardContentName>
                  {comment.replyContent.id}
                </ModalContentCommentCardContentName>
                <ModalContentCommentCardContentDate>
                  {comment.replyContent.date}
                </ModalContentCommentCardContentDate>
              </ModalContentCommentCardContentTop>
              <ModalContentCommentCardContentText>
                {comment.replyContent.content}
              </ModalContentCommentCardContentText>
            </ModalContentCommentCardContent>
            <ModalContentCommentCardContentImg $img={comment.replyPhoto} />
            <MainReviewCommentandHeart>
              <MainReviewCommentIcon src={iconComment} alt="iconComment" />

              <MainReviewCommentIcon
                onClick={() => toggleHeart(comment.reviewId)}
                src={comment.replyContent.heart ? iconHeart2 : iconHeart}
                alt="iconHeart"
              />
            </MainReviewCommentandHeart>
          </ModalContentCommentCardWrapper>
        ))}
      </>
      {/* 댓글 추가 */}
      <MainReviewCommentInputWrapper>
        <MainReviewCommentInput
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <MainReviewCommentInputButton
          src={iconPlus}
          alt="iconPlus"
          onClick={addComment}
        />
      </MainReviewCommentInputWrapper>
    </ModalContentComment>
  );
};
export default MainModalComment;
