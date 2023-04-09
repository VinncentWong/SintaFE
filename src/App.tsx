import { BrowserRouter, Navigate, redirect, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landingpage"/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
