import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../Components/Heading/Heading";
import Modal from "../Components/Modal/Modal";
import { Button } from "../GlobalStyles";
import AddCategoryForm from "../Components/Forms/AddCategoryForm";
import CategoryListTable from "../Components/Categories/CategoryListTable";

const AddCategory = ({ sidebarOpen }) => {
  const [modal, setModal] = useState();
  return (
    <ProductsContainer open={sidebarOpen}>
      <TopLine>
        <Heading level={1} FontBig>
          All Categories
        </Heading>
        <Button onClick={() => setModal(true)}>Add Category</Button>
        <Modal
          active={modal}
          hideModal={() => setModal(false)}
          title="Add New Category"
        >
          <AddCategoryForm setModal={setModal} />
        </Modal>
      </TopLine>
      <CategoryListTable />
    </ProductsContainer>
  );
};

export const ProductsContainer = styled.div`
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
export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 850ms;
  background: #ffffff;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-in-out;
  padding: 15px 10px;
  border-radius: 10px;
`;

export default AddCategory;
