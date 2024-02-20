import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "../../components/Login/style";
import MyPageNav from "../../components/Mypage/MypageNav";
import MypgeSideTitle from "../../components/Mypage/MypgeSideTitle";
import TopSideToggle from "../../components/TopSideToggle/TopSideToggle";
import PagePath from "../../constants/PagePath";
import * as W from "./stlyeMyPage";
const MyPage = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState(location.pathname);
  useEffect(() => {
    setSelectedIcon(location.pathname);
  }, [location.pathname]); //주소 변경마다 업데이트


  // 화면별 상단 상태
  const getButtonText = (path: string) => {
    let buttonText: string;
    let titleText: string;
    switch (path) {
      case PagePath.MypageRivew:
        buttonText = "내 리뷰";
        titleText = "내 리뷰";
        break;
      case PagePath.MypageMycomment:
        buttonText = "내 댓글";
        titleText = "내 댓글";
        break;
      case PagePath.MypageLikecomment:
        buttonText = "좋아요한 댓글";
        titleText = "좋아요한 댓글";
        break;
      case PagePath.MypageUserSecession:
        buttonText = "계정 삭제";
        titleText = "탈퇴하기";
        break;
      default:
        buttonText = "내 리뷰";
        titleText = "내 리뷰";
    }
    return { buttonText, titleText };
  }
  return (
    // 마이페이지 고정화면
    <Container>
      <W.MyPageContainer>
        {/* 토글 */}
        <TopSideToggle />

        <W.MyPageWrapper>
          {/* 마이페이지 네비바 */}
          <MyPageNav selectedIcon={selectedIcon} />

          {/* 마이페이지 오른쪽 화면 */}
          <W.ContainerContentWrapper>
            {/* 마이페이지 화면 위치 상태 */}
            <MypgeSideTitle selectedIconText={getButtonText(selectedIcon).buttonText} />

            {/* 마이페이지 화면 위치 타이틀 상태 */}
            <W.ContentDivWrapper>
              <span>TRIPVIEW  {getButtonText(selectedIcon).titleText}</span>
              <Outlet />
            </W.ContentDivWrapper>
          </W.ContainerContentWrapper>
        </W.MyPageWrapper>
      </W.MyPageContainer>
    </Container>
  );
};

export default MyPage;
