import React, { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router DOM

// Define button variants and sizes for flexibility
const variantStyles = {
  primary:
    "bg-primary-700 text-white hover:bg-primary-100 hover:text-primary-700",
  secondary:
    "bg-primary-100 text-primary-700 hover:bg-primary-700 hover:text-white",
};

const sizeStyles = {
  small: "px-5 py-2.5 text-base",
  medium: "w-full py-2.5 text-base",
  large: "px-8 py-4 text-lg",
};

// Define types for button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  buttonText?: string;
  to?: string; // Use 'to' for routing with React Router DOM
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  buttonText = "Click Me",
  to,
  className = "",
  ...rest
}) => {
  // If 'to' is provided, render as a React Router Link
  if (to) {
    return (
      <Link
        to={to}
        className={`inline-block rounded-md text-center font-semibold transition duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...(rest as any)}
      >
        {buttonText}
      </Link>
    );
  }

  // Render as a standard button
  return (
    <button
      className={`rounded-md font-semibold transition duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {buttonText}
    </button>
  );
};

export default Button;
