import React from "react";
import { motion } from "framer-motion";

export function SectionHeading({ subtitle, title, align = "center" }) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div
        className={`flex items-center gap-4 mb-2 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-[2px] w-12 bg-[#FEA116] inline-block"></span>

        <h5 className="text-[#FEA116] font-medium text-xl italic font-serif tracking-wide">
          {subtitle}
        </h5>

        <span className="h-[2px] w-12 bg-[#FEA116] inline-block"></span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
        {title}
      </h2>
    </div>
  );
}
