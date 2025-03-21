import React from "react";
import { consultingBlog } from "@/constants/options";
import Image from "next/image";

const ServiceBlog = () => {
  return (
    <>
      {consultingBlog.map((blog, index) => (
        <div className="" key={index}>
          <Image
            src={blog.image}
            alt="blog-img"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
          <p className="mt-7 text-3xl font-semibold">{blog.title}</p>
          <p className="text-faded-500 pr-1.5 mt-6 leading-8">
            {blog.description}
          </p>
          <p className="text-primary-200 font-semibold text-2xl mt-7">
            {blog.slug}
          </p>
          <p className="text-faded-500 pr-1.5 leading-8 mt-9">{blog.content}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceBlog;
