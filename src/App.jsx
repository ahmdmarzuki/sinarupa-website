import { Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

// Lazy load semua halaman
const PreEventHomepage = lazy(() => import("./pages/PreEventHomepage"));
const DetailRules = lazy(() => import("./pages/DetailRules"));
const ImageUpload = lazy(() => import("./pages/ImageUpload"));

function App() {
  useEffect(() => {
    document.title = "Langkah Sapa";
  }, []);

  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<PreEventHomepage />} />
        <Route path="/vote" element={<ImageUpload />} />
        <Route path="/rules" element={<DetailRules />} />
      </Routes>
    </Suspense>
  );
}

export default App;
