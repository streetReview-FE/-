import React, { useEffect, useState } from "react";
import styled from "styled-components";
import test_review from "../../assets/test-review.svg";
import test_userimg from "../../assets/test-userimg.svg";
import NextArrow from "../Arrow/NextArrow";
import PreviousArrow from "../Arrow/PreviousArrow";

const events: Event[] = [
  {
    date: "2023-01-01",
    title: "한순자손칼국수",
    contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
    img: `${test_review}`,
  },
  {
    date: "2023-01-02",
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
    date: "2023-02-01",
    title: "한순자손칼국수",
    contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
    img: `${test_review}`,
  },
  {
    date: "2023-03-01",
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
  {
    date: "2020-04-30",
    title: "한순자손칼국수",
    contentText: "몰랐는데 저도 꼭 가봐야겠어요!3",
    img: `${test_review}`,
  },
  {
    date: "2020-05-30",
    title: "한순자손칼국수",
    contentText: "몰랐는데 저도 꼭 가봐야겠어요!3",
    img: `${test_review}`,
  },
];
type Event = {
  date: string;
  title: string;
  contentText: string;
  img: string;
};

const MyComment = () => {
  const [mycommentCardArray, setmyCommentCardArray] = useState<
  {
    date: string;
    title: string;
    contentText: string;
    img: string;
  }[]
>([]);
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
        date: "2023-02-01",
        title: "한순자손칼국수",
        contentText: "몰랐는데 저도 꼭 가봐야겠어요!",
        img: `${test_review}`,
      },
      {
        date: "2023-03-01",
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
// 연도와 달로 필터링 및 그룹화
const groupedDateEvents: Record<string, Event[]> = events.reduce(
  (acc, event) => {
    const [year, month] = event.date.split("-").slice(0, 2);
    const groupKey = `${year}.${month}`;

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(event);
    return acc;
  },
  {} as Record<string, Event[]>
);

// 각 그룹 내에서 날짜를 최신순으로 정렬
const sortedGroupedDateEvents: Record<string, Event[]> = {};
Object.keys(groupedDateEvents).forEach((groupKey) => {
  const sortedEvents = groupedDateEvents[groupKey].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  sortedGroupedDateEvents[groupKey] = sortedEvents;
  console.log(sortedGroupedDateEvents)
});
return (
  <MyCommentContainer>
    <PreviousArrow
      currentIndex={CurrentIndex}
      maximumItems={Maximumitems}
      onHandler={handlePrevious}
    />
{Object.keys(sortedGroupedDateEvents).slice(CurrentIndex, CurrentIndex + Maximumitems).map((groupKey, groupIndex) => (
      <MyCommentWrapper key={groupKey}>
        <YearAndMonth>{groupKey}</YearAndMonth>
    <MyCommentWrapperBox>
          {sortedGroupedDateEvents[groupKey].map((event, index) => (
            <React.Fragment key={index}>
              <MyCommentBox>
                <MyCommentDateWrapper>
                  <MyCommentDate>
                    {event.date.toString().slice(-2, -1) === "0"
                      ? event.date.toString().slice(-1)
                      : event.date.toString().slice(-2)}
                  </MyCommentDate>
                </MyCommentDateWrapper>
                <MyCommentContentWrapper isOdd={groupIndex % 2 !== 0}>
                  <MyCommentContent>
                    <EventUserImg src={test_userimg} alt="testUserImg" />
                    <div style={{ flexDirection: "column" }}>
                      <EventTitle>#{event.title}</EventTitle>
                      <EventContentText>{event.contentText}</EventContentText>
                    </div>
                    <EventImg img={event.img} />
                  </MyCommentContent>
                </MyCommentContentWrapper>
              </MyCommentBox>
            </React.Fragment>
          ))}
          <MyCommentDateLine />
        </MyCommentWrapperBox>
      </MyCommentWrapper>
    ))}
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
  margin-top: 5.06rem;
  position: relative;
`;

const MyCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyCommentWrapperBox = styled.div``;
const YearAndMonth = styled.div`
  color: var(--gray, #d9d9d9);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 125%; /* 1.5625rem */
`;

const MyCommentBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.63rem;
`;
const MyCommentDateLine = styled.div`
  height: 28.125rem;
  width: 0.25rem;
  background-color: #000;
  position: absolute;
  top: -1.37rem;
  left: 9rem;
  transform: translateX(50%);
  z-index: -1;
`;
const MyCommentDateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5625rem;
  height: 4.5625rem;
  border-radius: 0.625rem;
  background: #f0780c;
  margin-left: 1.94rem;
  margin-right: 6.13rem;
`;

const MyCommentDate = styled.div`
  width: 2.875rem;
  height: 2.375rem;
  color: #fff;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 100%; /* 2.25rem */
`;
const MyCommentContentWrapper = styled.div<{ isOdd: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27.375rem;
  height: 4.5625rem;
  border-radius: 1.25rem;
  background: ${(props) => (props.isOdd ? "rgba(171, 223, 241, 0.49)" : "rgba(231, 231, 231, 1)")};
`;
const MyCommentContent = styled.div`
  display: flex;
  align-items: center;
  width: 25.93rem;
  height: 3.0625rem;
`;

const EventUserImg = styled.img`
  width: 3.5rem;
  height: 3.0625rem;
  border-radius: 0.9375rem;
  margin-right: 0.81rem;
`;
const EventTitle = styled.div`
  display: flex;
  color: var(--bluishgreen, #0c4a60);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
`;
const EventImg = styled.div<{ img: string }>`
  display: flex;
  margin-left: auto;
  width: 1.9375rem;
  height: 1.9375rem;
  border-radius: 0.3125rem;
  background: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const EventContentText = styled.div`
  color: #000;
  font-size: 0.9375rem;
  font-weight: 700;
`;

export default MyComment;
