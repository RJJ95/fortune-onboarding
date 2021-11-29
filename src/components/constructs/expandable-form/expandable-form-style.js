import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  min-width: 420px;
  padding: ${({ expanded }) => (expanded ? "60px 80px" : "15px 80px")};
  transition: ${({ theme }) => theme.transition};
  margin-bottom: 20px;
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

export const SummaryContainer = styled.div`
  height: ${({ expanded }) => expanded && "0"};
  opacity: ${({ expanded }) => (expanded ? "0" : "1")};
  transition-delay: ${({ theme }) => theme.transition};
  transition: ${({ theme }) => theme.transition};
`;

export const Summary = styled.h3`
  color: ${({ theme }) => theme.colors.silverMedal};
`;
