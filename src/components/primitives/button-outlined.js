import styled from "styled-components";

const ButtonOutlined = styled.button`
  background-color: transparent;
  border: 2px solid
    ${({ color, disabled, theme }) =>
      disabled ? theme.colors.silverMedal : theme.colors[color]};
  box-shadow: none;
  color: ${({ color, disabled, theme }) =>
    disabled ? theme.colors.silverMedal : theme.colors[color]};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
`;

export default ButtonOutlined;
