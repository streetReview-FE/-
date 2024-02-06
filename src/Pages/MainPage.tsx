import styled from "styled-components";
import angle_double_small_left_orange from "../assets/Icons/angle_double_small_left_orange.svg";
import icon_group from "../assets/Icons/icon_group.svg";
import icon_main_menu_group from "../assets/Icons/icon_main_menu_group.svg";
import Login from "../components/Login/GoogleLogin";
const MainPage = () => {
  return (
    <>
      {/* 가로 검색창  */}
      <SearchBarContainer>
        <SearchBarWrapper>
          <SearchBarLogo>TRIPVIWE</SearchBarLogo>
          <SearchBar
            id="searchKetword"
            type="text"
            placeholder={"어디로 떠나볼까요?"}
          ></SearchBar>
          <SearchBarImg src={icon_group} alt="돋보기" />
        </SearchBarWrapper>
      </SearchBarContainer>
      {/* 세로 스와이프 화면 */}
      <SwipeContainer>
        <SwipeWrapper />
        <DragCircle>
          <ArrowInDragCircle src={angle_double_small_left_orange} alt=">>" />
        </DragCircle>
      </SwipeContainer>
      {/* 오른쪽 끝 메뉴 */}
      <MenuContainer>
        <MenuCircle>
          <MenuCircleImg src={icon_main_menu_group} alt="메뉴" />
        </MenuCircle>
      </MenuContainer>
      <Login />
    </>
  );
};

// 세로 스와이프 화면
const SwipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.7rem;
  left: 0;
  z-index: 1000;
  overflow: hidden;
`;
const SwipeWrapper = styled.div`
  height: 60.5rem;
  width: 3.06rem;
  background-color: gray;
  border-radius: 0rem 1.25rem 1.25rem 0rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const DragCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3.5625rem;
  height: 3.5625rem;
  margin-left: -1.75rem;
  background-color: #fff;
  cursor: pointer;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;
const ArrowInDragCircle = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  transform: rotate(90deg);
`;
// 가로 검색창
const SearchBarContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3.56rem;
  z-index: 100;
  overflow: hidden;
`;
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 49.6875rem;
  height: 4.3125rem;
  border-radius: 1.875rem;
  background: var(--orange, #ef7d16);
`;
const SearchBarLogo = styled.div`
  width: 9.1875rem;
  height: 1.75rem;
  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
`;
const SearchBar = styled.input`
  width: 33.5rem;
  height: 3.5625rem;
  border-radius: 1.875rem;
  border: none;
  background: #fff;

  color: var(--111, #ff9a83);
  font-size: 1.25rem;
  font-weight: 600;
  padding-left: 1.56rem;

  &::placeholder {
    color: var(--111, #ff9a83);
  }
`;
const SearchBarImg = styled.img`
  width: 1.24988rem;
  height: 1.25rem;
  margin-right: 1.75rem;
`;
// 오른쪽 끝 메뉴
const MenuContainer = styled.div`
  position: absolute;
  right: 2.81rem;
  top: 3.56rem;
  z-index: 100;
  overflow: hidden;
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
const MenuCircleImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

export default MainPage;
