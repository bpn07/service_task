import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Hr Consulting",
      link: "/hrconsulting",
    },
  ];

const ServiceBanner = () => {
  return (
    <div className="relative">
    <div className="w-full h-96">
      <Image
        src="/service-banner.jpg"
        alt="service-bg"
        width={1000}
        height={1000}
        className="w-full h-full object-cover object-left"
      />
    </div>
    <p className="text-white font-bold text-5xl z-50 absolute top-1/2 left-24">
      HR Consulting
    </p>
    <ul className="absolute bottom-0 right-24 py-4 px-10 bg-[#0b182ae6] css-servicelinks flex items-center">
      {links.map((link, index) => (
        <li key={index} className="flex items-center text-white ">
          <motion.div className="relative" whileHover={"hover"}>
            <Link
              href={link.link}
              className="cursor-pointer hover:text-primary-200"
            >
              {link.title}
              <motion.div
                className="absolute left-0 bottom-0 h-[1px] bg-primary-200"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: "100%", transition: { duration: 0.3 } },
                }}
              />
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ServiceBanner