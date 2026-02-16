import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // 1. Import useLocation
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // 2. Get the current path (e.g., "/about")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Removed the hardcoded "active: true"
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Menu", href: "/menu" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-4 lg:px-12 py-3 lg:py-0 ${
        isScrolled ? "bg-[#0F172B] shadow-lg" : "bg-[#0F172B] lg:bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center py-4">
          <h1 className="text-orange-500 text-3xl md:text-4xl font-bold flex items-center m-0">
            <FaUtensils className="mr-3" />
            Sherpa's Kitchen
          </h1>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white border border-white/10 p-2 rounded focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div
          className={`${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-full lg:opacity-100 overflow-hidden lg:overflow-visible transition-all duration-300 w-full lg:w-auto lg:flex lg:items-center`}
        >
          <div className="flex flex-col lg:flex-row lg:ms-auto py-4 lg:py-0 pe-0 lg:pe-4 space-y-2 lg:space-y-0 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // 4. Check if current path matches link href
                className={`text-sm uppercase font-medium tracking-wider transition-colors hover:text-orange-500 ${
                  location.pathname === link.href
                    ? "text-orange-500"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Dropdown Logic for Active State */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                // 5. Makes "Pages" orange if one of its children is active
                className={`text-sm uppercase font-medium tracking-wider hover:text-orange-500 flex items-center w-full justify-between ${
                  ["/booking", "/team", "/testimonial"].includes(
                    location.pathname,
                  )
                    ? "text-orange-500"
                    : "text-white"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Pages <span className="ml-1 text-[10px]">▼</span>
              </button>

              <div
                className={`${
                  isDropdownOpen ? "block animate-fadeInUp" : "hidden"
                } lg:absolute lg:bg-white lg:text-gray-800 rounded-sm mt-2 lg:mt-0 w-full lg:w-40 py-2 shadow-xl z-10 transition-all`}
              >
                <a
                  href="/booking"
                  className={`block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${location.pathname === "/booking" ? "text-orange-500" : ""}`}
                >
                  Booking
                </a>
                <a
                  href="/team"
                  className={`block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${location.pathname === "/team" ? "text-orange-500" : ""}`}
                >
                  Our Team
                </a>
                <a
                  href="/testimonial"
                  className={`block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${location.pathname === "/testimonial" ? "text-orange-500" : ""}`}
                >
                  Testimonial
                </a>
              </div>
            </div>

            <a
              href="/contact"
              className={`text-sm uppercase font-medium tracking-wider hover:text-orange-500 ${
                location.pathname === "/contact"
                  ? "text-orange-500"
                  : "text-white"
              }`}
            >
              Contact
            </a>
          </div>

          <a
            href="/book"
            className="inline-block bg-orange-500 text-white font-bold uppercase text-xs py-3 px-8 rounded-sm hover:bg-orange-600 transition-colors mt-4 lg:mt-0"
          >
            Book A Table
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
