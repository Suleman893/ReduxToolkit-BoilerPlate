import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../Topbar/TopbarStyles";
import { Img } from "../../GlobalStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../features/admin/adminSlice";

const Select = () => {
  const dispatch = useDispatch();

  const { adminInfo } = useSelector((state) => state.admin);

  const [openDisplay, setOpenDisplay] = useState(false);

  const toggling = () => setOpenDisplay(!openDisplay);

  const navigate = useNavigate();

  const removeToken = () => {
    setOpenDisplay(false);
    setTimeout(() => {
      dispatch(logout());
      if (adminInfo?.token !== null) {
        navigate("/admin/", { replace: true });
      }
    }, 1000);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <UserImg>
          <Img radius src={adminInfo?.admin?.adminImage} alt="User" />
        </UserImg>
        <ArrowDown />
      </DropDownHeader>
      <DropDownListContainer onClick={() => removeToken()} radius>
        {openDisplay && (
          <DropDownList>
            <ListItem>
              Log Out <LogOut />
            </ListItem>
          </DropDownList>
        )}
      </DropDownListContainer>
    </DropDownContainer>
  );
};

const DropDownContainer = styled("div")`
  border-radius: ${({ radius }) => (radius ? "5px" : 0)};
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  font-weight: 500;
  font-size: 18px;
  color: #2979ff;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  padding-left: 20px;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  top: 60px;
  right: 10px;
`;

const DropDownList = styled("ul")`
  border-radius: 5px;
  background: #fff;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.06);
  color: #2979ff;
  font-size: 13px;
  padding: 12px 12px;
`;

const ListItem = styled("li")`
  list-style: none;
  display: flex;
  grid-gap: 10px;
  align-items: center;
`;

// const Links = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   color: #2979ff;
//   font-size: 13px;
// `;
const ArrowDown = styled(IoMdArrowDropdown)`
  color: #2979ff;
`;
export const UserImg = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #ffffff;
  border-radius: 31px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* font-size: 20px;
  font-weight: bold;
  color: #fff;
  background: #2979FF;
  &:hover {
    background: #000;
  } */
`;

export default Select;
