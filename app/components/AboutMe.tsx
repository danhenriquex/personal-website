import React from "react";
import { TechChipProps, technologies } from "../constants/stacks";

const TechChip = ({ tech }: TechChipProps) => {
  return (
    <div
      className={`${tech.color} ${tech.textColor} px-4 py-2 rounded-full font-medium inline-block fade-in`}
      style={{
        animationDelay: tech.animationDelay,
      }}
    >
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
          <div className="w-full md:w-1/2 bg-gray-800 rounded-3xl p-8">
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
          <div className="w-full md:w-1/2 bg-gray-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="text-white text-4xl font-bold mb-6 text-center">
              Technologies and expertise
            </div>

            {/* Technologies floating + fade-in cloud */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {technologies.map((tech) => (
                <TechChip key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
