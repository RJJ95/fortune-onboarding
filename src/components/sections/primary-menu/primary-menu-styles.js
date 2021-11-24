import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  min-height: 76px;
  position: sticky;
  top: 0;
`;

export const LogoContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  position: absolute;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  a:not(:last-child) {
    padding-right: 50px;
  }
`;

export const MenuItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.quickSilver};
  transition: ${({ theme }) => theme.transition};

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.silverMedal};
  height: 60px;
  position: absolute;
  left: 116px;
`;
