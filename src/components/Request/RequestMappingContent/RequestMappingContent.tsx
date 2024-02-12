import { useNavigate } from "react-router-dom";
import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import { ArrowIcon, RequestContainer, RequestSpan } from "../stlyeRequest";
import {
  RequestCheckSearchBarWrapper,
  RequestSearchBar,
} from "./stlyeRequestMappingContent";
const RequestMappingContent = () => {
  const navigate = useNavigate();
  return (
    <RequestContainer>
      <RequestSpan>거리 위치 검색</RequestSpan>
      <RequestCheckSearchBarWrapper>
        <RequestSearchBar
          id="searchKetword"
          placeholder={"어디로 떠나볼까요?"}
        />
      </RequestCheckSearchBarWrapper>
      <ArrowIcon
        onClick={() => navigate(`/request/place`)}
        fill={"rgba(239, 125, 22, 1)"}
        as={Iconarrow}
      />
    </RequestContainer>
  );
};

export default RequestMappingContent;
