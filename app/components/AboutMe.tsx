import React from "react";
import { TechChipProps, technologies } from "../constants/stacks";

const TechChip = ({ tech }: TechChipProps) => {
  const Icon = tech.icon;

  return (
    <div
      className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full font-medium fade-in shadow-md ${tech.color} ${tech.textColor}`}
      style={{
        animationDelay: tech.animationDelay,
      }}
    >
      <Icon color={tech.textColor} size={18} />
      {tech.name}
    </div>
  );
};

export const AboutMe: React.FC = () => {
  return (
    <div className="py-16 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - About Me Text */}
          <div className="w-full md:w-1/2 border border-gray-700 rounded-3xl p-8">
            <h2 className="text-white text-4xl font-bold mb-6">About me</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                I&apos;m a passionate full-stack developer with over 5 years of
                experience building scalable applications and interactive web
                experiences. My journey in tech began with curiosity and has
                evolved into expertise across multiple domains.
              </p>
              <p>
                I specialize in creating responsive, user-friendly interfaces
                that not only look great but also deliver exceptional
                performance. My background in computer science provides me with
                a solid foundation for problem-solving and efficient code
                implementation.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through technical articles and mentorship.
              </p>
            </div>
          </div>

          {/* Right Column - Technologies */}
          {/* Right Column - Technologies */}
          <div className="w-full md:w-1/2 backdrop-blur-md  border border-gray-700 rounded-3xl p-8 shadow-lg">
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 text-center">
              Technologies & Expertise
            </h2>

            <p className="text-gray-400 text-center mb-6">
              Tools and technologies I use daily to build efficient and elegant
              solutions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 justify-items-center">
              {technologies.map((tech) => (
                <TechChip
                  key={tech.name}
                  tech={{
                    name: tech.name,
                    icon: tech.icon,
                    color: tech.color,
                    textColor: tech.textColor,
                    animationDelay: tech.animationDelay,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
