import React, { useEffect, useState } from "react";
import styled from "styled-components";
import test_review from "../../../assets/test-review.svg";
import NextArrow from "../../Arrow/NextArrow";
import PreviousArrow from "../../Arrow/PreviousArrow";
import MWriteCommentCard from "../../Card/writeCommentCard/M_WriteCommentCard/M_WriteCommentCard";

interface CommentProps {
  date: string;
  contentText: string;
  img: string;
}

const M_MyComment = () => {
  const [mycommentCardArray, setmyCommentCardArray] = useState<CommentProps[]>(
    []
  );
  const [CurrentIndex, setCurrentIndex] = useState<number>(0);
  const Maximumitems = 3;

  useEffect(() => {
    setmyCommentCardArray([
      {
        date: "2023-01-01",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-01-01",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-01-03",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-02-01",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-05-02",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2022-01-13",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2021-02-15",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!2",
        img: `${test_review}`,
      },
      {
        date: "2020-03-30",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!3",
        img: `${test_review}`,
      },
    ]);
  }, []);
  const handlePrevious = () => {
    if (CurrentIndex > 0) {
      if (CurrentIndex < 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev - Maximumitems);
      }
    }
  };

  const handleNext = () => {
    if (CurrentIndex + 3 < mycommentCardArray.length) {
      setCurrentIndex((prev) => prev + Maximumitems);
    }
  };

  return (
    <MyCommentContainer>
      <PreviousArrow
        currentIndex={CurrentIndex}
        maximumItems={Maximumitems}
        onHandler={handlePrevious}
      />
      <CommentContainer>
        <MyCommentDateLine />
        {mycommentCardArray
          .slice(CurrentIndex, CurrentIndex + Maximumitems)
          .map((comment, index, array) => {
            const [year, month] = comment.date.split("-").slice(0, 2);
            const currentYearAndMonth = `${year}.${month}`;
            const shouldDisplayYearAndMonth =
              index === 0 ||
              array[index - 1].date.split("-").slice(0, 2).join(".") !==
                currentYearAndMonth;

            return (
              <MyCommentWrapper key={index}>
                <React.Fragment>
                  {shouldDisplayYearAndMonth ? (
                    <YearAndMonth>{currentYearAndMonth}</YearAndMonth>
                  ) : (
                    <YearAndMonth />
                  )}
                  <MWriteCommentCard
                    index={index}
                    date={comment.date}
                    contentText={comment.contentText}
                    img={comment.img}
                  />
                </React.Fragment>
              </MyCommentWrapper>
            );
          })}
      </CommentContainer>
      <NextArrow
        currentIndex={CurrentIndex}
        maximumItems={Maximumitems}
        arrayLength={mycommentCardArray.length}
        onHandler={handleNext}
      />
    </MyCommentContainer>
  );
};

const MyCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const CommentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.63rem;
`;

const MyCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const YearAndMonth = styled.div`
  color: var(--gray, #d9d9d9);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 125%;
  margin-bottom: 0.8rem;
`;

const MyCommentDateLine = styled.div`
  height: 26rem;
  width: 0.25rem;
  background-color: rgba(255, 180, 147, 0.5);
  position: absolute;
  top: -1.37rem;
  left: 1rem;
  transform: translateX(-50%);
  z-index: -1;
`;

export default M_MyComment;
