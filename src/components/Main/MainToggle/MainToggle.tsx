import styled from "styled-components";
import icon_main_menu_group from "../../../assets/Icons/icon_main_menu_group.svg";

const MainToggle = () => {
  return (
    //   오른쪽 끝 메뉴
    <MenuContainer>
      <MenuCircle>
        <MenuCircleImg src={icon_main_menu_group} alt="메뉴" />
      </MenuCircle>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: absolute;
  right: 2.81rem;
  top: 3.56rem;
  z-index: 100;
  overflow: hidden;
`;
const MenuCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const MenuCircleImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

export default MainToggle;
