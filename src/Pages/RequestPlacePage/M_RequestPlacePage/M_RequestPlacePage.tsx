// RequestPlacePage.tsx
import { Outlet } from "react-router-dom";
import { Container } from "../../../components/Login/style";
import MTopSideToggle from "../../../components/TopSideToggle/M_TopSideToggle/M_TopSideToggle";
import {
    ContainerContentWrapper,
    ContentDivWrapper,
    RequestPageContainer,
    RequestPageWrapper,
} from "./M_styleRequestPlacePage";

const M_RequestPlacePage = () => {
  return (
    // 거리요청 페이지 고정화면
    <Container>
      <RequestPageContainer>
        {/* 토글 */}
        <MTopSideToggle />

        <RequestPageWrapper>
          <ContainerContentWrapper>
            {/* 거리요청 페이지 화면 위치 타이틀 상태 */}
            <ContentDivWrapper>
              <span>TRIPVIEW 거리요청</span>
              <Outlet />
            </ContentDivWrapper>
          </ContainerContentWrapper>
        </RequestPageWrapper>
      </RequestPageContainer>
    </Container>
  );
};

export default M_RequestPlacePage;
