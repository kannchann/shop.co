import React, { useState, useEffect, useRef } from "react";

type PriceRangeSliderProps = {
  min: number;
  max: number;
  value: [number, number];
  onChange: (newValue: [number, number]) => void;
};

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
}) => {
  const [leftThumbPosition, setLeftThumbPosition] = useState(0);
  const [rightThumbPosition, setRightThumbPosition] = useState(100);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftPos = ((value[0] - min) / (max - min)) * 100;
    const rightPos = ((value[1] - min) / (max - min)) * 100;
    setLeftThumbPosition(leftPos);
    setRightThumbPosition(rightPos);
  }, [value, min, max]);

  const handleMouseDown = (e: React.MouseEvent, isLeft: boolean) => {
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;

    const startX = e.clientX;
    const sliderRect = slider.getBoundingClientRect();
    const startLeft = leftThumbPosition;
    const startRight = rightThumbPosition;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = ((e.clientX - startX) / sliderRect.width) * 100;
      if (isLeft) {
        const newLeft = Math.max(
          0,
          Math.min(startLeft + dx, rightThumbPosition - 5),
        );
        setLeftThumbPosition(newLeft);
        const newValue = Math.round((newLeft / 100) * (max - min) + min);
        onChange([newValue, value[1]]);
      } else {
        const newRight = Math.min(
          100,
          Math.max(startRight + dx, leftThumbPosition + 5),
        );
        setRightThumbPosition(newRight);
        const newValue = Math.round((newRight / 100) * (max - min) + min);
        onChange([value[0], newValue]);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={sliderRef}
      className="relative h-2 w-full rounded-full bg-gray-200"
    >
      <div
        className="bg-primary-500 absolute h-full rounded-full"
        style={{
          left: `${leftThumbPosition}%`,
          right: `${100 - rightThumbPosition}%`,
        }}
      ></div>
      <div
        className="border-primary-500 absolute h-4 w-4 cursor-pointer rounded-full border-2 bg-white"
        style={{ left: `${leftThumbPosition}%`, top: "-6px" }}
        onMouseDown={(e) => handleMouseDown(e, true)}
      ></div>
      <div
        className="border-primary-500 absolute h-4 w-4 cursor-pointer rounded-full border-2 bg-white"
        style={{ left: `${rightThumbPosition}%`, top: "-6px" }}
        onMouseDown={(e) => handleMouseDown(e, false)}
      ></div>
    </div>
  );
};

export default PriceRangeSlider;
