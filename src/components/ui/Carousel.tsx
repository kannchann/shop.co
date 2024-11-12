import React, { useState, useEffect } from "react";
import { logoIcons } from "../../utils/constants";

const Carousel: React.FC = () => {
  const [currentOffset, setCurrentOffset] = useState(0);
  const itemWidth = 150;
  const gap = 106;
  const totalItems = logoIcons.length;

  const totalWidth = (itemWidth + gap) * totalItems;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffset((prevOffset) => {
        const newOffset = prevOffset + 1;
        return newOffset >= totalWidth ? 0 : newOffset;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black-700 py-11">
      <div
        className="flex items-center"
        style={{
          transform: `translateX(-${currentOffset}px)`,
          transition: "transform 0s linear",
          gap: `${gap}px`,
        }}
      >
        {logoIcons.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={image}
              alt={`Logo ${index}`}
              className="w-full object-contain"
            />
          </div>
        ))}

        {logoIcons.map((image, index) => (
          <div key={`clone-${index}`} className="flex-shrink-0">
            <img
              src={image}
              alt={`Clone ${index}`}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
