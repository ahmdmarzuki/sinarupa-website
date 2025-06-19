import { Routes, Route } from "react-router-dom";
import VotingPage from "./pages/VotingPage";
import { useEffect } from "react";
import ArtListPage from "./pages/ArtListPage.jsx";

function App() {
  useEffect(() => {
    document.title = "Langkah Sapa";
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<VotingPage />} />
        <Route path="/art" element={<ArtListPage />} />
      </Routes>
    </main>
  );
}

export default App;
