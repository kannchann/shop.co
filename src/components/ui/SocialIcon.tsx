import React, { ReactNode, useState } from "react";

type Props = {
  activeIcon: string;
};

const SocialIcon: React.FC<Props> = ({ activeIcon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => setIsActive(!isActive)}>
      {isActive ? (
        <img src={activeIcon} alt="" className="invert" />
      ) : (
        <img src={activeIcon} alt="" />
      )}
    </div>
  );
};

export default SocialIcon;
