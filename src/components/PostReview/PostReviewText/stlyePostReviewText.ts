import styled from "styled-components";
import Colors from "../../../Styles/Colors";
// import Colors from "../../Styles/Colors";

// PostReViewText의 리뷰작성칸
export const PostReviewTextArea = styled.textarea`
width: 44.875rem;
height: 19.875rem;
border-radius: 0.625rem;
background-color: ${Colors.post.backgroundColor};
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
export const ArrowIcon = styled.div`
  margin-top: 3.44rem;
  width: 3.9375rem;
  height: 3.9375rem;
`;