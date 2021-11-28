import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  min-width: 420px;
  padding: ${({ expanded }) => (expanded ? "60px 80px" : "30px 20px")};
  transition: ${({ theme }) => theme.transition};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  opacity: ${({ expanded }) => (expanded ? "1" : "0")};
  transition: ${({ theme }) => theme.transition};
  height: ${({ expanded }) => !expanded && "0"};
`;

export const SummaryContainer = styled.div``;

export const Summary = styled.h3``;
