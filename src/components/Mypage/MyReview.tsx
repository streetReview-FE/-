import { useEffect, useState } from "react";
import styled from "styled-components";
import WriteReviewCard from "../Card/writeReviewCard/WriteReviewCard";

import angle_double_small_left_gray from "../../assets/Icons/angle_double_small_left_gray.svg";
import angle_double_small_left_orange from "../../assets/Icons/angle_double_small_left_orange.svg";

const MyReview = () => {
  const [reviewCardArray, setReviewCardArray] = useState<{
    title: string;
    tag: string[];
    content: string;
    date: string;
  }[]>([]);
  const [CurrentIndex, setCurrentIndex] = useState<number>(0);
  const Maximumitems = 3;
  useEffect(() => {
    setReviewCardArray([
      {
        title: "한순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        content: "회현 살면서 15년 넘게 단골인 집 !! 회현 살면서 15년 넘게 단골인 집 !!꼭 가보세요... 진짜 맛있습니다@@@",
        date: "20240105"
      },
      {
        title: "한순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        content: "회현 살면서 15년 넘게 단골인 집 !! 회현 살면서 15년 넘게 단골인 집 !!꼭 가보세요... 진짜 맛있습니다@@@",
        date: "20240105"
      },
      {
        title: "한순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        content: "회현 살면서 15년 넘게 단골인 집 !! 회현 살면서 15년 넘게 단골인 집 !!꼭 가보세요... 진짜 맛있습니다@@@",
        date: "20240105"
      },
      {
        title: "두순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        content: "회현 살면서 15년 넘게 단골인 집 !! 회현 살면서 15년 넘게 단골인 집 !!꼭 가보세요... 진짜 맛있습니다@@@",
        date: "20240105"
      },
      {
        title: "두순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        content: "회현 살면서 15년 넘게 단골인 집 !! 회현 살면서 15년 넘게 단골인 집 !!꼭 가보세요... 진짜 맛있습니다@@@",
        date: "20240105"
      },
      {
        title: "두순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        content: "회현 살면서 15년 넘게 단골인 집 !! 회현 살면서 15년 넘게 단골인 집 !!꼭 가보세요... 진짜 맛있습니다@@@",
        date: "20240105"
      },
      {
        title: "세순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        content: "회현 살면서 15년 넘게 단골인 집 !! 회현 살면서 15년 넘게 단골인 집 !!꼭 가보세요... 진짜 맛있습니다@@@",
        date: "20240105"
      },
      // 추가적인 리뷰 카드가 있다면 여기에 계속 추가
    ]);
  }, []);
  // useEffect(() => {
  //   const myReviewContainer = document.querySelector(".my-review-container");
  //   if (myReviewContainer) {
  //     myReviewContainer
  //   }
  // }, []);
  const handlePrevious = () => {
    if (CurrentIndex > 0) {
      if(CurrentIndex <= 3 ){
        setCurrentIndex(0);
      } else{
        setCurrentIndex((prev) => prev - Maximumitems);
      }
      
    }
  };

  const handleNext = () => {
    if (CurrentIndex + 3 < reviewCardArray.length) {
      setCurrentIndex((prev) => prev + Maximumitems);
    }
  };

  return (
    <MyReviewWrapper>
      {(CurrentIndex - Maximumitems + 1) >= 0 ? (
        <LoadBeforeButton src={angle_double_small_left_orange} alt="이전" onClick={handlePrevious} />
      ) : (
        <LoadBeforeButton src={angle_double_small_left_gray} alt="이전" />
      )}
      <MyReviewContainer className="my-review-container">
        {reviewCardArray.slice(CurrentIndex, CurrentIndex + Maximumitems).map((review, index) => (
          <WriteReviewCard
            key={index}
            title={review.title}
            tag={review.tag}
            content={review.content}
            date={review.date}
          />
        ))}
      </MyReviewContainer>
      {(CurrentIndex + Maximumitems + 1) <= reviewCardArray.length ? (
        <LoadAfterButton src={angle_double_small_left_orange} alt="다음" onClick={handleNext} />
      ) : (
        <LoadAfterButton src={angle_double_small_left_gray} alt="다음" />
      )}
    </MyReviewWrapper>
  );
}

export default MyReview;

const MyReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 3.31rem;
`;
const MyReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0 10%;
  margin: 1.94rem 0;
`;

const LoadBeforeButton = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;

const LoadAfterButton = styled.img`
  cursor: pointer;
  width: 1.5rem; 
  height: 1.5rem; 
  transform: rotate(180deg); 
`;
