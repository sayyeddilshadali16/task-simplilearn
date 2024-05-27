import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image:
      "https://www.simplilearn.com/ice9/reviews_images/_1567657440.jpeg?w=100&dpr=1.3",
    name: "Sameer Marathe",
    position: "Project Manager, Atos",
    feedback:
      "The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!",
  },
  {
    image:
      "https://www.simplilearn.com/ice9/testimonial_images/127357.jpeg?w=100&dpr=1.3",
    name: "Rajendra Prabhu Sivasamy",
    position: "Principal Software Engineer, TESCO",
    feedback:
      "Simplilearn's Certified Scrum Master course helped me rise in my career from Principle Software Engineer to Senior Manager. Thank you.",
  },
  {
    image:
      "https://www.simplilearn.com/ice9/reviews_images/_1567657440.jpeg?w=100&dpr=1.3",
    name: "John Doe",
    position: "Software Engineer, XYZ",
    feedback: "The course was very helpful in advancing my career.",
  },
  {
    image:
      "https://www.simplilearn.com/ice9/testimonial_images/127357.jpeg?w=100&dpr=1.3",
    name: "Jane Smith",
    position: "Senior Developer, ABC",
    feedback:
      "I learned a lot and was able to apply the knowledge immediately.",
  },
  {
    image:
      "https://www.simplilearn.com/ice9/reviews_images/_1567657440.jpeg?w=100&dpr=1.3",
    name: "Sameer Marathe",
    position: "Project Manager, Atos",
    feedback:
      "The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!",
  },
  {
    image:
      "https://www.simplilearn.com/ice9/testimonial_images/127357.jpeg?w=100&dpr=1.3",
    name: "Rajendra Prabhu Sivasamy",
    position: "Principal Software Engineer, TESCO",
    feedback:
      "Simplilearn's Certified Scrum Master course helped me rise in my career from Principle Software Engineer to Senior Manager. Thank you.",
  },
];

const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative container mx-auto px-4 overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center p-4 bg-white rounded-lg"
          >
            <div className="w-full flex justify-center items-center p-4 bg-white rounded-lg shadow-lg">
              <div className="w-full">
                <div className="flex flex-col items-center md:flex-row md:items-start">
                  <div className="w-full md:w-1/4 p-4 flex justify-center">
                    <img
                      src={slide.image}
                      alt="Slider Image"
                      className="rounded-full w-24 h-24 md:w-32 md:h-32"
                    />
                  </div>
                  <div className="w-full md:w-3/4 p-4">
                    <h3 className="text-xl font-bold mb-2">{slide.name}</h3>
                    <h4 className="text-md font-semibold mb-2">
                      {slide.position}
                    </h4>
                    <p className="text-sm">{slide.feedback}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center pb-4 px-4">
        <FaArrowLeft
          onClick={handlePrev}
          className="cursor-pointer text-blue-500"
          size={24}
        />
        <div className="w-[100px] mx-4 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-700"
            style={{
              width: `${((currentIndex + 1) * 100) / slides.length}%`,
            }}
          ></div>
        </div>
        <FaArrowRight
          onClick={handleNext}
          className="cursor-pointer text-blue-500"
          size={24}
        />
      </div>
    </div>
  );
};

export default MainSlider;
