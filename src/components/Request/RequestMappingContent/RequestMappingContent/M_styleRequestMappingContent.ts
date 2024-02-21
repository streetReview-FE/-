import styled from "styled-components";
import Colors from "../../../../Styles/Colors";

export const RequestCheckSearchBarWrapper = styled.div`
  margin-top: 1.44rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputForm = styled.form`
  width: 100%;
  height: 22.625rem;
  border-radius: 0.625rem;
  background-color: ${Colors.request.backgroundColor};
  padding-top: 0.5rem;

  color: ${Colors.request.buttonColor};
  font-size: 1rem;
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

  label {
    margin-bottom: 0.4rem;
  }
`;
export const InputFormInput = styled.input`
  height: 2rem;
  border-radius: 0.625rem;
  background-color: ${Colors.white};
  padding-left: 1.75rem;

  color: ${Colors.request.buttonColor};
  font-size: 0.75rem;
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
  margin-top: 0.5rem;
`;

export const InputFormSubmitButton = styled.button`
  height: 2rem;
  width: 5rem;
  color: ${Colors.request.backgroundColor};
  background-color: ${Colors.request.buttonColor};
  border-radius: 0.625rem;
  border: none;
`;

