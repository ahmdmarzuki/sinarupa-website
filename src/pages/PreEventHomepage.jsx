import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home1 from "../sections/preEvent/Home1";
import LatarBelakang1 from "../sections/preEvent/LatarBelakang1";
import Hadiah1 from "../sections/preEvent/Hadiah1";
import Timeline1 from "../sections/preEvent/Timeline1";
import Rundown1 from "../sections/preEvent/Rundown1";
import RincianLomba1 from "../sections/preEvent/RincianLomba1";
import KriteriaPenilaian1 from "../sections/preEvent/KriteriaPenilaian1";
import PanduanTeknisLomba1 from "../sections/preEvent/PanduanTeknisLomba1";
import PanduanPendaftaran1 from "../sections/preEvent/PanduanPendaftaran1";
import Faq1 from "../sections/preEvent/Faq1";
import Footer1 from "../sections/preEvent/Footer1";
import ReactLenis from "lenis/react";
import { useMediaQuery } from "../useMediaQuery";
import MobileNavbar from "../components/MobileNavbar";
import Hadiah from "../sections/preEvent/Hadiah1";
import bgDesktop from "/images/bgDesktopRevisi.webp";
import bgMobile from "/images/bgMobileRevisi.png";

const PreEventHomepage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className="bg-cover bg-top bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      <ReactLenis root options={{ lerp: 0.2 }}>
        {isMobile ? <MobileNavbar /> : <Navbar />}
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
      </ReactLenis>
    </div>
  );
};

export default PreEventHomepage;
