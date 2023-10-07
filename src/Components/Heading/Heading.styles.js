import styled from "styled-components/macro";

export const H1 = styled.h1`
  color: #2979ff;
  font-size: 20px;
  line-height: 25px;
`;

export const H2 = styled.h1`
  color: ${({ Color }) => (Color ? "rgba(144, 202, 249, 0.5)" : "#000000")};
  font-size: 16px;
  line-height: 24px;
`;

export const H3 = styled.h1`
  color: ${({ Color }) => (Color ? "#2196F3" : "#fff")};
  font-size: ${({ font }) => font ? '13px' : '16px'};
  line-height: ${({ line }) => line ? "16px" : "24px"};
`;

export const H4 = styled.h4`
  color: ${({ Color }) => (Color ? "#3857FF" : "#98A4AF")};
  font-size: 14px;
  line-height: 21px;
`;

export const H5 = styled.h5`
color: #98A4AF;
font-size: 12px;
line-height: 15px;
`;

export const H6 = styled.h6`
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
  color: #343d48;

  @media screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
export const H7 = styled.h6`
  font-size: var(--h6-font-size);
  line-height: calc(var(--h1-font-size) + 0.3125rem);
`;
