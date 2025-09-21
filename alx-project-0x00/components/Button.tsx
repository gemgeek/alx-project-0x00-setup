import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  // We can still have some base styles that every button shares
  const baseStyles = "text-white font-semibold transition-colors duration-300 bg-blue-500 hover:bg-blue-700 px-6 py-3";

  // We combine the base styles with the custom styles passed in via props
  const combinedStyles = `${baseStyles} ${styles}`;

  return (
    <button className={combinedStyles}>
      {title}
    </button>
  );
};

export default Button;