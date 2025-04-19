// HeroSection.jsx
import React from "react";
import Image from "next/image";

export const BodySection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-16 px-22 bg-gray-900 min-h-[90vh]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
          Want to elevate your projects
        </h1>
        <p className="text-gray-400 text-lg max-w-md">
          I&apos;m a creative developer helping businesses and individuals to
          deliver engaging and high-performance web applications with modern
          technologies.
        </p>
        <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
          Contact me
        </button>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-[40px] blur-xl opacity-30 transform scale-95"></div>
        <div className="relative bg-gradient-to-r from-pink-400 to-purple-500 rounded-[40px] overflow-hidden h-96">
          <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-sm p-4 rounded-xl flex items-center space-x-4">
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">Your Name Here</p>
              <p className="text-gray-200 text-sm">Frontend Developer</p>
            </div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          {/* This is where you would add your actual image */}
          <div className="relative h-full w-full">
            {/* Replace with your actual image path */}
            <Image
              src="/Users/danilohenrique/Documents/Projects/personal_website/app/assets/dan_professional.jpeg"
              alt="Developer portrait"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
