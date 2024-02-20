import styled from "styled-components";
import Colors from "../../../Styles/Colors";
export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  position: relative;
`;

export const RequestSpan = styled.span`
  color: ${Colors.request.SpanGray};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const RequestIcon = styled.div<{ $img: string }>`
  width: 8.125rem;
  height: 8.125rem;
  padding: 1.28319rem 0rem 0rem 0.214rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 6.04rem;
`;

export const RequestCheckButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7.1rem;

  color: ${Colors.white};
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;

  width: 9.4375rem;
  height: 2.5625rem;
  border-radius: 0.3125rem;
  background: ${Colors.request.buttonColor};
  box-shadow: 4px 4px 4px 0px ${Colors.request.buttonShadow};
`;
