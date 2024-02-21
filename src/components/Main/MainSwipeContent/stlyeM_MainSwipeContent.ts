import styled from "styled-components";

// 세로 스와이프 화면
export const SwipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.7rem;
  left: 0;
  z-index: 1000;
  overflow: hidden;
`;
export const SwipeWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  height: 60.5rem;
  width: ${({ $isOpen }) => ($isOpen ? `31.92rem` : `3.06rem`)};
  border-radius: 0rem 1.25rem 1.25rem 0rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: height 0.3s ease;
`;

// 사이드 창 열었을 때,
export const SwipeMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 6.75rem;
  width: 100%;
`;
// 검색창
export const SwipeMenuSearchBarWrapper = styled.div`
  position: relative;
`;
export const SwipeMenuSearchBar = styled.input`
  width: 28rem;
  height: 3.8125rem;
  border-radius: 0.625rem;
  border: 2px solid #f0780c;
  background: #fff;
  color: var(--111, #ff9a83);
  font-size: 1.25rem;
  font-weight: 600;
  padding-left: 1.56rem;
  &::placeholder {
    color: var(--111, #ff9a83);
  }
  &:focus {
    outline: none;
  }
`;
export const SwipeMenuSearchBarImg = styled.img`
  position: absolute;
  transform: translate(-100%, -50%);
  top: 50%;
  right: 0%;
  width: 1.5rem;
  height: 1.5rem;
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
  width: 3.5625rem;
  height: 3.5625rem;
  margin-left: -1.75rem;
  background-color: #fff;
  cursor: pointer;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const ArrowInDragCircle = styled.img<{ $isOpen: boolean }>`
  width: 1.75rem;
  height: 1.75rem;
  transform: ${({ $isOpen }) => ($isOpen ? `rotate(270deg)` : `rotate(90deg)`)};
`;
