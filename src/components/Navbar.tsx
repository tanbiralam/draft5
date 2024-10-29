import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img
              src="src/assets/logo.png"
              alt="logo"
              className="shadow-2xl h-8 md:h-10 lg:h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#program"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Program
            </a>
            <a
              href="#bydp"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              BYDP
            </a>
            <a
              href="#benefits"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Pricing
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
            <a
              href="#program"
              className="block px-3 py-2 text-gray-300 hover:text-blue-500"
            >
              Program
            </a>
            <a
              href="#bydp"
              className="block px-3 py-2 text-gray-300 hover:text-blue-500"
            >
              BYDP
            </a>
            <a
              href="#benefits"
              className="block px-3 py-2 text-gray-300 hover:text-blue-500"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-300 hover:text-blue-500"
            >
              Pricing
            </a>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
