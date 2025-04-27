import React from "react";

const BlueButton = ({ label }) => {
  return (
    <button className="relative px-8 py-3 h-min text-md font-semibold text-purple-800 bg-blue-200">
      <span className="relative z-10">{label}</span>
    </button>
  );
};
const PurpleButton = () => {
  return <div>Button</div>;
};

export { BlueButton, PurpleButton };
