import React, { useState } from "react";
import {
  FaUtensils,
  FaBars,
  FaEnvelopeOpen,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white p-0 font-sans text-gray-700">
      {/* Navbar & Hero Start */}
      <div className="relative p-0 bg-gray-900">
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4 lg:py-0 bg-gray-900 text-white sticky top-0 z-50">
          <a href="/" className="flex items-center p-0">
            <h1 className="text-orange-500 text-3xl font-bold m-0 flex items-center">
              <FaUtensils className="mr-3" /> Restoran
            </h1>
          </a>

          <button
            className="lg:hidden text-white border border-gray-700 px-3 py-1 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>

          <div
            className={`${isMenuOpen ? "block" : "hidden"} absolute lg:relative top-full left-0 w-full lg:w-auto lg:flex items-center bg-gray-900 lg:bg-transparent transition-all z-50`}
          >
            <div className="flex flex-col lg:flex-row items-center py-4 lg:py-6 space-y-4 lg:space-y-0 lg:space-x-6 px-6 lg:pr-6">
              <a href="/index" className="hover:text-orange-500 transition">
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
              <div className="relative group cursor-pointer">
                <span className="hover:text-orange-500">Pages</span>
              </div>
              <a
                href="/contact"
                className="text-orange-500 border-b-2 border-orange-500 lg:border-none lg:text-orange-500 transition"
              >
                Contact
              </a>
            </div>
            <a
              href="#"
              className="hidden lg:inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded font-semibold transition"
            >
              Book A Table
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="py-20 bg-gray-900 text-center mb-12">
          <div className="container mx-auto px-4 pt-12 pb-8">
            <h1 className="text-6xl md:text-7xl text-white font-bold mb-4 animate-bounce">
              Contact Us
            </h1>
            <nav className="flex justify-center uppercase text-sm font-medium tracking-widest">
              <ol className="flex space-x-2">
                <li>
                  <a href="/" className="text-orange-500">
                    Home
                  </a>
                </li>
                <li className="text-white before:content-['/'] before:mr-2">
                  Pages
                </li>
                <li className="text-gray-400 before:content-['/'] before:mr-2">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Start */}
      <div className="container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h5 className="font-serif text-orange-500 font-normal mb-2 border-b-2 border-orange-500 inline-block uppercase tracking-wider">
            Contact Us
          </h5>
          <h1 className="text-4xl font-bold">Contact For Any Query</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Quick Contact Info */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col">
              <h5 className="font-serif text-orange-500 font-normal mb-2 border-b-2 border-orange-500 inline-block self-start uppercase">
                Booking
              </h5>
              <p className="flex items-center mt-2">
                <FaEnvelopeOpen className="text-orange-500 mr-2" />{" "}
                book@example.com
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-serif text-orange-500 font-normal mb-2 border-b-2 border-orange-500 inline-block self-start uppercase">
                General
              </h5>
              <p className="flex items-center mt-2">
                <FaEnvelopeOpen className="text-orange-500 mr-2" />{" "}
                info@example.com
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-serif text-orange-500 font-normal mb-2 border-b-2 border-orange-500 inline-block self-start uppercase">
                Technical
              </h5>
              <p className="flex items-center mt-2">
                <FaEnvelopeOpen className="text-orange-500 mr-2" />{" "}
                tech@example.com
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-6 h-[400px]">
            <iframe
              className="rounded w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.00123456789!2d86.22400000000001!3d27.635399999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb14b8abc00001%3A0x123456789abcdef!2sJiri%2C%20Dolakha%20Municipality%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps — Jiri, Dolakha"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded p-4 pt-6 outline-none peer focus:border-orange-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-orange-500"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded p-4 pt-6 outline-none peer focus:border-orange-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-orange-500"
                  >
                    Your Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 rounded p-4 pt-6 outline-none peer focus:border-orange-500"
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-orange-500"
                >
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded p-4 pt-6 outline-none h-32 peer focus:border-orange-500"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-orange-500"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded transition duration-300 uppercase tracking-widest"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Start */}
      <footer className="bg-gray-900 text-gray-300 pt-16 mt-16">
        <div className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h4 className="text-orange-500 text-xl font-bold mb-6 border-b border-gray-800 pb-2">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Reservation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-500 text-xl font-bold mb-6 border-b border-gray-800 pb-2">
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
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-orange-500 text-xl font-bold mb-6 border-b border-gray-800 pb-2">
                Opening
              </h4>
              <h5 className="text-white font-semibold">Monday - Saturday</h5>
              <p className="mb-4">09AM - 09PM</p>
              <h5 className="text-white font-semibold">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
            <div>
              <h4 className="text-orange-500 text-xl font-bold mb-6 border-b border-gray-800 pb-2">
                Newsletter
              </h4>
              <p className="mb-4 text-sm text-gray-400">
                Join our mailing list for updates.
              </p>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-white rounded py-3 pl-4 pr-24 text-gray-900 focus:outline-none"
                  placeholder="Your email"
                />
                <button className="absolute right-2 top-2 bg-orange-500 text-white px-4 py-1.5 rounded text-sm font-bold">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 text-sm text-center text-gray-500">
          <p>
            ©{" "}
            <a href="#" className="text-white hover:text-orange-500 transition">
              Your Site Name
            </a>
            , All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top */}
      <button className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-lg shadow-2xl hover:bg-orange-600 transition duration-300">
        <BiArrowToTop size={24} />
      </button>
    </div>
  );
};

export default Contact;
