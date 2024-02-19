import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Iconarrow } from "../../../../assets/Icons/fi-sr-arrow-small-right.svg";
import icon_side_menu_bar_map from "../../../../assets/Icons/icon_side_menu_bar_map.svg";
import { StoreState } from "../../../../constants/interface";
import { reverseGecodingDetail } from "../../../../store/gecodingDetail";
import {
  RequestContainer,
  RequestSpan,
} from "../../RequestStart/M_RequestStart/M_stlyeRequestStart";
import * as M from "./M_stlyeRequestMapping";
const M_RequestMapping = () => {
  const { coordinates } = useSelector((state: StoreState) => state.map);
  const [postAddress, setPostAddress] = useState<String>();
  const navigate = useNavigate();
  const handleStateNextPage = () => {
    navigate("/request/place/content", {
      state: {
        x: coordinates.lat,
        y: coordinates.lng,
        postAddress: postAddress?.slice(4),
      },
    });
  };
  useEffect(() => {
    const performReverseGeocoding = async () => {
      try {
        const address = await reverseGecodingDetail(coordinates);
        if (address) {
          console.log(address);
          setPostAddress(address);
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
    <RequestContainer>
      <RequestSpan>거리 위치 검색</RequestSpan>
      <M.RequestCheckSearchBarWrapper>
        <M.RequestCheckSearchBar
          id="streetAddress"
          type="text"
          placeholder={"현재 거리 등록하기"}
          readOnly
        />
        <M.RequestCheckSearchBarImg src={icon_side_menu_bar_map} alt="검색창" />
      </M.RequestCheckSearchBarWrapper>
      <M.ArrowIcon
        onClick={handleStateNextPage}
        fill={"rgba(239, 125, 22, 1)"}
        as={Iconarrow}
      />
    </RequestContainer>
  );
};

export default M_RequestMapping;
