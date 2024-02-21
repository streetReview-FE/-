import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
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
import MRequsetPoto from "./components/Request/RequsetPoto/M_RequsetPoto/M_RequsetPoto";
import MRequsetPotoChk from "./components/Request/RequsetPotoChk/M_RequsetPotoChk/M_RequsetPotoChk";
import { PrivateRoute } from './utils/PrivateRoute';
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/googleMap" element={<GoogleMaps />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/google/auth" element={<RedirectionPage />} />

          <Route element={<PrivateRoute/>}>
            <Route path="/mypage" element={<MyPage />}>
              <Route path="review" element={<MyReview />} />
              <Route path="mycomment" element={<MyComment />} />
              <Route path="likecomment" element={<MyLikeComment />} />
              <Route path="secession" element={<MySecession />} />
            </Route>
            <Route path="/review/:x/:y" element={<StreetDetailPage />}/>
            <Route path="/request" element={<RequestPlacePage />}>
              <Route path="" element={<RequestStart />} />
              <Route path="place" element={<RequestMapping />} />
              <Route path="place/content" element={<RequestMappingContent />} />
              <Route path="place/potoChk" element={<MRequsetPotoChk />} />
            <Route path="place/poto" element={<MRequsetPoto />} />
            </Route>
            <Route path="/postReview" element={<PostReviewPage />}>
              <Route path="" element={<PostReviewText />} />
              <Route path="potoChk" element={<PostReviewImgChk />} />
              <Route path="poto" element={<PostReviewImg />} />
              <Route path="check" element={<PostReviewCheck />} />
            </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
