import React from "react";
import styled from "styled-components";
// import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import heartIcon from "../../../assets/Icons/fi-sr-heart.svg";
import test_userimg from "../../../assets/test-userimg.svg";
interface MyCommentCardProps {
  nickname: string;
  date: string;
  title: string;
  contentText: string;
  img: string;
}
type MycommentIconProp = {
  path: string;
  img: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};
const WriteLikeCommentCard: React.FC<MyCommentCardProps> = ({
  nickname,
  date,
  title,
  contentText,
  img,
}) => {
  const MypageNavIcon = ({ path, img }: MycommentIconProp) => {
    return <IconImg as={img} fill={"rgba(255, 154, 131, 1)"} />;
  };
  return (
    <LikeCommentBoxContainer>
      <LikeCommentBoxWrapper>
        <LikeCommentBox>
          <LikeCommentBoxHeart src={heartIcon} alt="Heart Icon" />
          <LikeCommentBoxIconWarpper>
            <LikeCommentBoxIcon src={test_userimg} alt="testUserImg" />
          </LikeCommentBoxIconWarpper>
          <LikeCommentBoxContent>
            <LikeCommentBoxContentTitle>#{title}</LikeCommentBoxContentTitle>
            <div style={{ display: "flex", alignItems:"center" }}>
              <LikeCommentBoxContentNickName>
                {nickname}
              </LikeCommentBoxContentNickName>
              <LikeCommentBoxContentDate>{date}</LikeCommentBoxContentDate>
            </div>
            <LikeCommentBoxContenText>{contentText}</LikeCommentBoxContenText>
          </LikeCommentBoxContent>
          <LikeCommentBoxImg img={img} />
        </LikeCommentBox>
      </LikeCommentBoxWrapper>
      <MypageNavIcon path={""} img={Iconarrow} />
    </LikeCommentBoxContainer>
  );
};
const LikeCommentBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LikeCommentBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.56rem;
  background: rgba(240, 240, 240, 1);
  width: 41.1875rem;
  height: 7.875rem;
  border-radius: 1.25rem;
`;
const LikeCommentBoxHeart = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
const LikeCommentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 2.19rem;
  margin-right: 2.44rem;
`;
const LikeCommentBoxIconWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.125rem;
  height: 4.5rem;
  border-radius: 0.9375rem;
  background: #fff;
  margin-left: 2.12rem;
`;
const LikeCommentBoxIcon = styled.img`
  width: 3.25rem;
  height: 3.25rem;
`;
const LikeCommentBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15rem;
  margin-left: 2rem;
`;
const LikeCommentBoxContentTitle = styled.div`
  color: var(--bluishgreen, #0c4a60);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.38rem;
`;
const LikeCommentBoxContentNickName = styled.div`
  color: #000;
  font-size: 0.625rem;
  font-weight: 700;
  margin-right: 0.56rem;
`;
const LikeCommentBoxContentDate = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.5rem;
  font-weight: 500;
  margin-top: 0.18rem;
`;
const LikeCommentBoxContenText = styled.div`
  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;
  margin-top: 0.13rem;
`;
const LikeCommentBoxImg = styled.div<{ img: string }>`
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 0.3125rem;
  background: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const IconImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 2.56rem;
`;

export default WriteLikeCommentCard;
