import { BrowserRouter, Route, Routes } from "react-router-dom";
import MMainPage from "./Pages/MainPage/M_MainPage";
import MMyPage from "./Pages/MyPage/M_MyPage/M_MyPage";
import PostReviewPage from "./Pages/PostReviewPage/PostReviewPage";
import MRequestPlacePage from "./Pages/RequestPlacePage/M_RequestPlacePage/M_RequestPlacePage";
import StreetDetailPage from "./Pages/StreetDetailPage/StreetDetailPage";
import GoogleMaps from "./components/GoogleMaps";
import Login from "./components/Login/GoogleLogin";
import RedirectionPage from "./components/Login/redirectionPage";
import MMyComment from "./components/Mypage/M_MyPage/M_MyComment";
import MMyLikeComment from "./components/Mypage/M_MyPage/M_MyLikeComment";
import MMyReview from "./components/Mypage/M_MyPage/M_MyReview";
import MMySecession from "./components/Mypage/M_MyPage/M_MySecession";
import MySecession from "./components/Mypage/MySecession";
import PostReviewCheck from "./components/PostReview/PostReviewCheck/PostReviewCheck";
import PostReviewImg from "./components/PostReview/PostReviewImg/PostReviewImg";
import PostReviewImgChk from "./components/PostReview/PostReviewImgChk/PostReviewImgChk";
import PostReviewText from "./components/PostReview/PostReviewText/PostReviewText";
import MRequestMapping from "./components/Request/RequestMapping/M_RequestMapping/M_RequestMapping";
import MRequestMappingContent from "./components/Request/RequestMappingContent/RequestMappingContent/M_RequestMappingContent";
import MRequestStart from "./components/Request/RequestStart/M_RequestStart/M_RequestStart";
const MobileRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/googleMap" element={<GoogleMaps />} />
          <Route path="/" element={<MMainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/google/auth" element={<RedirectionPage />} />

          {/* <Route element={<PrivateRoute/>}> */}
          <Route path="/mypage" element={<MMyPage />}>
            <Route path="review" element={<MMyReview />} />
            <Route path="mycomment" element={<MMyComment />} />
            <Route path="likecomment" element={<MMyLikeComment />} />
            <Route path="secession" element={<MMySecession />} />
          </Route>
          <Route path="/review" element={<StreetDetailPage />}>
            <Route path=":id" element={<MySecession />} />
          </Route>
          <Route path="/request" element={<MRequestPlacePage />}>
            <Route path="" element={<MRequestStart />} />
            <Route path="place" element={<MRequestMapping />} />
            <Route path="place/content" element={<MRequestMappingContent />} />
          </Route>
          <Route path="/postReview" element={<PostReviewPage />}>
            <Route path="" element={<PostReviewText />} />
            <Route path="potoChk" element={<PostReviewImgChk />} />
            <Route path="poto" element={<PostReviewImg />} />
            <Route path="check" element={<PostReviewCheck />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MobileRouter;
