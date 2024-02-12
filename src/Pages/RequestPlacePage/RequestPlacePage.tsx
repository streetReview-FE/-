// RequestPlacePage.tsx
import { Outlet } from "react-router-dom";
import { Container } from "../../components/Login/style";
import MypgeSideTitle from "../../components/Mypage/MypgeSideTitle";
import TopSideToggle from "../../components/TopSideToggle/TopSideToggle";
import {
  ContainerContentWrapper,
  ContentDivWrapper,
  RequestPageContainer,
  RequestPageWrapper,
} from "./styleRequestPlacePage";

const RequestPlacePage = () => {
  return (
    // 거리요청 페이지 고정화면
    <Container>
      <RequestPageContainer>
        {/* 토글 */}
        <TopSideToggle />

        <RequestPageWrapper>
          {/* 거리요청 페이지 오른쪽 화면 */}
          <ContainerContentWrapper>
            {/* 거리요청 페이지 화면 위치 상태 */}
            <MypgeSideTitle selectedIconText={"거리요청"} />

            {/* 거리요청 페이지 화면 위치 타이틀 상태 */}
            <ContentDivWrapper>
              <span>TRIPVIEW {"거리요청"}</span>
              <Outlet />
            </ContentDivWrapper>
          </ContainerContentWrapper>
        </RequestPageWrapper>
      </RequestPageContainer>
    </Container>
  );
};

export default RequestPlacePage;
