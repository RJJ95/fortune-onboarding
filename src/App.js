import "./App.css";
import PersonalDetailsSection from "./components/sections/personal-details-section";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/functionals/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PersonalDetailsSection />} />
      </Route>
    </Routes>
  );
}

export default App;
