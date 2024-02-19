import React from "react";
import styled from "styled-components";
import { ReactComponent as Iconarrow } from "../../../../assets/Icons/fi-sr-arrow-small-right.svg";
import heartIcon from "../../../../assets/Icons/fi-sr-heart.svg";
import test_userimg from "../../../../assets/test-userimg.svg";
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
const M_WriteLikeCommentCard: React.FC<MyCommentCardProps> = ({
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <LikeCommentBoxContentNickName>
                {nickname}
              </LikeCommentBoxContentNickName>
              <LikeCommentBoxContentDate>{date}</LikeCommentBoxContentDate>
            </div>
            <LikeCommentBoxContenText>{contentText}</LikeCommentBoxContenText>
          </LikeCommentBoxContent>
          <LikeCommentBoxImg $img={img} />
        </LikeCommentBox>
      </LikeCommentBoxWrapper>
      <MypageNavIcon path={""} img={Iconarrow} />
    </LikeCommentBoxContainer>
  );
};
const LikeCommentBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.56rem;
`;
const LikeCommentBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(240, 240, 240, 1);
  width: 16.875rem;
  height: 3.0625rem;
  border-radius: 1.25rem;
`;
const LikeCommentBoxHeart = styled.img`
  width: 1.17231rem;
  height: 1.17231rem;
`;
const LikeCommentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.94rem;
  padding-right: 0.71rem;
  width: 100%;
`;
const LikeCommentBoxIconWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.40319rem;
  height: 2.40319rem;
  border-radius: 0.9375rem;
  background: #fff;
  margin-left: 0.77rem;
`;
const LikeCommentBoxIcon = styled.img`
  width: 1.524rem;
  height: 1.524rem;
`;
const LikeCommentBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  margin-right: auto;
  margin-left: 0.53rem;
`;
const LikeCommentBoxContentTitle = styled.div`
  color: var(--bluishgreen, #0c4a60);
  font-size: 0.3125rem;
  font-size: 0.3125rem;
  font-weight: 600;
  margin-bottom: 0.09rem;
`;
const LikeCommentBoxContentNickName = styled.div`
  color: #000;
  font-size: 0.375rem;
  font-weight: 700;
  margin-right: 0.2rem;
`;
const LikeCommentBoxContentDate = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.375rem;
  font-weight: 500;
`;
const LikeCommentBoxContenText = styled.div`
  color: #000;
  font-size: 0.5rem;
  font-weight: 700;
  margin-top: 0.13rem;
`;
const LikeCommentBoxImg = styled.div<{ $img: string }>`
  width: 1.34813rem;
  height: 1.34813rem;
  border-radius: 0.3125rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const IconImg = styled.img`
  width: 1.17231rem;
  height: 1.17231rem;
  margin-left: 0.31rem;
`;

export default M_WriteLikeCommentCard;
