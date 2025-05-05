import React, { useRef, useState, useEffect } from "react";

const Banner = ({ children, className }) => {
  const divRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [size]);

  return (
    <div className="relative w-fit h-fit">
      <div
        className="pointer-events-none absolute top-0 left-0 bg-[url('/images/bgCard.png')] bg-cover z-0"
        style={{ opacity: 0.6, width: size.width, height: size.height }}
      ></div>
      <div
        className="pointer-events-none absolute -left-2 -bottom-2 bg-[url('/images/bgCard.png')] bg-cover z-0"
        style={{ opacity: 0.8, width: size.width, height: size.height }}
      ></div>

      <div
        ref={divRef}
        className="relative z-10 px-[40px] py-[20px] bg-[url('/images/bgCard.png')] bg-cover -left-4 -bottom-4"
      >
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default Banner;
