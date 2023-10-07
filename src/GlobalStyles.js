import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  font-size: 14px;
  font-family: "Inter";
  border-radius: 8px;
  box-shadow: ${({ primary }) =>
    primary ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  padding: ${({ primary }) => (primary ? "10px 16px" : "10px 16px")};
  cursor: pointer;
  border: 1px solid rgba(130, 151, 255, 0.5);
  background: ${({ primary }) => (primary ? "none" : "#2196F3")};
  color: ${({ primary }) => (primary ? "#2196F3" : "#fff")};
  ${({ active }) =>
    active &&
    `
    background: #000;
    `}
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#2196F3" : "#000000")};
    color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  }
  &:disabled {
    background: none;
    color: #90caf9;
    cursor: not-allowed;
  }
`;
export const ButtonLabelWithIcon = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

export const Img = styled.img`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
  border-radius: ${({ radius }) => (radius ? "5px" : 0)};
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: ${({ Color }) => (Color ? "rgba(144, 202, 249, 0.5)" : "#98A4AF")};
  outline: none;
  border: none;
  background: none;
  width: ${({ Width }) => (Width ? "90px" : "100%")};
  ::placeholder {
    color: ${({ Color }) => (Color ? "rgba(144, 202, 249, 0.5)" : "#98A4AF")};
  }
`;
