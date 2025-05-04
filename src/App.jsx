import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./firebase/auth";

import Navbar from "./components/Navbar";
import LoadingScreen from "./pages/LoadingScreen";

const PreEventHomepage = lazy(() => import("./pages/PreEventHomepage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ImageUpload = lazy(() => import("./pages/ImageUpload"));
const VotingPage = lazy(() => import("./pages/VotingPage"));
const DetailRules = lazy(() => import("./pages/DetailRules"));
const Timeline = lazy(() => import("./pages/Timeline"));

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
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<PreEventHomepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/vote" element={<ImageUpload />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/rules" element={<DetailRules />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
