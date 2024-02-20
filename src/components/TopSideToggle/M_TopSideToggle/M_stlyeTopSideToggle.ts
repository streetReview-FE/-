import styled from "styled-components";

export const TopSideToggleWrapper = styled.div`
  margin-right: 0.31rem;
  display: flex;
  justify-content: flex-end;
  width: auto;
  z-index: 50;
`;
export const TopSideToggleBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: auto;
`;
export const TopSideToggleBoxImg = styled.img`
  width: 0.70313rem;
  height: 0.70313rem;
`;
export const TopSideToggleBox = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background: ${(props) => props.$color};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
