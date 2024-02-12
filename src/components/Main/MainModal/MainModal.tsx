import styled from "styled-components";

// 모달용ㅇ
import MainModalComment from "./MainModalComment/MainModalComment";
import MainModalReview from "./MainModalReview/MainModalReview";
const MainModal = () => {
  return (
    <ModalWrapper>
      <ModalContentWrapper>
        <MainModalReview />
        <MainModalComment />
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

export default MainModal;

// 모달
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContentWrapper = styled.div`
  width: 65.8125rem;
  height: 41.625rem;
  border-radius: 1.25rem;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  // align-items: center;
  justify-items: center;
`;
