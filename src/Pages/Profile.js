import React, { useState } from "react";
import styled from "styled-components";
import AddAdmin from "../Components/Forms/AddAdmin";
import Heading from "../Components/Heading/Heading";
import Modal from "../Components/Modal/Modal";
import AdminProfile from "../Components/Profiles/AdminProfile";
import { Button } from "../GlobalStyles";
import { TopLine } from "./Products";

const Profile = ({ sidebarOpen }) => {
  const [modal, setModal] = useState(false);

  return (
    <HomeContainer open={sidebarOpen}>
      <TopLine>
        <Heading level={1}>Profile information</Heading>
        <Button onClick={() => setModal(true)}>Add Admin</Button>
        <Modal
          active={modal}
          hideModal={() => setModal(false)}
          title="Add New Admin"
        >
          <AddAdmin />
        </Modal>
      </TopLine>
      <AdminProfile />
    </HomeContainer>
  );
};

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  margin-left: ${({ open }) => (open ? `100px` : `270px`)};
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }
`;

export default Profile;
