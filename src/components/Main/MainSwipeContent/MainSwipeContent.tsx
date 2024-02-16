import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import angle_double_small_left_orange from "../../../assets/Icons/angle_double_small_left_orange.svg";
import icon_select_arrow from "../../../assets/Icons/fi-rr-caret-down.svg";
import icon_side_menu_bar_map from "../../../assets/Icons/icon_side_menu_bar_map.svg";
import MainMappingReview from "../MainMappingReview/MainMappingReview";
// import { DropdownMenu } from "../../DropDown/dropdowm";
import { StoreState } from "../../../constants/interface";
import { setAddress } from "../../../redux/Mapactions";
import { reverseGeocode } from "../../../store/gecoding";
const OPTIONS = [
  { value: "latest", name: "최신 순" },
  { value: "comment", name: "댓글 순" },
  { value: "like", name: "좋아요 순" },
];
interface MainSwipeContentProps {
  isOpenSideBar: boolean;
  handleIsOpenSideBar: () => void;
}
const MainSwipeContent: React.FC<MainSwipeContentProps> = ({
  isOpenSideBar,
  handleIsOpenSideBar,
}) => {
  const [sortBy, setSortBy] = useState(OPTIONS[0].name); // 초기값을 최신순으로 설정
  const handleChangeSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value); // 선택한 옵션으로 상태 업데이트
  };

  const dispatch = useDispatch();
  const { address, coordinates } = useSelector(
    (state: StoreState) => state.map
  );
  useEffect(() => {
    const performReverseGeocoding = async () => {
      try {
        const address = await reverseGeocode(coordinates);
        if (address) {
          dispatch(setAddress(address));
          console.log(address);
        } else {
          console.error("Address is undefined");
        }
      } catch (error) {
        console.error("Error while reverse geocoding:", error);
      }
    };
    // 좌표값이 변경될 때마다 역지오코딩을 수행
    performReverseGeocoding();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);
  return (
    //   세로 스와이프 화면
    <SwipeContainer>
      <SwipeWrapper $isOpen={isOpenSideBar}>
        {isOpenSideBar && (
          <SwipeMenuWrapper>
            <SwipeMenuSearchBarWrapper>
              <SwipeMenuSearchBar
                id="searchKetword"
                type="text"
                placeholder={"어디로 떠나볼까요?"}
              />
              <SwipeMenuSearchBarImg
                src={icon_side_menu_bar_map}
                alt="검색창"
              />
            </SwipeMenuSearchBarWrapper>
            <SwipeMenuReviewWrapper>
              <SwipeMenuReviewMappingWrapper>
                <SwipeMenuReviewMappingTitle>
                  {address}
                </SwipeMenuReviewMappingTitle>
                {/* select필터 */}
                {/* <DropdownMenu/> */}
                {/* 여기가 정렬 */}
                <SwipeMenuReviewMappingFilter
                  value={sortBy}
                  onChange={handleChangeSortBy}
                >
                  {OPTIONS.map((option) => (
                    <SwipeMenuReviewMappingFilterOption
                      key={option.value}
                      value={option.value}
                      defaultValue={option.value}
                    >
                      {option.name}
                    </SwipeMenuReviewMappingFilterOption>
                  ))}
                </SwipeMenuReviewMappingFilter>
              </SwipeMenuReviewMappingWrapper>
              {/* 리뷰카드 들어가는 칸 */}
              <MainMappingReview />
            </SwipeMenuReviewWrapper>
          </SwipeMenuWrapper>
        )}
      </SwipeWrapper>
      <DragCircle onClick={handleIsOpenSideBar}>
        <ArrowInDragCircle
          $isOpen={isOpenSideBar}
          src={angle_double_small_left_orange}
          alt="Arrow"
        />
      </DragCircle>
      {/* 스와이프 화면 열었을 때 */}
    </SwipeContainer>
  );
};

// 세로 스와이프 화면
const SwipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.7rem;
  left: 0;
  z-index: 1000;
  overflow: hidden;
`;
const SwipeWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  height: 60.5rem;
  width: ${({ $isOpen }) => ($isOpen ? `31.92rem` : `3.06rem`)};
  background-color: gray;
  border-radius: 0rem 1.25rem 1.25rem 0rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

// 사이드 창 열었을 때,
const SwipeMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 6.75rem;
  width: 100%;
`;
// 검색창
const SwipeMenuSearchBarWrapper = styled.div`
  position: relative;
`;
const SwipeMenuSearchBar = styled.input`
  width: 28rem;
  height: 3.8125rem;
  border-radius: 0.625rem;
  border: 2px solid #f0780c;
  background: #fff;
  color: var(--111, #ff9a83);
  font-size: 1.25rem;
  font-weight: 600;
  padding-left: 1.56rem;
  &::placeholder {
    color: var(--111, #ff9a83);
  }
  &:focus {
    outline: none;
  }
`;
const SwipeMenuSearchBarImg = styled.img`
  position: absolute;
  transform: translate(-100%, -50%);
  top: 50%;
  right: 0%;
  width: 1.5rem;
  height: 1.5rem;
`;

// 매핑되는 리뷰
const SwipeMenuReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.44rem;
  width: 100%;
`;
const SwipeMenuReviewMappingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2.81rem;
`;
const SwipeMenuReviewMappingTitle = styled.span`
  color: #000;
  font-size: 1.25rem;
  font-weight: 700;
`;
const SwipeMenuReviewMappingFilter = styled.select`
  width: 5.3125rem;
  height: 1.875rem;
  border-radius: 0.3125rem;
  border: 1px solid #e1dddb;
  background: #fff;

  color: #000;
  font-size: 0.75rem;
  font-weight: 600;
  &:focus {
    outline: none;
  }
  -webkit-appearance: none; /* WebKit 기반 브라우저에서 네이티브 스타일링 비활성화 */
  -moz-appearance: none; /* Firefox 브라우저에서 네이티브 스타일링 비활성화 */
  appearance: none; /* 네이티브 스타일링 비활성화 */
  padding-left: 0.44rem;
  background-image: url(${icon_select_arrow});
  background-repeat: no-repeat; /* 이미지 반복 제거 */
  background-position: right center; /* 화살표 위치 지정 */
`;
const SwipeMenuReviewMappingFilterOption = styled.option`
  -webkit-appearance: none; /* WebKit 기반 브라우저에서 네이티브 스타일링 비활성화 */
  -moz-appearance: none; /* Firefox 브라우저에서 네이티브 스타일링 비활성화 */
  appearance: none; /* 네이티브 스타일링 비활성화 */
  display: flex;
  white-space: pre;
  color: #000;
  max-width: 5.3125rem;
  max-height: 1.875rem;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 1.44rem;
`;

// 사이드창 동그라미
const DragCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3.5625rem;
  height: 3.5625rem;
  margin-left: -1.75rem;
  background-color: #fff;
  cursor: pointer;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;
const ArrowInDragCircle = styled.img<{ $isOpen: boolean }>`
  width: 1.75rem;
  height: 1.75rem;
  transform: ${({ $isOpen }) => ($isOpen ? `rotate(270deg)` : `rotate(90deg)`)};
`;

export default MainSwipeContent;
