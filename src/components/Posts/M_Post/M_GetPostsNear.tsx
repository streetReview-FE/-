import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconComment from "../../../assets/Icons/fi-rr-comments.svg";
import iconHeart from "../../../assets/Icons/fi-rr-heart.svg";
import * as M from "../../../components/Card/MainReviewCard/M_MainReviewCard/M_stlyeMainReviewCard";
import type { GetPostListProps, Review } from "../../../constants/interface";
import { reverseGeocode } from "../../../store/gecoding";
import { getnearReviews } from "../nearReviews";
const M_GetPostNearList: React.FC<GetPostListProps> = ({ coordinate }) => {
  const [address, setAddress] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const addr = await reverseGeocode(coordinate);
        if (isMounted && coordinate) {
          try {
            const fetchedReviews = await getnearReviews(coordinate);
            setReviews(fetchedReviews);
          } catch (error) {
            console.log("error : ", error);
          }
          setAddress(addr ?? "");
        }
        //console.log(coordinate);
      } catch (error) {
        console.log(error, coordinate);
      }
    };
    if (coordinate) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [coordinate]);
  const navigate = useNavigate();
  const handleOnClickReview = (x: number, y:number) => {
    navigate(`/review/${x}/${y}`);
  };
  return (
    <>
      {reviews.map((review, index) => (
        <React.Fragment key={index}>
          <M.CardWrapper onClick={() => handleOnClickReview(review.x,review.y)}>
            {review.photoList[0] && (
              <M.CardImg src={review.photoList[0]} alt="reviewimgindex1" />
            )}
            <M.MainWrapper>
              <M.TopContent>
                <M.Title>{review.streetName}</M.Title>
                <M.Div>
                  <M.CommentDiv>
                    <M.CommentImg src={iconComment} alt="iconComment" />
                    {review.reviewCount}
                  </M.CommentDiv>
                  <M.HeartDiv>
                    <M.HeartImg src={iconHeart} alt="iconHeart" />
                    {review.likey}
                  </M.HeartDiv>
                </M.Div>
              </M.TopContent>
              <M.BottomDiv>
                <M.TagWrapper>
                  {review.tagsList[0]?.value && (
                    <M.Box1Div>#{review.tagsList[0]?.value}</M.Box1Div>
                  )}
                  {review.tagsList[1]?.value && (
                    <M.Box2Div>#{review.tagsList[1]?.value}</M.Box2Div>
                  )}
                  {review.tagsList[2]?.value && (
                    <M.Box3Div>#{review.tagsList[2]?.value}</M.Box3Div>
                  )}
                </M.TagWrapper>
                <M.DateDiv>
                  {/* {review.date.slice(2, 4)}.{date.slice(4, 6)}.{date.slice(6, 8)} */}
                  {}
                </M.DateDiv>
              </M.BottomDiv>
            </M.MainWrapper>
          </M.CardWrapper>
        </React.Fragment>
      ))}
    </>
  );
};

export default M_GetPostNearList;
