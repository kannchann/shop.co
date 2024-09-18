import React, { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router DOM
import Spinner from "./Spinner";

// Define button variants and sizes for flexibility
const variantStyles = {
  primary: "bg-primary-700 text-white hover:bg-blue-900 hover:text-white ",
  secondary:
    "bg-primary-100 text-primary-700 hover:bg-blue-900 hover:text-white ",
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
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  buttonText = "Click Me",
  to,
  className = "",
  isLoading,
  disabled,
  ...rest
}) => {
  // If 'to' is provided, render as a React Router Link
  if (!!to) {
    return (
      <Link
        to={disabled ? null : to}
        className={`inline-block grid justify-center rounded-md font-semibold transition duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...(rest as any)}
      >
        {buttonText}
        {isLoading ? <Spinner size={40} /> : null}
      </Link>
    );
  }

  // Render as a standard button
  return (
    <button
      className={`grid justify-center rounded-md font-semibold transition duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {isLoading ? <Spinner size={25} /> : buttonText}
    </button>
  );
};

export default Button;
