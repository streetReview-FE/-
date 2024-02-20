import styled from "styled-components";
import Colors from "../../../../Styles/Colors";
import testreviewsvg from "../../../../assets/test-review.svg";
interface ReviewCardProps {
  title: string;
  tag: string[];
  content: string;
  date: string;
}
const M_WriteReviewCard: React.FC<ReviewCardProps> = ({ title, date }) => {
  return (
    <WriteReviewCardWrapper>
      {/* 리뷰 이미지 클릭시 해당 리뷰 페이지로 이동 */}
      <ReviewCardImg $img={testreviewsvg}>
        <ReviewCardWrapper>
          {/* 리뷰 제목, position === ab */}
          <ReviewCardTitle>{title}</ReviewCardTitle>
          <ReviewCardDate>{date}</ReviewCardDate>
        </ReviewCardWrapper>
      </ReviewCardImg>
    </WriteReviewCardWrapper>
  );
};

export default M_WriteReviewCard;

const WriteReviewCardWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem 0;
  width: 14.6875rem;
  height: 6.375rem;
  position: relative;
`;
const ReviewCardImg = styled.div<{ $img: string }>`
  width: 14.6875rem;
  height: 6.375rem;
  border-radius: 1.25rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  //   background-size: cover;
`;
const ReviewCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
`;
const ReviewCardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: ${Colors.mainColor};
  font-weight: 600;
  width: 7.375rem;
  height: 1rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  margin-top: -0.5rem;
`;
const ReviewCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1.5rem;
  text-align: center;
  border-radius: 0 0 1.25rem 1.25rem;
  background: #000;
  color: #fff;
  font-weight: 600;
  font-size: 0.75rem;
  color: white;
`;
