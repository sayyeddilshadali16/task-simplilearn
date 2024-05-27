import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import CourseCard from "./CourseCard";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsCardVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCardVisible(false);
  };

  return (
    <div>
      <header className="w-full flex items-center justify-center py-2 bg-gray-200">
        <ul className="hidden lg:flex h-full gap-12 ">
          <li className="hover:text-blue-500">
            <Link to="/resource">Resource</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/business">Simplilearn for Business</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/instructor">Become an Instructor</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/hire">Hire From Us</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/review">Reviews</Link>
          </li>
        </ul>
      </header>
      <nav className="flex items-center justify-between max-container padding-container relative z-30 py-5">
        <Link to="/">
          <img
            className="h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Simplilearn_logo.png"
            alt="logo"
          />
        </Link>

        <div
          className="relative hidden lg:flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            type="button"
            title="All Courses"
            icon="https://img.icons8.com/?size=100&id=OBMhWEebAWe9&format=png&color=ffffff"
            variant="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
            className="relative"
          />
          {isCardVisible && <CourseCard />}
        </div>

        <div className="hidden lg:flex">
          <form className="w-[350px] mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block outline-none w-full py-3 px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="What do you want to learn?"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-1 bottom-1 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="hidden lg:flex">
          <Link to="/loginform">
            <Button
              type="button"
              title="Login"
              icon="https://camptraveler.com/user.svg"
              variant="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
            />
          </Link>
        </div>

        <img
          src="https://camptraveler.com/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={handleMenuToggle}
        />
      </nav>

      <div className={`lg:hidden h-screen ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4 mt-4">
          <li className="hover:text-blue-500">
            <Link to="/resource" onClick={handleMenuToggle}>
              Resource
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/business" onClick={handleMenuToggle}>
              Simplilearn for Business
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/instructor" onClick={handleMenuToggle}>
              Become an Instructor
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/hire" onClick={handleMenuToggle}>
              Hire From Us
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/review" onClick={handleMenuToggle}>
              Reviews
            </Link>
          </li>
        </ul>
        <div className="flex justify-center mt-4">
          <Button
            type="button"
            title="All Courses"
            icon="https://img.icons8.com/?size=100&id=OBMhWEebAWe9&format=png&color=ffffff"
            variant="bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          />
        </div>
        <div className="flex justify-center mt-4">
          <Button
            type="button"
            title="Login"
            icon="https://camptraveler.com/user.svg"
            variant="bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
