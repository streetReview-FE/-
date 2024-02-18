import { useState } from "react";
import MMainSearchBar from "../../components/Main/MainSearchBar/M_MainSearchBar/M_MainSearchBar";
import MMainSwipeContent from "../../components/Main/MainSwipeContent/M_MainSwipeContent/M_MainSwipeContent";
const M_MainPage = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const handleIsOpenSideBar = () => {
    setIsOpenSideBar((prer) => !prer);
  };
  return (
    <>
      {/* 가로 검색창  */}
      {!isOpenSideBar && <MMainSearchBar />}
      {/* 세로 스와이프 화면 */}
      <MMainSwipeContent
        isOpenSideBar={isOpenSideBar}
        handleIsOpenSideBar={handleIsOpenSideBar}
      />
      {/* 오른쪽 끝 메뉴 */}
      {/* <MainToggle /> */}
      {/* <Login /> */}
    </>
  );
};

export default M_MainPage;
