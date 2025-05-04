import React, { useRef, useState, useEffect } from "react";

const SingleBanner = ({ children, className }) => {
  const divRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [size]);

  return (
    <div className="relative">
      <div className="absolute bg-[url('/images/bgCard.png')] bg-cover bg-center p-4">
          <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default SingleBanner;
