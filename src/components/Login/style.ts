import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.backgroundColor};
  z-index: 1;
  position: absolute;
`;
// position을 absolute로 해서 전체화면 덮게