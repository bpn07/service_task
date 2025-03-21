"use client";
import { headerOptions } from "@/constants/options";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center bg-white gap-5 py-3.5">
        <div>
          {headerOptions.map((option, index) => (
            <div
              className="flex items-center gap-2 text-sm css-funderlined"
              key={index}
            >
              <option.icon className="text-[#00cde5]" />
              <motion.div className="relative" whileHover={"hover"}>
                <Link
                  href={
                    option.type === "email"
                      ? `mailto:${option.link}`
                      : option.link
                  }
                  className="cursor-pointer text-gray-700 font-thin"
                >
                  {option.link}
                  <motion.div
                    className="absolute left-0 bottom-0 h-[1px] bg-gray-700"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: "100%", transition: { duration: 0.3 } },
                    }}
                  />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
