"use client";
import React from "react";
import Image from "next/image";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerLinks, socialLinks } from "@/constants/options";
import { IoMail } from "react-icons/io5";
import { FaPhoneSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/footer-bg.jpg"
        alt="footer-bg"
        width={1000}
        height={1000}
        className="w-full h-full object-cover object-center absolute"
      />
      <div className="w-full relative top-0 text-white">
        <div className="px-32">
          <div className="flex items-center h-28">
            <div className="bg-primary-200 px-8 h-full flex items-center justify-center">
              <IoMailOpenOutline className="text-6xl" />
            </div>
            <div className="flex items-center justify-between bg-primary-500 w-full h-full px-12">
              <p className="text-2xl mr-12">
                Subscribe Now to Get <br />
                latest Updates
              </p>
              <div className="border-b-[3px] pb-3 border-[#fff3] w-1/2 flex items-center">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent outline-none px-0.5 ring-none placeholder:text-white w-full"
                />
                <FaPaperPlane className="text-3xl mr-2" />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between gap-9 pt-20 py-14">
            <div className="w-2/3 flex flex-col gap-5">
              <Image
                src="/logo-dark.png"
                alt="footer-logo"
                width={125}
                height={125}
              />
              <p className="text-faded-500 leading-8">
                Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed
                do eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 p-1 rounded-full border-2 border-primary-200">
                  <Image
                    src={"/profile.png"}
                    alt="facebook"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="text-faded-500 font-light text-xs uppercase">
                    Need help?
                  </p>
                  <motion.div className="relative" whileHover={"hover"}>
                    <Link
                      href={"/"}
                      className="cursor-pointer text-white text-xl"
                    >
                      Book Appointment
                      <motion.div
                        className="absolute left-0 bottom-0 h-[1px] bg-white"
                        initial={{ width: 0 }}
                        variants={{
                          hover: {
                            width: "100%",
                            transition: { duration: 0.3 },
                          },
                        }}
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            {footerLinks.map((footer, index) => (
              <div className="w-1/3 flex flex-col gap-4" key={index}>
                <p className="text-2xl">{footer.title}</p>
                {footer.links.map((item, index) => (
                  <ul className="" key={index}>
                    {footer.title != "Contact" ? (
                      <li>
                        <motion.span className="relative" whileHover={"hover"}>
                          <Link
                            href={item.link}
                            className="cursor-pointer text-faded-500 relative hover:text-white"
                          >
                            {item.title}
                            <motion.span
                              className="absolute left-0 -bottom-1 h-[1px] bg-white"
                              initial={{ width: 0 }}
                              variants={{
                                hover: {
                                  width: "100%",
                                  transition: { duration: 0.3 },
                                },
                              }}
                            />
                          </Link>
                        </motion.span>
                      </li>
                    ) : (
                      <>
                        <li>
                          <p className=" text-faded-500">{item.title}</p>
                        </li>
                        <li className="mt-5 flex items-center gap-2.5">
                          <IoMail className="text-primary-200" />
                          <motion.span
                            className="relative"
                            whileHover={"hover"}
                          >
                            <Link
                              href="mailto:needhelp@company.com"
                              className="cursor-pointer text-white relative"
                            >
                              needhelp@company.com
                              <motion.span
                                className="absolute left-0 -bottom-1 h-[1px] bg-white"
                                initial={{ width: 0 }}
                                variants={{
                                  hover: {
                                    width: "100%",
                                    transition: { duration: 0.3 },
                                  },
                                }}
                              />
                            </Link>
                          </motion.span>
                        </li>
                        <li className="mt-2 flex items-center gap-2.5">
                          <FaPhoneSquare className="text-primary-200" />
                          <motion.span
                            className="relative"
                            whileHover={"hover"}
                          >
                            <Link
                              href="tel:+92(8800)-6930"
                              className="cursor-pointer text-white relative"
                            >
                              + 92 (8800) - 6930
                              <motion.span
                                className="absolute left-0 -bottom-1 h-[1px] bg-white"
                                initial={{ width: 0 }}
                                variants={{
                                  hover: {
                                    width: "100%",
                                    transition: { duration: 0.3 },
                                  },
                                }}
                              />
                            </Link>
                          </motion.span>
                        </li>
                      </>
                    )}
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 py-8">
          <ul className="flex items-center justify-center gap-3">
            {socialLinks.map((social, index) => (
              <li
                className="bg-[#12243c] rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-primary-200 transition-colors duration-500 cursor-pointer"
                key={index}
              >
                <Link href={social.link} target="_blank">
                  <social.icon />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[#7e8c9e] text-center font-light">&copy; Copyright Hiredots HTML Template.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
