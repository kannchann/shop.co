import { useState } from "react";
import { Link } from "react-router-dom";

interface DropDownActions {
  label: string;
  link?: string;
  onclick?: () => void;
}
type DropDownProps = {
  actions: DropDownActions[];
  imgSrc: string;
};

const DropDown: React.FC<DropDownProps> = ({ actions, imgSrc }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const handleClick = () => setShowDropDown((prev) => !prev);
  // const handleBlur = () => setShowDropDown(() => showDropDown == false);
  return (
    <div onClick={handleClick} className="relative">
      <img src={imgSrc} alt="" />
      {showDropDown && (
        <div className="absolute right-1 top-9 grid min-w-[150px] justify-start border border-primary-300 bg-white px-2 py-2 text-start text-black-100 shadow-lg">
          {actions.map((action, index) => (
            <button
              className="border-b-grey-10 m-0 min-w-[140px] border-b px-[0.88rem] py-[0.375rem] text-sm last:border-b-0 hover:bg-black-700 hover:text-white"
              key={index}
              onClick={() => {
                action.onclick ? action.onclick() : null;
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
