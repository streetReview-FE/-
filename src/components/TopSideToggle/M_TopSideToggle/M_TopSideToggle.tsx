import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Colors from "../../../Styles/Colors";
import { ReactComponent as IconTopside3 } from "../../../assets/Icons/TopSideBar/Group.svg";
import { ReactComponent as IconTopside1 } from "../../../assets/Icons/TopSideBar/fi-br-map-marker-plus.svg";
import { ReactComponent as IconTopside2 } from "../../../assets/Icons/TopSideBar/fi-br-terrace.svg";
import PagePath from "../../../constants/PagePath";
import * as M from "./M_stlyeTopSideToggle";
type TopSideToggleIconProp = {
  path: string;
  img: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const M_TopSideToggle = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState(location.pathname);
  useEffect(() => {
    setSelectedIcon(location.pathname);
  }, [location.pathname]); //주소 변경마다 업데이트
  const navigate = useNavigate();

  // 화면별 네비바 포인트
  const getIconStyle = (path: string) => {
    const selected = selectedIcon.startsWith(path);
    const backColor = selected ? Colors.orange : Colors.white;
    const InColor = selected ? Colors.white : Colors.orange;
    return { backColor, InColor };
  };
  // 네비바 구성 요소 컴포넌트
  const TopSideToggleIcon = ({ path, img }: TopSideToggleIconProp) => {
    return (
      <M.TopSideToggleBox
        $color={getIconStyle(path).backColor}
        onClick={() => navigate(path)}
      >
        <M.TopSideToggleBoxImg as={img} fill={getIconStyle(path).InColor} />
      </M.TopSideToggleBox>
    );
  };

  return (
    <M.TopSideToggleWrapper>
      <M.TopSideToggleBoxWrapper>
        <TopSideToggleIcon path={PagePath.Requestpage} img={IconTopside1} />
        <TopSideToggleIcon path={PagePath.PostReview} img={IconTopside2} />
        <TopSideToggleIcon path={PagePath.Mypage} img={IconTopside3} />
      </M.TopSideToggleBoxWrapper>
    </M.TopSideToggleWrapper>
  );
};

export default M_TopSideToggle;
