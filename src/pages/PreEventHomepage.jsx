import React, { useEffect, Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import ReactLenis from "lenis/react";
import { useMediaQuery } from "../useMediaQuery";
import bgDesktop from "/images/bgDesktopRevisi.webp";
import bgMobile from "/images/bgMobileRevisi_11zon.jpg";

// Lazy load komponen-komponen besar atau jarang digunakan
const Home1 = lazy(() => import("../sections/preEvent/Home1"));
const LatarBelakang1 = lazy(() =>
  import("../sections/preEvent/LatarBelakang1")
);
const Hadiah = lazy(() => import("../sections/preEvent/Hadiah1"));
const Timeline1 = lazy(() => import("../sections/preEvent/Timeline1"));
const Rundown1 = lazy(() => import("../sections/preEvent/Rundown1"));
const RincianLomba1 = lazy(() => import("../sections/preEvent/RincianLomba1"));
const KriteriaPenilaian1 = lazy(() =>
  import("../sections/preEvent/KriteriaPenilaian1")
);
const PanduanTeknisLomba1 = lazy(() =>
  import("../sections/preEvent/PanduanTeknisLomba1")
);
const PanduanPendaftaran1 = lazy(() =>
  import("../sections/preEvent/PanduanPendaftaran1")
);
const Faq1 = lazy(() => import("../sections/preEvent/Faq1"));
const Footer1 = lazy(() => import("../sections/preEvent/Footer1"));

const PreEventHomepage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className="bg-cover bg-top bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      <ReactLenis root options={{ lerp: 0.2 }}>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        {/* Wrap komponen yang di-lazy-load dalam Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Home1 />
          <LatarBelakang1 />
          <Hadiah />
          <Timeline1 />
          <Rundown1 />
          <RincianLomba1 />
          <KriteriaPenilaian1 />
          <PanduanTeknisLomba1 />
          <PanduanPendaftaran1 />
          <Faq1 />
          <Footer1 />
        </Suspense>
      </ReactLenis>
    </div>
  );
};

export default PreEventHomepage;
