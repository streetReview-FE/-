import styled from "styled-components";
import Colors from "../../../../Styles/Colors";

export const MenuContainer = styled.div`
  position: absolute;
  flex-direction: column;
  right: 0.69rem;
  top: 5.87rem;
  z-index: 100;
`;
export const MenuCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.875rem;
  height: 1.875rem;
  margin-right: 0.31rem;
  background-color: ${Colors.white};
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const MenuCircleImg = styled.div`
  width: 0.70313rem;
  height: 0.70313rem;
`;

export const GoogleLoginButton = styled.img`
  height: 80%;
  margin-right: 0.5rem;
`;
export const MenuCircle2 = styled.div`
  display: flex;
  align-items: center;
  width: 10.3125rem;
  height: 2.25rem;
  border-radius: 2.5rem;
  padding: 0 0.3rem;
  background: ${Colors.orange};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
