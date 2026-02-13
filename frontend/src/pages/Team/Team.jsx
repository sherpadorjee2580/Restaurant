import React, { useState } from "react";
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
      name: "John Doe",
      role: "Executive Chef",
      img: "/api/placeholder/400/400",
    },
    {
      name: "Jane Smith",
      role: "Master Chef",
      img: "/api/placeholder/400/400",
    },
    {
      name: "Robert Wilson",
      role: "Sous Chef",
      img: "/api/placeholder/400/400",
    },
    {
      name: "Sarah Jenkins",
      role: "Pastry Chef",
      img: "/api/placeholder/400/400",
    },
    {
      name: "Michael Chen",
      role: "Master Chef",
      img: "/api/placeholder/400/400",
    },
    {
      name: "Emma Davis",
      role: "Master Chef",
      img: "/api/placeholder/400/400",
    },
    {
      name: "David Miller",
      role: "Master Chef",
      img: "/api/placeholder/400/400",
    },
    {
      name: "Lisa Anderson",
      role: "Master Chef",
      img: "/api/placeholder/400/400",
    },
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
              <a href="/about" className="hover:text-orange-500 transition">
                About
              </a>
              <a href="/service" className="hover:text-orange-500 transition">
                Service
              </a>
              <a href="/menu" className="hover:text-orange-500 transition">
                Menu
              </a>
              <div className="relative group cursor-pointer text-orange-500">
                Pages ▾
                <div className="hidden group-hover:block absolute top-full left-0 bg-white text-gray-800 py-2 w-40 shadow-lg">
                  <a
                    href="/booking"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Booking
                  </a>
                  <a
                    href="/team"
                    className="block px-4 py-2 bg-orange-500 text-white"
                  >
                    Our Team
                  </a>
                  <a
                    href="/testimonial"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Testimonial
                  </a>
                </div>
              </div>
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
      <footer className="bg-gray-900 text-gray-300 pt-16 mt-20">
        <div className="container mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3 font-serif">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact Us",
                "Reservation",
                "Privacy Policy",
                "Terms & Condition",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition block py-1"
                  >
                    › {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3 font-serif">
              Contact
            </h4>
            <p className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-orange-500" /> 123 Street,
              NY, USA
            </p>
            <p className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-3 text-orange-500" /> +012 345 67890
            </p>
            <p className="mb-4 flex items-center">
              <FaEnvelope className="mr-3 text-orange-500" /> info@example.com
            </p>
            <div className="flex space-x-2">
              {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
                  >
                    <Icon size={14} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3 font-serif">
              Opening
            </h4>
            <p className="text-white font-bold">Monday - Saturday</p>
            <p className="mb-4">09AM - 09PM</p>
            <p className="text-white font-bold">Sunday</p>
            <p>10AM - 08PM</p>
          </div>

          <div>
            <h4 className="text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3 font-serif">
              Newsletter
            </h4>
            <p className="mb-4">
              Stay updated with our latest recipes and news.
            </p>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-white rounded py-3 pl-4 pr-24 outline-none text-gray-900"
                placeholder="Your email"
              />
              <button className="absolute right-1.5 top-1.5 bg-orange-500 text-white px-4 py-1.5 rounded font-bold text-sm hover:bg-orange-600">
                SignUp
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8 text-center text-sm">
          &copy; <span className="text-white">Restoran</span>, All Rights
          Reserved. Designed By HTML Codex
        </div>
      </footer>

      {/* Back to Top */}
      <button className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded shadow-lg hover:bg-orange-600 transition-all">
        <BiArrowToTop size={24} />
      </button>
    </div>
  );
};

export default Team;
