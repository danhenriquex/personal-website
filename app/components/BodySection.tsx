import React from "react";
import Image from "next/image";

import profileImage from "../public/images/dan_professional.jpeg"; // Adjust the path as necessary

export const BodySection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-4">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Hi! I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Danilo
            </span>
            , software engineer 
          </h1>

          <p className="text-gray-400 text-lg max-w-md">
            I&apos;m a creative developer helping businesses and individuals to
            deliver engaging and high-performance web applications with modern
            technologies.
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          <div className="relative h-full w-full flex items-center justify-center bg-gray-800 rounded-3xl p-8">
            <Image
              src={profileImage}
              alt="Developer portrait"
              width={350} // Adjust the width
              height={350} // Adjust the height
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
