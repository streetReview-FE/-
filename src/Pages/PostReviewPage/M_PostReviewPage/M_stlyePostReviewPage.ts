import styled from "styled-components";

export const PostReviewPageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 1.06rem;
`
// 마이페이지 고정화면
export const PostReviewPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  z-index: 50;
  margin-top: 1.06rem;
`
// 마이페이지 오른쪽 화면
export const ContainerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`
// 마이페이지 화면 위치 타이틀 상태
export const ContentDivWrapper = styled.div`
  margin-top: 3.81rem; 
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #F0780C;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
`
