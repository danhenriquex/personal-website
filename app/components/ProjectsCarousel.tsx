"use client";
// ProjectsCarousel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define interfaces for our types
interface Technology {
  name: string;
  color: string;
  textColor: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "AI" | "Frontend" | "Backend" | "All";
  technologies: Technology[];
}

// Sample project data
const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description:
      "A machine learning application that generates high-quality content based on user prompts. Utilizes GPT models and custom training data.",
    image: "/images/project-ai.jpg",
    category: "AI",
    technologies: [
      { name: "Python", color: "bg-indigo-500", textColor: "text-white" },
      { name: "TensorFlow", color: "bg-orange-500", textColor: "text-white" },
      { name: "Flask", color: "bg-gray-700", textColor: "text-white" },
      { name: "Docker", color: "bg-blue-500", textColor: "text-white" },
    ],
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "A responsive dashboard for e-commerce businesses to track sales, inventory, and customer analytics with real-time data visualization.",
    image: "/images/project-frontend.jpg",
    category: "Frontend",
    technologies: [
      { name: "React", color: "bg-blue-400", textColor: "text-white" },
      { name: "TypeScript", color: "bg-blue-600", textColor: "text-white" },
      { name: "Tailwind", color: "bg-teal-400", textColor: "text-gray-800" },
      { name: "Chart.js", color: "bg-pink-500", textColor: "text-white" },
    ],
  },
  {
    id: 3,
    title: "Microservices API Platform",
    description:
      "A scalable backend infrastructure using microservices architecture to handle high-volume data processing and API requests.",
    image: "/images/project-backend.jpg",
    category: "Backend",
    technologies: [
      { name: "Node.js", color: "bg-green-500", textColor: "text-white" },
      { name: "Express", color: "bg-gray-600", textColor: "text-white" },
      { name: "MongoDB", color: "bg-green-600", textColor: "text-white" },
      { name: "Redis", color: "bg-red-500", textColor: "text-white" },
      { name: "AWS", color: "bg-orange-400", textColor: "text-white" },
    ],
  },
  {
    id: 4,
    title: "Computer Vision Object Detector",
    description:
      "An application that uses machine learning to identify and classify objects in images and video streams in real-time.",
    image: "/images/project-ai-2.jpg",
    category: "AI",
    technologies: [
      { name: "Python", color: "bg-indigo-500", textColor: "text-white" },
      { name: "OpenCV", color: "bg-green-700", textColor: "text-white" },
      { name: "PyTorch", color: "bg-red-600", textColor: "text-white" },
      { name: "FastAPI", color: "bg-teal-600", textColor: "text-white" },
    ],
  },
  {
    id: 5,
    title: "Progressive Web Application",
    description:
      "A cross-platform PWA that provides offline functionality and native-like experience for users across devices.",
    image: "/images/project-frontend-2.jpg",
    category: "Frontend",
    technologies: [
      { name: "React", color: "bg-blue-400", textColor: "text-white" },
      { name: "Next.js", color: "bg-gray-800", textColor: "text-white" },
      { name: "Tailwind", color: "bg-teal-400", textColor: "text-gray-800" },
      {
        name: "Service Workers",
        color: "bg-purple-600",
        textColor: "text-white",
      },
    ],
  },
];

// Component for individual technology chips
const TechChip: React.FC<{ tech: Technology }> = ({ tech }) => {
  return (
    <span
      className={`${tech.color} ${tech.textColor} text-xs px-3 py-1 rounded-full mr-2 mb-2 inline-block`}
    >
      {tech.name}
    </span>
  );
};

export const ProjectsCarousel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projectsData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Filter projects when tab changes
  useEffect(() => {
    if (activeTab === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === activeTab)
      );
    }
    setCurrentIndex(0); // Reset carousel position when changing tabs
  }, [activeTab]);

  // Navigate to previous project
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next project
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-6 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-6">Projects</h2>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex  border border-gray-700 rounded-full p-1">
              {["All", "AI", "Frontend", "Backend"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative border border-gray-700 rounded-3xl p-8 overflow-hidden">
          {filteredProjects.length > 0 ? (
            <>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Image */}
                <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden h-64 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20"></div>
                  {/* Replace with your actual image path */}
                  <div className="relative h-full w-full bg-gray-700">
                    <Image
                      src="/api/placeholder/400/320"
                      alt={filteredProjects[currentIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-white text-2xl font-bold mb-4">
                    {filteredProjects[currentIndex].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {filteredProjects[currentIndex].description}
                  </p>

                  {/* Technologies used */}
                  <div className="mb-8">
                    <h4 className="text-gray-400 text-sm font-medium mb-3">
                      Technologies used:
                    </h4>
                    <div className="flex flex-wrap">
                      {filteredProjects[currentIndex].technologies.map(
                        (tech, idx) => (
                          <TechChip key={idx} tech={tech} />
                        )
                      )}
                    </div>
                  </div>

                  {/* Project links/buttons */}
                  <div className="flex space-x-4">
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full px-6 py-2 hover:opacity-90 transition-opacity">
                      View Project
                    </button>
                    <button className="border border-gray-600 text-gray-300 rounded-full px-6 py-2 hover:bg-gray-700 transition-colors">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Dots indicator */}
                <div className="flex items-center space-x-2">
                  {filteredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "bg-gradient-to-r from-blue-500 to-cyan-600 w-4"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
