import PreEventHomepage from "./pages/PreEventHomepage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ImageUpload from "./pages/ImageUpload";
import { useEffect } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./firebase/auth";

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
      </Routes>
    </main>
  );
}

export default App;
