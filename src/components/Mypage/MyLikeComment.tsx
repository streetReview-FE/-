import React, { useEffect, useState } from "react";
import styled from "styled-components";
import test_review from "../../assets/test-review.svg";
import NextArrow from "../Arrow/NextArrow";
import PreviousArrow from "../Arrow/PreviousArrow";
import WriteLikeCommentCard from "../Card/writeLikeCommentCard/WriteLikeCommentCard";

interface CommentProps {
  title: string;
  nickname: string;
  date: string;
  contentText: string;
  img: string;
}

const MyLikeComment = () => {
  const [myLikeCommentCardArray, setMyLikeCommentCardArray] = useState<
    CommentProps[]
  >([]);
  const [CurrentIndex, setCurrentIndex] = useState<number>(0);
  const Maximumitems = 3;

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
      if (CurrentIndex < 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev - Maximumitems);
      }
    }
  };

  const handleNext = () => {
    if (CurrentIndex + 3 < myLikeCommentCardArray.length) {
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
        {/* 밑에 화면 흐림처리 */}
        <LikeCommentGradation />
        {myLikeCommentCardArray
          .slice(CurrentIndex, CurrentIndex + Maximumitems)
          .map((comment, index) => (
            <LikeComment key={index}>
              <React.Fragment>
                <WriteLikeCommentCard
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
  margin-top: 4.06rem;
`;

const LikeCommentWrapper = styled.div`
  min-height: 28.125rem;
  position: relative;
  padding-top: 0.63rem;
`;
const LikeCommentGradation = styled.div`
  position: absolute;
  bottom: 0;
  min-width: 51.5625rem;
  min-height: 19.875rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 90%);
`;

const LikeComment = styled.div`
  display: flex;
  flex-direction: row;
`;
export default MyLikeComment;
