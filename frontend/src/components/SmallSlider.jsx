import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://www.simplilearn.com/ice9/webinar_thum_image/27_May_Gemini.jpg",
    title: "Transform into a Gemini Guru for Google Workspace",
    subtitle: "In Just 60 Minutes!",
    date: "27 May, Monday",
    time: "9 PM IST",
    buttonText: "Register Now",
  },
  {
    image:
      "https://www.simplilearn.com/ice9/webinar_thum_image/27_May_Gemini.jpg",
    title: "Transform into a Gemini Guru for Google Workspace",
    subtitle: "In Just 60 Minutes!",
    date: "27 May, Monday",
    time: "9 PM IST",
    buttonText: "Register Now",
  },
  {
    image:
      "https://www.simplilearn.com/ice9/webinar_thum_image/27_May_Gemini.jpg",
    title: "Transform into a Gemini Guru for Google Workspace",
    subtitle: "In Just 60 Minutes!",
    date: "27 May, Monday",
    time: "9 PM IST",
    buttonText: "Register Now",
  },
  {
    image:
      "https://www.simplilearn.com/ice9/webinar_thum_image/27_May_Gemini.jpg",
    title: "Transform into a Gemini Guru for Google Workspace",
    subtitle: "In Just 60 Minutes!",
    date: "27 May, Monday",
    time: "9 PM IST",
    buttonText: "Register Now",
  },
];

const SmallSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto px-4 sm:px-8 overflow-hidden max-w-[375px] xl:max-w-full">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center p-4 bg-white rounded-lg shadow-lg"
          >
            <div className="w-full">
              <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="w-full md:w-1/2 p-4">
                  <img
                    src={slide.image}
                    alt="Slider Image"
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg mb-2 sm:mb-4">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm mb-1 sm:mb-2">
                    <span className="font-semibold">Date:</span> {slide.date}
                  </p>
                  <p className="text-sm mb-1 sm:mb-2">
                    <span className="font-semibold">Time:</span> {slide.time}
                  </p>
                  <button className="bg-blue-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded mt-2 sm:mt-4">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SmallSlider;
