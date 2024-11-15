import { Link } from "react-router-dom";

type Props = {
  activeIcon: string;
  link: string;
};

const SocialIcon: React.FC<Props> = ({ activeIcon, link }) => {
  return (
    <Link to={link}>
      <img
        src={activeIcon}
        alt=""
        className="cursor-pointer transition-all hover:invert"
      />
    </Link>
  );
};

export default SocialIcon;
