import { useState } from "react";
import MMainSearchBar from "../../components/Main/MainSearchBar/M_MainSearchBar/M_MainSearchBar";
import MMainSwipeContent from "../../components/Main/MainSwipeContent/M_MainSwipeContent/M_MainSwipeContent";
import MMainToggle from "../../components/Main/MainToggle/M_MainToggle/M_MainToggle";
const M_MainPage = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const handleIsOpenSideBar = () => {
    setIsOpenSideBar((prer) => !prer);
  };
  return (
    <>
      {/* 가로 검색창  */}
      <MMainSearchBar />
      {/* 오른쪽 끝 메뉴 */}
      <MMainToggle />
      {/* 가로 스와이프 화면 */}
      <MMainSwipeContent
        isOpenSideBar={isOpenSideBar}
        handleIsOpenSideBar={handleIsOpenSideBar}
      />
      {/* <Login /> */}
    </>
  );
};

export default M_MainPage;
