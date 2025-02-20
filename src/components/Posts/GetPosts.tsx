import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { GetPostListProps } from "../../constants/interface";
import { reverseGeocode } from "../../store/gecoding";

const GetPostList: React.FC<GetPostListProps> = ({coordinate, reviews})=> {
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const addr = await reverseGeocode(coordinate);
        if(isMounted){
          setAddress(addr ?? "");
        }
        // const res = await getReviews(coordinate);
        // console.log(coordinate);
        // console.log(Array.isArray(res));
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