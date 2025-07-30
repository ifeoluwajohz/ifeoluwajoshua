import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React, { useState } from "react";
import Skills from "../data/data.json";

import {
  LuPhoneCall,
  LuFacebook,
} from "react-icons/lu";

import emoji from "../assets/emoji.png";
import me from "../../public/Myself.png";
import Projects from "./Projects";
import { Link } from "react-router-dom";

const Home = () => {
  const skill = Skills.skill;
  console.log(skill);
  return (
    <div className="">
      <section
        id="About_me"
        className="About_me bg-black  text-white md:px-4 px-3 py-20 pt-32 "
      >
        <div className="flex flex-col items-center text-center justify-center w-full md:gap-5 gap-3 md:max-w-3xl mx-auto ">
          <img src={me} className="md:w-36 w-24 rounded-full" alt="" />
          <h1 className="font-medium flex items-center gap-2  text-lg">
            Hi I'm{" Joshua"},
            <span>
              <img className="w-3" src={emoji} alt="" />
            </span>
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl md:mb-3 mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            Creative{" "}
            <span className="relative inline-block md:px-4 px-2">
              {/* Background rotated */}
              <span
                className="absolute inset-0 bg-blue-800"
                style={{ transform: "rotate(04deg)" }}
              ></span>

              {/* Text on top */}
              <span className="relative text-white">Software</span>
            </span>{" "}
            developer building impactful digital experiences.
          </h1>

          <p className="text-xs md:text-sm font-normal text-gray-100 px-10">
            An Experienced Software Developer | Expert in Nextjs, React,
            TypeScript, Node.js, and Django | Specializing in Intuitive UI
            Design & Scalable Backend Systems .
          </p>
          <Button className="p-4 mt-5 md:mt-2 cursor-pointer hover:bg-blue-700 bg-blue-800 rounded-none font-josefin">
            Connect With Me
          </Button>
        </div>

        {/* Social Media Section */}
        <div className="flex mx-auto justify-center items-center gap-4 mt-5">
          <a href="https://x.com/ifeoluwajohz">
            <TwitterLogoIcon className="text-white w-5 h-5" />
          </a>
          <a href="https://github.com/ifeoluwajohz">
            <GitHubLogoIcon className="text-white w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ifeoluwajohz/">
            <LinkedInLogoIcon className="text-white w-5 h-5" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail-check-icon lucide-mail-check"
            >
              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="m16 19 2 2 4-4" />
            </svg>
          </a>
          <a href="tel:+8026144324">
            <LuPhoneCall />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100087388999705">
            <LuFacebook />
          </a>
        </div>
      </section>

      <section
        id="My_skill"
        className="My_skill bg-gray-100 text-black px-8 md:p-20 pb-12 py-20"
      >
        {/* Skills Section */}
        <div className="flex flex-col items-center gap-4 px-5 md:px-10">
          <h2 className="text-4xl font-bold text-blue-700 mb-2 bg-blue-200">
            Specializing In
          </h2>
          <p className="text-center text-sm md:text-base px-0 md:px-10">
            Delivering cutting-edge frontend, backend, and UI/UX solutions
            tailored to boost business growth and engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 my-5 ">
            {skill.map((item, index) => (
              <div
                key={index}
                className=" bg-blue-400  text-white p-10 rounded-br-3xl shadow-md h-80 items-start justify-between flex flex-col"
              >
                <h3 className="text-4xl font-semibold">{item.title}.</h3>
                <p className="text-white text-sm line-clamp-4">{item.description}</p>
                <Link to={`/skills/${item.id}`} className="w-full flex justify-end">
                <button className="underline">Learn More</button>
              </Link>
              </div>
            ))}
            
            
          </div>
        </div>
      </section>

      <section
        id="Projects"
        className="Projects bg-gray-50 dark:bg-black text-gray-800 dark:text-white md:px-20 px-6 py-16"
      >
        <Projects />
      </section>
      
    </div>
  );
};

export default Home;
