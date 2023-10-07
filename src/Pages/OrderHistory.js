import React from "react";
import styled from "styled-components";
import OrderHistoryCom from "../Components/OrderHistory/OrderHistory";

const OrderHistory = () => {
  return (
    <OrderHistoryContainer>
      <OrderHistoryCom />
    </OrderHistoryContainer>
  );
};

export default OrderHistory;

export const OrderHistoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 270px;
  grid-gap: 30px;
  padding: 30px 5px;
  @media screen and (max-width: 1100px) {
    margin-left: 10px;
  }
`;
