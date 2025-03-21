import Image from "next/image";
import React from "react";

const ServicePage = () => {
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
        <p className="text-white font-bold text-5xl z-50 absolute top-1/2 left-24">HR Consulting</p>
        <div className="absolute bottom-0 right-24 bg-[#0b182ae6]"></div>
    </div>
  );
};

export default ServicePage;
