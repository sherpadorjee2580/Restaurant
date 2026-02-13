import React from "react";
import { FaUtensils } from "react-icons/fa"; // Importing from Font Awesome set within react-icons

const About = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-left">
                <img
                  className="rounded w-full object-cover transition-transform duration-500 hover:scale-105 shadow-lg"
                  src="about-1.jpg"
                  alt="About 1"
                />
              </div>
              <div className="text-left">
                <img
                  className="rounded w-3/4 mt-[25%] object-cover transition-transform duration-500 hover:scale-105 shadow-lg"
                  src="about-2.jpg"
                  alt="About 2"
                />
              </div>
              <div className="text-right flex justify-end">
                <img
                  className="rounded w-3/4 object-cover transition-transform duration-500 hover:scale-105 shadow-lg"
                  src="about-3.jpg"
                  alt="About 3"
                />
              </div>
              <div className="text-right">
                <img
                  className="rounded w-full object-cover transition-transform duration-500 hover:scale-105 shadow-lg"
                  src="about-4.jpg"
                  alt="About 4"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <h5 className="relative inline-block text-orange-500 font-secondary text-xl font-medium tracking-wider mb-4 pr-12 after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-orange-500 after:top-1/2 after:right-0">
              About Us
            </h5>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              Welcome to
              <span className="text-orange-500 inline-flex items-center">
                <FaUtensils className="text-3xl md:text-4xl" />
              </span>
              Restoran
            </h1>

            <p className="mb-6 text-gray-600 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>
            <p className="mb-8 text-gray-600 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Stat 1 */}
              <div className="flex items-center border-l-[6px] border-orange-500 px-4">
                <h1 className="text-5xl font-bold text-orange-500 mb-0">15</h1>
                <div className="ps-4">
                  <p className="mb-0 text-sm text-gray-500 uppercase">
                    Years of
                  </p>
                  <h6 className="uppercase font-bold text-gray-900 mb-0">
                    Experience
                  </h6>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center border-l-[6px] border-orange-500 px-4">
                <h1 className="text-5xl font-bold text-orange-500 mb-0">50</h1>
                <div className="ps-4">
                  <p className="mb-0 text-sm text-gray-500 uppercase">
                    Popular
                  </p>
                  <h6 className="uppercase font-bold text-gray-900 mb-0">
                    Master Chefs
                  </h6>
                </div>
              </div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 transition-all duration-300 rounded-sm uppercase text-sm tracking-wide shadow-md hover:shadow-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
