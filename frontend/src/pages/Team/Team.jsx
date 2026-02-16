import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  FaUtensils,
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";

const Team = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Centralized team data
  const teamMembers = [
    {
      name: "Dorji Sherpa",
      role: "Executive Chef",
      img: "dorji.jpeg",
    },
    {
      name: "Dorji Sherpa",
      role: "Executive Chef",
      img: "dorji.jpeg",
    },
    {
      name: "Dorji Sherpa",
      role: "Executive Chef",
      img: "dorji.jpeg",
    },
    {
      name: "Dorji Sherpa",
      role: "Executive Chef",
      img: "dorji.jpeg",
    },
    {
      name: "Dorji Sherpa",
      role: "Executive Chef",
      img: "dorji.jpeg",
    },
    {
      name: "Dorji Sherpa",
      role: "Executive Chef",
      img: "dorji.jpeg",
    },
    {
      name: "Dorji Sherpa",
      role: "Executive Chef",
      img: "dorji.jpeg",
    },
    {
      name: "Dorji Sherpa",
      role: "Executive Chef",
      img: "dorji.jpeg",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-700">
      {/* Navbar & Hero Start */}
      <div className="relative bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <div className="py-24 bg-gray-900 text-center">
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-6">
            Our Team
          </h1>
          <nav className="flex justify-center uppercase text-sm font-medium tracking-widest">
            <ol className="flex space-x-2 text-white">
              <li>
                <a href="#" className="text-orange-500">
                  Home
                </a>
              </li>
              <li className="before:content-['/'] before:mr-2">Pages</li>
              <li className="text-gray-400 before:content-['/'] before:mr-2">
                Team
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Team Start */}
      <div className="container mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h5 className="font-serif text-orange-500 font-medium mb-2 inline-block relative px-12 before:content-[''] before:w-10 before:h-[2px] before:bg-orange-500 before:absolute before:left-0 before:top-1/2 after:content-[''] after:w-10 after:h-[2px] after:bg-orange-500 after:absolute after:right-0 after:top-1/2">
            Team Members
          </h5>
          <h1 className="text-4xl font-bold text-gray-900">Our Master Chefs</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-3"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-8 ring-transparent group-hover:ring-orange-50 transition-all duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h5>
                <small className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">
                  {member.role}
                </small>

                {/* Social Icons that appear on hover or stay styled */}
                <div className="flex space-x-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-orange-500 text-white p-2.5 rounded-t-lg hover:bg-gray-900 transition-colors"
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href="#"
                    className="bg-orange-500 text-white p-2.5 rounded-t-lg hover:bg-gray-900 transition-colors"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href="#"
                    className="bg-orange-500 text-white p-2.5 rounded-t-lg hover:bg-gray-900 transition-colors"
                  >
                    <FaInstagram size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Start */}
      <Footer />

      {/* Back to Top */}
      <button className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded shadow-lg hover:bg-orange-600 transition-all">
        <BiArrowToTop size={24} />
      </button>
    </div>
  );
};

export default Team;
