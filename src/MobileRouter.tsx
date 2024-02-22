import { BrowserRouter, Route, Routes } from "react-router-dom";
import MMainPage from "./Pages/MainPage/M_MainPage";
import MMyPage from "./Pages/MyPage/M_MyPage/M_MyPage";
import MPostReviewPage from "./Pages/PostReviewPage/M_PostReviewPage/M_PostReviewPage";
import MRequestPlacePage from "./Pages/RequestPlacePage/M_RequestPlacePage/M_RequestPlacePage";
import MStreetDetailPage from "./Pages/StreetDetailPage/M_StreetDetailPage/M_StreetDetailPage";
import GoogleMaps from "./components/GoogleMaps";
import Login from "./components/Login/GoogleLogin";
import RedirectionPage from "./components/Login/redirectionPage";
import MMyComment from "./components/Mypage/M_MyPage/M_MyComment";
import MMyLikeComment from "./components/Mypage/M_MyPage/M_MyLikeComment";
import MMyReview from "./components/Mypage/M_MyPage/M_MyReview";
import MMySecession from "./components/Mypage/M_MyPage/M_MySecession";
import MPostReviewStart from "./components/PostReview/M_PostReviewStart/M_PostReviewStart";
import MPostReviewImg from "./components/PostReview/PostReviewImg/M_PostReviewImg/M_PostReviewImg";
import MPostReviewImgChk from "./components/PostReview/PostReviewImgChk/M_PostReviewImgChk/M_PostReviewImgChk";
import MPostReviewText from "./components/PostReview/PostReviewText/M_PostReviewText/M_PostReviewText";
import MRequestMapping from "./components/Request/RequestMapping/M_RequestMapping/M_RequestMapping";
import MRequestMappingContent from "./components/Request/RequestMappingContent/RequestMappingContent/M_RequestMappingContent";
import MRequestStart from "./components/Request/RequestStart/M_RequestStart/M_RequestStart";
import MRequsetPoto from "./components/Request/RequsetPoto/M_RequsetPoto/M_RequsetPoto";
import MRequsetPotoChk from "./components/Request/RequsetPotoChk/M_RequsetPotoChk/M_RequsetPotoChk";
const MobileRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/googleMap" element={<GoogleMaps />} />
          <Route path="" element={<MMainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/google/auth" element={<RedirectionPage />} />

          {/* <Route element={<PrivateRoute/>}> */}
          <Route path="/mypage" element={<MMyPage />}>
            <Route path="review" element={<MMyReview />} />
            <Route path="mycomment" element={<MMyComment />} />
            <Route path="likecomment" element={<MMyLikeComment />} />
            <Route path="secession" element={<MMySecession />} />
          </Route>
          <Route path="/review/:x/:y" element={<MStreetDetailPage />} />
          <Route path="/request" element={<MRequestPlacePage />}>
            <Route path="" element={<MRequestStart />} />
            <Route path="place" element={<MRequestMapping />} />
            <Route path="place/content" element={<MRequestMappingContent />} />
            <Route path="place/potoChk" element={<MRequsetPotoChk />} />
            <Route path="place/poto" element={<MRequsetPoto />} />
          </Route>
          <Route path="/postReview" element={<MPostReviewPage />}>
            <Route path="" element={<MPostReviewStart />} />
            {/* 여기서 데이터값 넘기기 */}
            <Route path="content" element={<MPostReviewText />} />
            <Route path="potoChk" element={<MPostReviewImgChk />} />
            <Route path="poto" element={<MPostReviewImg />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MobileRouter;
