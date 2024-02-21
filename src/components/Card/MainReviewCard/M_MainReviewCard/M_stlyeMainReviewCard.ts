import styled from "styled-components";
import Colors from "../../../../Styles/Colors";

export const CardWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: auto;
  margin-bottom: 1.12rem;
  background-color: ${Colors.request.backgroundColor};
  border-radius: 0.625rem;
  position: relative;
`;
export const CardReviewer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 0 0.88rem;
  top: 1.37rem;
  left: -1.44rem;
  width: 7.375rem;
  height: 2.1875rem;

  border-radius: 4.59375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;
`;
export const Img = styled.img`
  width: 1.4375rem;
  height: 1.3125rem;
  object-fit: cover;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 9rem;
  object-fit: cover;
  margin-top: 0.8rem;
  border-radius: 1.625rem;
`;
export const CardImgNone = styled.div`
  width: 100%;
  margin-top: 0.8rem;
`;
export const MainWrapper = styled.div`
  margin-top: 0.69rem;
  margin-bottom: 0.4rem;
  margin-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem;
  width: 98%;
`;
export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  font-weight: 700;
`;
export const Div = styled.div`
  width: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;
export const CommentDiv = styled.div`
  display: flex;
  align-items: center;
  color: var(--skyblue, #4cb9e7);
  font-size: 0.5rem;
  font-weight: 500;
  flex-shrink: 0;
`;
export const CommentImg = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.3rem;
`;

export const HeartDiv = styled.div`
  display: flex;
  align-items: center;
  color: #ff3608;
  font-size: 0.5rem;
  font-weight: 500;
`;

export const HeartImg = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
`;

export const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.37rem;
`;

export const TagWrapper = styled.div`
  display: flex;
  width: 100%;
  color: white;
  font-size: 0.5rem;
  font-weight: 700;
`;
export const Box1Div = styled.div`
  background-color: rgba(171, 223, 241, 1);
  border-radius: 0.3125rem;
  padding: 0.3rem;
`;

export const Box2Div = styled.div`
  background-color: rgba(12, 74, 96, 1);
  border-radius: 0.3125rem;
  padding: 0.3rem;
  margin: 0 0.63rem;
  padding: 0.3rem;
`;

export const Box3Div = styled.div`
  background-color: rgba(255, 154, 131, 1);
  border-radius: 0.3125rem;
  padding: 0.3rem;
`;

export const ReviewCardContentOver = styled.div`
  margin-top: 0.2rem;
  font-size: 1rem;
`;
export const DateDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: var(--orange, #ef7d16);
  font-size: 0.5rem;
  font-weight: 700;
`;
