import styled from "styled-components"

export const MyPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
// 마이페이지 고정화면
export const MyPageWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 82%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1.25rem;
  box-shadow: 0rem 0.3rem 0.3rem 0rem rgba(0, 0, 0, 0.25);
  z-index: 50;
`
// 마이페이지 오른쪽 화면
export const ContainerContentWrapper = styled.div`s
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