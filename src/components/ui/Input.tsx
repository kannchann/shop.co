import React, { InputHTMLAttributes, useState } from "react";
import { eyeIcon, eyeFalseIcon } from "../../assets";

interface InputProps {
  type: "text" | "email" | "password" | "checkbox" | "tel";
  id: string;
  labelText?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  labelText,
  onChange,
  value,
  disabled,
  ...rest
}) => {
  const [isPwVisible, setIsPwVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPwVisible(!isPwVisible);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <div className="relative flex flex-col">
        {labelText && (
          <label
            htmlFor={id}
            className="text-base font-semibold text-black-100"
          >
            {labelText}
          </label>
        )}
        <input
          onChange={handleChange}
          className="rounded-md border border-grey-100 p-3 text-base text-grey-200"
          type={type === "password" && isPwVisible ? "text" : type}
          id={id}
          disabled={disabled}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-10 focus:outline-none"
            aria-label="Toggle password visibility"
          >
            <img
              src={isPwVisible ? eyeFalseIcon : eyeIcon}
              alt={isPwVisible ? "Hide password" : "Show password"}
            />
          </button>
        )}
      </div>
    </>
  );
};

export default Input;
