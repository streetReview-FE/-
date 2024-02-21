import styled from "styled-components";

export const ModalContentComment = styled.div`
  width: 90%;
  margin-top: 2rem;
  position: relative;
  height: 80%;
  overflow-y: auto;
  margin-bottom: 5rem;
`;
export const ModalContentCommentCardWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.4rem 0.37rem;
  border-radius: 0.9375rem;
`;
// 이미지 아이콘
export const ModalContentCommentCardUserImg = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
`;

// 날짜 및 내용
export const ModalContentCommentCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 0.75rem;
  font-weight: 700;
  margin-right: 0.56rem;
`;
export const ModalContentCommentCardContentDate = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.75rem;
  font-weight: 500;
`;
export const ModalContentCommentCardContentText = styled.div`
  color: #000;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.12rem;
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
`;
export const MainReviewCommentIcon = styled.img`
  width: 1.0625rem;
  height: 1.0625rem;
  margin-right: 0.19rem;
`;

