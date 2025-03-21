import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { serviceBenefits } from "@/constants/options";

const ServiceBenefits = () => {
  return (
    <div className="w-full flex items-center mt-14 gap-7">
    <div className="w-96 h-auto rounded-full overflow-hidden ">
      <Image
        src="/profile.png"
        alt="service-banner-2"
        width={1000}
        height={1000}
        className="object-cover"
      />
    </div>
    <div>
      <p className="text-3xl font-bold">Our Benefits</p>
      <p className="text-xl text-faded-500 font-light mt-6">
        Get the Best Digital Marketing from the Pitoon Agency of
        Exellence
      </p>
      <ul className="mt-8 flex flex-col gap-2">
        {serviceBenefits.map((item, index) => (
          <li className="flex items-center gap-2 text-faded-500 font-light" key={index}>
            <FaCheckCircle className="text-primary-200"/>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default ServiceBenefits