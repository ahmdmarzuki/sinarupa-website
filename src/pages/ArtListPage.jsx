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

  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleImgClick = (name, title, desc, src) => {
    setImg(src);
    setName(name);
    setTitle(title);
    setDesc(desc);
  };

  const closePopup = () => {
    setImg(null);
    setName(null);
    setTitle(null);
    setDesc(null);
  };

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen px-20 py-40"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      {img && (
        <div
          className="fixed inset-0 bg-[#000000BF] flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="rounded-lg max-w-full max-h-full">
            <img
              src={img}
              alt="Full view"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} // biar klik gambar tidak menutup modal
            />
          </div>
        </div>
      )}
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
              onClick={() =>
                handleImgClick(art.name, art.title, art.desc, art.url)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtListPage;
