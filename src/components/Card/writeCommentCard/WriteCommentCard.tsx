import React from "react";
import styled from "styled-components";
import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import test_userimg from "../../../assets/test-userimg.svg";
interface MyCommentCardProps {
  date: string;
  title: string;
  contentText: string;
  img: string;
  index: number;
}
type MycommentIconProp = {
  path: string;
  index: number;
  img: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};
const WriteCommentCard: React.FC<MyCommentCardProps> = ({
  date,
  title,
  contentText,
  img,
  index,
}) => {
  const MypageNavIcon = ({ path, index, img }: MycommentIconProp) => {
    return (
      <IconImg
        as={img}
        fill={
          index % 2 === 0 ? "rgba(76, 185, 231, 1)" : "rgba(156, 156, 156, 1)"
        }
      />
    );
  };
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
          <div style={{ flexDirection: "column" }}>
            <EventTitle>#{title}</EventTitle>
            <EventContentText>{contentText}</EventContentText>
          </div>
          <EventImg $img={img} />
        </MyCommentContent>
      </MyCommentContentWrapper>
      <MypageNavIcon path={""} index={index} img={Iconarrow} />
    </MyCommentBox>
  );
};

const MyCommentBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.63rem;
`;
const MyCommentDateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5625rem;
  height: 4.5625rem;
  border-radius: 0.625rem;
  background: #f0780c;
  margin-left: 1.94rem;
  margin-right: 6.13rem;
`;

const MyCommentDate = styled.div`
  width: 2.875rem;
  height: 2.375rem;
  color: #fff;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 100%; /* 2.25rem */
`;
const MyCommentContentWrapper = styled.div<{ $isOdd: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27.375rem;
  height: 4.5625rem;
  border-radius: 1.25rem;
  background: ${(props) =>
    props.$isOdd % 2 === 0
      ? "rgba(171, 223, 241, 0.49)"
      : "rgba(231, 231, 231, 1)"};
`;
const MyCommentContent = styled.div`
  display: flex;
  align-items: center;
  width: 25.93rem;
  height: 3.0625rem;
`;

const EventUserImg = styled.img`
  width: 3.5rem;
  height: 3.0625rem;
  border-radius: 0.9375rem;
  margin-right: 0.81rem;
`;
const EventTitle = styled.div`
  display: flex;
  color: var(--bluishgreen, #0c4a60);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
`;
const EventImg = styled.div<{ $img: string }>`
  display: flex;
  margin-left: auto;
  width: 1.9375rem;
  height: 1.9375rem;
  border-radius: 0.3125rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const IconImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1.88rem;
`;
const EventContentText = styled.div`
  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;
`;

export default WriteCommentCard;
