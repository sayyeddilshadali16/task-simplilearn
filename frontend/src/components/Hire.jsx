import React from "react";
import Button from "./Button";

const Hire = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-64">Best Talent. Zero Cost. Easy Hiring.</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        SimpliRecruit is the one stop platform to hire job ready, industry trained talent for your organization. Hire the best candidates for Digital Marketing, Data Science, Full Stack Java Developer & more with one click & at zero cost.
        </p>
        <Button
            type="button"
            title="Start Hiring"
            icon=""
            variant="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg outline-none border-none mt-5"
          />
      </div>
      <div className="relative flex flex-1 items-start">
        <img
          className="rounded-3xl"
          src="https://simplilearn-reviews.gumlet.io/wp-content/uploads/2022/10/Group-76511.png?compress=true&quality=80&w=640&dpr=1.3"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hire;
