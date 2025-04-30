import React from "react";
import Image from "next/image";
import profileImage from "../public/images/dan_professional.jpeg";

export const BodySection = () => {
  return (
    <div className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full md:w-1/2 rounded-3xl p-8">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi! I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Danilo
              </span>
              , software engineer
            </h1>

            <p className="text-gray-400 text-lg">
              I&apos;m a creative developer helping businesses and individuals
              deliver engaging and high-performance web applications with modern
              technologies.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 bg-gray-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <Image
                src={profileImage}
                alt="Developer portrait"
                width={350}
                height={350}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
