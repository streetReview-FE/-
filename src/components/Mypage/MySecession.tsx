import { useState } from "react";
import styled from "styled-components";
import secesstionIcon from "../../assets/Icons/icon_secession.svg";

const MySecession = () => {
  const [secessionState, setSecessionState] = useState<boolean>(false);
  const onCklickCheckbox = () => {
    setSecessionState((prev) => !prev);
  };
  return (
    <MyCommentContainer>
      <CommentContainer>
        <SecessionIcon $img={secesstionIcon} />
        <SecessionCheck>
          <SecessionCheckInput
            type="checkbox"
            id="secesstionChk"
            name="interest"
            value="secesstionChk"
            onClick={onCklickCheckbox}
          />
          <SecessionCheckInputLabel htmlFor="secesstionChk">
            탈퇴하기 전에 확인해주세요
          </SecessionCheckInputLabel>
        </SecessionCheck>
        <SecessCheckButton $chk={secessionState}>탈퇴확인</SecessCheckButton>
      </CommentContainer>
    </MyCommentContainer>
  );
};

const MyCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.06rem;
`;
const SecessionIcon = styled.div<{ $img: string }>`
  width: 22.77306rem;
  height: 21.77388rem;
  border-radius: 0.3125rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const SecessionCheck = styled.div`
  display: flex;
  align-items: center;
  width: 22.0625rem;
  height: 1.625rem;
`;
const SecessionCheckInput = styled.input`
  appearance: none;
  border: none;
  outline: none;
  width: 1.1875rem;
  height: 1.1875rem;
  background: #e4e3e3;
  margin-right: 0.6rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  &:checked {
    background-color: #f0780c;
  }
`;
const SecessionCheckInputLabel = styled.label`
  color: #a1a1a1;
  font-size: 1.5rem;
  font-weight: 700;
`;
const SecessCheckButton = styled.div<{ $chk: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.12rem;

  color: #fff;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;

  width: 17.75rem;
  height: 3.375rem;
  border-radius: 0.3125rem;
  background: ${(props) => (props.$chk ? "#ff9a83" : "#F0780C")};
  box-shadow: 4px 4px 4px 0px #ae391e;
`;

const CommentContainer = styled.div`
  min-height: 28.125rem;
  position: relative;
  padding-top: 0.63rem;
`;

export default MySecession;
