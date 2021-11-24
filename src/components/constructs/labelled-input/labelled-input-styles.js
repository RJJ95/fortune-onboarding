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

export const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  top: calc(50% - 10px);
  cursor: pointer;
  height: 16px;
`;

export const Tooltip = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 6px 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  top: -40px;
  right: -20px;
  opacity: 0;
  transition: 400ms;
`;

export const InputContainer = styled.div`
  position: relative;
  & ${IconContainer}:hover + ${Tooltip} {
    opacity: 1;
  }
`;
