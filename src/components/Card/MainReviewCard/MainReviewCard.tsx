import iconComment from "../../../assets/Icons/fi-rr-comments.svg";
import iconHeart from "../../../assets/Icons/fi-rr-heart.svg";
import testreviewsvg from "../../../assets/test-review.svg";
import testUser from "../../../assets/test-userimg.svg";
import * as M from './style';

interface MainReviewCardProps {
  title: string;
  tag: string[];
  date: string;
}
const MainReviewCard: React.FC<MainReviewCardProps> = ({
  title,
  tag,
  date,
}) => {
  const titleTextLength = title.length;
  const titleText =
    titleTextLength > 20 ? (
      <>
        {title.slice(0, 20)}
        <M.ReviewCardContentOver>...</M.ReviewCardContentOver>
      </>
    ) : (
      title
    );
  return (
    <M.CardWrapper>
      {/* 리뷰 이미지 클릭시 해당 리뷰 페이지로 이동 */}
      <M.CardReviewer>
        <M.Img src={testUser} alt="testUser" />
        "유저이름"
      </M.CardReviewer>
      <M.CardImg src={testreviewsvg} alt="testreviewsvg" />

      <M.MainWrapper>
        {/* 리뷰 제목 */}
        <M.TopContent>
          <M.Title>{titleText}</M.Title>
          <M.Div>
            <M.CommentDiv>
              <M.CommentImg src={iconComment} alt="iconComment" />
              {20}
            </M.CommentDiv>
            <M.HeartDiv>
              <M.HeartImg src={iconHeart} alt="iconHeart" />
              {30}
            </M.HeartDiv>
          </M.Div>
          {/* <ReviewCardDate>{date}</ReviewCardDate> */}
        </M.TopContent>
        {/* 태그 정렬을 위한 전체 */}
        <M.BottomDiv>
          <M.TagWrapper>
            {/* 태그정렬은 최대 3개, 개수만큼 출력 */}
            <M.Box1Div>#{tag[0]}</M.Box1Div>
            <M.Box2Div>#{tag[1]}</M.Box2Div>
            <M.Box3Div>#{tag[2]}</M.Box3Div>
          </M.TagWrapper>
          <M.DateDiv>
            {date.slice(2, 4)}.{date.slice(4, 6)}.{date.slice(6, 8)}
          </M.DateDiv>
        </M.BottomDiv>
      </M.MainWrapper>
    </M.CardWrapper>
  );
};

export default MainReviewCard;