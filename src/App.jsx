import PreEventHomepage from "./pages/PreEventHomepage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ImageUpload from "./pages/ImageUpload";
import { useEffect } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./firebase/auth";
import VotingPage from "./pages/VotingPage";

import DetailRules from "./pages/DetailRules";
import Navbar from "./components/Navbar";
import Timeline from "./pages/Timeline";

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
      <Navbar /> {/* Navbar tetap muncul di semua halaman */}
      <Routes>
        <Route path="/" element={<PreEventHomepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vote" element={<ImageUpload />} />
        <Route path="/voting" element={<VotingPage />} />
        <Route path="/rules" element={<DetailRules />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </main>
  );
}

export default App;
