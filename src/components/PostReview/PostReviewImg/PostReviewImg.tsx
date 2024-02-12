import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconPostImg from "../../../assets/Icons/icon_post_img.svg";
import IconCamera from "../../../assets/Icons/icon_postreviewCamera.png";
import {
  PostReViewContainer,
  PostReviewBottomNextButton,
  PostReviewTopIcon,
  PostReviewTopSpan,
} from "../stylePostReview";
import {
  PostReviewImgBoxImg,
  PostReviewImgGridWrapper,
  PostReviewImgInput,
  PostReviewImgNoneIcon,
  PostReviewImgWrapper,
} from "./stlyePostReviewImg";
const PostReviewImg = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState<{ image: string | null }[]>([
    { image: null },
    { image: null },
    { image: null },
  ]);

  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        const updatedOptions = [...options];
        updatedOptions[index].image = dataUrl;
        setOptions(updatedOptions);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <PostReViewContainer>
      <PostReviewTopIcon $img={IconCamera} />
      <PostReviewTopSpan>사진 공유해주세요!</PostReviewTopSpan>
      <PostReviewImgGridWrapper>
        {options.map((option, index) => (
          <PostReviewImgWrapper key={index}>
            <label htmlFor={`upload-button-${index}`}>
              {option.image ? (
                <PostReviewImgBoxImg $img={option.image} />
              ) : (
                <PostReviewImgNoneIcon>
                  <img src={IconPostImg} alt="Upload Icon" />
                </PostReviewImgNoneIcon>
              )}
            </label>
            <PostReviewImgInput
              id={`upload-button-${index}`}
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(index, e)}
            />
          </PostReviewImgWrapper>
        ))}
      </PostReviewImgGridWrapper>
      <PostReviewBottomNextButton
        $width={20.75}
        $height={2.5625}
        $marginTop={7.81}
        onClick={() => navigate(`/postReview/check`)}
      >
        사진 업로드 하기
      </PostReviewBottomNextButton>
    </PostReViewContainer>
  );
};

export default PostReviewImg;
