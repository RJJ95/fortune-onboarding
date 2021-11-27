import "./App.css";
import PersonalDetailsSection from "./components/sections/personal-details-section";
import AddBankAccountSection from "./components/sections/add-bank-account-section";
import AddStocksSection from "./components/sections/add-stocks-section";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/functionals/layout";
import routes from "./config/routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PersonalDetailsSection />} />
        <Route
          path={routes.onlineBanking.path}
          element={<AddBankAccountSection />}
        />
        <Route path={routes.stocks.path} element={<AddStocksSection />} />
      </Route>
    </Routes>
  );
}

export default App;
