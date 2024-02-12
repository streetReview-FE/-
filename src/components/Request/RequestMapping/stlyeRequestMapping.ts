import styled from "styled-components";
import Colors from "../../../Styles/Colors";

export const RequestCheckSearchBarWrapper = styled.div`
  margin-top: 3.94rem;
  display: flex;
  align-items: center;
`;
export const RequestCheckSearchBar = styled.input`
  width: 28rem;
  height: 3.8125rem;
  border-radius: 0.625rem;
  border: 2px solid ${Colors.request.borderSolid};
  background: ${Colors.white};
  color: ${Colors.request.buttonColor};
  font-size: 1.25rem;F
  font-weight: 600;
  padding-left: 1.56rem;
  &::placeholder {
    color:${Colors.request.buttonColor};
  }
  &:focus {
    outline: none;
  }
`;
export const RequestCheckSearchBarImg = styled.img`
  margin-left: 0.7rem;
  width: 2.5625rem;
  height: 2.5625rem;
`;
