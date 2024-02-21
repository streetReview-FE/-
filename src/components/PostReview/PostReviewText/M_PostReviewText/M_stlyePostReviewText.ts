import styled from "styled-components";
import Colors from "../../../../Styles/Colors";
// import Colors from "../../Styles/Colors";

// PostReViewText의 리뷰작성칸
export const PostReviewTextArea = styled.textarea`
  width: 13.5625rem;
  height: 22.625rem;
  border-radius: 0.625rem;
  background-color: ${Colors.request.backgroundColor};
  padding: 0.5rem;

  color: ${Colors.request.buttonColor};
  font-size: 0.7rem;
  font-weight: 700;
  &::placeholder {
    color: ${Colors.request.buttonColor};
  }
  &:focus {
    outline: none;
  }
  border: none;
`;
export const ArrowIcon = styled.div`
  margin-top: 3.44rem;
  width: 3.9375rem;
  height: 3.9375rem;
`;

export const PostReviewTopSpan = styled.span`
  margin-top: 0.25rem;
  text-align: center;
  color: ${Colors.request.SpanGray};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.44rem;
`;
