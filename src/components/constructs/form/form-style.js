import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 60px 80px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  min-width: 420px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: ${({ isMandatory }) =>
    isMandatory ? "flex-end" : "space-between"};
`;
