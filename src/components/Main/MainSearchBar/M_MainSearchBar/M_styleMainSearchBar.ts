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
  height: 2.5rem;
  border-radius: 1.125rem;
  background: ${Colors.orange};
`;
export const SearchBarLogo = styled.div`
  width: 5.75rem;
  height: 2.1875rem;
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
  width: 1.24988rem;
  height: 1.25rem;
  margin: 0 0.8rem;
`;
