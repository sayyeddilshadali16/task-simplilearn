import React, { useEffect, useRef } from 'react';

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const scrollAmountRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const slide = () => {
      scrollAmountRef.current += slider.clientWidth / 5; // Adjust the division value based on how much you want to scroll each time
      if (scrollAmountRef.current >= slider.scrollWidth) {
        scrollAmountRef.current = 0;
      }
      slider.scrollTo({
        left: scrollAmountRef.current,
        behavior: 'smooth',
      });
    };

    const intervalId = setInterval(slide, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex transition-transform duration-1000 whitespace-nowrap"
        ref={sliderRef}
      >
        <img src="https://www.simplilearn.com/ice9/labels/Caltech_Home.svg?dpr=1.0&q=70&w=320" alt="AWS" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/iitRoorkee_Home.svg?dpr=1.0&q=70&w=320" alt="IBM" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/IITG_Home.svg?w=300&dpr=1.3" alt="Microsoft" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/iitmadras_Home.svg?dpr=1.0&q=70&w=160" alt="EICT" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/iiitb_Home.svg?dpr=1.0&q=70&w=100" alt="SP Jain" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/Miscrosoft_Home.svg?dpr=1.0&q=70&w=240" alt="Purdue" className="w-32 h-auto inline-block mr-4" />

        <img src="https://www.simplilearn.com/ice9/labels/Caltech_Home.svg?dpr=1.0&q=70&w=320" alt="AWS" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/iitRoorkee_Home.svg?dpr=1.0&q=70&w=320" alt="IBM" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/IITG_Home.svg?w=300&dpr=1.3" alt="Microsoft" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/iitmadras_Home.svg?dpr=1.0&q=70&w=160" alt="EICT" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/iiitb_Home.svg?dpr=1.0&q=70&w=100" alt="SP Jain" className="w-32 h-auto inline-block mr-4" />
        <img src="https://www.simplilearn.com/ice9/labels/Miscrosoft_Home.svg?dpr=1.0&q=70&w=240" alt="Purdue" className="w-32 h-auto inline-block mr-4" />
      </div>
    </div>
  );
};

export default ImageSlider;
