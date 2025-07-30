import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RippleLoader from "./components/RippleLoader";

import Home from "./components/Home";
import SkillInfo from "./pages/SkillInfo";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { LuAlignRight, LuSquareX } from "react-icons/lu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="font-josefin">
      <Router>
        <section className="Navbar bg-black fixed top-0 right-0 w-full z-50 text-white px-5 md:px-20">
          <div className="flex justify-between py-4 items-center text-center ">
            <a href="https://github.com/ifeoluwajohz">
              <GitHubLogoIcon className="w-6 h-6" />
            </a>
            <div className="hidden md:flex gap-5 justify-center items-center">
              <a href="/">
                <p>Home</p>
              </a>
              <a href="#About_me">
                <p>About Me</p>
              </a>
              <a href="#My_skill">
                <p>My Skills</p>
              </a>
              <a href="#Projects">
                <p>Projects</p>
              </a>
            </div>
            <div className="hidden md:block">
              <a
                href="https://x.com/ifeoluwajohz" >
              <Button className="font-josefin cursor-pointer">Hire Me</Button>
              </a>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleMenu} className=" focus:border">
                {isOpen ? (
                  <LuSquareX className="w-6 text-gray-50 focus:border-0" />
                ) : (
                  <LuAlignRight className="w-6 text-gray-50 focus:border-0" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`lg:hidden transition-all duration-700 ease-in-out bg-gray-950 text-blck absolute top-12 left-0 right-0 z-50 shadow-md ${
              isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <a
              href="/"
              className="block transition-all duration-500 px-1 md:px-4 py-2 mx-6 md:mx-8 font-medium hover:text-gray-900 hover:bg-gray-100 focus:underline mt-4"
            >
              Home
            </a>
            <a
              href="#About_me"
              className="block transition-all duration-500 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 hover:text-gray-900 hover:bg-gray-100 focus:underline"
            >
              About me
            </a>
            <a
              href="#My_skill"
              className="block transition-all duration-500 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 hover:text-gray-900 hover:bg-gray-100 focus:underline"
            >
              My Skills
            </a>
            <a
              href="#Projects"
              className="block transition-all duration-500 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 hover:text-gray-900 hover:bg-gray-100 focus:underline"
            >
              Projects
            </a>
            <a
              href="https://x.com/ifeoluwajohz"
              className="block transition-all duration-500 px-1 md:px-4 mx-6 my-1 md:mx-8 font-medium py-2 text-center bg-pink-500 hover:bg-pink-600 text-gray-50 focus:underline mb-4"
            >
              Hire Me
            </a>
          </div>
        </section>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/skills/:skillId" element={<SkillInfo />} />
          {/* Add other routes here as needed */}
        </Routes>
      </Router>
      <div className="">
        <p className="text-center text-xs bg-black text-white py-2 px-10">
          copyright &copy; Isreal Ifeoluwa Joshua 2023 -{" "}
          {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
