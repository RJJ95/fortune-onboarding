import styled from "styled-components";

const ButtonSolid = styled.button`
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};
`;

export default ButtonSolid;
