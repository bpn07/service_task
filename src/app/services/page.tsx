"use client";
import React from "react";
import Image from "next/image";
import ServiceBanner from "@/components/Service/ServiceBanner";
import ServiceBlog from "@/components/Service/ServiceBlog";
import ServiceBenefits from "@/components/Service/ServiceBenefits";
import { motion } from "framer-motion";
import { serviceList, whyChoose } from "@/constants/options";
import { IoMdArrowDropright } from "react-icons/io";
import { PiFilePdfFill } from "react-icons/pi";

const ServicePage = () => {
  return (
    <div className="bg-gray-50">
      <ServiceBanner />
      <div className="py-[120px] px-32">
        <div className="flex justify-center gap-8">
          <div className="w-4/12 h-fit bg-[#f0f0f3f9] p-5">
            <ul className="flex flex-col gap-2.5">
              {serviceList.map((list, index) => (
                <motion.li
                  whileHover="hover"
                  className="relative flex items-center justify-between bg-white py-3 px-7 hover:text-white transition-colors duration-700 cursor-pointer"
                  key={index}
                >
                  <span className="z-30 relative">{list}</span>
                  <IoMdArrowDropright className="z-30" />
                  <motion.span
                    className="absolute left-0 top-0  h-full bg-primary-200 z-20 "
                    initial={{ width: 0 }}
                    variants={{
                      hover: {
                        width: "100%",
                        transition: {
                          duration: 0.3,
                        },
                      },
                    }}
                  />
                </motion.li>
              ))}
            </ul>
            <div className="w-full h-64 overflow-hidden relative mt-4">
              <Image
                src="/service-list.png"
                alt="service-banner-2"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 p-11 pr-12 w-full h-full bg-[#0b182a]/30">
                <p className="text-2xl text-white font-semibold mb-11">
                  Recruitment <br /> Solutions for all <br /> Businesses
                </p>
                <motion.button
                  whileHover="hover"
                  className="relative bg-primary-200 text-xs  text-white uppercase font-light py-2.5 px-6 overflow-hidden"
                >
                  <span className="z-20 relative">Contact</span>
                  <motion.span
                    className="absolute -top-[1px] -left-3 bg-primary-500 w-full h-full z-10 transform skew-x-[30deg]"
                    initial={{ width: 0 }}
                    variants={{
                      hover: {
                        width: "125%",
                        transition: {
                          duration: 0.3,
                        },
                      },
                    }}
                  />
                </motion.button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 py-5 px-7 bg-primary-500 mt-4 text-white">
              <div className=" bg-white w-12 h-12 rounded-full flex items-center justify-center">
                <PiFilePdfFill className="text-primary-200 text-3xl" />
              </div>
              <div className="flex-1">
                <p>Project Agreement Form</p>
                <p className="text-xs">3.9KB</p>
              </div>
            </div>
          </div>
          <div className="w-8/12">
            <ServiceBlog />
            <>
              <p className="my-10 text-3xl font-medium">Why Choose ? </p>
              <div className="grid grid-cols-3 divide-x-2 bg-white rounded-md drop-shadow-md">
                {whyChoose.map((item, index) => (
                  <div
                    className="col-span-1 flex flex-col gap-6 items-center p-10"
                    key={index}
                  >
                    <div
                      className="text-xl font-semibold text-center"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <item.icon className="text-5xl text-primary-200" />
                  </div>
                ))}
              </div>
            </>
            <ServiceBenefits />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
