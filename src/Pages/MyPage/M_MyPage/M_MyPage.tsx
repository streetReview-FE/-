import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "../../../components/Login/style";
import MMyPageNav from "../../../components/Mypage/M_MyPage/M_MypageNav";
import MTopSideToggle from "../../../components/TopSideToggle/M_TopSideToggle/M_TopSideToggle";
import * as M from "./M_stlyeMyPage";
const M_MyPage = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState(location.pathname);
  useEffect(() => {
    setSelectedIcon(location.pathname);
  }, [location.pathname]); //주소 변경마다 업데이트

  return (
    // 마이페이지 고정화면
    <Container>
      <M.MyPageContainer>
        {/* 토글 */}
        <MTopSideToggle />
        <M.MyPageWrapper>
          {/* 마이페이지 오른쪽 화면 */}
          <M.ContainerContentWrapper>
            {/* 마이페이지 화면 위치 타이틀 상태 */}
            <M.ContentDivWrapper>
              <span>TRIPVIEW 마이페이지</span>
              <MMyPageNav selectedIcon={selectedIcon} />
              <Outlet />
            </M.ContentDivWrapper>
          </M.ContainerContentWrapper>
        </M.MyPageWrapper>
      </M.MyPageContainer>
    </Container>
  );
};

export default M_MyPage;
