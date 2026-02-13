import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdOutlineCalendarMonth,
  MdOutlineAccessTime,
  MdOutlinePeople,
  MdOutlineMessage,
  MdCheckCircle,
} from "react-icons/md";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
export function BookTable() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [status, setStatus] = useState(null);

  const sendData = async () => {
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Alex",
        email: "alex@example.com",
      }),
    });
  };

  // Removed Type Annotation for .jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FEA116] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FEA116] rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1E293B]/50 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-white/5 shadow-xl"
          >
            <SectionHeading
              subtitle="Reservation"
              title="Book A Table Online"
              align="left"
            />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-[#0F172A] border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FEA116] focus:ring-1 focus:ring-[#FEA116] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-[#0F172A] border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FEA116] focus:ring-1 focus:ring-[#FEA116] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="datetime"
                    className="text-sm font-medium text-gray-300"
                  >
                    Date & Time
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      id="datetime"
                      required
                      className="w-full bg-[#0F172A] border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FEA116] focus:ring-1 focus:ring-[#FEA116] transition-all [color-scheme:dark]"
                    />
                    {/* React Icon: Calendar */}
                    <MdOutlineCalendarMonth className="absolute right-3 top-3 h-5 w-5 text-[#FEA116] pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="guests"
                    className="text-sm font-medium text-gray-300"
                  >
                    No. Of People
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      className="w-full bg-[#0F172A] border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FEA116] focus:ring-1 focus:ring-[#FEA116] transition-all appearance-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ People</option>
                    </select>
                    {/* React Icon: Users */}
                    <MdOutlinePeople className="absolute right-3 top-3 h-5 w-5 text-[#FEA116] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Special Request
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-[#0F172A] border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FEA116] focus:ring-1 focus:ring-[#FEA116] transition-all resize-none"
                    placeholder="Allergies, special occasion, etc."
                  ></textarea>
                  {/* React Icon: Message */}
                  <MdOutlineMessage className="absolute right-3 top-3 h-5 w-5 text-[#FEA116] pointer-events-none" />
                </div>
              </div>

              <button
                onClick={sendData}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FEA116] hover:bg-[#e08e13] text-white font-bold py-4 px-6 rounded-md uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Processing...</span>
                ) : isSuccess ? (
                  <>
                    <MdCheckCircle className="h-5 w-5" />
                    Booked Successfully
                  </>
                ) : (
                  "Book Now"
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] flex flex-col justify-center"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold text-[#FEA116] mb-6">
                Experience World-Class Dining
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Immerse yourself in an atmosphere of elegance and taste. Our
                chefs prepare every dish with passion, using only the finest
                ingredients to ensure an unforgettable culinary journey.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1E293B] p-6 rounded-lg border-l-4 border-[#FEA116]">
                  <h4 className="text-xl font-bold text-white mb-2 font-serif">
                    Fresh Ingredients
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Locally sourced, organic produce for the best flavor.
                  </p>
                </div>
                <div className="bg-[#1E293B] p-6 rounded-lg border-l-4 border-[#FEA116]">
                  <h4 className="text-xl font-bold text-white mb-2 font-serif">
                    Expert Chefs
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Award-winning culinary masters at your service.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FEA116]/10 to-transparent rounded-2xl -z-10 transform rotate-3 scale-105 border border-white/5"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
