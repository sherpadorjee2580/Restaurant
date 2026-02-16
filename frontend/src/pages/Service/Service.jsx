import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

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
        <Navbar />

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
      <Footer />

      {/* Back to Top */}
      <button className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded shadow-lg hover:bg-orange-600 transition-all z-50">
        <BiArrowToTop size={24} />
      </button>
    </div>
  );
};

export default Service;
