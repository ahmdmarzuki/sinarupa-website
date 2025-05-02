import { AnimatePresence, motion, wrap } from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { getAllArtToVote } from "../firebase/firestore";
import { div, img } from "motion/react-client";

const VoteCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newD) => setPage([page + newD, newD]);
  const [arts, setArts] = useState([]);

  const [visitorId, setVisitorId] = useState(null);
  const imgRef = useRef();

  const imageIndex = wrap(0, arts.length, page);

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();

      setVisitorId(result.visitorId);
    };

    loadFingerprint();
  }, []);

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
  }, []);

  return (
    <div className="w-screen h-screen relative flex items-center justify-center m-0 p-0 overflow-hidden bg-[url('/images/bg-full.png')]">
      {arts.length > 0 && (
        <AnimatePresence>
          <motion.img
            key={page}
            src={arts[imageIndex]?.url}
            alt={arts[imageIndex]?.name}
            custom={direction}
            variants={{
              enter: (dir) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir) => ({ x: dir < 0 ? 1000 : -1000, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute max-h-full object-contain max-w-[100vw]"
          />
          <div
            onClick={() => paginate(-1)}
            className="absolute left-0 text-7xl text-white font-bold font-oddval m-10 select-none"
          >
            {"<"}
          </div>
          <div
            onClick={() => paginate(1)}
            className="absolute right-0 text-7xl text-white font-bold font-oddval m-10 select-none"
          >
            {">"}
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default VoteCarousel;
