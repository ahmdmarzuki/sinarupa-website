import React from "react";

const Hadiah = () => {
  const renderPodium = (layerCount, label, amount, offsetY = 0) => (
    <div
      className="relative w-full max-w-[300px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] flex flex-col items-center justify-end"
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {/* Teks di atas */}
      <div className="mb-2 text-center">
        <h3 className="text-[#FAA363] text-3xl font-bold">{label}</h3>
        <p className="bg-[#4A3D8F] text-[#FAA363] text-2xl font-bold px-6 py-2 rounded-none">
          {amount}
        </p>
      </div>

      {/* Podium stack */}
      <div className="relative w-full h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px] flex items-end justify-center">
        {[...Array(layerCount)].map((_, index) => (
          <img
            key={index}
            src="/images/Podium Hadiah.png"
            alt={`Layer ${index + 1}`}
            className="absolute w-[126%] h-auto"
            style={{
              top: `${index * 20}px`,
              opacity: 1 - index * 0.1,
              transform: `scale(${1 - index * 0.02})`,
              zIndex: 10 - index,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="w-full min-h-screen grid grid-cols-1 sm:grid-cols-3 items-end justify-center gap-x-2 px-4 py-20"
      style={{ transform: "translateX(5%)" }}
    >
      {renderPodium(6, "Juara 1", "Rp 1.000.000", -40)}
      {renderPodium(6, "Juara 2", "Rp 600.000", 0)}
      {renderPodium(6, "Juara 3", "Rp 400.000", 40)}
    </div>
  );
};

export default Hadiah;
