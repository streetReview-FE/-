import styled from "styled-components";

export const ModalContentComment = styled.div`
  width: 85%;
  background: blue;
  margin-top: 5.63rem;
  position: relative;
`;
export const ModalContentCommentCardWrapper = styled.div`
  width: 100%;
  height: 2.3125rem;
  display: flex;
  margin-bottom: 1.5rem;
`;
export const ModalContentCommentCardUserImg = styled.img`
  width: 2.625rem;
  height: 2.3125rem;
`;
export const ModalContentCommentCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.81rem;
`;
export const ModalContentCommentCardContentTop = styled.div`
  display: flex;
  width: 100%;
`;
export const ModalContentCommentCardContentName = styled.div`
  color: #000;
  font-size: 0.625rem;
  font-weight: 700;
  margin-right: 0.56rem;
`;
export const ModalContentCommentCardContentDate = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.5rem;
  font-weight: 500;
`;
export const ModalContentCommentCardContentText = styled.div`
  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;
  margin-top: 0.12rem;
`;
export const ModalContentCommentCardContentImg = styled.div<{ $img: string }>`
  margin-left: 1.44rem;
  margin-right: auto;
  width: 1.9375rem;
  height: 1.9375rem;
  border-radius: 0.3125rem;

  object-fit: cover;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const MainReviewCommentandHeart = styled.div`
  display: flex;
  align-items: center;
  margin-right:1.56rem;
`;
export const MainReviewCommentIcon = styled.img`
  width: 1.0625rem;
  height: 1.0625rem;
  margin-right: 0.19rem;
`;
export const MainReviewCommentInputWrapper = styled.div`
  width: 27.6875rem;
  height: 2.875rem;
  border-radius: 0.9375rem;
  background: rgba(217, 217, 217, 1);
  position: absolute;
  bottom: 4.06rem;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainReviewCommentInput = styled.input`
  width: 24.4375rem;
  height: 1.9375rem;
  border-radius: 0.75rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
  &:focus {
    outline: none;
  }
  border: none;
`;
export const MainReviewCommentInputButton = styled.img`
  width: 2.125rem;
  height: 2.125rem;
`;
