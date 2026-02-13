import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Team = () => {
  const chefs = [
    {
      name: "Dorji Sherpa",
      designation: "Designation",
      image: "dorji.jpeg",
      delay: "0.1s",
    },
    {
      name: "Krinjal KC",
      designation: "Designation",
      image: "krinjal.jpeg",
      delay: "0.3s",
    },
    {
      name: "Tshering Finjo Hyolmo",
      designation: "Designation",
      image: "tshering.jpeg",
      delay: "0.5s",
    },
    {
      name: "Indra Tamanag",
      designation: "Designation",
      image: "indra.jpeg",
      delay: "0.7s",
    },
    {
      name: "Dipesh Dhakal",
      designation: "Designation",
      image: "dipesh.jpeg",
      delay: "0.7s",
    },
  ];

  return (
    <div className="container-xxl pt-20 pb-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h5
            className="relative inline-block text-orange-500 font-secondary text-xl font-medium tracking-wider px-12 
            before:content-[''] before:absolute before:w-10 before:h-[2px] before:bg-orange-500 before:top-1/2 before:left-0
            after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-orange-500 after:top-1/2 after:right-0"
          >
            Team Members
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Our Master Chefs
          </h1>
        </div>

        {/* Chef Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 hover:pt-0"
              style={{ animationDelay: chef.delay }}
            >
              <div className="text-center p-6">
                {/* Image Container */}
                <div className="overflow-hidden rounded-full mx-auto mb-6 w-48 h-48 border-8 border-gray-50 group-hover:scale-105 transition-transform duration-500">
                  <img
                    className="w-full h-full object-cover"
                    src={chef.image}
                    alt={chef.name}
                  />
                </div>

                {/* Content */}
                <h5 className="text-xl font-bold mb-1">{chef.name}</h5>
                <small className="text-gray-500 italic mb-4 block">
                  {chef.designation}
                </small>

                {/* Social Links */}
                <div className="flex justify-center space-x-2">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-t-lg hover:bg-orange-600 transition-colors"
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-t-lg hover:bg-orange-600 transition-colors"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-t-lg hover:bg-orange-600 transition-colors"
                  >
                    <FaInstagram size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
