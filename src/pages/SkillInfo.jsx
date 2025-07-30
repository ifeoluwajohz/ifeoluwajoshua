import React from "react";
import { useParams } from "react-router-dom";
import Skills from "../data/data.json";

// Optional: react-icons (if icons are from react-icons)
import * as DiIcons from "react-icons/di";

const SkillInfo = () => {
  const { skillId } = useParams(); // ✅ must match route param name
  const skillData = Skills.skill.find((skill) => skill.id === Number(skillId));

  if (!skillData) {
    return (
      <div className="text-center text-red-500 mt-10">
        Skill not found (ID: {skillId})
      </div>
    );
  }

  return (
    <div className="bg-white py-16 md:px-28 px-5 text-gray-800 my-20">
      <div className="flex flex-col items-start md:items-center text-left md:text-center gap-5">
        <h1 className="text-3xl md:text-5xl font-black">{skillData.title}</h1>
        <img
          src={skillData.imgurl}
          alt={skillData.title}
          className="w-24 h-24 object-contain"
        />
        <p className="text-base md:text-lg text-gray-600 max-w-3xl">
          {skillData.description}
        </p>

        {/* Icons */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {skillData.icons?.map((iconKey, i) => {
            const Icon = DiIcons[iconKey];
            return Icon ? (
              <div
                key={i}
                className="text-4xl text-purple-500 hover:text-pink-500 ease-out delay-100 transition"
                title={iconKey}
              >
                <Icon />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillInfo;
