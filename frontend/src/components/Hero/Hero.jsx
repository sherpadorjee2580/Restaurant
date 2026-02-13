import React, { useState } from "react";
import { FaUtensils, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleTable = () => {
    navigate("/book");
  };

  return (
    <div className="relative p-0 bg-slate-900">
      {/* Hero Header Start */}
      <div className="relative py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-slideInLeft">
                Enjoy Our
                <br />
                Delicious Meal
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideInLeft opacity-90">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              <button
                onClick={handleTable}
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-sm font-bold transition uppercase tracking-widest text-sm animate-slideInLeft shadow-lg"
              >
                Book A Table
              </button>
            </div>

            {/* Right Image (Spinning Animation) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
              <img
                className="w-[80%] lg:w-full max-w-[500px] h-auto animate-spin-slow"
                src="hero.png" // Ensure this path is correct in your public folder
                alt="Delicious Meal"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Header End */}
    </div>
  );
};

// Helper Components
const NavLink = ({ href, children, active }) => (
  <a
    href={href}
    className={`uppercase py-2 transition-colors ${
      active ? "text-orange-500" : "text-white hover:text-orange-500"
    }`}
  >
    {children}
  </a>
);

const DropdownLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
  >
    {children}
  </a>
);

export default Hero;
