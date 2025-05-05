import React from "react";
import { useNavigate } from "react-router-dom";

const BlueButton = ({ label, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = navigateTo;
  };
  return (
    <button
      onClick={handleClick}
      className="relative px-8 py-3 h-min text-md font-semibold text-purple-800 bg-blue-200 hover:bg-blue-300 active:bg-blue-400"
    >
      <span className="relative z-10">{label}</span>
    </button>
  );
};

const PurpleButton = () => {
  return <div>Button</div>;
};

export { BlueButton, PurpleButton };
