import { useState } from "react";

interface DropDownActions {
  label: string;
  link: string | Function;
}
type DropDownProps = {
  actions: DropDownActions[];
  imgSrc: string;
};

const DropDown: React.FC<DropDownProps> = ({ actions, imgSrc }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const handleClick = () => setShowDropDown(!showDropDown);
  return (
    <div>
      <button onClick={handleClick}>
        <img src={imgSrc} alt="" />
        {showDropDown && (
          <div className="absolute right-1 top-9 grid min-w-[150px] justify-start bg-primary-300 py-2 pl-2 pr-7 text-start text-black-100 shadow-sm">
            {actions.map((action, index) => (
              <p
                key={index}
                className="m-0 min-w-[140px] border-b border-b-grey-100 px-[0.88rem] py-[0.375rem] last:border-b-0"
              >
                {action.label}
              </p>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default DropDown;
