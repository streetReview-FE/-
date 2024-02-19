import React from "react";
import styled from "styled-components";
import test_userimg from "../../../../assets/test-userimg.svg";
interface MyCommentCardProps {
  date: string;
  contentText: string;
  img: string;
  index: number;
}
const M_WriteCommentCard: React.FC<MyCommentCardProps> = ({
  date,
  contentText,
  img,
  index,
}) => {
  const content =
    contentText.length > 15 ? <>{contentText.slice(0, 15)}...</> : contentText;
  return (
    <MyCommentBox>
      <MyCommentDateWrapper>
        {/* 날짜파트 */}
        <MyCommentDate>
          {date.toString().slice(-2, -1) === "0"
            ? date.toString().slice(-1)
            : date.toString().slice(-2)}
        </MyCommentDate>
      </MyCommentDateWrapper>
      <MyCommentContentWrapper $isOdd={index}>
        {/* 내코멘트 */}
        <MyCommentContent>
          <EventUserImg src={test_userimg} alt="testUserImg" />
          <EventContentText>{content}</EventContentText>
          <EventImg $img={img} />
        </MyCommentContent>
      </MyCommentContentWrapper>
    </MyCommentBox>
  );
};

const MyCommentBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
const MyCommentDateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.625rem;
  background: #f0780c;
  margin-right: 0.38rem;
`;

const MyCommentDate = styled.div`
  color: #fff;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 100%; /* 2.25rem */
`;
const MyCommentContentWrapper = styled.div<{ $isOdd: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.875rem;
  height: 3.0625rem;
  border-radius: 1.25rem;
  padding-left: 0.81rem;
  padding-right: 0.41rem;
  background: ${(props) =>
    props.$isOdd % 2 === 0
      ? "rgba(171, 223, 241, 0.49)"
      : "rgba(231, 231, 231, 1)"};
`;
const MyCommentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const EventUserImg = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 0.9375rem;
  margin-right: 0.5rem;
`;
const EventImg = styled.div<{ $img: string }>`
  display: flex;
  margin-left: auto;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.3125rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const EventContentText = styled.div`
  color: #000;
  font-size: 0.6875rem;
  font-weight: 700;
`;

export default M_WriteCommentCard;
