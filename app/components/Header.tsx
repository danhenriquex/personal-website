'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold text-purple-400">
          cnips
        </Link>

        <nav className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <li>
              <a href="#about" className="text-gray-300 hover:text-purple-300 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-purple-300 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-purple-300 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
        </button>
      </div>
    </header>
  );
}
