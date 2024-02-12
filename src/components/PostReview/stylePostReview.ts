import styled from "styled-components";
import Colors from "../../Styles/Colors";

// PostReView 컴포넌트의 기본 컨테이너
export const PostReViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// PostReView 컴포넌트의 상단 아이콘
export const PostReviewTopIcon = styled.div<{ $img: string }>`
  width: 4.25rem;
  height: 4.25rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  margin-bottom: 1.87rem;
`;

// PostReView 컴포넌트의 상단 글
export const PostReviewTopSpan = styled.span`
  color: ${Colors.post.SpanOrange};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;

  margin-bottom: 3rem;
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
  font-size: 1.75rem;
  font-weight: 700;

  width: ${({ $width }) => `${$width}rem`};
  height: ${({ $height }) => `${$height}rem`};
  border-radius: 0.3125rem;
  background: ${Colors.post.buttonColor};
  box-shadow: 4px 4px 4px 0px ${Colors.post.buttonShadow};
`;
