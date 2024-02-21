import styled from "styled-components";
import Colors from "../../../../Styles/Colors";
export const SearchBarContainer = styled.div`
  position: absolute;
  transform: translateX(0%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  width: 100%;
  top: 3.56rem;
  z-index: 100;
  overflow: hidden;
`;
export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 14.75rem;
  height: 2.3rem;
  border-radius: 1.125rem;
  background: ${Colors.orange};
`;
export const SearchBarLogo = styled.div`
  width: 5rem;
  height: 2.3rem;
  color: ${Colors.mainColor};
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: auto;
`;
export const SearchBar = styled.input`
  width: 12.25rem;
  height: 1.875rem;
  border-radius: 0.9375rem;
  border: none;
  background: ${Colors.white};
  padding-left: 0.62rem;
  margin-left: 0.2rem;
  color: ${Colors.mainfontColor};
  font-size: 0.75rem;
  font-weight: 600;

  &::placeholder {
    color: ${Colors.mainfontColor};
  }
`;
export const SearchBarImg = styled.img`
  width: 0.70313rem;
  height: 0.70313rem;
  margin: 0 0.8rem;
`;

// 돋보기 토글
export const SearchBarToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 100;
  overflow: hidden;
`;

export const MenuToggleCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.875rem;
  height: 1.875rem;
  background-color: ${Colors.white};
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;
export const MenuToggleCircleImg = styled.img`
  width: 0.70313rem;
  height: 0.70313rem;
`;
