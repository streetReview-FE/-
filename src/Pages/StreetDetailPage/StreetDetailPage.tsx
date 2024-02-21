import { message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import iconPlus from "../../assets/Icons/icon_plus.svg";
import iconGallery from "../../assets/Icons/icons_galleryGray.png";
import { Container } from "../../components/Login/style";
import useGetReviewDetail from "../../hooks/useGetReviewDetail";
import useGetStreetDetail from "../../hooks/useGetStreetDetail";
import { useWriteReview } from "../../hooks/useWriteReview";
import StreetDetailComment from "./StreetDetailComment/StreetDetailComment";
import StreetDetailReview from "./StreetDetailReview/StreetDetailReview";
const StreetDetailPage = () => {
  const { x, y } = useParams<{
    x: string;
    y: string;
  }>();
  const { getStreetDetail, streetDetail } = useGetStreetDetail();
  const { getReviewDetail, reviewDetailArr } = useGetReviewDetail();
  const { writeReview } = useWriteReview();
  const [newComment, setNewComment] = useState<string>("");
  const [newFileImgs, setNewFileImgs] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (x && y) {
      getStreetDetail(x, y); //거리 상세보기
      getReviewDetail(x, y); //댓글(리뷰 조회)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x, y]);

  if (!streetDetail || !reviewDetailArr) {
    //   로딩처리
    return <div>Loading...</div>;
  }

  const handleCommentSubmit = async () => {
    const PostData = {
      lat: Number(x),
      lng: Number(y),
    };
    if (newComment.trim() !== "" && x && y) {
      setIsLoading(true);
      try {
        await writeReview(PostData, newComment, newFileImgs);
        getReviewDetail(x, y);
        setNewComment(""); // 입력 필드 초기화
      } catch (error) {
        console.error("Error writing review:", error);
        message.error("댓글 등록에 실패했습니다!");
      } finally {
        message.success("댓글 등록에 성공했습니다!");
        setIsLoading(false); // 로딩 상태 해제
      }
    }
  };
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileList = event.target.files;
    if (fileList) {
      const newFiles = Array.from(fileList); // 선택된 파일 리스트를 배열로 변환
      setNewFileImgs((prevFiles) => {
        const updatedFiles = [...prevFiles, ...newFiles].slice(0, 3); // 기존 파일과 새 파일을 합치고, 최대 3개만 유지
        return updatedFiles;
      });
      event.target.value = ""; // input 요소 리셋
    }
  };
  return (
    <Container>
      {isLoading && <div>Loading...</div>}
      <ModalWrapper>
        <ModalContentWrapper>
          <StreetDetailReview streetDetail={streetDetail} />
          <StreetDetailCommentWrapper>
            <StreetDetailComment reviewDetail={reviewDetailArr} />
            <MainReviewCommentInputWrapper>
              <MainReviewCommentInput
                type="text"
                value={newComment} // 입력값 상태로 설정
                onChange={(e) => setNewComment(e.target.value)} // 입력값 업데이트
              />
              <HiddenFileInput
                id="file-input"
                type="file"
                multiple
                onChange={handleFileInputChange}
                accept="image/*" // 이미지 파일만 선택 가능
              />
              <MainReviewCommentGallery
                $img={iconGallery}
                htmlFor="file-input"
              />
              <MainReviewCommentInputButton
                src={iconPlus}
                alt="iconPlus"
                onClick={handleCommentSubmit}
              />
            </MainReviewCommentInputWrapper>
          </StreetDetailCommentWrapper>
        </ModalContentWrapper>
      </ModalWrapper>
    </Container>
  );
};

export default StreetDetailPage;

// 모달
const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 1.06rem;
`;

const ModalContentWrapper = styled.div`
  width: 65.8125rem;
  height: 41.625rem;
  border-radius: 1.25rem;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  // align-items: center;
  justify-items: center;
`;

const StreetDetailCommentWrapper = styled.div`
  width: 27.6875rem;
  margin-top: 5.63rem;
  position: relative;
  height: 30rem;
`;
// 댓글 입력부
export const MainReviewCommentInputWrapper = styled.div`
  width: 27.6875rem;
  height: 2.875rem;
  border-radius: 0.9375rem;
  background: rgba(217, 217, 217, 1);
  position: absolute;
  bottom: 0rem;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainReviewCommentInput = styled.input`
  width: 24.4375rem;
  height: 1.9375rem;
  border-radius: 0.75rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
  &:focus {
    outline: none;
  }
  border: none;
`;
export const MainReviewCommentInputButton = styled.img`
  width: 2.125rem;
  height: 2.125rem;
  margin-left: 0.3rem;
`;
export const HiddenFileInput = styled.input`
  display: none;
`;

export const MainReviewCommentGallery = styled.label<{ $img: string }>`
  position: absolute;
  top: 0.75rem;
  right: 15%;
  width: 1.5rem;
  height: 1.5rem;
  background-image: ${(props) => `url(${props.$img})`};
  background-size: cover;
  cursor: pointer;
`;
