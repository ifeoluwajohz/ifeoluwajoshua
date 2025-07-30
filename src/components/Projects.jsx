import { useState } from "react";
import features from "../data/data.json";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
 // Assuming SkillInfo is a page component for detailed view

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
    <div className="bg-gray-50 dark:bg-black text-gray-800 dark:text-white md:px-20 px-6 py-16">
      <section className="flex flex-col items-center justify-center gap-6">
        {/* Gradient Title */}
        <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">
          Featured Projects
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl text-sm md:text-base">
          Explore some of our recent case studies showcasing modern design and
          performance-driven development.
        </p>

        {/* Carousel */}
        <div className="relative w-full max-w-5xl overflow-hidden rounded-none shadow-lg">
          <img
            src={currentProject.imgurl}
            alt={currentProject.title}
            className="w-full h-80 md:h-[28rem] object-cover transition-all duration-500"
          />

          {/* Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left controls */}
            <div className="flex items-center gap-4">
              <ArrowLeftIcon
                onClick={handlePrev}
                className="w-6 h-6 cursor-pointer text-white hover:text-pink-400 transition"
              />
              <span className="text-white text-sm">{`${currentIndex + 1} / ${
                infos.length
              }`}</span>
              <ArrowRightIcon
                onClick={handleNext}
                className="w-6 h-6 cursor-pointer text-white hover:text-pink-400 transition"
              />
            </div>

            {/* Project info */}
            <div className="text-white text-sm md:text-base">
              <h4 className="font-semibold">{currentProject.title}</h4>
              <p className="opacity-80">{currentProject.category || "N/A"}</p>
            </div>

            {/* CTA */}
            <Button
              // asChild
              className="bg-white text-black hover:bg-pink-500 hover:text-white transition font-medium"
            >
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
