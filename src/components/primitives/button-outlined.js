import styled from "styled-components";

const ButtonOutlined = styled.button`
  background-color: transparent;
  border: 2px solid ${({ color }) => color};
`;

export default ButtonOutlined;
