import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as iconMainMenuGroup } from "../../../assets/Icons/icon_main_menu_group.svg";
import IconLogin from "../../../assets/Icons/web_light_rd_SI.svg";
import Login from "../../Login/GoogleLogin";
import TopSideToggle from "../../TopSideToggle/TopSideToggle";

const MainToggle = () => {
  const accessToken = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [clickMenu, setClickMenu] = useState<boolean>(false);

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRCT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const hadleLoginBtn = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRCT_URI}&response_type=code&scope=email%20profile`;
  };

  const handleMenuClick = () => {
    setClickMenu(prev => !prev);
  };
  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [accessToken]);
  return (
    //   오른쪽 끝 메뉴
    <MenuContainer>
      {!clickMenu && (
        <MenuCircle onClick={handleMenuClick}>
          <MenuCircleImg as={iconMainMenuGroup} fill="#F0780C" />
        </MenuCircle>
      )}
      {clickMenu && !isLogin && (
        <MenuCircle2>
          <GoogleLoginButton
            src={IconLogin}
            alt="loginbotton"
            onClick={hadleLoginBtn}
          />
          <MenuCircleImg
            as={iconMainMenuGroup}
            fill="#fff"
            onClick={handleMenuClick}
          />
        </MenuCircle2>
      )}
      {clickMenu && isLogin && (
        <>
          <Login />
          <TopSideToggle />
        </>
      )}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: absolute;
  right: 2.81rem;
  top: 3.56rem;
  z-index: 100;
  // overflow: hidden;
`;
const MenuCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const MenuCircleImg = styled.div`
  width: 1.875rem;
  height: 1.875rem;
`;

const GoogleLoginButton = styled.img`
  height: 50%;
  margin-right: 0.4rem;
`;
const MenuCircle2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.3125rem;
  height: 5rem;
  border-radius: 2.5rem;
  background: var(--orange, #ef7d16);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export default MainToggle;
