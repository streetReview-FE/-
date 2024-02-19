import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  right: 2.81rem;
  top: 3.56rem;
  z-index: 100;
  // overflow: hidden;
`;
export const MenuCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const MenuCircleImg = styled.div`
  width: 1.875rem;
  height: 1.875rem;
`;

export const GoogleLoginButton = styled.img`
  height: 50%;
  margin-right: 0.4rem;
`;
export const MenuCircle2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.3125rem;
  height: 5rem;
  border-radius: 2.5rem;
  background: var(--orange, #ef7d16);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
