import { Link } from "react-router-dom";

type Props = {
  activeIcon: string;
};

const SocialIcon: React.FC<Props> = ({ activeIcon }) => {
  return (
    <Link to="/#">
      <img
        src={activeIcon}
        alt=""
        className="cursor-pointer transition-all hover:invert"
      />
    </Link>
  );
};

export default SocialIcon;
