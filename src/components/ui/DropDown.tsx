import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface DropDownActions {
  label: string;
  link?: string;
  onclick?: () => void;
}

type DropDownProps = {
  actions?: DropDownActions[];
  imgSrc?: string;
};

const DropDown: React.FC<DropDownProps> = ({ actions, imgSrc }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => setShowDropDown((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative z-10">
      <img src={imgSrc} alt="" onClick={handleClick} />
      {showDropDown && (
        <div className="absolute right-1 top-9 grid min-w-[150px] justify-start border border-primary-300 bg-white px-2 py-2 text-start text-black-100 shadow-lg">
          {actions?.map((action, index) => (
            <button
              className="border-b-grey-10 m-0 min-w-[140px] border-b px-[0.88rem] py-[0.375rem] text-sm last:border-b-0 hover:bg-black-700 hover:text-white"
              key={index}
              onClick={() => {
                if (action.onclick) action.onclick();
                setShowDropDown(false);
              }}
            >
              {action.link ? (
                <Link to={action.link}>{action.label}</Link>
              ) : (
                action.label
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
