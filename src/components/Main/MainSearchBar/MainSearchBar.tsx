import styled from "styled-components";
import icon_group from "../../../assets/Icons/icon_group.svg";

const MainSearchBar = () => {
  return (
    // 가로 검색창
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
  );
};
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

export default MainSearchBar;
