import React from 'react';

const Card = () => {
  return (
    <div className="w-[300px] h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <img className="w-full" src="https://images.unsplash.com/photo-1516042438821-0abd7a73c4b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Caltech" />
      <div className="px-6 py-4">
        <div className="flex items-center mb-4">
          <img className="h-10" src="https://www.simplilearn.com/ice9/labels/Caltech_Home.svg?dpr=1.0&q=70&w=320" alt="Caltech Logo" />
        </div>
        <div className="font-bold text-md mb-2">Caltech Post Graduate Program in AI and Machine Learning</div>
        <ul className="text-gray-700 text-base mb-4">
          <li className="flex items-center mb-1">
            <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/></svg>
            Earn a program completion certificate from Caltech CTME
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/></svg>
            Earn a Caltech CTME Circle Membership
          </li>
        </ul>
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM4 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM5 9a1 1 0 000 2h10a1 1 0 100-2H5zM4 14a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"/></svg>
            11 months
          </div>
          <div>
            <span>Cohort Starts <span className="font-bold">28th May' 24</span></span>
            <a href="#" className="text-blue-500 ml-2">Know More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
