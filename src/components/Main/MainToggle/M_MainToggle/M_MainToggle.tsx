import { useEffect, useState } from "react";
import { ReactComponent as iconMainMenuGroup } from "../../../../assets/Icons/icon_main_menu_group.svg";
import IconLogin from "../../../../assets/Icons/web_light_rd_SI.svg";
import hadleLogin from "../../../Login/handleLogin";
import MTopSideToggle from "../../../TopSideToggle/M_TopSideToggle/M_TopSideToggle";
import * as M from "./M_stlyeMainToggle";
const M_MainToggle = () => {
  const accessToken = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [clickMenu, setClickMenu] = useState<boolean>(false);
  console.log(accessToken);

  const handleMenuClick = () => {
    setClickMenu((prev) => !prev);
  };
    useEffect(() => {
      if (accessToken) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }, [accessToken]);
  return (
    <M.MenuContainer>
      {!clickMenu && (
        <M.MenuCircle onClick={handleMenuClick}>
          <M.MenuCircleImg as={iconMainMenuGroup} fill="#F0780C" />
        </M.MenuCircle>
      )}
      {clickMenu && !isLogin && (
        <M.MenuCircle2>
          <M.GoogleLoginButton
            src={IconLogin}
            alt="loginbotton"
            onClick={hadleLogin}
          />
          <M.MenuCircleImg
            as={iconMainMenuGroup}
            fill="#fff"
            onClick={handleMenuClick}
          />
        </M.MenuCircle2>
      )}
      {clickMenu && isLogin && <MTopSideToggle />}
    </M.MenuContainer>
  );
};

export default M_MainToggle;
