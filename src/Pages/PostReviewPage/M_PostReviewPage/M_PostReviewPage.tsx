import { Outlet } from "react-router-dom";
import { Container } from "../../../components/Login/style";
import MTopSideToggle from "../../../components/TopSideToggle/M_TopSideToggle/M_TopSideToggle";
import {
    ContainerContentWrapper,
    ContentDivWrapper,
    PostReviewPageContainer,
    PostReviewPageWrapper,
} from "./M_stlyePostReviewPage";
const M_PostReviewPage = () => {
  return (
    // 마이페이지 고정화면
    <Container>
      <PostReviewPageContainer>
        {/* 토글 */}
        <MTopSideToggle />
        <PostReviewPageWrapper>
          <ContainerContentWrapper>
            <ContentDivWrapper>
              <span>TRIPVIEW 거리요청</span>
              <Outlet />
            </ContentDivWrapper>
          </ContainerContentWrapper>
        </PostReviewPageWrapper>
      </PostReviewPageContainer>
    </Container>
  );
};

export default M_PostReviewPage;
