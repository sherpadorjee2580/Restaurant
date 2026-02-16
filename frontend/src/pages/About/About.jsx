import React from "react";
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

const About = () => {
  return (
    <div className="bg-white p-0 font-sans text-gray-700">
      {/* Navbar & Hero Start */}
      <div className="relative p-0 bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <div className="py-20 bg-gray-900 text-center mb-12">
          <div className="container mx-auto px-4 pt-12 pb-8">
            <h1 className="text-6xl md:text-7xl text-white font-bold mb-4 animate-bounce">
              About Us
            </h1>
            <nav className="flex justify-center uppercase text-sm font-medium tracking-widest">
              <ol className="flex space-x-2">
                <li>
                  <a href="#" className="text-orange-500">
                    Home
                  </a>
                </li>
                <li className="text-white before:content-['/'] before:mr-2">
                  Pages
                </li>
                <li className="text-gray-400 before:content-['/'] before:mr-2">
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-3">
              <img
                className="rounded w-full transition-transform hover:scale-105 duration-300"
                src="about-1.jpg"
                alt="About 1"
              />
              <img
                className="rounded w-3/4 mt-[25%] transition-transform hover:scale-105 duration-300"
                src="about-2.jpg"
                alt="About 2"
              />
              <div className="flex justify-end">
                <img
                  className="rounded w-3/4 transition-transform hover:scale-105 duration-300"
                  src="about-3.jpg"
                  alt="About 3"
                />
              </div>
              <img
                className="rounded w-full transition-transform hover:scale-105 duration-300"
                src="about-4.jpg"
                alt="About 4"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-1/2 px-4">
            <h5 className="font-pacifico text-orange-500 font-normal mb-2 border-b-2 border-orange-500 inline-block">
              About Us
            </h5>
            <h1 className="text-4xl font-bold mb-6 flex items-center">
              Welcome to <FaUtensils className="text-orange-500 ml-3" />{" "}
              <span className="ml-2">Restoran</span>
            </h1>
            <p className="mb-6 text-gray-600">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>
            <p className="mb-8 text-gray-600">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>

            <div className="flex flex-wrap -mx-4 mb-8">
              <div className="w-1/2 px-4">
                <div className="flex items-center border-l-4 border-orange-500 px-4">
                  <h1 className="text-4xl font-bold text-orange-500 mr-4">
                    15
                  </h1>
                  <div className="text-sm uppercase tracking-tighter">
                    <p className="m-0">Years of</p>
                    <h6 className="font-bold">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="w-1/2 px-4">
                <div className="flex items-center border-l-4 border-orange-500 px-4">
                  <h1 className="text-4xl font-bold text-orange-500 mr-4">
                    50
                  </h1>
                  <div className="text-sm uppercase tracking-tighter">
                    <p className="m-0">Popular</p>
                    <h6 className="font-bold">Master Chefs</h6>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 rounded font-semibold uppercase transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Team Start */}
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h5 className="font-pacifico text-orange-500 font-normal border-b-2 border-orange-500 inline-block px-2">
            Team Members
          </h5>
          <h1 className="text-4xl font-bold mt-2">Our Master Chefs</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div
              key={member}
              className="group bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-8 border-gray-50">
                <img
                  src={`team-${member}.jpg`}
                  alt="Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-xl font-bold mb-1">Full Name</h5>
              <small className="text-gray-500 block mb-4">Designation</small>
              <div className="flex justify-center space-x-2">
                <a
                  href="#"
                  className="bg-orange-500 text-white w-10 h-10 rounded-t-lg flex items-center justify-center hover:bg-gray-900 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-orange-500 text-white w-10 h-10 rounded-t-lg flex items-center justify-center hover:bg-gray-900 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-orange-500 text-white w-10 h-10 rounded-t-lg flex items-center justify-center hover:bg-gray-900 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Start */}
      <Footer />

      {/* Back to Top */}
      <button className="fixed bottom-10 right-10 bg-orange-500 text-white p-4 rounded-lg shadow-lg hover:bg-orange-600 transition animate-bounce">
        <BiArrowToTop size={24} />
      </button>
    </div>
  );
};

export default About;
