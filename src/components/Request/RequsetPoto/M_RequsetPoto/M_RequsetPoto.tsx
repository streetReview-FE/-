import { useState } from "react";
import { useLocation } from "react-router-dom";
import IconPostImg from "../../../../assets/Icons/icon_post_img.svg";
import { ImgPorpLocationState } from "../../../../constants/interface";
import useUploadImg from "../../../../hooks/useUploadImg";
import * as M from "./M_styleRequsetPoto";

const M_RequsetPoto = () => {
  const location = useLocation();
  const state = location.state as ImgPorpLocationState;
  const { id } = state;
  const { postUploadImg } = useUploadImg();
  const [options, setOptions] = useState<{ image: string | null }[]>([
    { image: null },
    { image: null },
    { image: null },
  ]);
  const [newFileImgs, setNewFileImgs] = useState<File[]>([]);
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
    const fileList = e.target.files;
    if (fileList) {
      const newFiles = Array.from(fileList); // 선택된 파일 리스트를 배열로 변환
      setNewFileImgs((prevFiles) => {
        const updatedFiles = [...prevFiles, ...newFiles].slice(0, 3); // 기존 파일과 새 파일을 합치고, 최대 3개만 유지
        return updatedFiles;
      });
    }
  };
  const handleOnSubmit = async () => {
    await postUploadImg("STREET", id, newFileImgs);
  };
  return (
    <M.PostReViewContainer>
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
        onClick={handleOnSubmit}
      >
        업로드 하기
      </M.PostReviewBottomNextButton>
    </M.PostReViewContainer>
  );
};

export default M_RequsetPoto;
