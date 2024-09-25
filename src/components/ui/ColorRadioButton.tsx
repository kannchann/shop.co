import { useState } from "react";

type Props = {
  color: string;
};

const ColorRadioButton: React.FC<Props> = ({ color }) => {
  return (
    <div>
      <input type="radio" name="colors" className="hidden after:content-['']" />
      <label
        style={{
          backgroundColor: `${color}`,
        }}
        className="relative block size-8 cursor-pointer rounded-full checked:bg-blue-500"
      ></label>
    </div>
  );
};

export default ColorRadioButton;
