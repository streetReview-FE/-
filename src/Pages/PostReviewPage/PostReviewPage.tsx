import { Outlet } from "react-router-dom";
import { Container } from "../../components/Login/style";
import MypgeSideTitle from "../../components/Mypage/MypgeSideTitle";
import TopSideToggle from "../../components/TopSideToggle/TopSideToggle";
import {
  ContainerContentWrapper,
  ContentDivWrapper,
  PostReviewPageContainer,
  PostReviewPageWrapper,
} from "./stlyePostReviewPage";
const PostReviewPage = () => {
  return (
    // 마이페이지 고정화면
    <Container>
      <PostReviewPageContainer>
        {/* 토글 */}
        <TopSideToggle />

        <PostReviewPageWrapper>
          {/* 마이페이지 오른쪽 화면 */}
          <ContainerContentWrapper>
            {/* 마이페이지 화면 위치 상태 */}
            <MypgeSideTitle selectedIconText={"리뷰작성"} />

            {/* 마이페이지 화면 위치 타이틀 상태 */}
            <ContentDivWrapper>
              <Outlet />
            </ContentDivWrapper>
          </ContainerContentWrapper>
        </PostReviewPageWrapper>
      </PostReviewPageContainer>
    </Container>
  );
};

export default PostReviewPage;
