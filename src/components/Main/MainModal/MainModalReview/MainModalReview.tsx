import { ReactComponent as Iconarrow } from "../../../../assets/Icons/fi-sr-arrow-small-right.svg";
import iconGrayArrow from "../../../../assets/Icons/icon_modalcontentgrayarrow.svg";
import testreviewsvg from "../../../../assets/test-review.svg";
import testUser from "../../../../assets/test-userimg.svg";
import {
  MainRevieWCardReviewer,
  MainRevieWCardReviewerImg,
  ModalContentReview,
  ModalContentReviewContent,
  ModalContentReviewContentGrayArrowIcon,
  ModalContentReviewTop,
  ModalContentReviewTopArrow,
  ModalContentReviewTopArrowIcon,
  RevieWCardDate,
  ReviewCardImg,
  ReviewCardTagBox1,
  ReviewCardTagBox2,
  ReviewCardTagBox3,
  ReviewCardTagWrapper,
} from "./stlyeMainModalReview";
const MainModalReview = () => {
  return (
    <ModalContentReview>
      {/* 리뷰쓰러가기 */}
      <ModalContentReviewTop>
        <ModalContentReviewTopArrow>리뷰쓰러가기</ModalContentReviewTopArrow>
        <ModalContentReviewTopArrowIcon
          // onClick={() => navigate(`/request/place`)}
          fill={"rgba(239, 125, 22, 1)"}
          as={Iconarrow}
        />
      </ModalContentReviewTop>
      {/* 리뷰 내용 */}
      <ModalContentReviewContent>
        회현 살면서 15년 넘게 단골인 집 !! 꼭 가보세요... 진짜 맛있습니다@@@
      </ModalContentReviewContent>
      <ModalContentReviewContentGrayArrowIcon
        src={iconGrayArrow}
        alt="GrayArrow"
      />
      {/* 유저아이콘 및 이름 */}
      <MainRevieWCardReviewerImg src={testUser} alt="testUser" />
      <MainRevieWCardReviewer>Yeondu</MainRevieWCardReviewer>
      <ReviewCardImg $img={testreviewsvg}>
        <RevieWCardDate>2023.01.03</RevieWCardDate>
      </ReviewCardImg>
      <ReviewCardTagWrapper>
        {/* 태그정렬은 최대 3개, 개수만큼 출력 */}
        <ReviewCardTagBox1>ska</ReviewCardTagBox1>
        <ReviewCardTagBox2>eoans</ReviewCardTagBox2>
        <ReviewCardTagBox3>tlwkd</ReviewCardTagBox3>
      </ReviewCardTagWrapper>
    </ModalContentReview>
  );
};

export default MainModalReview;
