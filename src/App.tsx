import { BrowserRouter, Navigate, redirect, Route, Routes, useNavigate } from "react-router-dom";
import JadiPartnerSintaPage from "./pages/JadiPartnerSintaPage";
import LandingPage from "./pages/LandingPage";
import PaketWisataPage from "./pages/PaketWisataPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landingpage"/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/jadipartner" element={<JadiPartnerSintaPage/>}/>
        <Route path="/paketwisata" element={<PaketWisataPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
