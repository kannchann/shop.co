import React, { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const variantStyles = {
  primary: "bg-black-700 text-white  hover:opacity-70",
  secondary: "bg-primary-100  hover:bg-black-700 hover:text-white ",
  tertiary:
    "border border-black-700 font-satoshiMedium border-opacity-10 hover:bg-black-700 hover:text-white",
};

const sizeStyles = {
  small: "px-4 md:px-5 lg:px-7 py-2.5 ",
  medium: "px-7 md:px-10 lg:px-20 py-2.5 ",
  large: "px-20 md:px-30 xl:px-36 py-3 ",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  buttonText?: string;
  to?: string;
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
  if (!!to) {
    return (
      <Link
        to={disabled ? null : to}
        className={`grid items-center justify-center rounded-full font-semibold transition duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className} `}
        style={{ whiteSpace: "nowrap" }}
        {...(rest as any)}
      >
        {buttonText}
        {isLoading ? <Spinner size={40} /> : null}
      </Link>
    );
  }

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
