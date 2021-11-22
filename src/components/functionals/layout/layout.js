import PrimaryMenu from "../../sections/primary-menu/primary-menu";
import { Outlet } from "react-router-dom";

const menuItems = [
  {
    name: "Personal details",
    link: "/",
  },
  {
    name: "Online banking",
    link: "/online-banking",
  },
  {
    name: "Stocks",
    link: "/stocks",
  },
  {
    name: "Crypto",
    link: "/crypto",
  },
];

const Layout = () => (
  <>
    <PrimaryMenu menuItems={menuItems} />
    <Outlet />
  </>
);

export default Layout;
