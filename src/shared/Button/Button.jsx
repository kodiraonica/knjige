import styled from "@emotion/styled";

const Button = styled.button`
  padding: 16px;
  background-color: #f0f8ff;
  font-size: 1rem;
  border-radius: 4px;
  border: 2px solid #2978a0;
  color: black;
  font-weight: bold;
  &:hover {
    background-color: #2978a0;
    color: white;
    cursor: pointer;
  }
  &:disabled,
  &[disabled] {
    opacity: 0.5;
    background-color: lightgrey;
    border: 2px solid black;
    color: black;
  }
`;

export default Button;
