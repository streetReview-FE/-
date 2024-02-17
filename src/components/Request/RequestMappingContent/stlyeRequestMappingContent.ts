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
export const InputForm = styled.form`
  width: 44.875rem;
  height: 19.875rem;
  border-radius: 0.625rem;
  background-color: ${Colors.request.backgroundColor};
  // padding: 1.56rem 1.75rem;
  padding-top: 0.5rem;

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

export const InputFormInputContent = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InputFormInput = styled.input`
  height: 2rem;
  margin-top: 0.5rem;
  border-radius: 0.625rem;
  background-color: ${Colors.white};
  padding-left: 1.75rem;

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
export const InputFormInputContentTag = styled.div`
  display: flex;
  align-items: center;
`;

export const InputFormSubmitButton = styled.button`
  height: 2rem;
  width: 5rem;
  color: ${Colors.request.backgroundColor};
  background-color: ${Colors.request.buttonColor};
  border-radius: 0.625rem;
  border: none;
`;
