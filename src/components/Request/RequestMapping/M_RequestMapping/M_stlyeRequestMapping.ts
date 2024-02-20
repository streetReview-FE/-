import styled from "styled-components";
import Colors from "../../../../Styles/Colors";

export const RequestCheckSearchBarWrapper = styled.div`
  margin-top: 2.06rem;
  display: flex;
  align-items: center;
`;
export const RequestCheckSearchBar = styled.input`
  width: 14rem;
  height: 2.125rem;
  border-radius: 0.625rem;
  border: 2px solid ${Colors.request.borderSolid};
  background: ${Colors.white};
  color: ${Colors.request.buttonColor};
  font-size: 1rem;
  font-weight: 600;
  padding-left: 0.86rem;
  &::placeholder {
    color: ${Colors.request.buttonColor};
  }
  &:focus {
    outline: none;
  }
`;
export const RequestCheckSearchBarImg = styled.img`
  margin-left: 0.7rem;
  width: 1.5625rem;
  height: 1.5625rem;
`;
export const ArrowIcon = styled.div`
  position: absolute;
  top: 20.06rem;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 3.9375rem;
  height: 3.9375rem;
`;
