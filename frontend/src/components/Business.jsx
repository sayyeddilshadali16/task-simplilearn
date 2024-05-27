import React from "react";
import Button from "./Button";

const Business = () => {
  return (
    <section className="max-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-10 xl:flex-row">
      <div className="absolute z-20 flex flex-1 flex-col xl:w-1/2 lg:p-10 text-white p-5">
        <h1 className="font-bold lg:text-5xl text-2xl">
          Unlock innovation and growth through talent transformation
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          A world-class learning experience for your employees built on
          cutting-edge digital skills, custom pathways, industry-designed
          projects, and high-touch mentoring.
        </p>
        <div className="flex items-center justify-evenly">
          <Button
            type="button"
            title="See how it works"
            icon=""
            variant="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg outline-none border-none mt-5"
          />
          <Button
            type="button"
            title="Contact Sales"
            icon=""
            variant="text-blue-600 hover:bg-blue-700 hover:text-white bg-white border-2 border-blue-600 font-medium py-2 px-4 rounded-lg mt-5"
          />
        </div>
      </div>
      <div className="w-full h-[450px]">
        <img
          className="w-full h-full"
          src="https://plus.unsplash.com/premium_photo-1682284079705-dd1631f76f3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
        />
      </div>
    </section>
  );
};

export default Business;
