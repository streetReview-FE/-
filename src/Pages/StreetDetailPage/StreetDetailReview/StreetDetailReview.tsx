import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import iconGrayArrow from "../../../assets/Icons/icon_modalcontentgrayarrow.svg";
import testreviewsvg from "../../../assets/test-review.svg";
import {
    ModalContentReview,
    ModalContentReviewContent,
    ModalContentReviewContentGrayArrowIcon,
    ModalContentReviewTop,
    ModalContentReviewTopArrow,
    ModalContentReviewTopArrowIcon,
    ReviewCardImg,
    ReviewCardTagBox1,
    ReviewCardTagBox2,
    ReviewCardTagBox3,
    ReviewCardTagWrapper
} from "./stlyeStreetDetailReview";
const StreetDetailReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <ModalContentReview>
      {/* 리뷰쓰러가기 */}
      <ModalContentReviewTop>
        <ModalContentReviewTopArrow onClick={() => navigate(`/request`)}>거리 등록하러 가기</ModalContentReviewTopArrow>
        <ModalContentReviewTopArrowIcon
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
      {/* 유저아이콘 및 이름 생략 */}
      <div style={{marginTop: "1rem"}}/>
      {/* <MainRevieWCardReviewerImg src={testUser} alt="testUser" />
      <MainRevieWCardReviewer>Yeondu</MainRevieWCardReviewer> */}
      <ReviewCardImg $img={testreviewsvg}>
        {/* 등록일 생략 */}
        {/* <RevieWCardDate>2023.01.03</RevieWCardDate> */}
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

export default StreetDetailReview;
