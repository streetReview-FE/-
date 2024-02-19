import { useState } from "react";
import icon_group from "../../../../assets/Icons/icon_group.svg";
import icon_group2 from "../../../../assets/Icons/icon_group_white.svg";
import * as M from "./M_styleMainSearchBar";
const M_MainSearchBar = () => {
  const [openSearchbar, setOpenSearchBar] = useState<boolean>(false);
  const handleOpenSearchBar = () => {
    setOpenSearchBar((prev) => !prev);
  };
  return (
    <>
      <M.SearchBarContainer>
        <M.SearchBarLogo>TRIPVIWE</M.SearchBarLogo>
        {!openSearchbar ? (
          <M.SearchBarToggleContainer onClick={handleOpenSearchBar}>
            <M.MenuToggleCircle>
              <M.MenuToggleCircleImg src={icon_group2} alt="돋보기" />
            </M.MenuToggleCircle>
          </M.SearchBarToggleContainer>
        ) : (
          <M.SearchBarWrapper>
            <M.SearchBar
              id="searchKetword"
              type="text"
              placeholder={"어디로 떠나볼까요?"}
            ></M.SearchBar>
            <M.SearchBarImg
              onClick={handleOpenSearchBar}
              src={icon_group}
              alt="돋보기"
            />
          </M.SearchBarWrapper>
        )}
      </M.SearchBarContainer>
    </>
  );
};
export default M_MainSearchBar;
