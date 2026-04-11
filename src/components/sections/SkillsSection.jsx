import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiSass,
  SiTailwindcss,
  SiFigma,
  SiCypress,
  SiStorybook,
  SiGit,
} from "react-icons/si";

export default function SkillsSection() {
  // স্কিলসের ডাটাবেস (আইকন এবং তাদের অরিজিনাল কালারসহ)
  const skills = [
    { name: "Javascript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Typescript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "Nest.js", icon: SiNestjs, color: "text-[#E0234E]" },
    { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Sass/Scss", icon: SiSass, color: "text-[#CC6699]" },
    { name: "Tailwindcss", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    {
      name: "Cypress",
      icon: SiCypress,
      color: "text-[#17202C] bg-white rounded-full",
    }, // সাইপ্রেস সাধারণত সাদাকালো হয়
    { name: "Storybook", icon: SiStorybook, color: "text-[#FF4785]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  ];

  return (
    <section className="bg-[#0B1120] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden z-0">
      {/* Background Ambient Glows */}
      {/* ডান দিকের গ্লো */}
      <div className="absolute top-10 right-[-5%] w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* বাম দিকের নতুন গ্লো */}
      <div className="absolute top-[30%] left-[-5%] w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* নিচের দিকের গ্লো */}
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-red-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Top Badge */}
      <div className="bg-slate-800/80 border border-slate-700 px-5 py-1.5 rounded-full mb-6">
        <span className="text-sm font-medium text-slate-300">
          My Tech Stack
        </span>
      </div>

      {/* Sub Heading */}
      <h3 className="text-lg md:text-xl text-gray-300 mb-16 text-center max-w-2xl">
        The frameworks, tools, and technologies I use to build modern digital
        experiences.
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-12 gap-x-8 max-w-6xl w-full">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                <IconComponent
                  className={`text-5xl md:text-6xl ${skill.color} drop-shadow-lg`}
                />
              </div>
              <span className="mt-4 text-sm md:text-base text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
