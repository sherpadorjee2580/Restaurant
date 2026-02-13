import React, { useState } from "react";
import { FaCoffee, FaHamburger, FaUtensils } from "react-icons/fa";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  // Sample data to keep the JSX clean
  const menuItems = [1, 2, 3, 4, 5, 6, 7, 8];

  const tabs = [
    {
      id: "tab-1",
      title: "Breakfast",
      sub: "Popular",
      icon: <FaCoffee className="text-3xl text-orange-500" />,
    },
    {
      id: "tab-2",
      title: "Launch",
      sub: "Special",
      icon: <FaHamburger className="text-3xl text-orange-500" />,
    },
    {
      id: "tab-3",
      title: "Dinner",
      sub: "Lovely",
      icon: <FaUtensils className="text-3xl text-orange-500" />,
    },
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h5
            className="relative inline-block text-orange-500 font-medium uppercase tracking-widest mb-2 
            before:content-[''] before:inline-block before:w-12 before:h-[2px] before:bg-orange-500 before:mr-3 before:align-middle
            after:content-[''] after:inline-block after:w-12 after:h-[2px] after:bg-orange-500 after:ml-3 after:align-middle"
          >
            Food Menu
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Most Popular Items
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="text-center">
          <ul className="flex flex-wrap justify-center border-b border-gray-200 mb-12 list-none">
            {tabs.map((tab) => (
              <li key={tab.id} className="mx-3">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center text-left pb-4 transition-all duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? "border-orange-500"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {tab.icon}
                  <div className="pl-3">
                    <small className="text-gray-500 block leading-tight">
                      {tab.sub}
                    </small>
                    <h6 className="font-bold text-gray-900 m-0">{tab.title}</h6>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {menuItems.map((item) => (
                <div key={item} className="flex items-center group">
                  <img
                    className="flex-shrink-0 w-20 h-20 rounded object-cover"
                    src={`menu-${item}.jpg`}
                    alt="Menu item"
                  />
                  <div className="w-full flex flex-col text-left pl-4">
                    <h5 className="flex justify-between border-b border-gray-200 pb-2 text-xl font-bold text-gray-900">
                      <span>Chicken Burger</span>
                      <span className="text-orange-500">$115</span>
                    </h5>
                    <small className="italic text-gray-500 mt-2">
                      Ipsum ipsum clita erat amet dolor justo diam
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
