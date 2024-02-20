import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconPostImg from "../../../../assets/Icons/icon_post_img.svg";
import { PostReViewContainer } from "../../stylePostReview";
import * as M from "./M_stlyePostReviewImg";
const M_PostReviewImg = () => {
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
      <M.PostReviewTopSpan>사진 공유해주세요!</M.PostReviewTopSpan>
      <M.PostReviewImgGridWrapper>
        {options.map((option, index) => (
          <M.PostReviewImgWrapper key={index}>
            <label htmlFor={`upload-button-${index}`}>
              {option.image ? (
                <M.PostReviewImgBoxImg $img={option.image} />
              ) : (
                <M.PostReviewImgNoneIcon>
                  <img src={IconPostImg} alt="Upload Icon" />
                </M.PostReviewImgNoneIcon>
              )}
            </label>
            <M.PostReviewImgInput
              id={`upload-button-${index}`}
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(index, e)}
            />
          </M.PostReviewImgWrapper>
        ))}
      </M.PostReviewImgGridWrapper>
      <M.PostReviewBottomNextButton
        $width={9.4375}
        $height={2.5625}
        $marginTop={11.56}
        onClick={() => navigate(`/`)}
      >
        업로드 하기
      </M.PostReviewBottomNextButton>
    </PostReViewContainer>
  );
};

export default M_PostReviewImg;
