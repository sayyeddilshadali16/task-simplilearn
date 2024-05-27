import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import SmallSlider from "./SmallSlider";

const Resource = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="flex items-center justify-center flex-col padding-container max-container w-full my-10">
        <p className="uppercase text-4xl font-bold m-auto text-center">
          Resources
        </p>
        <p className="text-center regular-16 text-gray-30 my-5">
          Explore insights, tips, and articles written by experts in a range of
          professional domains.
        </p>
        <div className="h-2 w-40 bg-yellow-600 rounded"></div>
      </div>

      <div className="flexCenter max-container relative mb-20 rounded-5xl overflow-hidden">
        <SmallSlider />
      </div>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="cardContainer flex items-center justify-center gap-10 flex-wrap w-full ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </section>
  );
};

export default Resource;
