import styled from "styled-components";
import Colors from "../../../Styles/Colors";

export const RequestCheckSearchBarWrapper = styled.div`
  margin-top: 3rem;
`;
export const RequestSearchBar = styled.textarea`
  width: 44.875rem;
  height: 19.875rem;
  border-radius: 0.625rem;
  background-color: ${Colors.request.backgroundColor};
  padding: 1.56rem 1.75rem;

  color: ${Colors.request.buttonColor};
  font-size: 1.5rem;
  font-weight: 700;
  &::placeholder {
    color: ${Colors.request.buttonColor};
  }
  &:focus {
    outline: none;
  }
  border: none;
`;
