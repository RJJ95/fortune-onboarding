import styled from "styled-components";

const ButtonSolid = styled.button`
  background-color: ${({ color, disabled, theme }) =>
    disabled ? theme.colors.silverMedal : theme.colors[color]};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
`;

export default ButtonSolid;
