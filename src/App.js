import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LetterPage from "./Pages/LetterPage";
import CampPage from "./Pages/CampPage";
import AboutusPage from "./Pages/AboutusPage";
import DonatePage from "./Pages/DonatePage";
import PartnersPage from "./Pages/PartnersPage";
import Applayout from "./layout/Applayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Homepage />} />
          <Route path="/letters" element={<LetterPage />} />
          <Route path="/activities" element={<CampPage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
