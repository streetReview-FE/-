import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.31rem;
  position: relative;
`;

export const RequestSpan = styled.span`
  color: #a1a1a1;
  ${Colors.request.SpanGray};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ArrowIcon = styled.div`
  position: absolute;
  top: 28.06rem;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 3.9375rem;
  height: 3.9375rem;
`;
