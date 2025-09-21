import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'md', 
  shape = 'md'  
}) => {

    // Base styles for the button
  const baseStyles = "text-white font-semibold transition-colors duration-300 bg-blue-500 hover:bg-blue-700";

    // Define styles for different sizes
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Define styles for different shapes
  const shapeStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    full: "rounded-full",
  };

  // Combine all the styles together
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${shapeStyles[shape]}`;

  return (
    <button className={combinedStyles}>
      {title}
    </button>
  );
};

export default Button;