import styled from "styled-components";

export const SupplierContainer = styled.div`
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
  table,
  td,
  th {
    border: 1px solid #b9b9b9;
  }
  table {
    border-collapse: collapse;
  }
  th {
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
    text-align: left;
    background: #d4ecff;
    padding: 10px 5px;
    width: 200px;
    &:nth-child(8) {
      width: 100px;
    }
  }
  td {
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
    text-align: left;
    background: #d4ecff;
    background: white;
    padding: 5px 6px;
    width: 200px;

    img {
      width: 24px;
      height: 24px;
      border-radius: 4px;
    }

    &:nth-child(3) {
      color: #1e90ff;
      cursor: pointer;
    }
    &:nth-child(9) {
      background: #1e90ff;
      cursor: pointer;
      color: white;
      text-align: center;
      width: 100px;
    }
    &:nth-child(10) {
      background: #27af2d;
      cursor: pointer;
      color: white;
      text-align: center;
    }
  }
`;
export const PersonalImg = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;
export const SupplierHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.03em;
    color: #0070c0;
  }
  span {
    color: #5f9ea0;
  }
`;
export const AddButton = styled.div`
  color: white;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  background: #1e90ff;
  box-shadow: 0px 4px 11px rgba(0, 112, 192, 0.25);
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
`;
