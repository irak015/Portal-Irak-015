import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/tentang-kami" },
    { name: "Kegiatan", path: "/kegiatan" },
    { name: "Galeri", path: "/galeri" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="w-[1351px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-[#00ABE4]">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img
                src="https://drive.google.com/thumbnail?id=1Ou1pplE9AB5yqruzqDlpRIhMzBtyKQdw&sz=s2000"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[#053b93] font-bold text-xl leading-tight">
                IRAK 015
              </span>
              <span className="text-white text-xs font-semibold tracking-wider">
                IKATAN REMAJA AKTIF RW. 015
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all transform hover:-translate-y-0.5 hover:text-white ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-[#053b93]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#053b93] focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "text-white bg-[#053b93]"
                    : "text-gray-800 hover:text-[#053b93] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
