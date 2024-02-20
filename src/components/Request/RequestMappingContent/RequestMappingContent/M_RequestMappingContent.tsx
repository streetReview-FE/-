import { useState } from "react";
import { useLocation } from "react-router-dom";
import iconPlusBox from "../../../../assets/Icons/icon_plusbox.svg";
import iconXBox from "../../../../assets/Icons/icon_xbox.svg";
import { RequestStreet } from "../../../../constants/interface";
import usePostStreet from "../../../../hooks/usePostStreet";
import {
  RequestContainer,
  RequestSpan,
} from "../../RequestStart/M_RequestStart/M_stlyeRequestStart";
import * as M from "./M_styleRequestMappingContent";
interface LocationState {
  x: number;
  y: number;
  postAddress: string;
}
const M_RequestMappingContent = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const { x, y, postAddress } = state; //타입 숫자로 명시
  const { postStreet } = usePostStreet();

  const [formData, setFormData] = useState<RequestStreet>({
    streetAddress: postAddress,
    streetName: "",
    x: x,
    y: y,
    tagList: [{ value: "" }],
  });
  const [checkTitle, setCheckTitle] = useState(false);
  const [checkTag, setCheckTag] = useState(false);
  const handleRequest = () => {
    postStreet(formData);
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
  const checkPost = () => {
    const filteredTitle = formData.streetName.trim();
    const filteredTagList = formData.tagList.filter(
      (tag) => tag.value.trim() !== ""
    );

    setCheckTitle(filteredTitle.length > 0);
    setCheckTag(filteredTagList.length > 0);

    if (!(filteredTitle.length > 0)) {
      alert("거리이름을 입력해주세요.");
    }
    if (!(filteredTagList.length > 0)) {
      alert("태그를 1개이상 입력해주세요.");
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 유효성 검사 실행
    checkPost();
    if (checkTitle && checkTag) {
      console.log("제출 데이터", formData);
      handleRequest();
    }
  };
  return (
    <RequestContainer>
      <RequestSpan>거리 위치 검색</RequestSpan>
      <M.RequestCheckSearchBarWrapper>
        <M.InputForm onSubmit={handleSubmit}>
          <M.InputFormInputContent>
            <label>거리 이름을 알려주세요!</label>
            <M.InputFormInput
              type="text"
              id="streetName"
              name="streetName"
              value={formData.streetName}
              placeholder={"거리 이름"}
              onChange={handleChange}
            />
          </M.InputFormInputContent>
          <M.InputFormInputContent>
            <label>태그를 등록해주세요!(최대3개)</label>
            {formData.tagList.map((tag, index) => (
              <M.InputFormInputContentTag key={index}>
                <M.InputFormInput
                  type="text"
                  value={tag.value}
                  onChange={(e) => handleTagChange(e, index)}
                />
                {formData.tagList.length > 1 && (
                  <img
                    src={iconXBox}
                    alt="X"
                    onClick={() => handleTagRemove(index)}
                  />
                )}
              </M.InputFormInputContentTag>
            ))}
            <div style={{ marginTop: "1rem" }} />
            {formData.tagList.length < 3 && (
              <img src={iconPlusBox} alt="+" onClick={handleTagAdd} />
            )}
          </M.InputFormInputContent>
          <M.InputFormSubmitButton type="submit">
            등록하기
          </M.InputFormSubmitButton>
        </M.InputForm>
      </M.RequestCheckSearchBarWrapper>
    </RequestContainer>
  );
};

export default M_RequestMappingContent;
