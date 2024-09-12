import React, { InputHTMLAttributes, useState } from "react";
import { eyeIcon, eyeFalseIcon } from "../../assets";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email" | "password" | "checkbox";
  id: string;
  labelText?: string;
}

const Input: React.FC<InputProps> = ({ type, id, labelText, ...rest }) => {
  const [isPwVisible, setIsPwVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPwVisible(!isPwVisible);
  };

  return (
    <>
      <div className="relative flex flex-col">
        {labelText && (
          <label
            htmlFor={id}
            className="text-black-100 text-base font-semibold"
          >
            {labelText}
          </label>
        )}
        <input
          className="text-grey-200 border-grey-100 rounded-md border p-3 text-base"
          type={type === "password" && isPwVisible ? "text" : type}
          id={id}
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
