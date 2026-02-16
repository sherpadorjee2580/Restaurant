import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172B] text-light pt-16 mt-20">
      <div className="container mx-auto px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Links */}
          <div>
            <h4
              className="relative inline-block text-orange-500 font-secondary text-2xl font-medium tracking-wider mb-6 pr-12 
              after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-orange-500 after:top-1/2 after:right-0"
            >
              Company
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: "About Us", link: "/about" },
                { name: "Contact Us", link: "/contact" },
                { name: "Reservation", link: "/book" },
                { name: "Privacy Policy", link: "/" },
                { name: "Terms & Condition", link: "/" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="text-white/70 hover:text-white transition-all duration-300 hover:tracking-widest before:content-['>'] before:mr-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4
              className="relative inline-block text-orange-500 font-secondary text-2xl font-medium tracking-wider mb-6 pr-12 
              after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-orange-500 after:top-1/2 after:right-0"
            >
              Contact
            </h4>
            <div className="space-y-3 text-white/70">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-white" /> Jiri-05, Dolakha
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="mr-3 text-white" /> +977 9812345681
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-3 text-white" />{" "}
                sherpakitchen@gmail.com
              </p>
              <div className="flex pt-4 space-x-2">
                {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-orange-500 transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4
              className="relative inline-block text-orange-500 font-secondary text-2xl font-medium tracking-wider mb-6 pr-12 
              after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-orange-500 after:top-1/2 after:right-0"
            >
              Opening
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-white font-normal text-lg">
                  Monday - Saturday
                </h5>
                <p className="text-white/70">09AM - 09PM</p>
              </div>
              <div>
                <h5 className="text-white font-normal text-lg">Sunday</h5>
                <p className="text-white/70">10AM - 08PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="relative inline-block text-orange-500 font-secondary text-2xl font-medium tracking-wider mb-6 pr-12 
              after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-orange-500 after:top-1/2 after:right-0"
            >
              Newsletter
            </h4>
            <p className="text-white/70 mb-6">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white py-4 pl-4 pr-24 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-orange-500 text-white px-4 font-bold hover:bg-orange-600 transition-colors">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between items-center text-white/70">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              &copy;{" "}
              <a
                href="#"
                className="border-b border-white/30 hover:border-white transition-colors"
              >
                Your Site Name
              </a>
              , All Right Reserved.
              <span className="block mt-2 text-sm opacity-50">
                Designed By{" "}
                <a
                  href="https://htmlcodex.com"
                  className="border-b border-white/30 hover:border-white transition-colors"
                >
                  HTML Codex
                </a>
              </span>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <div className="flex justify-center md:justify-end space-x-6">
                {["Home", "Cookies", "Help", "FQAs"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
