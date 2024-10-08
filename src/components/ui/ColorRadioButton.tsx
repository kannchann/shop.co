import { useState } from "react";

type Props = {
  color:
    | "colorOne"
    | "colorTwo"
    | "colorThree"
    | "colorFour"
    | "colorFive"
    | "colorSix"
    | "colorSeven"
    | "colorEight"
    | "colorNine"
    | "colorTen";
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
    colorFour: "bg-[#00C12B]",
    colorFive: "bg-[#7D06F5]",
    colorSix: "bg-[#4F4631]",
    colorSeven: "bg-[#F506A4]",
    colorEight: "bg-[#F5DD06]",
    colorNine: "bg-[#063AF5]",
    colorTen: "bg-[#06CAF5]",
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
