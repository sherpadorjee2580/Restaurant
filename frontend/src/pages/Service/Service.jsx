import React, { useState } from "react";
import {
  FaUtensils,
  FaBars,
  FaUserTie,
  FaCartPlus,
  FaHeadset,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";

const Service = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data array to keep the code DRY (Don't Repeat Yourself)
  const services = [
    { icon: <FaUserTie />, title: "Master Chefs", delay: "delay-100" },
    { icon: <FaUtensils />, title: "Quality Food", delay: "delay-300" },
    { icon: <FaCartPlus />, title: "Online Order", delay: "delay-500" },
    { icon: <FaHeadset />, title: "24/7 Service", delay: "delay-700" },
    { icon: <FaUserTie />, title: "Master Chefs", delay: "delay-100" },
    { icon: <FaUtensils />, title: "Quality Food", delay: "delay-300" },
    { icon: <FaCartPlus />, title: "Online Order", delay: "delay-500" },
    { icon: <FaHeadset />, title: "24/7 Service", delay: "delay-700" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-700">
      {/* Navbar & Hero Start */}
      <div className="relative bg-gray-900">
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4 bg-gray-900 text-white sticky top-0 z-50">
          <a href="/" className="flex items-center">
            <h1 className="text-orange-500 text-3xl font-bold flex items-center">
              <FaUtensils className="mr-3" /> Restoran
            </h1>
          </a>

          <button
            className="lg:hidden text-white border border-gray-700 p-2 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>

          <div
            className={`${isMenuOpen ? "block" : "hidden"} absolute lg:relative top-full left-0 w-full lg:w-auto lg:flex items-center bg-gray-900 lg:bg-transparent z-50 shadow-xl lg:shadow-none`}
          >
            <div className="flex flex-col lg:flex-row items-center py-4 lg:py-0 space-y-4 lg:space-y-0 lg:space-x-8 px-6 lg:pr-8 uppercase text-sm font-semibold tracking-wide">
              <a href="/" className="hover:text-orange-500 transition">
                Home
              </a>
              <a href="about" className="text-orange-500">
                About
              </a>
              <a href="/service" className="hover:text-orange-500 transition">
                Service
              </a>
              <a href="/menu" className="hover:text-orange-500 transition">
                Menu
              </a>
              <a href="/contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </div>
            <a
              href="#"
              className="hidden lg:inline-block bg-orange-500 hover:bg-orange-600 text-white py-2.5 px-6 rounded font-bold transition"
            >
              Book A Table
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="py-24 bg-gray-900 text-center">
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 animate-pulse">
            Services
          </h1>
          <nav className="flex justify-center uppercase text-sm font-medium tracking-widest">
            <ol className="flex space-x-2 text-white">
              <li>
                <a href="/" className="text-orange-500">
                  Home
                </a>
              </li>
              <li className="before:content-['/'] before:mr-2">Pages</li>
              <li className="text-gray-400 before:content-['/'] before:mr-2">
                Service
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Start */}
      <div className="container mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h5 className="font-serif text-orange-500 font-medium mb-2 inline-block relative after:content-[''] after:w-12 after:h-[2px] after:bg-orange-500 after:absolute after:top-1/2 after:-right-14 before:content-[''] before:w-12 before:h-[2px] before:bg-orange-500 before:absolute before:top-1/2 before:-left-14">
            Our Services
          </h5>
          <h1 className="text-4xl font-bold text-gray-900">
            Explore Our Services
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-300 border-b-4 border-transparent hover:border-orange-600 hover:-translate-y-2`}
            >
              <div className="text-orange-500 text-5xl mb-6 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h5 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h5>
              <p className="text-gray-500 group-hover:text-orange-100 transition-colors">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Start */}
      <footer className="bg-gray-900 text-gray-300 pt-16">
        <div className="container mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Links */}
          <div>
            <h4 className="font-serif text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition flex items-center"
                >
                  › About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition flex items-center"
                >
                  › Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition flex items-center"
                >
                  › Reservation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition flex items-center"
                >
                  › Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
              Contact
            </h4>
            <p className="mb-3 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-orange-500" /> 123 Street,
              NY, USA
            </p>
            <p className="mb-3 flex items-center">
              <FaPhoneAlt className="mr-3 text-orange-500" /> +012 345 67890
            </p>
            <p className="mb-6 flex items-center">
              <FaEnvelope className="mr-3 text-orange-500" /> info@example.com
            </p>
            <div className="flex space-x-3">
              {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition duration-300"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
              Opening
            </h4>
            <h5 className="text-white font-semibold">Monday - Saturday</h5>
            <p className="mb-4">09AM - 09PM</p>
            <h5 className="text-white font-semibold">Sunday</h5>
            <p>10AM - 08PM</p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
              Newsletter
            </h4>
            <p className="mb-4">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-white rounded py-4 pl-4 pr-28 text-gray-900 outline-none"
                placeholder="Your email"
              />
              <button className="absolute right-2 top-2 bg-orange-500 text-white px-4 py-2 rounded font-bold text-sm hover:bg-orange-600 transition">
                SignUp
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-sm">
          <p>
            © <span className="text-white font-bold">Restoran</span>, All Rights
            Reserved. Designed by HTML Codex
          </p>
        </div>
      </footer>

      {/* Back to Top */}
      <button className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded shadow-lg hover:bg-orange-600 transition-all z-50">
        <BiArrowToTop size={24} />
      </button>
    </div>
  );
};

export default Service;
