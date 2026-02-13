import React, { useState, useEffect } from "react";
// Import specific icons from react-icons
import {
  FaUtensils,
  FaUserTie,
  FaCartPlus,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Service = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { icon: <FaUserTie size={45} />, title: "Master Chefs" },
    { icon: <FaUtensils size={45} />, title: "Quality Food" },
    { icon: <FaCartPlus size={45} />, title: "Online Order" },
    { icon: <FaHeadset size={45} />, title: "24/7 Service" },
    { icon: <FaUserTie size={45} />, title: "Master Chefs" },
    { icon: <FaUtensils size={45} />, title: "Quality Food" },
    { icon: <FaCartPlus size={45} />, title: "Online Order" },
    { icon: <FaHeadset size={45} />, title: "24/7 Service" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      {/* Spinner */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Service Start */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h5 className="relative inline-block text-orange-500 font-serif italic text-xl mb-2 after:content-[''] after:w-12 after:h-[2px] after:bg-orange-500 after:absolute after:top-1/2 after:-right-16 before:content-[''] before:w-12 before:h-[2px] before:bg-orange-500 before:absolute before:top-1/2 before:-left-16">
            Our Services
          </h5>
          <h1 className="text-4xl font-extrabold mt-4">Explore Our Services</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded shadow-md hover:bg-orange-500 transition-all duration-500 transform hover:-translate-y-3"
            >
              <div className="text-orange-500 group-hover:text-white mb-6 transition-colors duration-500">
                {service.icon}
              </div>
              <h5 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h5>
              <p className="text-gray-600 group-hover:text-white text-sm leading-relaxed transition-colors duration-500">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Service End */}

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-sm shadow-xl hover:bg-orange-600 transition-all z-50"
      >
        <BiArrowToTop size={28} />
      </button>
    </div>
  );
};

export default Service;
