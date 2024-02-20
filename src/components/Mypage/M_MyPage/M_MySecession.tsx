import { useState } from "react";
import styled from "styled-components";
import secesstionIcon from "../../../assets/Icons/icon_secession.svg";

const M_MySecession = () => {
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
        <SecessCheckButton $chk={!secessionState}>탈퇴확인</SecessCheckButton>
      </CommentContainer>
    </MyCommentContainer>
  );
};

const MyCommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.06rem;
`;

const SecessionIcon = styled.div<{ $img: string }>`
  width: 13.48488rem;
  height: 13.84938rem;
  margin-right: -2rem;
  border-radius: 0.3125rem;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const SecessionCheck = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 0.9375rem;
  margin-left: 0.5rem; //이미지와의 수직을 맞추기 위해
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
  font-size: 0.75rem;
  font-weight: 700;
  margin-right: 0.6rem;
`;
const SecessCheckButton = styled.div<{ $chk: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.56rem;
  margin-bottom: 1rem;

  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;

  width: 9.1875rem;
  height: 2.1875rem;
  border-radius: 0.3125rem;
  background: ${(props) => (props.$chk ? "#ff9a83" : "#F0780C")};
  box-shadow: 4px 4px 4px 0px #ae391e;
`;

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   min-height: 28.125rem;
  position: relative;
  flex-direction: column;
`;

export default M_MySecession;
