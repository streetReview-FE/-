import React, { useEffect, useState } from "react";
import styled from "styled-components";
import test_review from "../../../assets/test-review.svg";
import NextArrow from "../../Arrow/NextArrow";
import PreviousArrow from "../../Arrow/PreviousArrow";
import MWriteLikeCommentCard from "../../Card/writeLikeCommentCard/M_WriteLikeCommentCard/M_WriteLikeCommentCard";

interface CommentProps {
  title: string;
  nickname: string;
  date: string;
  contentText: string;
  img: string;
}

const M_MyLikeComment = () => {
  const [myLikeCommentCardArray, setMyLikeCommentCardArray] = useState<
    CommentProps[]
  >([]);
  const [CurrentIndex, setCurrentIndex] = useState<number>(0);
  const Maximumitems = 6;

  useEffect(() => {
    setMyLikeCommentCardArray([
      {
        nickname: "Yeondu",
        date: "2023-01-01",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        nickname: "Yeondu",
        date: "2023-01-01",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        nickname: "Yeondu",
        date: "2023-01-03",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        nickname: "Yeondu",
        date: "2023-02-01",
        title: "한순자손칼국수d",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        nickname: "Yeondu",
        date: "2023-05-02",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        nickname: "Yeondu",
        date: "2022-01-13",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        nickname: "Yeondu",
        date: "2021-02-15",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!2",
        img: `${test_review}`,
      },
      {
        nickname: "Yeondu",
        date: "2020-03-30",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!3",
        img: `${test_review}`,
      },
    ]);
  }, []);
  const handlePrevious = () => {
    if (CurrentIndex > 0) {
      if (CurrentIndex < 6) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev - Maximumitems);
      }
    }
  };

  const handleNext = () => {
    if (CurrentIndex + 6 < myLikeCommentCardArray.length) {
      setCurrentIndex((prev) => prev + Maximumitems);
    }
  };

  return (
    <LikeCommentContainer>
      <PreviousArrow
        currentIndex={CurrentIndex}
        maximumItems={Maximumitems}
        onHandler={handlePrevious}
      />
      <LikeCommentWrapper>
        {myLikeCommentCardArray
          .slice(CurrentIndex, CurrentIndex + Maximumitems)
          .map((comment, index) => (
            <LikeComment key={index}>
              <React.Fragment>
                <MWriteLikeCommentCard
                  nickname={comment.nickname}
                  date={comment.date}
                  title={comment.title}
                  contentText={comment.contentText}
                  img={comment.img}
                />
              </React.Fragment>
            </LikeComment>
          ))}
      </LikeCommentWrapper>
      <NextArrow
        currentIndex={CurrentIndex}
        maximumItems={Maximumitems}
        arrayLength={myLikeCommentCardArray.length}
        onHandler={handleNext}
      />
    </LikeCommentContainer>
  );
};

const LikeCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const LikeCommentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const LikeComment = styled.div`
  display: flex;
  flex-direction: row;
`;
export default M_MyLikeComment;
