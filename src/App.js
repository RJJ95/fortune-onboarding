import "./App.css";
import PersonalDetailsSection from "./components/sections/personal-details-section/personal-details-section";
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
      <PersonalDetailsSection />
    </div>
  );
}

export default App;
