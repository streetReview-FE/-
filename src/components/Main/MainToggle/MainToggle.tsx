import { message } from "antd";
import { useEffect, useState } from "react";
import { ReactComponent as iconMainMenuGroup } from "../../../assets/Icons/icon_main_menu_group.svg";
import IconLogin from "../../../assets/Icons/web_light_rd_SI.svg";
import Login from "../../Login/GoogleLogin";
import handleLogin from "../../Login/handleLogin";
import TopSideToggle from "../../TopSideToggle/TopSideToggle";
import * as W from "./stlyeMainToggle";
const MainToggle = () => {
  const accessToken = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [clickMenu, setClickMenu] = useState<boolean>(false);
  console.log(accessToken);

  const handleMenuClick = () => {
    setClickMenu((prev) => !prev);
  };
  useEffect(() => {
    if (accessToken) {
      message.success("로그인에 성공했습니다!");
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [accessToken]);
  return (
    //   오른쪽 끝 메뉴
    <W.MenuContainer>
      {!clickMenu && (
        <W.MenuCircle onClick={handleMenuClick}>
          <W.MenuCircleImg as={iconMainMenuGroup} fill="#F0780C" />
        </W.MenuCircle>
      )}
      {clickMenu && !isLogin && (
        <W.MenuCircle2>
          <W.GoogleLoginButton
            src={IconLogin}
            alt="loginbotton"
            onClick={handleLogin}
          />
          <W.MenuCircleImg
            as={iconMainMenuGroup}
            fill="#fff"
            onClick={handleMenuClick}
          />
        </W.MenuCircle2>
      )}
      {clickMenu && isLogin && (
        <>
          <Login />
          <TopSideToggle />
        </>
      )}
    </W.MenuContainer>
  );
};

export default MainToggle;
