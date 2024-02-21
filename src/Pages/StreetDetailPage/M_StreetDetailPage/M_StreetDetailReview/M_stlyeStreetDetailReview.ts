import styled from "styled-components";
import Colors from "../../../../Styles/Colors";

// 모달
export const ModalContentReview = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin-top: 1.06rem;
`;
// 리뷰쓰러가기
export const ModalContentReviewTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const ModalContentReviewTopArrow = styled.div`
  color: rgba(239, 125, 22, 1);
  font-size: 0.75rem;
  font-weight: 700;
`;
export const ModalContentReviewTopArrowIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(180deg);
`;
// 리뷰 내용
export const ModalContentReviewContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 10.3125rem;
  height: 10.3125rem;
  border-radius: 0.625rem;
  background: ${Colors.request.backgroundColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-top: 2.06rem;

  span {
    color: #7b7b7b;
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.7rem;
  }
  color: #7b7b7b;
  font-size: 0.625rem;
  font-weight: 400;

  z-index: 3;
`;
export const ContentNavigateWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0.3rem;
  right: 1rem;
  color: ${Colors.orange};
  font-size: 0.6rem;
  font-weight: 700;
`;
export const ModalContentReviewBottomArrowIcon = styled.div`
  width: 1rem;
  height: 1rem;
`;
// 회색 화살표, 리뷰 내용
export const ModalContentReviewContentGrayArrowIcon = styled.img`
  margin-top: -1.37rem;
  width: 4.9375rem;
  height: 2.75rem;
  z-index: 2;
`;
export const MainRevieWCardReviewerImg = styled.img`
  width: 2.3125rem;
  height: 2.0625rem;
  object-fit: cover;
  margin-top: 0.44rem;
  margin-bottom: -0.2rem;
  z-index: 3;
`;
export const MainRevieWCardReviewer = styled.div`
  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 8.4375rem;
  height: 2.1875rem;
  border-radius: 4.59375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const RevieWCardDate = styled.div`
  position: absolute;
  top: -1.4rem;
  transform: translateY(0%);
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.75rem;
  font-weight: 500;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ReviewContent = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: center;
`;
export const ReviewCardImg = styled.div<{ $img: string }>`
  position: relative;
  width: 10.3125rem;
  height: 10.3125rem;
  object-fit: cover;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0.625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ReviewCardTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 1rem;
`;

export const ReviewCardTagBox1 = styled.div`
  background-color: rgba(171, 223, 241, 1);
  border-radius: 0.31rem;
  padding: 0.3rem;
`;

export const ReviewCardTagBox2 = styled.div`
  margin: 0 0.62rem;
  background-color: rgba(12, 74, 96, 1);
  border-radius: 0.31rem;
  padding: 0.3rem;
`;

export const ReviewCardTagBox3 = styled.div`
  background-color: rgba(255, 154, 131, 1);
  border-radius: 0.31rem;
  padding: 0.3rem;
`;
