import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import JadiPartnerSintaPage from "./pages/JadiPartnerSintaPage";
import LandingPage from "./pages/LandingPage";
import PaketWisataPage from "./pages/PaketWisataPage";
import { PaketWisataRouter } from "./router/PaketWisataRouter";
import AuthenticationPage from "./pages/AuthenticationPage";
import AccountDetailsPage from "./pages/AccountDetailsPage";
import PrivateRouter from "./router/PrivateRouter";
import PemesananPaketWisataPage from "./pages/PemesananPaketWisataPage";
import PemesananPaketWisataRouter from "./router/PemesananPaketWisataRouter";
import AgenTravelAuthenticationPage from "./pages/AgenTravelAuthenticationPage";
import PrivateRouterAgenTravel from "./router/PrivateRouterAgenTravel";
import AgenTravelHomePage from "./pages/AgenTravelHomePage";
import AgenTravelPaketWisataPage from "./pages/AgenTravelPaketWisataPage";
import AgenTravelPortofolioPage from "./pages/AgenTravelPortofolioPage";
import AgenTravelPenjualanSayaPage from "./pages/AgenTravelPenjualanSayaPage";
import AgenTravelPendapatanSayaPage from "./pages/AgenTravelPendapatanSayaPage";
import AgenTravelBankSayaPage from "./pages/AgenTravelBankSayaPage";
import AgenTravelProfilSayaPage from "./pages/AgenTravelProfilSayaPage";
import AgenTravelPremiumPage from "./pages/AgenTravelPremiumPage";
import BuyPremiumPage from "./pages/BuyPremiumPage";

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
          <Route path="/paketwisata/rundown/:userId" element={<PaketWisataRouter/>}/>
          <Route path="/register" element={<AuthenticationPage type="register"/>}/>
          <Route path="/login" element={<AuthenticationPage type="login"/>}/>
          <Route path="/reset" element={<AuthenticationPage type="reset"/>}/>
          <Route element={<PrivateRouter/>}>
            <Route path="/myaccount/detail/:userId" element={<AccountDetailsPage type="myaccount"/>}/>
            <Route path="/paketwisata/pesan/:paketWisataId" element={<PemesananPaketWisataRouter/>}/>
          </Route>
          <Route path="/agentravel/register" element={<AgenTravelAuthenticationPage type="register"/>}/>
          <Route path="/agentravel/login" element={<AgenTravelAuthenticationPage type="login"/>}/>
          <Route element={<PrivateRouterAgenTravel/>}>
            <Route path="/agentravel/home" element={<AgenTravelHomePage type="home"/>}/>
            <Route path="/agentravel/paketwisata" element={<AgenTravelPaketWisataPage type="paketwisata"/>}/>
            <Route path="/agentravel/portofolio" element={<AgenTravelPortofolioPage type="portofolio"/>}/>
            <Route path="/agentravel/penjualan" element={<AgenTravelPenjualanSayaPage type="penjualan"/>}/>
            <Route path="/agentravel/pendapatan" element={<AgenTravelPendapatanSayaPage type="pendapatan"/>}/>
            <Route path="/agentravel/bank" element={<AgenTravelBankSayaPage type="bank"/>}/>
            <Route path="/agentravel/profil" element={<AgenTravelProfilSayaPage type="profil"/>}/>
            <Route path="/agentravel/premium" element={<AgenTravelPremiumPage type="premium"/>}/>
            <Route path="/agentravel/belipremium" element={<BuyPremiumPage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
