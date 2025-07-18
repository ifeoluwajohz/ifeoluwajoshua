import { useState } from "react";
import features from "../data/data.json";
import { Button } from "@radix-ui/themes";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Projects = () => {
  const infos = features.data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % infos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + infos.length) % infos.length);
  };

  const currentProject = infos[currentIndex];

  return (
    <div className="bg-white text-purple-800 md:p-20 py-20 md:mx-20 mx-8">
      <section className="projects flex flex-col items-start justify-center gap-5">
        <h3 className="md:text-6xl text-4xl font-bold">Case Study</h3>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ipsum
          ratione incidunt, veritatis, beatae ullam enim, totam minus labore
          accusamus fugiat error suscipit nihil nam cupiditate dolorem quasi
          illo explicabo?
        </p>

        {/* Carousel container */}
        <div className="relative w-full h-80 overflow-hidden">
          <img
            src={currentProject.imgurl}
            alt={currentProject.title}
            className="w-full h-full object-cover rounded-br-3xl absolute top-0 left-0 shadow-md transition duration-500"
          />

          <div className="absolute bottom-0 left-0 w-full bg-purple-600/80 text-white md:p-5 p-2 py-5 rounded-br-3xl flex md:justify-around justify-between items-center gap-2">
            <div className="flex flex-col items-center">
              <p className="text-sm">{`${currentIndex + 1} of ${infos.length}`}</p>
              <div className="flex gap-1">
                <ArrowLeftIcon
                  className="w-6 cursor-pointer"
                  onClick={handlePrev}
                />
                <ArrowRightIcon
                  className="w-6 cursor-pointer"
                  onClick={handleNext}
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-sm">Name:</h4>
              <p className="text-xs">{currentProject.title}</p>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-sm">Category:</h4>
              <p className="text-xs">{currentProject.category || "N/A"}</p>
            </div>

            <Button className="font-normal bg-white text-black font-josefin cursor-pointer">
              <a href={`${currentProject.link}`}>View Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
