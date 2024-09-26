import { useState } from "react";

type Props = {
  color: "colorOne" | "colorTwo" | "colorThree";
  isSelected: boolean;
  colorChanged: (color: string) => void;
};

const ColorRadioButton: React.FC<Props> = ({
  color,
  isSelected,
  colorChanged,
}) => {
  const bgColors = {
    colorOne: "bg-[#4F4631]",
    colorTwo: "bg-[#314F4A]",
    colorThree: "bg-[#31344F]",
  };
  return (
    <label className="relative inline-block cursor-pointer">
      <input
        type="radio"
        className="absolute h-0 w-0 opacity-0"
        checked={isSelected}
        onChange={() => {
          colorChanged(color);
          console.log(color);
        }}
      />

      <span
        className={`grid size-8 items-center justify-center rounded-full ${bgColors[color]}`}
      >
        {isSelected && (
          <svg
            className={`size-4 text-white`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </span>
    </label>
  );
};

export default ColorRadioButton;
