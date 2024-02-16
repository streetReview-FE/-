import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { GetPostListProps, Review } from "../../constants/interface";
import { reverseGeocode } from "../../store/gecoding";
import { getnearReviews } from "./nearReviews";

const GetPostNearList: React.FC<GetPostListProps> = ({coordinate})=> {
  const [address, setAddress] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const addr = await reverseGeocode(coordinate);
        if(isMounted && coordinate){
          try{
            const fetchedReviews = await getnearReviews(coordinate);
            setReviews(fetchedReviews);
          }catch(error){
            console.log("error : ", error);
          }
          setAddress(addr ?? "");
        }
        //console.log(coordinate);
      }catch (error) {
        console.log(error, coordinate);
      }
    };
    if(coordinate) {
    fetchData();
    }
    return () => {
      isMounted = false;
    };
  },[coordinate]);

  return (
    <>
      <h1>{address}</h1>
      <ul>
        {reviews.map((review, index) => (
          <Link key={index} to={`/review/${review.id}`}>
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

export default GetPostNearList;