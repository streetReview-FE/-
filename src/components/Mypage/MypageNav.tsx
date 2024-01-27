import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";
import { ReactComponent as IconCommentHeart } from "../../assets/Icons/comment-heart.svg";
import { ReactComponent as IconComment } from "../../assets/Icons/comment.svg";
import icon_logo from "../../assets/Icons/icon_logo.svg";
import { ReactComponent as IconReview } from "../../assets/Icons/review.svg";
import { ReactComponent as IconRemoveUser } from "../../assets/Icons/user-remove.svg";
import PagePath from "../../constants/PagePath";

type MypageSelectedIconProp = {
    selectedIcon:string;
}
type MypageNavIconProp = {
    path: string;
    label : string;
    img: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
}
const MyPageNav = ({ selectedIcon }: MypageSelectedIconProp ) => {
  const navigate = useNavigate();

  // 화면별 네비바 포인트
  const getIconStyle = (path: string) => {
    const selected = selectedIcon === path;
    const color = selected ? Colors.fontSelectColor : Colors.fontBasicGrayColor;
    return { color };
  };
  // 네비바 구성 요소 컴포넌트
  const MypageNavIcon = ({ path, label, img }: MypageNavIconProp) => {
    return (
      <IconWrapper onClick={() => navigate(path)} >
        <IconImg as={img} fill={getIconStyle(path).color} />
        <IconSpan style={{ ...getIconStyle(path) }}>{label}</IconSpan>
      </IconWrapper>
    )
  };

  return (
    <MyPageNavWrapper>
      <div onClick={() => navigate("/")}>
        <IconImg src={icon_logo} alt="icon_icon_logo" />
      </div>
      <MypageNavIcon path={PagePath.MypageRivew} label="내 리뷰" img={IconReview} />
      <MypageNavIcon path={PagePath.MypageMycomment} label="내 댓글" img={IconComment} />
      <MypageNavIcon path={PagePath.MypageLikecomment} label="좋아요한 댓글" img={IconCommentHeart} />
      <MypageNavIcon path={PagePath.MypageMycomment} label="탈퇴하기" img={IconRemoveUser} />
    </MyPageNavWrapper>
  );
};

export default MyPageNav;
// 마이페이지 네비바
const MyPageNavWrapper = styled.div`
  min-width: 7rem;
  max-width: 10rem;
  width: 11%;
  height: 100%;
  background-color: rgba(239, 239, 239, 1);
  border-radius: 1.25rem 0 0 1.25rem;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  padding: 5% 0 5% 0;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow: hidden;
`
const IconWrapper = styled.div`
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
`
const IconImg = styled.img`
  height: 3.78vh;
  width: 3.78vh;
`
const IconSpan = styled.span`
  margin-top: 1vh;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
`
