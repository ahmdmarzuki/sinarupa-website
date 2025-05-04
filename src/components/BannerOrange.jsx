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
          style={{ 
            backgroundImage: "url('/images/Box Orange.png')",
            opacity: 0.6,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
        <div
          className="absolute -left-2 -bottom-2"
          style={{ 
            backgroundImage: "url('/images/Box Orange.png')",
            backgroundSize: "cover",
            opacity: 0.8, 
            width: size.width, 
            height: size.height 
          }}
        />
        <div
          ref={divRef}
          className="absolute px-[40px] py-[20px] -left-4 -bottom-4"
          style={{
            backgroundImage: "url('/images/Box Orange.png')",
            backgroundSize: "cover"
          }}
        >
          <div className={className}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BannerOrange;
