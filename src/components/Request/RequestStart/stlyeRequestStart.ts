import styled from "styled-components";
import Colors from "../../../Styles/Colors";
export const RequestIcon = styled.div<{ $img: string }>`
  width: 17.43019rem;
  height: 19.23213rem;
  padding: 1.28319rem 0rem 0rem 0.214rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const RequestCheckButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.13rem;

  color: ${Colors.white};
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;

  width: 17.75rem;
  height: 3.375rem;
  border-radius: 0.3125rem;
  background: ${Colors.request.buttonColor};
  box-shadow: 4px 4px 4px 0px ${Colors.request.buttonShadow};
`;
