import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getOrders } from "../../features/order/ordersSlice";
import { useEffect } from "react";

const OrderHistoryCom = () => {
  const { allOrders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <OrderHistoryContainer>
      <OHSearch placeholder="Search" />
      <OHTable>
        <table>
          <tr>
            <th>Invoice Number</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Contact Tel</th>
            <th>Order Status</th>
          </tr>
          {allOrders?.map((val, idx) => (
            <tr key={idx}>
              <td>{val?._id}</td>
              <td>{val?.user?.name}</td>
              <td>{val?.user?.email}</td>
              <td>032232332</td>
              <td>{val?.status}</td>
            </tr>
          ))}
        </table>
      </OHTable>
    </OrderHistoryContainer>
  );
};

export default OrderHistoryCom;

export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 100%;
`;

export const OHSearch = styled.input`
  border-radius: 8px;
  border: 2px solid rgba(121, 153, 157, 0.15);
  background: #fff;
  padding: 15px;
  width: 30%;
  outline: none;
  color: #b7b7b7;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const OHTable = styled.div`
  table {
    border-collapse: collapse;
    margin: auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
  }
  th {
    width: 15%;
    border-radius: 8px;
    background: #0e626d;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.48px;
    padding: 8px 5px;
    text-align: center;
  }
  td {
    width: 15%;
    border-radius: 8px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.48px;
    padding: 8px 5px;
    text-align: center;
    line-break: anywhere;
  }
  tr {
    display: flex;
    justify-content: space-between;
  }
`;
