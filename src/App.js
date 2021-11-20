import "./App.css";
import PrimaryMenu from "./components/sections/primary-menu/primary-menu";

const menuItems = [
  {
    name: "Personal details",
  },
  {
    name: "Online banking",
  },
  {
    name: "Stocks",
  },
  {
    name: "Crypto",
  },
];

function App() {
  return (
    <div>
      <PrimaryMenu menuItems={menuItems} />
    </div>
  );
}

export default App;
