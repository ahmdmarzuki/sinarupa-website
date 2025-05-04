import React, { useRef, useState, useEffect } from "react";

const BannerOrange = ({ children, className }) => {
  const divRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [size]);

  return (
    <div className="">
      <div className="relative">
        <div

          className=" bg-[url('/images/cardOrange.png')] bg-cover"
          style={{ opacity: 0.6, width: size.width, height: size.height }}
        ></div>
        <div
          className="absolute  bg-[url('/images/cardOrange.png')] bg-cover -left-2 -bottom-2"
          style={{ opacity: 0.8, width: size.width, height: size.height }}
        ></div>
        <div
          ref={divRef}
          className="absolute px-[40px] py-[20px] bg-[url('/images/cardOrange.png')] bg-cover -left-4 -bottom-4"

        >
          <div className={className}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BannerOrange;
