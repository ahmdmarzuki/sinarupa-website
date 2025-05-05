import React, { useRef, useState, useEffect } from "react";

const Podium = ({ children, className }) => {
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
          className=" bg-[url('/images/podium-hadiah.png')] bg-cover"
          style={{ opacity: 0.1, width: size.width, height: size.height }}
        ></div>
        <div
          className="absolute  bg-[url('/images/podium-hadiah.png')] bg-cover bottom-10"
          style={{ opacity: 0.2, width: size.width, height: size.height }}
        ></div>
        <div
          className="absolute  bg-[url('/images/podium-hadiah.png')] bg-cover bottom-20"
          style={{ opacity: 0.3, width: size.width, height: size.height }}
        ></div>
        <div
          className="absolute  bg-[url('/images/podium-hadiah.png')] bg-cover bottom-30"
          style={{ opacity: 0.5, width: size.width, height: size.height }}
        ></div>
        <div
          className="absolute  bg-[url('/images/podium-hadiah.png')] bg-cover bottom-40"
          style={{ opacity: 0.7, width: size.width, height: size.height }}
        ></div>
        <div
          className="absolute  bg-[url('/images/podium-hadiah.png')] bg-cover bottom-50"
          style={{ opacity: 0.8, width: size.width, height: size.height }}
        ></div>
        <div
          className="absolute  bg-[url('/images/podium-hadiah.png')] bg-cover bottom-60"
          style={{ opacity: 0.9, width: size.width, height: size.height }}
        ></div>
        <div
          ref={divRef}
          className="absolute px-[150px] py-[25px] bg-[url('/images/podium-hadiah.png')] bg-cover bottom-70"

        >
          <div className={className}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Podium;