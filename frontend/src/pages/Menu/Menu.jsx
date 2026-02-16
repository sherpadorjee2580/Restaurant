import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaBars,
  FaCoffee,
  FaHamburger,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const menuItems = Array(8).fill({
    name: "Chicken Burger",
    price: "$115",
    desc: "Ipsum ipsum clita erat amet dolor justo diam",
  });

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="py-24 bg-gray-900 text-center">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 animate-pulse">
          Menu
        </h1>
        <nav className="flex justify-center uppercase text-sm font-medium tracking-widest">
          <ol className="flex space-x-2 text-white">
            <li>
              <a href="/" className="text-orange-500">
                Home
              </a>
            </li>
            <li className="before:content-['/'] before:mr-2">Pages</li>
            <li className="text-gray-400 before:content-['/'] before:mr-2">
              Menu
            </li>
          </ol>
        </nav>
      </div>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h5 className="text-orange-500 uppercase tracking-wider">
            Food Menu
          </h5>
          <h2 className="text-3xl font-bold mt-2">Most Popular Items</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-10 border-b mb-12">
          <button
            onClick={() => setActiveTab("breakfast")}
            className={`flex items-center gap-3 pb-3 ${
              activeTab === "breakfast"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
          >
            <FaCoffee size={28} />
            <div className="text-left">
              <small>Popular</small>
              <p className="font-semibold">Breakfast</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("lunch")}
            className={`flex items-center gap-3 pb-3 ${
              activeTab === "lunch"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
          >
            <FaHamburger size={28} />
            <div className="text-left">
              <small>Special</small>
              <p className="font-semibold">Lunch</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("dinner")}
            className={`flex items-center gap-3 pb-3 ${
              activeTab === "dinner"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
          >
            <FaUtensils size={28} />
            <div className="text-left">
              <small>Lovely</small>
              <p className="font-semibold">Dinner</p>
            </div>
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={`menu-${index + 1}.jpg`}
                alt={item.name}
                className="w-20 h-20 rounded object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between border-b pb-2">
                  <h4 className="font-semibold">{item.name}</h4>
                  <span className="text-orange-500 font-bold">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm italic text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to top */}
      <button className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full">
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default Menu;
