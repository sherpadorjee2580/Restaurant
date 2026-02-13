import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Imported for navigation
// Swapped Lucide for React Icons
import {
  MdShield,
  MdPersonOutline,
  MdLockOutline,
  MdArrowForward,
} from "react-icons/md";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
export function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      console.log("Admin Login Attempt:", {
        username,
        password,
      });

      setIsLoading(false);
      setUsername("");
      setPassword("");

      // Navigate to the admin dashboard/root after success
      navigate("/"); // Change this path to your actual admin route
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FEA116] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading subtitle="Login" title="Admin Access" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mt-8"
        >
          <div className="bg-[#1E293B] p-8 md:p-10 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FEA116] to-transparent opacity-80"></div>

            <div className="flex flex-col items-center mb-8">
              <div className="bg-[#FEA116]/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-[#FEA116]/20">
                <MdShield className="w-10 h-10 text-[#FEA116]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">
                Welcome Back
              </h3>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Enter your credentials to manage the restaurant
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">
                  Username
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-[#0F172A] border border-gray-700 rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:border-[#FEA116] focus:ring-1 focus:ring-[#FEA116] transition-all"
                    placeholder="admin"
                  />
                  <MdPersonOutline className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-[#FEA116] transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0F172A] border border-gray-700 rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:border-[#FEA116] focus:ring-1 focus:ring-[#FEA116] transition-all"
                    placeholder="••••••••"
                  />
                  <MdLockOutline className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-[#FEA116] transition-colors" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FEA116] hover:bg-[#e08e13] text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 transform hover:-translate-y-0.5"
              >
                {isLoading ? (
                  <span className="animate-pulse">Verifying...</span>
                ) : (
                  <>
                    Sign In
                    <MdArrowForward className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
