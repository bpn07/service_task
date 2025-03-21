"use client";
import React from "react";
import { headerOptions, navLinks, socialLinks } from "@/constants/options";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <header className="w-full sticky -top-14 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between bg-white  py-3.5 w-[70%] m-auto">
        <div className="w-1/2 flex items-center gap-5 text-sm">
          {headerOptions.map((option, index) => (
            <div
              className="flex items-center gap-2 text-sm css-funderlined"
              key={index}
            >
              <option.icon className="text-primary-200" />
              <motion.div className="relative" whileHover={"hover"}>
                <Link
                  href={
                    option.type === "email"
                      ? `mailto:${option.link}`
                      : option.link
                  }
                  className="cursor-pointer text-faded-500"
                >
                  {option.link}
                  <motion.div
                    className="absolute left-0 bottom-0 h-[1px] bg-faded-500"
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
        <div className="w-[30%] flex items-center justify-between text-sm text-faded-500">
          <ul className="flex itens-center gap-1 css-headerlist">
            <li>
              <Link href="/" className="hover:text-primary-200 cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-200 cursor-pointer">
                Help
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-200 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <li
                className="bg-[#f0f3f9] rounded-full w-6 h-6 flex items-center justify-center text-faded-500 hover:bg-primary-200 hover:text-white transition-colors duration-500"
                key={index}
              >
                <Link href={social.link} target="_blank">
                  <social.icon className="" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-full ">
        <nav className="w-full relative flex items-end mr-[-45px]">
          <Link href={"/"} className="pl-14 pb-3 mr-14">
            <Image src="/logo.png" alt="logo" width={125} height={100} />
          </Link>
          <button className="bg-primary-500 text-white px-6 py-2 h-[70px]">
            <IoIosSearch className="text-3xl"/>
          </button>
          <ul className="w-full flex items-center ml-2.5 gap-14 bg-faded-200 px-12 h-[70px]">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className="py-5 text-base font-medium text-faded-500 hover:text-primary-500"
              >
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-[18%] bg-primary-200 text-white px-6 py-2 h-[120px] flex items-center justify-center uppercase">
          <Link href={"/login"} className="font-bold text-sm">
            Book <br /> appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
