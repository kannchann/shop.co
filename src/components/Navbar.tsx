import { hamburgerIcon, logo1x } from "../assets";
import { navLinks } from "../utils/constants";
import Button from "./ui/Button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="border-b border-grey-100 px-4 py-[18px] font-main md:px-8 lg:px-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 pr-5">
            <img src={logo1x} alt="My Image" />
            <p className="text-base font-semibold">Company Name</p>
          </div>

          {/* Hide nav links on tablet and smaller devices */}
          <ul className="hidden items-center space-x-3 md:flex">
            {navLinks.map((link) => (
              <li
                className="text-base font-normal text-black-100"
                key={link.id}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          {/* Hide buttons on tablet and smaller devices */}
          <div className="hidden space-x-2 md:flex">
            <Button variant="secondary" size="small" buttonText="Log in" />
            <Button variant="primary" size="small" buttonText="Sign up" />
          </div>

          {/* Show hamburger on medium and smaller devices */}
          <div className="md:hidden">
            <img src={hamburgerIcon} alt="menu" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
