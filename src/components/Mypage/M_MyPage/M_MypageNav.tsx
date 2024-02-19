import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../../Styles/Colors";
import PagePath from "../../../constants/PagePath";

type MypageSelectedIconProp = {
  selectedIcon: string;
};
type MypageNavIconProp = {
  path: string;
  label: string;
};
const M_MyPageNav = ({ selectedIcon }: MypageSelectedIconProp) => {
  const navigate = useNavigate();

  // 화면별 네비바 포인트
  const getIconStyle = (path: string) => {
    const selected = selectedIcon === path;
    const color = selected ? Colors.fontSelectColor : Colors.fontBasicGrayColor;
    return { color };
  };
  // 네비바 구성 요소 컴포넌트
  const MypageNavIcon = ({ path, label }: MypageNavIconProp) => {
    return (
      <IconSpan
        onClick={() => navigate(path)}
        style={{ ...getIconStyle(path) }}
      >
        {label}
      </IconSpan>
    );
  };

  return (
    <MyPageNavWrapper>
      <MypageNavIcon path={PagePath.MypageRivew} label="내 리뷰" />
      <MypageNavIcon path={PagePath.MypageMycomment} label="내 댓글" />
      <MypageNavIcon path={PagePath.MypageLikecomment} label="좋아요한 댓글" />
      <MypageNavIcon path={PagePath.MypageUserSecession} label="탈퇴하기" />
    </MyPageNavWrapper>
  );
};

export default M_MyPageNav;
// 마이페이지 네비바
const MyPageNavWrapper = styled.ul`
  width: 90%;
  margin-top: 2.06rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const IconSpan = styled.label`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  margin: 0 auto;
  white-space: nowrap;
`;
