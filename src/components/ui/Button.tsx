import React, { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

// Define button variants and sizes for flexibility
const variantStyles = {
  primary: "bg-black-700 text-white  hover:opacity-70",
  secondary:
    "bg-primary-100 text-primary-700 hover:bg-blue-900 hover:text-white ",
};

const sizeStyles = {
  small: "px-4 md:px-5 lg:px-7 py-2.5 ",
  medium: "px-7 md:px-10 lg:px-20 py-2.5 ",
  large: "px-20 md:px-30 xl:px-36 py-3 ",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  buttonText?: string;
  to?: string; // Use 'to' for routing with React Router DOM
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  buttonText = "Click Me",
  to,
  className = "",
  isLoading,
  disabled,
  onClick,
  ...rest
}) => {
  // If 'to' is provided, render as a React Router Link
  if (!!to) {
    return (
      <Link
        to={disabled ? null : to}
        className={`grid items-center justify-center rounded-md font-semibold transition duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className} `}
        style={{ whiteSpace: "nowrap" }}
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
      className={`grid items-center justify-center rounded-full text-base transition duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      style={{ whiteSpace: "nowrap" }}
      {...rest}
    >
      {isLoading ? <Spinner size={25} /> : buttonText}
    </button>
  );
};

export default Button;
