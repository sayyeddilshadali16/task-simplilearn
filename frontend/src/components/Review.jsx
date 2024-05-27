import React from "react";
import Button from "./Button";

const Review = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-5xl font-bold">
        Simplilearn Reviews: Your Hub for Impactful Insights and Authentic Experiences!
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Welcome to Simplilearn Reviews, dive into a treasure trove of reviews spanning courses, instructors, and learning outcomes. From success stories to candid feedback, empower your decision-making and embark on your learning journey with confidence.
        </p>
        <Button
          type="button"
          title="View Success Stories"
          icon=""
          variant="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg outline-none border-none mt-5"
        />
      </div>
      <div className="relative flex flex-1 items-start">
        <img
          className="rounded-3xl"
          src="https://images.unsplash.com/photo-1553893304-448dd3e66fd1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </section>
  );
};

export default Review;
