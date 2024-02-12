import styled from "styled-components";
import Colors from "../../../Styles/Colors";

// PostReViewText의 리뷰작성칸
export const PostReviewArea = styled.textarea`
  width: 25.1875rem;
  height: 19.875rem;
  border-radius: 0.625rem;
  background-color:${Colors.post.backgroundColor};
  padding: 1.56rem 1.75rem;

  color: ${Colors.post.buttonColor};
  font-size: 1.5rem;
  font-weight: 700;
  &::placeholder {
    color: ${Colors.post.buttonColor};
  }
  &:focus {
    outline: none;
  }
  border: none;
`;