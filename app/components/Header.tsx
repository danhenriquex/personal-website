// Header.jsx
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg p-2 mr-2">
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
        <span className="text-white text-xl font-bold">cnips</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        <Link
          href="/"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/blogs"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/projects"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/skills"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Skills
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* CTA */}
      <div>
        <button className="bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-gray-700 transition-colors">
          Get in touch
        </button>
      </div>
    </header>
  );
};
