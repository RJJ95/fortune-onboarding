import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
`;

export const Input = styled.input`
  background-color: ${({ error, theme }) => error && theme.colors.paleOrange};
  border: ${({ error, theme }) =>
    error && `1px solid ${theme.colors.venetianRed}`};
`;
