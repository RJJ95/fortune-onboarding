import { ReactComponent as Logo } from "../../../media/images/logo.svg";
import {
  Wrapper,
  LogoContainer,
  MenuItemsContainer,
  MenuItem,
  VerticalLine,
} from "./primary-menu-styles";

const PrimaryMenu = ({ menuItems }) => (
  <Wrapper>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <VerticalLine />
    <MenuItemsContainer>
      {menuItems.map((menuItem, i) => (
        <MenuItem key={i} to={menuItem.link}>
          {menuItem.name}
        </MenuItem>
      ))}
    </MenuItemsContainer>
  </Wrapper>
);

export default PrimaryMenu;
