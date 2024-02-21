import { useNavigate } from "react-router-dom";
import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import iconGrayArrow from "../../../assets/Icons/icon_modalcontentgrayarrow.svg";
import { StreetDetail } from "../../../constants/interface";
import * as W from "./stlyeStreetDetailReview";
interface StreetDetailReviewProps {
  streetDetail: StreetDetail;
}
const StreetDetailReview: React.FC<StreetDetailReviewProps> = ({
  streetDetail,
}) => {
  const navigate = useNavigate();
  return (
    <W.ModalContentReview>
      {/* 리뷰쓰러가기 */}
      <W.ModalContentReviewTop onClick={() => navigate(`/request`)}>
        <W.ModalContentReviewTopArrow>
          거리 요청하러 가기
        </W.ModalContentReviewTopArrow>
        <W.ModalContentReviewTopArrowIcon
          fill={"rgba(239, 125, 22, 1)"}
          as={Iconarrow}
        />
      </W.ModalContentReviewTop>
      {/* 리뷰 내용 */}
      <W.ModalContentReviewContent>
        <W.ModalContentReviewContentSpan>
          {streetDetail.streetName}
        </W.ModalContentReviewContentSpan>
        {streetDetail.streetAddress}
      </W.ModalContentReviewContent>
      <W.ModalContentReviewContentGrayArrowIcon
        src={iconGrayArrow}
        alt="GrayArrow"
      />
      {/* 유저아이콘 및 이름 생략 */}
      <div style={{ marginTop: "1rem" }} />
      {/* <MainRevieWCardReviewerImg src={testUser} alt="testUser" />
      <MainRevieWCardReviewer>Yeondu</MainRevieWCardReviewer> */}
      <W.ReviewCardImg $img={streetDetail.photoList[0]}>
        {/* 등록일 생략 */}
        {/* <RevieWCardDate>2023.01.03</RevieWCardDate> */}
      </W.ReviewCardImg>
      <W.ReviewCardTagWrapper>
        {/* 태그정렬은 최대 3개, 개수만큼 출력 */}
        {/* 태그정렬은 최대 3개, 개수만큼 출력 */}
        {streetDetail.tagsList[0]?.value && (
          <W.ReviewCardTagBox1>
            #{streetDetail.tagsList[0]?.value}
          </W.ReviewCardTagBox1>
        )}
        {streetDetail.tagsList[1]?.value && (
          <W.ReviewCardTagBox2>
            #{streetDetail.tagsList[1]?.value}
          </W.ReviewCardTagBox2>
        )}
        {streetDetail.tagsList[2]?.value && (
          <W.ReviewCardTagBox3>
            #{streetDetail.tagsList[2]?.value}
          </W.ReviewCardTagBox3>
        )}
      </W.ReviewCardTagWrapper>
    </W.ModalContentReview>
  );
};

export default StreetDetailReview;
