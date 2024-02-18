import styled from "styled-components";
import Colors from "../../../../Styles/Colors";

// 세로 스와이프 화면
export const SwipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  width: 100%;
`;
export const SwipeWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? `80%` : `3rem;`)};
  background-color: ${({ $isOpen }) =>
    $isOpen ? `${Colors.white};` : `${Colors.orange};`};
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

// 사이드 창 열었을 때,
export const SwipeMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

// 매핑되는 리뷰
export const SwipeMenuReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.44rem;
  width: 100%;
`;
export const SwipeMenuReviewMappingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2.81rem;
`;
export const SwipeMenuReviewMappingTitle = styled.span`
  color: #000;
  font-size: 1.25rem;
  font-weight: 700;
`;

// 사이드창 동그라미
export const DragCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: -1.4rem;
  width: 2.45688rem;
  height: 2.45688rem;
  background-color: ${Colors.white};
  cursor: pointer;
  z-index: 2;
`;
export const ArrowInDragCircle = styled.img<{ $isOpen: boolean }>`
  width: 1.75rem;
  height: 1.75rem;
  transform: ${({ $isOpen }) => ($isOpen ? `rotate(180deg)` : `rotate(0deg)`)};
`;