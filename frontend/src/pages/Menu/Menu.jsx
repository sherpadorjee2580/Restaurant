import { useState } from "react";
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
      <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-orange-500 flex items-center gap-2">
          <FaUtensils /> Restoran
        </h1>

        <ul className="hidden lg:flex gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Service", path: "/service" },
            { name: "Menu", path: "/menu" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li
              key={item.name}
              className="hover:text-orange-400 cursor-pointer"
            >
              <Link to={item.path} className="block w-full h-full">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="bg-orange-500 px-4 py-2 rounded text-sm font-medium">
          Book A Table
        </button>

        <FaBars className="lg:hidden text-xl" />
      </nav>

      {/* Hero */}
      <section className="bg-gray-900 text-white text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Food Menu</h1>
        <p className="text-sm uppercase tracking-widest text-gray-300">
          Home / Pages / Menu
        </p>
      </section>

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
      <footer className="bg-gray-900 text-gray-300 pt-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-orange-500 mb-4">Company</h4>
            {["About Us", "Contact Us", "Reservation", "Privacy Policy"].map(
              (item) => (
                <p key={item} className="hover:text-white cursor-pointer">
                  {item}
                </p>
              ),
            )}
          </div>

          <div>
            <h4 className="text-orange-500 mb-4">Contact</h4>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> New York, USA
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +012 345 67890
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
            </p>

            <div className="flex gap-3 mt-4">
              <FaTwitter />
              <FaFacebookF />
              <FaYoutube />
              <FaLinkedinIn />
            </div>
          </div>

          <div>
            <h4 className="text-orange-500 mb-4">Opening</h4>
            <p>Mon–Sat: 09AM – 09PM</p>
            <p>Sunday: 10AM – 08PM</p>
          </div>

          <div>
            <h4 className="text-orange-500 mb-4">Newsletter</h4>
            <input
              className="w-full px-4 py-3 rounded text-black"
              placeholder="Your email"
            />
            <button className="bg-orange-500 w-full py-2 mt-2 rounded">
              Sign Up
            </button>
          </div>
        </div>

        <div className="text-center py-6 text-sm border-t border-gray-700 mt-10">
          © Your Site Name. All Rights Reserved.
        </div>
      </footer>

      {/* Back to top */}
      <button className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full">
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default Menu;
