import React, { useEffect, useState } from "react";
import styled from "styled-components";
import test_review from "../../assets/test-review.svg";
import NextArrow from "../Arrow/NextArrow";
import PreviousArrow from "../Arrow/PreviousArrow";
import WriteCommentCard from "../Card/writeCommentCard/WriteCommentCard";

interface CommentProps {
  date: string;
  title: string;
  contentText: string;
  img: string;
}

const MyComment = () => {
  const [mycommentCardArray, setmyCommentCardArray] = useState<CommentProps[]>(
    []
  );
  const [CurrentIndex, setCurrentIndex] = useState<number>(0);
  const Maximumitems = 3;

  useEffect(() => {
    setmyCommentCardArray([
      {
        date: "2023-01-01",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-01-01",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-01-03",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-02-01",
        title: "한순자손칼국수d",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-05-02",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2022-01-13",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2021-02-15",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!2",
        img: `${test_review}`,
      },
      {
        date: "2020-03-30",
        title: "한순자손칼국수",
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
              <MyCommentWrapper>
                <React.Fragment key={index}>
                  {shouldDisplayYearAndMonth ? (
                    <YearAndMonth>{currentYearAndMonth}</YearAndMonth>
                  ) : (
                    <YearAndMonth />
                  )}
                  <WriteCommentCard
                    index={index}
                    date={comment.date}
                    title={comment.title}
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
  margin-top: 4.06rem;
`;

const CommentContainer = styled.div`
  min-height: 28.125rem;
  position: relative;
  padding-top: 0.63rem;
`;

const MyCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const YearAndMonth = styled.div`
  color: var(--gray, #d9d9d9);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 125%;
  min-width: 5rem;
`;

const MyCommentDateLine = styled.div`
  height: 28.125rem;
  width: 0.25rem;
  background-color: rgba(255, 180, 147, 0.5);
  position: absolute;
  top: -1.37rem;
  left: 9rem;
  transform: translateX(50%);
  z-index: -1;
`;

export default MyComment;
