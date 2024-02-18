import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import angle_double_small_left_orange from "../../../../assets/Icons/angle_double_small_left_orange.svg";
import { StoreState } from "../../../../constants/interface";
import { setAddress } from "../../../../redux/Mapactions";
import { reverseGeocode } from "../../../../store/gecoding";
import MainMappingReview from "../../MainMappingReview/MainMappingReview";
import * as M from "./M_stlyeM_MainSwipeContent";
interface MainSwipeContentProps {
  isOpenSideBar: boolean;
  handleIsOpenSideBar: () => void;
}
const M_MainSwipeContent: React.FC<MainSwipeContentProps> = ({
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
    <M.SwipeContainer>
      <M.DragCircle onClick={handleIsOpenSideBar}>
        <M.ArrowInDragCircle
          $isOpen={isOpenSideBar}
          src={angle_double_small_left_orange}
          alt="Arrow"
        />
      </M.DragCircle>
      <M.SwipeWrapper $isOpen={isOpenSideBar}>
        {isOpenSideBar && (
          <M.SwipeMenuWrapper>
            <M.SwipeMenuReviewWrapper>
              <M.SwipeMenuReviewMappingWrapper>
                <M.SwipeMenuReviewMappingTitle>
                  {address}
                </M.SwipeMenuReviewMappingTitle>
                {/* select필터 */}
                {/* <DropdownMenu/> */}
              </M.SwipeMenuReviewMappingWrapper>
              <MainMappingReview />
            </M.SwipeMenuReviewWrapper>
          </M.SwipeMenuWrapper>
        )}
      </M.SwipeWrapper>
      {/* 스와이프 화면 열었을 때 */}
    </M.SwipeContainer>
  );
};

export default M_MainSwipeContent;
