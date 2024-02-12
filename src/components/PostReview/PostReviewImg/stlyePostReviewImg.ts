import styled from "styled-components";
import Colors from "../../../Styles/Colors";

export const PostReviewImgWrapper = styled.div`
  position: relative;
  width: 9.125rem;
  height: 10.875rem;

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
  width: 9.125rem;
  height: 10.875rem;
  border-radius: 0.625rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
