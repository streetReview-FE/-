import React from "react";
import styled from "styled-components";
import angle_double_small_left_gray from "../../assets/Icons/angle_double_small_left_gray.svg";
import angle_double_small_left_orange from "../../assets/Icons/angle_double_small_left_orange.svg";
import { ArrowProps } from "../../constants/interface";

const NextArrow: React.FC<ArrowProps> = ({
  currentIndex,
  maximumItems,
  arrayLength,
  onHandler,
}) => {
  return (
    <>
      {currentIndex + maximumItems + 1 <= (arrayLength || 0) ? (
        <LoadAfterButton
          src={angle_double_small_left_orange}
          alt="다음"
          onClick={onHandler}
        />
      ) : (
        <LoadAfterButton src={angle_double_small_left_gray} alt="다음" />
      )}
    </>
  );
};

const LoadAfterButton = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(180deg);
`;

export default NextArrow;
