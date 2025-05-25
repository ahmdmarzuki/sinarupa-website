import React, { useEffect, useState } from "react";

import bgDesktop from "/images/bgDesktopRevisi.webp";
import bgMobile from "/images/bgMobileRevisi_11zon.jpg";
import { useMediaQuery } from "../useMediaQuery";

import {
  createArtToVote,
  getAllArtToVote,
  resetVote,
  vote,
} from "../firebase/firestore";

const ArtListPage = () => {
  const [arts, setArts] = useState([]);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
  }, []);

  return (
    <div
      className="bg-cover bg-top bg-no-repeat min-h-screen px-20 py-40"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      <div className="grid grid-cols-5 gap-8">
        {arts.map((art) => (
          <div
            key={art.id}
            className="aspect-square bg-[#48368A] items-center flex justify-center rounded-2xl"
          >
            <img
              src={art.url}
              alt={art.name}
              className="object-cover h-[90%] w-[90%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtListPage;
