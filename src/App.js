import "./App.css";
import PersonalDetailsSection from "./components/sections/personal-details-section";
import AddBankAccountSection from "./components/sections/add-bank-account-section";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/functionals/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PersonalDetailsSection />} />
        <Route path="/online-banking" element={<AddBankAccountSection />} />
      </Route>
    </Routes>
  );
}

export default App;
