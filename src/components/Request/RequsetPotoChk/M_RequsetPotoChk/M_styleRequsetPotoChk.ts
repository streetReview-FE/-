import styled from "styled-components";
import Colors from "../../../../Styles/Colors";

export const PostReviewImgChkButtonWarpper = styled.div`
  display: flex;
  align-items: center;
`;
export const PostReViewContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 1.5rem;
`;

// PostReView 컴포넌트의 상단 아이콘
export const PostReviewTopIcon = styled.div<{ $img: string }>`
  width: 7.625rem;
  height: 8rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 11rem;
`;

// PostReView 컴포넌트의 상단 글
export const PostReviewTopSpan = styled.span`
  color: ${Colors.request.SpanGray};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

// PostReView 컴포넌트의 버튼 스타일
export const PostReviewBottomNextButton = styled.div<{
  $width: number;
  $height: number;
  $marginTop: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ $marginTop }) => `${$marginTop}rem`};
  color: ${Colors.white};
  text-align: center;
  font-size: 1rem;
  font-weight: 700;

  width: ${({ $width }) => `${$width}rem`};
  height: ${({ $height }) => `${$height}rem`};
  border-radius: 0.3125rem;
  background: ${Colors.post.buttonColor};
  box-shadow: 4px 4px 4px 0px ${Colors.post.buttonShadow};
`;
