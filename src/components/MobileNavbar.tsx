import { hamburgerIcon } from "../assets";
type Props = {};

const MobileNavbar = (props: Props) => {
  return (
    <div className="lg:hidden">
      <img src={hamburgerIcon} alt="menu" />
    </div>
  );
};

export default MobileNavbar;
