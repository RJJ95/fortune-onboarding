import styled from "styled-components";
export const Wrapper = styled.nav`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LogoContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuItem = styled.a``;

export const VerticalLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.silverMedal};
  height: 60px;
`;