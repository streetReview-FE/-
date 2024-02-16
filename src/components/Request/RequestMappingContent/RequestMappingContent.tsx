import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Iconarrow } from "../../../assets/Icons/fi-sr-arrow-small-right.svg";
import { ArrowIcon, RequestContainer, RequestSpan } from "../stlyeRequest";
import {
  InputForm,
  RequestCheckSearchBarWrapper,
} from "./stlyeRequestMappingContent";
const apiUrl = process.env.REACT_APP_BASE_URL;
interface LocationState {
  x: number;
  y: number;
  postAddress: string;
}
const RequestMappingContent = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const { x, y, postAddress } = state; //타입 숫자로 명시
  const accessToken = localStorage.getItem("token");
  console.log(accessToken);
  const [formData, setFormData] = useState({
    streetAddress: postAddress,
    streetName: "",
    x: x,
    y: y,
    tagList: [{ value: "" }],
  });
  const handleRequest = async () => {
    const config = {
      // withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const res = await axios.post(
        `${apiUrl}/street/registration`,
        formData,
        config
      );
      console.log(res);
      if (res.status === 200) {
        navigate("/");
      } else {
        throw new Error("거리요청 실패");
      }
    } catch (error) {
      console.log("error : ", error);
      navigate("/");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newTagList = [...formData.tagList];
    newTagList[index] = { value };
    setFormData({ ...formData, tagList: newTagList });
  };

  const handleTagRemove = (index: number) => {
    const newTagList = [...formData.tagList];
    newTagList.splice(index, 1);
    setFormData({ ...formData, tagList: newTagList });
  };

  const handleTagAdd = () => {
    setFormData({
      ...formData,
      tagList: [...formData.tagList, { value: "" }],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 여기서 폼 데이터를 처리하거나 전송합니다.
    console.log(formData);
  };
  const navigate = useNavigate();
  return (
    <RequestContainer>
      <RequestSpan>거리 위치 검색</RequestSpan>
      <RequestCheckSearchBarWrapper>
        {/* <RequestSearchBar
          id="streetAddress"
          placeholder={"어디로 떠나볼까요?"}
        /> */}
        <InputForm onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="streetName"
              name="streetName"
              value={formData.streetName}
              placeholder={"거리 이름을 알려주세요!"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>태그를 등록해주세요!(최대3개)</label>
            {formData.tagList.map((tag, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={tag.value}
                  onChange={(e) => handleTagChange(e, index)}
                />
                <button type="button" onClick={() => handleTagRemove(index)}>
                  X
                </button>
              </div>
            ))}
            <button type="button" onClick={handleTagAdd}>
              +
            </button>
          </div>
          <button type="submit">Submit</button>
        </InputForm>
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
