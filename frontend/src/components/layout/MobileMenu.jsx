import { X } from "lucide-react";
import navLinks from "../../data/navLinks";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-screen bg-[#0B0B0B]/95 backdrop-blur-xl z-50 transition-all duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-6">
        <button onClick={() => setIsOpen(false)}>
          <X size={32} className="text-[#D4AF37]" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-[80%] gap-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.path}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-semibold text-white hover:text-[#D4AF37] transition-all duration-300"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;