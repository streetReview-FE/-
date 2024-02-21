import { useNavigate } from "react-router-dom";
import Colors from "../../../../Styles/Colors";
import { ReactComponent as Iconarrow } from "../../../../assets/Icons/fi-sr-arrow-small-right.svg";
import { StreetDetail } from "../../../../constants/interface";
import * as M from "./M_stlyeStreetDetailReview";

interface StreetDetailReviewProps {
  streetDetail: StreetDetail;
}

const M_StreetDetailReview: React.FC<StreetDetailReviewProps> = ({
  streetDetail,
}) => {
  const navigate = useNavigate();
  return (
    <M.ModalContentReview>
      {/* 리뷰쓰러가기 */}
      <M.ModalContentReviewTop>
        <M.ModalContentReviewTopArrowIcon
          fill={Colors.request.SpanGray}
          as={Iconarrow}
          onClick={() => navigate(`/request`)}
        />
      </M.ModalContentReviewTop>
      {/* 리뷰 내용 */}
      <M.ReviewContent>
        <M.ReviewCardImg $img={streetDetail.photoList[0]} />
        <M.ModalContentReviewContent>
          <M.ModalContentReviewContentSpan>
            {streetDetail.streetName}
          </M.ModalContentReviewContentSpan>
          {streetDetail.streetAddress}
          <M.ContentNavigateWrapper onClick={() => navigate(`/postReview`)}>
            거리 요청하러 가기
            <M.ModalContentReviewBottomArrowIcon
              fill={Colors.orange}
              as={Iconarrow}
            />
          </M.ContentNavigateWrapper>
        </M.ModalContentReviewContent>
      </M.ReviewContent>
      {/* 태그 */}
      <M.ReviewCardTagWrapper>
        {/* 태그정렬은 최대 3개, 개수만큼 출력 */}
        {streetDetail.tagsList[0]?.value && (
          <M.ReviewCardTagBox1>
            #{streetDetail.tagsList[0]?.value}
          </M.ReviewCardTagBox1>
        )}
        {streetDetail.tagsList[1]?.value && (
          <M.ReviewCardTagBox2>
            #{streetDetail.tagsList[1]?.value}
          </M.ReviewCardTagBox2>
        )}
        {streetDetail.tagsList[2]?.value && (
          <M.ReviewCardTagBox3>
            #{streetDetail.tagsList[2]?.value}
          </M.ReviewCardTagBox3>
        )}
      </M.ReviewCardTagWrapper>
    </M.ModalContentReview>
  );
};

export default M_StreetDetailReview;
