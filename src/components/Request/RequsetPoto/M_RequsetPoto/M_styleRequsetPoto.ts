import styled from "styled-components";
import Colors from "../../../../Styles/Colors";

export const PostReViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PostReviewImgWrapper = styled.div`
  position: relative;
  width: calc(9.125rem * 0.7);
  height: calc(10.625rem * 0.7);

  border-radius: 0.625rem;
  background: ${Colors.post.reviewImgBackgroundColor};
`;

export const PostReviewImgNoneIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 1.5rem;
  height: 1.5rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const PostReviewImgInput = styled.input`
  display: none;
`;
export const PostReviewImgGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  justify-content: center;
  place-items: center;
`;

export const PostReviewImgBoxImg = styled.div<{ $img: string }>`
  width: calc(9.125rem * 0.7);
  height: calc(10.625rem * 0.7);
  border-radius: 0.625rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

// PostReView 컴포넌트의 상단 글
export const PostReviewTopSpan = styled.span`
  color: ${Colors.request.SpanGray};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0.44rem;
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
