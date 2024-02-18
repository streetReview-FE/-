import icon_group from "../../../../assets/Icons/icon_group.svg";
import * as M from "./M_styleMainSearchBar";
const M_MainSearchBar = () => {
  return (
    <>
      <M.SearchBarContainer>
        <M.SearchBarLogo>TRIPVIWE</M.SearchBarLogo>
        <M.SearchBarWrapper>
          <M.SearchBar
            id="searchKetword"
            type="text"
            placeholder={"어디로 떠나볼까요?"}
          ></M.SearchBar>
          <M.SearchBarImg src={icon_group} alt="돋보기" />
        </M.SearchBarWrapper>
      </M.SearchBarContainer>
    </>
  );
};

export default M_MainSearchBar;
