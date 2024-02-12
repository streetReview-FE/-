import { useNavigate } from "react-router-dom";
import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import icon_side_menu_bar_map from "../../../assets/Icons/icon_side_menu_bar_map.svg";
import { ArrowIcon, RequestContainer, RequestSpan } from "../stlyeRequest";
import {
  RequestCheckSearchBar,
  RequestCheckSearchBarImg,
  RequestCheckSearchBarWrapper,
} from "./stlyeRequestMapping";
const RequestMapping = () => {
  const navigate = useNavigate();
  return (
    <RequestContainer>
      <RequestSpan>거리 위치 검색</RequestSpan>
      <RequestCheckSearchBarWrapper>
        <RequestCheckSearchBar
          id="searchKetword"
          type="text"
          placeholder={"어디로 떠나볼까요?"}
        />
        <RequestCheckSearchBarImg src={icon_side_menu_bar_map} alt="검색창" />
      </RequestCheckSearchBarWrapper>
      <ArrowIcon
        onClick={() => navigate(`/request/place/content`)}
        fill={"rgba(239, 125, 22, 1)"}
        as={Iconarrow}
      />
    </RequestContainer>
  );
};

export default RequestMapping;
