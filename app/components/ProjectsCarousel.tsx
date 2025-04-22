"use client";
// ProjectsCarousel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchGitHubRepoDetails, fetchGitHubRepos } from "../lib/github";

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
  repoUrl?: string;
  homepage?: string;
}

// Map GitHub languages to technology colors
const techColorMap: Record<string, { color: string; textColor: string }> = {
  JavaScript: { color: "bg-yellow-400", textColor: "text-gray-800" },
  TypeScript: { color: "bg-blue-600", textColor: "text-white" },
  Python: { color: "bg-indigo-500", textColor: "text-white" },
  HTML: { color: "bg-orange-500", textColor: "text-white" },
  CSS: { color: "bg-blue-400", textColor: "text-white" },
  Java: { color: "bg-red-500", textColor: "text-white" },
  "C#": { color: "bg-green-600", textColor: "text-white" },
  PHP: { color: "bg-purple-500", textColor: "text-white" },
  Ruby: { color: "bg-red-600", textColor: "text-white" },
  Go: { color: "bg-cyan-500", textColor: "text-white" },
  Rust: { color: "bg-orange-600", textColor: "text-white" },
  Swift: { color: "bg-orange-500", textColor: "text-white" },
  Kotlin: { color: "bg-purple-600", textColor: "text-white" },
  // Add more as needed
};

// Helper function to determine project category based on topics or description
const determineCategory = (topics: string[], description: string): "AI" | "Frontend" | "Backend" | "All" => {
  const topicsLower = topics.map(t => t.toLowerCase());
  const descLower = description ? description.toLowerCase() : "";
  
  if (topicsLower.some(t => ["ai", "ml", "machine-learning", "tensorflow", "pytorch"].includes(t)) ||
      descLower.includes("ai") || descLower.includes("machine learning")) {
    return "AI";
  }
  
  if (topicsLower.some(t => ["frontend", "react", "vue", "angular", "ui", "ux"].includes(t)) ||
      descLower.includes("frontend") || descLower.includes("ui")) {
    return "Frontend";
  }
  
  if (topicsLower.some(t => ["backend", "api", "server", "database", "node"].includes(t)) ||
      descLower.includes("backend") || descLower.includes("api")) {
    return "Backend";
  }
  
  return "All";
};

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
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch GitHub repos on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Replace with your actual GitHub username and token
        // Note: In a production app, you should use environment variables for the token
        const username = "danhenriquex";
        const token = "teste"; // Consider using environment variables

        const repos = await fetchGitHubRepos(username, token);
        
        // Process the top 10 repos (or adjust as needed)
        const processedProjects = await Promise.all(
          repos.slice(0, 10).map(async (repo: any, index: number) => {
            // Fetch additional details for each repo
            const details = await fetchGitHubRepoDetails(username, repo.name, token);
            
            // Extract languages from the repo
            const technologies: Technology[] = [];
            if (details.language) {
              technologies.push({
                name: details.language,
                ...techColorMap[details.language] || { color: "bg-gray-600", textColor: "text-white" }
              });
            }
            
            // Add additional technologies from topics if available
            if (details.topics && details.topics.length > 0) {
              details.topics.slice(0, 3).forEach((topic: string) => {
                technologies.push({
                  name: topic,
                  color: "bg-gray-700",
                  textColor: "text-white"
                });
              });
            }
            
            return {
              id: index + 1,
              title: repo.name,
              description: repo.description || "No description available",
              image: "/images/project-default.jpg", // Use a default image or placeholder
              category: determineCategory(details.topics || [], repo.description || ""),
              technologies,
              repoUrl: repo.html_url,
              homepage: repo.homepage
            };
          })
        );
        
        setProjects(processedProjects);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects when tab changes or when projects are loaded
  useEffect(() => {
    if (activeTab === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeTab)
      );
    }
    setCurrentIndex(0); // Reset carousel position when changing tabs
  }, [activeTab, projects]);

  // Navigate to previous project
  const prevSlide = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next project
  const nextSlide = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-6">My GitHub Projects</h2>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-800 rounded-full p-1">
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
        <div className="relative bg-gray-800 rounded-3xl p-8 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-red-400">{error}</p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Image */}
                <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden h-64 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20"></div>
                  {/* Using placeholder image */}
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
                    <a 
                      href={filteredProjects[currentIndex].repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full px-6 py-2 hover:opacity-90 transition-opacity"
                    >
                      View Repository
                    </a>
                    {filteredProjects[currentIndex].homepage && (
                      <a 
                        href={filteredProjects[currentIndex].homepage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-gray-600 text-gray-300 rounded-full px-6 py-2 hover:bg-gray-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                  aria-label="Previous project"
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
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                  aria-label="Next project"
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