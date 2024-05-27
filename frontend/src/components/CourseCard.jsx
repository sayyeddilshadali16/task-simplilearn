import React from "react";

const CourseCard = () => {
  return (
    <div className="absolute top-full mt-2 w-[500px] bg-white shadow-lg rounded-lg p-4 z-40">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Simplilearn_logo.png"
          alt="course logo"
          className="w-12 h-12"
        />
        <div>
          <h3 className="text-lg font-semibold">Applied Generative AI Specialization</h3>
          <p className="text-sm text-gray-600">Purdue University</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">Cohort starts: 31 May, 2024 | 4 Months</p>
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Simplilearn_logo.png"
          alt="course logo"
          className="w-12 h-12"
        />
        <div>
          <h3 className="text-lg font-semibold">Professional certifiacte program in Generative AI and machine learning</h3>
          <p className="text-sm text-gray-600">Purdue University</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">Cohort starts: 31 May, 2024 | 4 Months</p>
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Simplilearn_logo.png"
          alt="course logo"
          className="w-12 h-12"
        />
        <div>
          <h3 className="text-lg font-semibold">Applied Generative AI Specialization</h3>
          <p className="text-sm text-gray-600">Purdue University</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">Cohort starts: 31 May, 2024 | 4 Months</p>
    </div>
  );
};

export default CourseCard;
