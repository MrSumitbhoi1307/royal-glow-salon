import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import Button from "../Common/Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">

            <Link
              to="/"
              className="text-white transition duration-300 hover:text-[#D4AF37]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white transition duration-300 hover:text-[#D4AF37]"
            >
              About
            </Link>

            <Link
              to="/services"
              className="text-white transition duration-300 hover:text-[#D4AF37]"
            >
              Services
            </Link>

            <Link
              to="/academy"
              className="text-white transition duration-300 hover:text-[#D4AF37]"
            >
              Academy
            </Link>

            <Link
              to="/gallery"
              className="text-white transition duration-300 hover:text-[#D4AF37]"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="text-white transition duration-300 hover:text-[#D4AF37]"
            >
              Contact
            </Link>

          </div>

          {/* Book Button */}
          <div className="hidden lg:block">
            <Button
              text="Book Now"
              to="/book-appointment"
            />
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
          >
            <Menu
              size={30}
              className="text-[#D4AF37]"
            />
          </button>

        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Navbar;
