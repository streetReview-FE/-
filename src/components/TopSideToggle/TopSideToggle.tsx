import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";
import { ReactComponent as IconTopside3 } from "../../assets/Icons/TopSideBar/Group.svg";
import { ReactComponent as IconTopside1 } from "../../assets/Icons/TopSideBar/fi-br-map-marker-plus.svg";
import { ReactComponent as IconTopside2 } from "../../assets/Icons/TopSideBar/fi-br-terrace.svg";
import PagePath from "../../constants/PagePath";
type TopSideToggleIconProp = {
  path: string;
  img: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const TopSideToggle = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState(location.pathname);
  useEffect(() => {
    setSelectedIcon(location.pathname);
  }, [location.pathname]); //주소 변경마다 업데이트
  const navigate = useNavigate();

  // 화면별 네비바 포인트
  const getIconStyle = (path: string) => {
    const selected = selectedIcon.startsWith(path);
    const backColor = selected ? Colors.white : Colors.orange;
    const InColor = selected ? Colors.orange : Colors.white;
    return { backColor, InColor };
  };
  // 네비바 구성 요소 컴포넌트
  const TopSideToggleIcon = ({ path, img }: TopSideToggleIconProp) => {
    return (
      <TopSideToggleBox
        $color={getIconStyle(path).backColor}
        onClick={() => navigate(path)}
      >
        <TopSideToggleBoxImg as={img} fill={getIconStyle(path).InColor} />
      </TopSideToggleBox>
    );
  };

  return (
    <TopSideToggleWrapper>
      <TopSideToggleBoxWrapper>
        <TopSideToggleIcon path={PagePath.Requestpage} img={IconTopside1} />
        <TopSideToggleIcon path={PagePath.PostReview} img={IconTopside2} />
        <TopSideToggleIcon path={PagePath.Mypage} img={IconTopside3} />
      </TopSideToggleBoxWrapper>
    </TopSideToggleWrapper>
  );
};

export default TopSideToggle;
const TopSideToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  z-index: 50;
  margin-bottom: 2.81rem;
`;
const TopSideToggleBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 14.7rem;
  height: 5rem;
  border-radius: 2.5rem;
  background: var(--orange, #ef7d16);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const TopSideToggleBoxImg = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;
const TopSideToggleBox = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.125rem;
  height: 4.125rem;
  border-radius: 50%;
  background: ${(props) => props.$color};
`;
