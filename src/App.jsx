import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./firebase/auth";
import PreEventHomepage from "./pages/PreEventHomepage";
import LoginPage from "./pages/LoginPage";
import ImageUpload from "./pages/ImageUpload";
import VotingPage from "./pages/VotingPage";
import DetailRules from "./pages/DetailRules";
import PanduanTeknisLomba1 from "./sections/preEvent/PanduanTeknisLomba1.jsx";

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
          .then(() => {
            console.log("Signed in anonymously!");
          })
          .catch((error) => {
            console.error("Anonymous sign-in error:", error);
          });
      } else {
        console.log("User already signed in:", user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<PreEventHomepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vote" element={<ImageUpload />} />
        <Route path="/voting" element={<VotingPage />} />
        <Route path="/rules" element={<DetailRules />} />
        <Route path="/panduan" element={<PanduanTeknisLomba1 />} />
      

      </Routes>
    </main>
  );
}

export default App;
