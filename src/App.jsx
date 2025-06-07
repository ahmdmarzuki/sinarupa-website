import { Routes, Route } from "react-router-dom";
import PreEventHomepage from "./pages/PreEventHomepage";
import LoginPage from "./pages/LoginPage";
import ImageUpload from "./pages/ImageUpload";
import VotingPage from "./pages/VotingPage";
import DetailRules from "./pages/DetailRules";
import PanduanTeknisLomba1 from "./sections/preEvent/PanduanTeknisLomba1.jsx";
import { useEffect } from "react";
import ArtListPage from "./pages/ArtListPage.jsx";
import { ToastContainer } from "react-toastify";
import UpdateDbPanel from "./pages/UpdateDbPanel.jsx";

function App() {
  useEffect(() => {
    document.title = "Langkah Sapa";
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<PreEventHomepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/voting" element={<VotingPage />} />
        <Route path="/art" element={<ArtListPage />} />
        <Route path="/rules" element={<DetailRules />} />
        <Route path="/panduan" element={<PanduanTeknisLomba1 />} />
        <Route path="/update" element={<UpdateDbPanel />} />
      </Routes>
    </main>
  );
}

export default App;
