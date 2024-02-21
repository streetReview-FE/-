import { useEffect, useState } from "react";
import styled from "styled-components";
import StreetDetailPage from "../../../Pages/StreetDetailPage/StreetDetailPage";
import testEventBanner from "../../../assets/test-eventbanner.png";
import type { Coordinates, Review } from "../../../constants/interface";
import GetPostList from "../../Posts/GetPosts";
import GetPostNearList from "../../Posts/GetPostsNear";

const MainMappingReview = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentCoord, setCurrentCoord] = useState<Coordinates | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [viewMode, setViewMode] = useState('nearby'); 

  useEffect(() => {
    const fetchCurrentLocation = () => {
      if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (postion) => {
            setCurrentCoord({ lat:postion.coords.latitude, lng: postion.coords.longitude});
          },
            (error) => {
              console.log('error: ',error);
          }
        ); 
      } else {
        console.error('위치정보 지원 안됨');
      }
    };
    fetchCurrentLocation();
  },[]);
  
  return (
    <MainReviewWrapper>
      <MainReviewContainer>
          {currentCoord && viewMode === 'selected' && (
            <GetPostList coordinate={currentCoord} reviews={reviews} />
          )}
          {currentCoord && viewMode === 'nearby' &&(
            <GetPostNearList coordinate={currentCoord} reviews={reviews}/>
          )}
      </MainReviewContainer>
      {isOpenModal && <StreetDetailPage />}
      {/* 이벤트 배너가 들어가는 곳 */}
      <MainReviewContentEventBanner src={testEventBanner} alt="testUser" />
    </MainReviewWrapper>
  );
};

export default MainMappingReview;

const MainReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 2.06rem;
`;

const MainReviewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 38rem;
`;

const MainReviewContentEventBanner = styled.img`
  margin-top: 0.56rem;
  width: 27.25rem;
  height: 4.625rem;
  border-radius: 0.625rem;
  object-fit: cover;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

