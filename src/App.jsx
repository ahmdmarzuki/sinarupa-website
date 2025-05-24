import { Routes, Route } from "react-router-dom";
import PreEventHomepage from "./pages/PreEventHomepage";
import LoginPage from "./pages/LoginPage";
import ImageUpload from "./pages/ImageUpload";
import VotingPage from "./pages/VotingPage";
import DetailRules from "./pages/DetailRules";
import PanduanTeknisLomba1 from "./sections/preEvent/PanduanTeknisLomba1.jsx";
import { useEffect } from "react";
import VotingPage2 from "./pages/VotingPage2.jsx";

function App() {
  useEffect(() => {
    document.title = "Langkah Sapa";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PreEventHomepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/vote" element={<ImageUpload />} />
      <Route path="/voting" element={<VotingPage2 />} />
      <Route path="/rules" element={<DetailRules />} />
      <Route path="/panduan" element={<PanduanTeknisLomba1 />} />
    </Routes>
  );
}

export default App;
