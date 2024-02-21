import { useState } from "react";
import MainSearchBar from "../../components/Main/MainSearchBar/MainSearchBar";
import MainSwipeContent from "../../components/Main/MainSwipeContent/MainSwipeContent";
import MainToggle from "../../components/Main/MainToggle/MainToggle";
const MainPage = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const handleIsOpenSideBar = () => {
    setIsOpenSideBar((prer) => !prer);
  };
  return (
    <>
      {/* 가로 검색창  */}
      {!isOpenSideBar && <MainSearchBar />}
      {/* 세로 스와이프 화면 */}
      <MainSwipeContent
        isOpenSideBar={isOpenSideBar}
        handleIsOpenSideBar={handleIsOpenSideBar}
      />
      {/* 오른쪽 끝 메뉴 */}
      <MainToggle />
      {/* <Login /> */}
    </>
  );
};

export default MainPage;
