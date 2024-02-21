import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import angle_double_small_left_orange from "../../../assets/Icons/angle_double_small_left_orange.svg";
import icon_side_menu_bar_map from "../../../assets/Icons/icon_side_menu_bar_map.svg";
import MainMappingReview from "../MainMappingReview/MainMappingReview";
// import { DropdownMenu } from "../../DropDown/dropdowm";
import { StoreState } from "../../../constants/interface";
import { setAddress } from "../../../redux/Mapactions";
import { reverseGeocode } from "../../../store/gecoding";
import * as W from "./stlyeM_MainSwipeContent";

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
    <W.SwipeContainer>
      <W.SwipeWrapper $isOpen={isOpenSideBar}>
        {isOpenSideBar && (
          <W.SwipeMenuWrapper>
            <W.SwipeMenuSearchBarWrapper>
              <W.SwipeMenuSearchBar
                id="searchKetword"
                type="text"
                placeholder={"어디로 떠나볼까요?"}
              />
              <W.SwipeMenuSearchBarImg
                src={icon_side_menu_bar_map}
                alt="검색창"
              />
            </W.SwipeMenuSearchBarWrapper>
            <W.SwipeMenuReviewWrapper>
              <W.SwipeMenuReviewMappingWrapper>
                <W.SwipeMenuReviewMappingTitle>
                  {address}
                </W.SwipeMenuReviewMappingTitle>
                {/* select필터 */}
                {/* <DropdownMenu/> */}
              </W.SwipeMenuReviewMappingWrapper>
              <MainMappingReview />
            </W.SwipeMenuReviewWrapper>
          </W.SwipeMenuWrapper>
        )}
      </W.SwipeWrapper>
      <W.DragCircle onClick={handleIsOpenSideBar}>
        <W.ArrowInDragCircle
          $isOpen={isOpenSideBar}
          src={angle_double_small_left_orange}
          alt="Arrow"
        />
      </W.DragCircle>
      {/* 스와이프 화면 열었을 때 */}
    </W.SwipeContainer>
  );
};
export default MainSwipeContent;
