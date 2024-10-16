import { useState, useEffect, useRef } from "react";
import { hamburgerIcon } from "../assets";
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:hidden" ref={menuRef}>
      <img
        src={hamburgerIcon}
        alt="menu"
        onClick={toggleMenu}
        className="cursor-pointer"
      />
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 bg-white shadow-md">
          <ul className="py-2">
            {navLinks.map((link) => (
              <li
                className="px-4 py-2 text-base font-normal text-black-100 hover:font-extrabold"
                key={link.id}
              >
                <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
