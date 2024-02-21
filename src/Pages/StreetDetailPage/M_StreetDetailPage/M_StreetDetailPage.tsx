import { message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../../Styles/Colors";
import iconPlus from "../../../assets/Icons/icon_plus.svg";
import iconGallery from "../../../assets/Icons/icons_gallery.png";
import { Container } from "../../../components/Login/style";
import MTopSideToggle from "../../../components/TopSideToggle/M_TopSideToggle/M_TopSideToggle";
import useGetReviewDetail from "../../../hooks/useGetReviewDetail";
import useGetStreetDetail from "../../../hooks/useGetStreetDetail";
import { useWriteReview } from "../../../hooks/useWriteReview";
import MStreetDetailComment from "./M_StreetDetailComment/M_StreetDetailComment";
import MStreetDetailReview from "./M_StreetDetailReview/M_StreetDetailReview";
const M_StreetDetailPage = () => {
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

  if (!streetDetail || !reviewDetailArr) {
    //   로딩처리
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ModalWrapper>
        <MTopSideToggle />
        <ModalContentWrapper>
          {isLoading && <div>Loading...</div>}
          <MStreetDetailReview streetDetail={streetDetail} />
          <MStreetDetailComment reviewDetail={reviewDetailArr} />
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
            <MainReviewCommentGallery htmlFor="file-input" />
            <MainReviewCommentInputButton
              src={iconPlus}
              alt="iconPlus"
              onClick={handleCommentSubmit}
            />
          </MainReviewCommentInputWrapper>
        </ModalContentWrapper>
      </ModalWrapper>
    </Container>
  );
};

export default M_StreetDetailPage;

// 모달
const ModalWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 1.06rem;
`;

const ModalContentWrapper = styled.div`
  border-radius: 1.25rem;
  background: #fff;
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;
//입력창
export const MainReviewCommentInputWrapper = styled.div`
  width: 95%;
  height: 2.875rem;
  border-radius: 0.9375rem;
  position: absolute;
  bottom: 1.44rem;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.orange};
`;

export const MainReviewCommentInput = styled.input`
  width: 85%;
  height: 2rem;
  border-radius: 0.75rem;
  background: ${Colors.white};
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  &:focus {
    outline: none;
  }
  border: none;
`;

export const MainReviewCommentInputButton = styled.img`
  margin-left: 0.3rem;
  width: 2.125rem;
  height: 2.125rem;
`;
// 사진 입력
const HiddenFileInput = styled.input`
  display: none;
`;
export const MainReviewCommentGallery = styled.label`
  position: absolute;
  top: 0.75rem;
  right: 15%;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${iconGallery});
  background-size: cover;
  cursor: pointer;
`;
