import React, { useEffect, useState } from "react";
import user from "../../assets/table/tableImage.png";
import { getAllSuppliers } from "../../features/supplier/supplierSlice";
import { PersonalImg } from "../../Pages/Supplier/AddSupplier.styles";
import { useDispatch, useSelector } from "react-redux";
import InvoiceModal from "../Modal/Invoice/InvoiceModal";

const Supplier = () => {
  const [showModal, setShowModal] = useState(false);
  const { suppliers, isSupplierChanged } = useSelector(
    (state) => state.supplier
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSuppliers());
    // eslint-disable-next-line
  }, [isSupplierChanged]);

  return (
    <>
      {suppliers.length ? (
        <table>
          <tr>
            <th>Supplier Name</th>
            <th>Contact Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Company Number </th>
            <th>Supplier Discount </th>
            <th>Location</th>
            <th>VAT Number </th>
            <th>Edit</th>
            <th>Add Invoice</th>
          </tr>
          {suppliers.map((supplier) => (
            <>
              <tr>
                <td>
                  <PersonalImg>
                    <img src={user} alt="user_image" />
                    <p>
                      {supplier.firstName} {supplier.lastName}
                    </p>
                  </PersonalImg>
                </td>
                <td>
                  <PersonalImg>
                    <img src={user} alt="user_image" />
                    <p> {supplier.contactName} </p>
                  </PersonalImg>
                </td>
                <td>{supplier.email}</td>
                <td>{supplier.phoneNo}</td>
                <td>{supplier.companyNo}</td>
                <td>0%</td>
                <td>{supplier.country}</td>
                <td>{supplier.vatNo}</td>
                <td>Edit</td>
                <td onClick={() => setShowModal(true)}>Add</td>
              </tr>
            </>
          ))}
          {showModal && (
            <InvoiceModal showModal={showModal} setShowModal={setShowModal} />
          )}
        </table>
      ) : (
        <h5>No Suppliers Found</h5>
      )}
    </>
  );
};

export default Supplier;
