import { Link } from "react-router-dom";
import type { GetPostListProps, Review } from "../../constants/interface";
import React, { useEffect, useState } from "react";
import { reverseGeocode } from "../../store/gecoding";
import { getReviews } from "./reviews";

const GetPostList: React.FC<GetPostListProps> = ({coordinate})=> {
  const [address, setAddress] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const addr = await reverseGeocode(coordinate);
        setAddress(addr ?? "");
        const res = await getReviews(coordinate);
        console.log(coordinate);
        setReviews(res);
        console.log(Array.isArray(res));
      }catch (error) {
        console.log(error, coordinate);
      }
    };
    if(coordinate) {
    fetchData();
    }
  },[coordinate]);

  return (
    <>
      <h1>{address}</h1>
      <ul>
        {reviews.map((review, index) => (
          <Link key={index} to={`/review/{index}`}>
            <li>{review.streetName}</li>
            <li>{review.likey}</li>
            <ul>
              {review.tagsList.map((tag, tagIndex) => (
                <li key={tagIndex}>{tag.value}</li>
              ))}
            </ul>
            <div>
              {review.photoList.map((photo, photoIndex) => (
                <img key={photoIndex} src={photo} alt={`photo ${photoIndex}`}/>
              ))}
            </div>
            <li>{review.photoList}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default GetPostList;