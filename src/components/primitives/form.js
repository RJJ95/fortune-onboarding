import styled from "styled-components";

const Form = styled.div`
  padding: 60px 80px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export default Form;
