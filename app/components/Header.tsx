"use client";

import React, { useState } from "react";

interface LanguageOption {
  code: string;
  label: string;
}

export const Header = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>({
    code: "EN",
    label: "English",
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const languages: LanguageOption[] = [
    { code: "EN", label: "English" },
    { code: "PT", label: "Portuguese" },
  ];

  const handleLanguageChange = (language: LanguageOption) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  return (
    <div className="bg-gray-900 py-4 shadow-md w-full md:static fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center pl-6 pr-4 md:pl-8 md:pr-0">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent focus:outline-none">
          DH
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <span className="text-gray-300 text-sm">Software Engineer</span>
          <div
            className="flex items-center bg-gray-800/50 px-4 py-1.5 rounded-full border border-gray-700"
            role="status"
            aria-label="Availability status: Available for work"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm text-gray-200">Available for work</span>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center text-white px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-haspopup="listbox"
              aria-expanded={showLanguageDropdown}
              aria-label="Select Language"
            >
              {currentLanguage.code}
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showLanguageDropdown && (
              <ul
                className="absolute right-0 mt-2 w-28 bg-gray-800 rounded-md shadow-lg py-1 z-20"
                role="listbox"
              >
                {languages.map((language) => (
                  <li
                    key={language.code}
                    role="option"
                    aria-selected={currentLanguage.code === language.code}
                  >
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                      onClick={() => handleLanguageChange(language)}
                    >
                      {language.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 text-white"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsDrawerOpen(false)}
              aria-hidden="true"
            ></div>
            <aside
              className="fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-lg z-50 transform transition-transform duration-300"
              role="dialog"
              aria-label="Mobile menu"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-white text-lg">Menu</h2>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col p-4 gap-4">
                <span className="text-gray-300 text-sm">Software Engineer</span>
                <div
                  className="flex items-center bg-gray-800/50 px-4 py-1.5 rounded-full border border-gray-700"
                  role="status"
                  aria-label="Availability status: Available for work"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-200">Available for work</span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center text-white px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-haspopup="listbox"
                    aria-expanded={showLanguageDropdown}
                    aria-label="Select Language"
                  >
                    {currentLanguage.code}
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showLanguageDropdown && (
                    <ul
                      className="absolute right-0 mt-2 w-28 bg-gray-800 rounded-md shadow-lg py-1 z-20"
                      role="listbox"
                    >
                      {languages.map((language) => (
                        <li
                          key={language.code}
                          role="option"
                          aria-selected={currentLanguage.code === language.code}
                        >
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                            onClick={() => handleLanguageChange(language)}
                          >
                            {language.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </aside>
          </>
        )}
      </div>
    </div>
  );
};
