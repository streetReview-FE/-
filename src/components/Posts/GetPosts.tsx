import { Link } from "react-router-dom";
import type { GetPostListProps, Review } from "../../constants/interface";
import React, { useEffect, useState } from "react";
import { reverseGeocode } from "../../store/gecoding";
import { getReviews } from "./reviews";
import { RootState } from "../../store/rootReducer";
import { useSelector } from "react-redux";

const GetPostList: React.FC<GetPostListProps> = ({coordinate})=> {
  const [address, setAddress] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const selectedSortOption = useSelector((state: RootState) => state.menu.selectedMenuId);

  console.log(coordinate);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const addr = await reverseGeocode(coordinate);
        setAddress(addr ?? "");
        const reviewData = await getReviews(coordinate);
        switch (selectedSortOption) {
          case 1: // 예시: ID 순으로 정렬
            reviewData.sort((a, b) => a.id - b.id);
            break;
          case 2: // 예시: 좋아요 많은 순으로 정렬
            reviewData.sort((a, b) => b.likey - a.likey);
            break;
          // 다른 정렬 기준 추가 가능
          default:
            // 기본 정렬 로직 (선택하지 않았을 때)
            break;
        }
        setReviews(reviewData);
      }catch (error) {
        console.log(error);
      }
    };
    if(coordinate) {
    fetchData();
    }
  },[coordinate, selectedSortOption]);

  return (
    <>
      <h1>{address}</h1>
      <ul>
        {reviews.map((review) => (
          <Link key={review.id} to={`/street/all/view`}>
            <li>{review.content}</li>
            <li>{review.likey}</li>
            <li>{review.updatedDate}</li>
            <li>{review.nickname}</li>
            <li>{review.picture}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default GetPostList;