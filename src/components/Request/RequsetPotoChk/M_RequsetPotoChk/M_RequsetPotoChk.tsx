import { message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import IconCamera from "../../../../assets/Icons/icon_postreviewCamera.png";
import { ImgPorpLocationState } from "../../../../constants/interface";
import * as M from "./M_styleRequsetPotoChk";

const M_RequsetPotoChk = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ImgPorpLocationState;
  const { id } = state;
  const handleHome = () => {
    message.success("요청했습니다!");
    navigate(`/`);
  };

  return (
    <M.PostReViewContainer>
      <M.PostReviewTopSpan>사진도 있나요?</M.PostReviewTopSpan>
      <M.PostReviewTopIcon $img={IconCamera} />
      <M.PostReviewImgChkButtonWarpper>
        <M.PostReviewBottomNextButton
          $width={7.1875}
          $height={2.1875}
          $marginTop={0}
          onClick={() =>
            navigate(`/request/place/poto`, {
              state: {
                id: id,
              },
            })
          }
        >
          네
        </M.PostReviewBottomNextButton>
        <div style={{ marginLeft: "0.62rem", marginRight: "0.62rem" }} />
        <M.PostReviewBottomNextButton
          $width={7.1875}
          $height={2.1875}
          $marginTop={0}
          onClick={handleHome}
        >
          아니요
        </M.PostReviewBottomNextButton>
      </M.PostReviewImgChkButtonWarpper>
    </M.PostReViewContainer>
  );
};

export default M_RequsetPotoChk;
