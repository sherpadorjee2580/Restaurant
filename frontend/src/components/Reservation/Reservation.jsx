import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Reservation = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/DWRcNpR6Kdc";

  return (
    <div className="w-full py-12 px-0 overflow-hidden">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Side: Video Background Section */}
        <div
          className="w-full lg:w-1/2 relative min-h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('img/video-bg.jpg')" }}
        >
          {" "}
          {/* Replace with your actual bg image path */}
          <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="relative z-10 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center group transition-transform hover:scale-110"
          >
            <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-25"></div>
            <FaPlay className="text-white text-2xl ml-1" />
          </button>
        </div>

        {/* Right Side: Reservation Form */}
        <div className="w-full lg:w-1/2 bg-[#0F172B] flex items-center p-8 md:p-16">
          <div className="w-full max-w-lg">
            <h5
              className="relative inline-block text-orange-500 font-secondary text-xl font-medium tracking-wider mb-4 pr-12 
              after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-orange-500 after:top-1/2 after:right-0"
            >
              Reservation
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Book A Table Online
            </h1>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-500 rounded-sm"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-500 rounded-sm"
                  />
                </div>
                <div className="relative">
                  <input
                    type="datetime-local"
                    className="w-full bg-white p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-500 rounded-sm text-gray-400"
                  />
                </div>
                <div className="relative">
                  <select className="w-full bg-white p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-500 rounded-sm text-gray-400 appearance-none">
                    <option value="1">People 1</option>
                    <option value="2">People 2</option>
                    <option value="3">People 3</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <textarea
                  rows="3"
                  placeholder="Special Request"
                  className="w-full bg-white p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-500 rounded-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 uppercase tracking-wide transition-colors duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-orange-500"
            >
              &times;
            </button>
            <iframe
              className="w-full h-full"
              src={`${videoSrc}?autoplay=1`}
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
