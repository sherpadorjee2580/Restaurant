import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
      text: "Enjoy delcious mean at an affordable price with a beautiful ambiance",
      name: "Dorji Sherpa",
      profession: "Profession",
      img: "dorji.jpeg",
    },
    {
      text: "Enjoy delcious mean at an affordable price with a beautiful ambiance",
      name: "Dorji Sherpa",
      profession: "Profession",
      img: "dorji.jpeg",
    },
    {
      text: "Enjoy delcious mean at an affordable price with a beautiful ambiance",
      name: "Dorji Sherpa",
      profession: "Profession",
      img: "dorji.jpeg",
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
        <Navbar />

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
      <Footer />

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
