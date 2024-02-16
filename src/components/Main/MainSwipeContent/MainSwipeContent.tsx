import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import angle_double_small_left_orange from "../../../assets/Icons/angle_double_small_left_orange.svg";
import icon_side_menu_bar_map from "../../../assets/Icons/icon_side_menu_bar_map.svg";
import MainMappingReview from "../MainMappingReview/MainMappingReview";
// import { DropdownMenu } from "../../DropDown/dropdowm";
import { StoreState } from "../../../constants/interface";
import { setAddress } from "../../../redux/Mapactions";
import { reverseGeocode } from "../../../store/gecoding";

interface MainSwipeContentProps {
  isOpenSideBar: boolean;
  handleIsOpenSideBar: () => void;
}
const MainSwipeContent: React.FC<MainSwipeContentProps> = ({
  isOpenSideBar,
  handleIsOpenSideBar,
}) => {
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
              </SwipeMenuReviewMappingWrapper>
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
