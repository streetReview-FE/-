import styled from "styled-components";
import angle_double_small_left_gray from "../../assets/Icons/angle_double_small_left_gray.svg";
import angle_double_small_left_orange from "../../assets/Icons/angle_double_small_left_orange.svg";
import { ArrowProps } from "../../constants/interface";

const PreviousArrow: React.FC<ArrowProps> = ({
  currentIndex,
  maximumItems,
  onHandler,
}) => {
  return (
    <>
      {currentIndex - maximumItems + 1 >= 0 ? (
        <LoadBeforeButton
          src={angle_double_small_left_orange}
          alt="이전"
          onClick={onHandler}
        />
      ) : (
        <LoadBeforeButton src={angle_double_small_left_gray} alt="이전" />
      )}
    </>
  );
};

export default PreviousArrow;
const LoadBeforeButton = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;
