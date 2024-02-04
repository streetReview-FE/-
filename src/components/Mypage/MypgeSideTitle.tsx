import styled from "styled-components";
type MypageSelectedIconProp = {
    selectedIconText:string;
}
const MypgeSideTitle = ({ selectedIconText }: MypageSelectedIconProp ) => {

  return (
      <TopTitleWrapper>
          <TopTitleDiv>
              {selectedIconText}
          </TopTitleDiv>
      </TopTitleWrapper>
  );
};

export default MypgeSideTitle;

const TopTitleWrapper = styled.div`
  margin-top: 3.25rem;
  display: flex;
  justify-content:flex-end;
  align-items:center;
  padding-right: 3.63rem;
`
const TopTitleDiv = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  width: 17.75rem;
  height: 3.375rem;
  border-radius: 0.3125rem;
  background: #FAEFE6;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  color: #FF9A83;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`
