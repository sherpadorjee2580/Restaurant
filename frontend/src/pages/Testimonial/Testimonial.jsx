import React, { useState, useEffect } from "react";
import {
  FaUtensils,
  FaBars,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Testimonial = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name 1",
      profession: "Profession",
      img: "/api/placeholder/50/50",
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name 2",
      profession: "Profession",
      img: "/api/placeholder/50/50",
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name 3",
      profession: "Profession",
      img: "/api/placeholder/50/50",
    },
  ];

  // Auto-play slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar & Hero Start */}
      <div className="relative p-0 bg-gray-900">
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4 bg-gray-900 sticky top-0 z-50">
          <a href="/" className="flex items-center">
            <h1 className="text-orange-500 text-3xl font-bold flex items-center m-0">
              <FaUtensils className="mr-3" /> Restoran
            </h1>
          </a>

          <button
            className="lg:hidden text-white border border-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>

          <div
            className={`${isMenuOpen ? "block" : "hidden"} absolute lg:relative top-full left-0 w-full lg:w-auto lg:flex items-center bg-gray-900 lg:bg-transparent`}
          >
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 py-4 lg:py-0 px-6 uppercase text-sm font-bold text-white">
              <a href="/home" className="hover:text-orange-500">
                Home
              </a>
              <a href="/about" className="hover:text-orange-500">
                About
              </a>
              <a href="/service" className="hover:text-orange-500">
                Service
              </a>
              <a href="/menu" className="hover:text-orange-500">
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
                  <a href="/team" className="block px-4 py-2 hover:bg-gray-100">
                    Our Team
                  </a>
                  <a
                    href="/testimonial"
                    className="block px-4 py-2 bg-orange-500 text-white"
                  >
                    Testimonial
                  </a>
                </div>
              </div>
              <a href="/contact" className="hover:text-orange-500">
                Contact
              </a>
            </div>
            <a
              href="#"
              className="hidden lg:block bg-orange-500 text-white py-2 px-6 ml-4 font-bold rounded hover:bg-orange-600 transition"
            >
              Book A Table
            </a>
          </div>
        </nav>

        {/* Hero Header */}
        <div className="py-20 bg-gray-900 text-center">
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-4 animate-bounce-slow">
            Testimonial
          </h1>
          <nav className="flex justify-center uppercase text-sm font-medium">
            <ol className="flex space-x-2 text-white">
              <li>
                <a href="#" className="text-orange-500">
                  Home
                </a>
              </li>
              <li className="before:content-['/'] before:mr-2">Pages</li>
              <li className="text-gray-400 before:content-['/'] before:mr-2">
                Testimonial
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h5 className="font-serif text-orange-500 font-normal inline-block relative px-12 before:content-[''] before:w-10 before:h-[2px] before:bg-orange-500 before:absolute before:left-0 before:top-1/2 after:content-[''] after:w-10 after:h-[2px] after:bg-orange-500 after:absolute after:right-0 after:top-1/2">
            Testimonial
          </h5>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Our Clients Say!!!
          </h1>
        </div>

        {/* Custom Slider */}
        <div className="max-w-4xl mx-auto overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-transparent border border-gray-200 rounded p-8 hover:bg-orange-500 hover:text-white transition-colors duration-300 group">
                  <FaQuoteLeft className="text-4xl text-orange-500 mb-4 group-hover:text-white" />
                  <p className="text-lg italic mb-6 leading-relaxed">
                    {t.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full ring-2 ring-orange-500 group-hover:ring-white"
                      src={t.img}
                      alt={t.name}
                    />
                    <div className="ml-4">
                      <h5 className="font-bold text-lg leading-tight">
                        {t.name}
                      </h5>
                      <small className="uppercase tracking-widest text-xs opacity-75">
                        {t.profession}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeSlide === i ? "bg-orange-500 w-8" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 mt-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          <div>
            <h4 className="text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact Us",
                "Reservation",
                "Privacy Policy",
                "Terms & Condition",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    › {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
              Contact
            </h4>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-3 text-orange-500" /> 123 Street,
              NY, USA
            </p>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-3 text-orange-500" /> +012 345 67890
            </p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-3 text-orange-500" /> info@example.com
            </p>
            <div className="flex space-x-2">
              {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
              Opening
            </h4>
            <p className="text-white font-bold">Monday - Saturday</p>
            <p className="mb-4">09AM - 09PM</p>
            <p className="text-white font-bold">Sunday</p>
            <p>10AM - 08PM</p>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
              Newsletter
            </h4>
            <p className="mb-4 text-sm">
              Join our newsletter for the latest updates.
            </p>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 rounded bg-white text-gray-900 outline-none"
                placeholder="Your email"
              />
              <button className="absolute right-2 top-2 bg-orange-500 text-white px-4 py-1 rounded font-bold hover:bg-orange-600">
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
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded shadow-lg hover:bg-orange-600 transition-all z-50"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Testimonial;
