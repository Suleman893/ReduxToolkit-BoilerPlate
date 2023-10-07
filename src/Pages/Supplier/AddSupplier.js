import React, { useState } from "react";
import {
  AddButton,
  SupplierContainer,
  SupplierHead,
} from "./AddSupplier.styles";
import SupplierModal from "../../Components/Modal/Supplier/SupplierModal";
import AllSuppliers from "../../Components/Supplier/AllSuppliers";
const AddSupplier = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <SupplierContainer>
      <SupplierHead>
        <h1>
          Admin Panel <span>Suppliers</span>
        </h1>
        <AddButton
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          + Supplier
        </AddButton>
      </SupplierHead>
      <AllSuppliers />
      {showModal && (
        <SupplierModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </SupplierContainer>
  );
};

export default AddSupplier;
