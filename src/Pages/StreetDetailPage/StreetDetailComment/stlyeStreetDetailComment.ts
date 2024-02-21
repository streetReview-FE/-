import styled from "styled-components";

export const ModalContentComment = styled.div`
  height: 27rem;
  overflow-y: auto;
  margin-bottom: 3rem;
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
  border-radius: 1rem;
`;
export const ModalContentCommentCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.81rem;
  margin-right: auto;
`;
export const ModalContentCommentCardContentTop = styled.div`
  display: flex;
  align-items: center;
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
  display: flex;
  width: 100%;
`;
export const ModalContentCommentCardContentImg = styled.div<{ $img: string }>`
  margin-right: 1.19rem;
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
  margin-right: 1.56rem;
`;
export const MainReviewCommentIcon = styled.img`
  width: 1.0625rem;
  height: 1.0625rem;
  margin-right: 0.19rem;
`;
