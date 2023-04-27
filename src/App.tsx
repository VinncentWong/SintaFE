import { BrowserRouter, Navigate, redirect, Route, Routes, useNavigate } from "react-router-dom";
import JadiPartnerSintaPage from "./pages/JadiPartnerSintaPage";
import LandingPage from "./pages/LandingPage";
import PaketWisataPage from "./pages/PaketWisataPage";
import { PaketWisataRouter } from "./router/PaketWisataRouter";
import AuthenticationPage from "./pages/AuthenticationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landingpage"/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/jadipartner" element={<JadiPartnerSintaPage/>}/>
        <Route path="/paketwisata" element={<PaketWisataPage/>}/>
        <Route path="/paketwisata/deskripsi/:userId" element={<PaketWisataRouter/>}/>
        <Route path="/paketwisata/infopenting/:userId" element={<PaketWisataRouter/>}/>
        <Route path="/paketwisata/fasilitas/:userId" element={<PaketWisataRouter/>}/>
        <Route path="/register" element={<AuthenticationPage type="register"/>}/>
        <Route path="/login" element={<AuthenticationPage type="login"/>}/>
        <Route path="/reset" element={<AuthenticationPage type="reset"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
