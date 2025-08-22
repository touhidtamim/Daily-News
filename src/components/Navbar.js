"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname(); // for active link
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "News", href: "/news" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Site Name */}
        <Link href="/" className="text-2xl font-bold text-black">
          Daily News
        </Link>

        {/* Center: Links (hidden on mobile) */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium text-black hover:text-gray-700 transition ${
                  pathname === link.href ? "underline underline-offset-4" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Login Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="px-5 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block font-medium text-black hover:text-gray-700 transition ${
                    pathname === link.href ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="block px-5 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
