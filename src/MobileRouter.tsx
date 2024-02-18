import { BrowserRouter, Route, Routes } from "react-router-dom";
import MMainPage from "./Pages/MainPage/M_MainPage";
import MyPage from "./Pages/MyPage/MyPage";
import PostReviewPage from "./Pages/PostReviewPage/PostReviewPage";
import RequestPlacePage from "./Pages/RequestPlacePage/RequestPlacePage";
import StreetDetailPage from "./Pages/StreetDetailPage/StreetDetailPage";
import GoogleMaps from "./components/GoogleMaps";
import Login from "./components/Login/GoogleLogin";
import RedirectionPage from "./components/Login/redirectionPage";
import MyComment from "./components/Mypage/MyComment";
import MyLikeComment from "./components/Mypage/MyLikeComment";
import MyReview from "./components/Mypage/MyReview";
import MySecession from "./components/Mypage/MySecession";
import PostReviewCheck from "./components/PostReview/PostReviewCheck/PostReviewCheck";
import PostReviewImg from "./components/PostReview/PostReviewImg/PostReviewImg";
import PostReviewImgChk from "./components/PostReview/PostReviewImgChk/PostReviewImgChk";
import PostReviewText from "./components/PostReview/PostReviewText/PostReviewText";
import RequestMapping from "./components/Request/RequestMapping/RequestMapping";
import RequestMappingContent from "./components/Request/RequestMappingContent/RequestMappingContent";
import RequestStart from "./components/Request/RequestStart/RequestStart";
import { PrivateRoute } from './utils/PrivateRoute';
const MobileRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/googleMap" element={<GoogleMaps />} />
          <Route path="/" element={<MMainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/google/auth" element={<RedirectionPage />} />

          <Route element={<PrivateRoute/>}>
            <Route path="/mypage" element={<MyPage />}>
              <Route path="review" element={<MyReview />} />
              <Route path="mycomment" element={<MyComment />} />
              <Route path="likecomment" element={<MyLikeComment />} />
              <Route path="secession" element={<MySecession />} />
            </Route>
            <Route path="/review" element={<StreetDetailPage />}>
              <Route path=":id" element={<MySecession />} />
            </Route>
            <Route path="/request" element={<RequestPlacePage />}>
              <Route path="" element={<RequestStart />} />
              <Route path="place" element={<RequestMapping />} />
              <Route path="place/content" element={<RequestMappingContent />} />
            </Route>
            <Route path="/postReview" element={<PostReviewPage />}>
              <Route path="" element={<PostReviewText />} />
              <Route path="potoChk" element={<PostReviewImgChk />} />
              <Route path="poto" element={<PostReviewImg />} />
              <Route path="check" element={<PostReviewCheck />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MobileRouter;
