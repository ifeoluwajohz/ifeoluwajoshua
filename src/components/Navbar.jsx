import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GitHubLogoIcon,
  LockClosedIcon,
  RowsIcon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="relative">
        <div className="flex justify-between my-8 md:mb-16 mb-24 items-center text-center">
          <a href="https://github.com/ifeoluwajohz">
            <GitHubLogoIcon className="w-6 h-6" />
          </a>
          <div className="hidden md:flex gap-5 justify-center items-center">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/about">
              <p>About Me</p>
            </Link>
            <Link to="/projects">
              <p>Projects</p>
            </Link>
            <Link to="/experiences">
              <p>Experiences</p>
            </Link>
          </div>
          <div className="hidden md:block">
            <Button className="font-josefin cursor-pointer">Connect With Me</Button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleMenu} className=" focus:border">
              {isOpen ? (
                <LockClosedIcon className="w-6 text-gray-50" />
              ) : (
                <RowsIcon className="w-6 text-gray-50" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`lg:hidden transition-all duration-700 ease-in-out bg-gray-800 text-blck absolute top-20 left-0 right-0 z-50 shadow-md ${
            isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <Link
            href="/"
            className="block transition-all duration-1000 px-1 md:px-4 py-2 mx-6 md:mx-8 font-medium hover:text-gray-900 hover:bg-gray-100 focus:underline mt-4"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="block transition-all duration-1000 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 hover:text-gray-900 hover:bg-gray-100 focus:underline"
          >
            About me
          </Link>
          <Link
            href="/faq"
            className="block transition-all duration-1000 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 hover:text-gray-900 hover:bg-gray-100 focus:underline"
          >
            Seminars
          </Link>
          <Link
            href="/service"
            className="block transition-all duration-1000 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 hover:text-gray-900 hover:bg-gray-100 focus:underline"
          >
            Confrences
          </Link>
          <Link
            href="/previous-project"
            className="block transition-all duration-1000 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 hover:text-gray-900 hover:bg-gray-100 focus:underline"
          >
            Services
          </Link>
          <Link
            href="/previous-project"
            className="block transition-all duration-1000 px-1 md:px-4 mx-6 my-2 md:mx-8 font-medium py-2 text-white hover:text-gray-100 text-center bg-pink-700 hover:bg-pink-600 focus:underline"
          >
            Services
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
