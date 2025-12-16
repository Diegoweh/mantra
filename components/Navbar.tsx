"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
}

export default function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 pointer-events-none">
      <div className="max-w-2xl mx-auto">
        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl px-4 py-3 md:px-8 md:py-4 pointer-events-auto">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ceaa96]/10 via-[#b7866f]/10 to-[#8b5641]/10 rounded-2xl pointer-events-none" />

          <div className="relative flex items-center md:justify-center">
            {/* Logo */}
            {/* <Link
              href="/"
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#ceaa96] via-[#b7866f] to-[#8b5641] bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
            >
              Mantra
            </Link> */}

            {/* Desktop Nav Items */}
            <ul className="hidden md:flex items-center gap-2">
              {items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={`
                        relative px-4 lg:px-6 py-2.5 rounded-xl font-medium
                        transition-all duration-300 ease-out
                        ${isActive
                          ? "text-white"
                          : "text-white/70 hover:text-yellow-700"
                        }
                      `}
                    >
                      {/* Background for active/hover state */}
                      <span
                        className={`
                          absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none
                          ${isActive
                            ? "bg-gradient-to-r from-[#ceaa96] via-[#b7866f] to-[#8b5641] opacity-100"
                            : "bg-white/0 hover:bg-[#e0cfc1]/20"
                          }
                        `}
                      />

                      {/* Text */}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA Button */}
            {/* <button className="hidden md:block group relative px-4 lg:px-6 py-2.5 rounded-xl font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-[#8b5641] via-[#b7866f] to-[#ceaa96] pointer-events-none" />
              <span className="relative z-10">Get Started</span>
            </button> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-10 p-2 text-white"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              md:hidden overflow-hidden transition-all duration-300 ease-in-out relative z-50
              ${isMenuOpen ? "max-h-96 mt-4" : "max-h-0"}
            `}
          >
            <ul className="flex flex-col gap-2 pb-2">
              {items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href} className="relative z-50">
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        block px-4 py-3 rounded-xl font-medium
                        transition-all duration-300 cursor-pointer
                        ${isActive
                          ? "bg-gradient-to-r from-[#ceaa96] via-[#b7866f] to-[#8b5641] text-white"
                          : "text-white/70 hover:text-yellow-700 hover:bg-[#e0cfc1]/10"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 relative z-50">
                {/* <button className="w-full px-4 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#8b5641] via-[#b7866f] to-[#ceaa96] hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                  Get Started
                </button> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
