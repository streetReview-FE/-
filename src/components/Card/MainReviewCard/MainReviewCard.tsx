import styled from "styled-components";
import iconComment from "../../../assets/Icons/fi-rr-comments.svg";
import iconHeart from "../../../assets/Icons/fi-rr-heart.svg";
import testreviewsvg from "../../../assets/test-review.svg";
import testUser from "../../../assets/test-userimg.svg";
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
        <ReviewCardContentOver>...</ReviewCardContentOver>
      </>
    ) : (
      title
    );
  return (
    <MainReviewCardWrapper>
      {/* 리뷰 이미지 클릭시 해당 리뷰 페이지로 이동 */}
      <MainRevieWCardReviewer>
        <MainRevieWCardReviewerImg src={testUser} alt="testUser" />
        "유저이름"
      </MainRevieWCardReviewer>
      <MainReviewCardImg src={testreviewsvg} alt="testreviewsvg" />

      <MainReviewWrapper>
        {/* 리뷰 제목 */}
        <MainReviewTopContent>
          <MainReviewTitle>{titleText}</MainReviewTitle>
          <MainReviewCommentandHeart>
            <MainReviewComment>
              <MainReviewCommentImg src={iconComment} alt="iconComment" />
              {20}
            </MainReviewComment>
            <MainReviewHeart>
              <MainReviewHeartImg src={iconHeart} alt="iconHeart" />
              {30}
            </MainReviewHeart>
          </MainReviewCommentandHeart>
          {/* <ReviewCardDate>{date}</ReviewCardDate> */}
        </MainReviewTopContent>
        {/* 태그 정렬을 위한 전체 */}
        <MainReviewBottomContent>
          <MainReviewCardTagWrapper>
            {/* 태그정렬은 최대 3개, 개수만큼 출력 */}
            <MainReviewCardTagBox1>#{tag[0]}</MainReviewCardTagBox1>
            <MainReviewCardTagBox2>#{tag[1]}</MainReviewCardTagBox2>
            <MainReviewCardTagBox3>#{tag[2]}</MainReviewCardTagBox3>
          </MainReviewCardTagWrapper>
          <MainReviewCardDate>
            {date.slice(2, 4)}.{date.slice(4, 6)}.{date.slice(6, 8)}
          </MainReviewCardDate>
        </MainReviewBottomContent>
      </MainReviewWrapper>
    </MainReviewCardWrapper>
  );
};

export default MainReviewCard;

const MainReviewCardWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 26.5rem;
  height: 17.3125rem;
  margin-bottom: 1.94rem;
  position: relative;
`;
const MainRevieWCardReviewer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 0 0.88rem;
  top: 1.37rem;
  left: -1.44rem;
  width: 7.375rem;
  height: 2.1875rem;

  border-radius: 4.59375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;
`;
const MainRevieWCardReviewerImg = styled.img`
  width: 1.4375rem;
  height: 1.3125rem;
  object-fit: cover;
`;

const MainReviewCardImg = styled.img`
  width: 26.5rem;
  height: 13.5rem;
  object-fit: cover;
  border-radius: 1.625rem;
`;
const MainReviewWrapper = styled.div`
  margin-top: 0.69rem;
  margin-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem;
  width: 98%;
`;
const MainReviewTopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MainReviewTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.125rem;
  font-weight: 700;
`;
const MainReviewCommentandHeart = styled.div`
  width: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const MainReviewComment = styled.div`
  display: flex;
  align-items: center;
  color: var(--skyblue, #4cb9e7);
  font-size: 0.75rem;
  font-weight: 500;
  flex-shrink: 0;
`;
const MainReviewCommentImg = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.3rem;
`;
const MainReviewHeart = styled.div`
  display: flex;
  align-items: center;
  color: #ff3608;
  font-size: 0.75rem;
  font-weight: 500;
`;
const MainReviewHeartImg = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.2rem;
  margin-left: 0.3rem;
`;

const MainReviewBottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.37rem;
`;
const MainReviewCardTagWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
`;
const MainReviewCardTagBox1 = styled.div`
  background-color: rgba(171, 223, 241, 1);
  border-radius: 0.3125rem;
  padding: 0.3rem;
`;

const MainReviewCardTagBox2 = styled.div`
  background-color: rgba(12, 74, 96, 1);
  border-radius: 0.3125rem;
  padding: 0.3rem;
  margin: 0 0.63rem;
  padding: 0.3rem;
`;

const MainReviewCardTagBox3 = styled.div`
  background-color: rgba(255, 154, 131, 1);
  border-radius: 0.3125rem;
  padding: 0.3rem;
`;

const ReviewCardContentOver = styled.div`
  margin-top: 0.2rem;
  font-size: 1rem;
`;
const MainReviewCardDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: var(--orange, #ef7d16);
  font-size: 0.5rem;
  font-weight: 700;
`;
