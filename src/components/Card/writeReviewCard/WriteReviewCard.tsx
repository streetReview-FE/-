import styled from "styled-components";
import Colors from "../../../Styles/Colors";
import testreviewsvg from "../../../assets/test-review.svg";
interface ReviewCardProps {
  title: string;
  tag: string[];
  content: string;
  date: string;
}
const WriteReviewCard: React.FC<ReviewCardProps> = ({ title, tag, content, date }) => {
  const contentTextLength = content.length;
  const contentText =
    contentTextLength > 60 ? (
      <>
        {content.slice(0, 60)}
        <ReviewCardContentOver>...</ReviewCardContentOver>
      </>
    ) : (
      content
    );
    return (
      <WriteReviewCardWrapper>
            {/* 리뷰 이미지 클릭시 해당 리뷰 페이지로 이동 */}
            <ReviewCardImg src={testreviewsvg} alt="testreviewsvg"/>
            <ReviewCardWrapper>
                {/* 리뷰 제목, position === ab */}
                <ReviewCardTitle>{title}</ReviewCardTitle>
                {/* 태그 정렬을 위한 전체 */}
                <ReviewCardTagWrapper>
                    {/* 태그정렬은 최대 3개, 개수만큼 출력 */}
                    <ReviewCardTagBox1>{tag[0]}</ReviewCardTagBox1>
                    <ReviewCardTagBox2>{tag[1]}</ReviewCardTagBox2>
                    <ReviewCardTagBox3>{tag[2]}</ReviewCardTagBox3>
                </ReviewCardTagWrapper>
                <ReviewCardcontent>
                  {contentText}
                </ReviewCardcontent>
                <ReviewCardDate>{date}</ReviewCardDate>
            </ReviewCardWrapper>
      </WriteReviewCardWrapper>
    )
  };
  
export default WriteReviewCard;

  const WriteReviewCardWrapper = styled.div`
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 14rem;
    height: 25rem;
    position: relative;
    margin-left: 2%;
  `
  const ReviewCardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
  const ReviewCardWrapper = styled.div`
    position:absolute;
    bottom:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 1.25rem 1.25rem;
    width: 100%;
    height: 40%;
    background: #FFF;
  `;

const ReviewCardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.mainColor};
    color: #FFF;
    font-weight: 600;
    max-width: 8rem;
    max-height: 2rem;
    width: 60%;
    height: 30%;
    border-radius: 1rem;

    font-size: 0.75rem;
    margin: -1rem 0 3% 0;

`;

const ReviewCardTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.75rem;
  color: white;
  font-size: 0.5rem;
  font-weight: 700;
  // margin-top: ;
`;

const ReviewCardTagBox1 = styled.div`
  background-color: rgba(171, 223, 241, 1);
  border-radius: 0.31rem;
  padding: 0.3rem;
`;

const ReviewCardTagBox2 = styled.div`
  background-color: rgba(12, 74, 96, 1);
  border-radius: 0.31rem;
  padding: 0.3rem;
`;

const ReviewCardTagBox3 = styled.div`
  background-color: rgba(255, 154, 131, 1);
  border-radius: 0.31rem;
  padding: 0.3rem;
`;

const ReviewCardcontent = styled.div`
  margin: 7% 0;
  color: #000;
  font-size: 0.625rem;
  font-weight: 500;
  padding: 0 15%;
  white-space: pre-wrap;
`;
const ReviewCardContentOver = styled.div`
  margin-top: 0.2rem;
  font-size: 1rem;
`
const ReviewCardDate = styled.div`
    width: 100%;
    text-align: center;
    border-radius: 0 0 1.25rem 1.25rem;
    background: #000;
    color: #FFF;
    font-weight: 600;
    font-size: 0.75rem;
    color: white;
    padding-top: 0.25rem;
`;

  