import { BrowserRouter, Navigate, redirect, Route, Routes, useNavigate } from "react-router-dom";
import JadiPartnerSintaPage from "./pages/JadiPartnerSintaPage";
import LandingPage from "./pages/LandingPage";
import PaketWisataPage from "./pages/PaketWisataPage";
import Header from "./components/header";
import Footer from "./components/footer";
import DetailPaketWisata from "./pages/DetailPaketWisata";
import { PaketWisataRouter } from "./router/PaketWisataRouter";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landingpage"/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/jadipartner" element={<JadiPartnerSintaPage/>}/>
        <Route path="/paketwisata" element={<PaketWisataPage/>}/>
        <Route path="/paketwisata/deskripsi/:userId" element={<PaketWisataRouter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
