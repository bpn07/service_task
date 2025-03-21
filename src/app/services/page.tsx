"use client";
import React from "react";

import ServiceBanner from "@/components/Service/ServiceBanner";
import ServiceBlog from "@/components/Service/ServiceBlog";
import { whyChoose } from "@/constants/options";
import ServiceBenefits from "@/components/Service/ServiceBenefits";


const ServicePage = () => {
  return (
    <div className="bg-gray-100">
      <ServiceBanner />
      <div className="py-[120px] px-32">
        <div className="flex justify-center gap-8">
          <div className="w-4/12 h-fit bg-gray-400"></div>
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
            <ServiceBenefits/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
