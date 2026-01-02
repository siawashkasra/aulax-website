"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Hamburger menu icon
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Close icon
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-200 h-[72px]">
        <div className="flex items-center justify-between h-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          {/* Left side - Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="font-bold text-xl sm:text-2xl text-[#1e293b] hover:opacity-80 transition-opacity"
            >
              Aulax
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center ml-8 gap-1">
              <Link
                href="#"
                className="px-4 py-2 text-sm font-medium text-[#374151] rounded-full hover:bg-gray-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="px-4 py-2 text-sm font-medium text-[#374151] rounded-full hover:bg-gray-100 transition-colors"
              >
                About
              </Link>
              <Link
                href="#why-aulax"
                className="px-4 py-2 text-sm font-medium text-[#374151] rounded-full hover:bg-gray-100 transition-colors"
              >
                Why Aulax?
              </Link>
              <Link
                href="#partner"
                className="px-4 py-2 text-sm font-medium text-[#374151] rounded-full hover:bg-gray-100 transition-colors"
              >
                Become a Partner
              </Link>
              <Link
                href="#partners"
                className="px-4 py-2 text-sm font-medium text-[#374151] rounded-full hover:bg-gray-100 transition-colors"
              >
                Our Partners
              </Link>
            </nav>
          </div>

          {/* Right side - Desktop CTA and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button - Hidden on mobile */}
            <Link
              href="#download"
              className="hidden lg:flex items-center bg-[#006a4e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#005a42] transition-colors"
            >
              Download Aulax
            </Link>

            {/* Mobile Hamburger Menu Button - Visible on mobile/tablet */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#1e293b] hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu - Slides down from top */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white shadow-xl border-b border-gray-200 z-[95] transition-transform duration-300 ease-out overflow-hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col py-2 max-h-[calc(100vh-72px)] overflow-y-auto">
          <Link
            href="#"
            className="px-6 py-4 text-base font-medium text-[#374151] hover:bg-gray-50 hover:text-[#006a4e] active:bg-gray-100 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="px-6 py-4 text-base font-medium text-[#374151] hover:bg-gray-50 hover:text-[#006a4e] active:bg-gray-100 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#why-aulax"
            className="px-6 py-4 text-base font-medium text-[#374151] hover:bg-gray-50 hover:text-[#006a4e] active:bg-gray-100 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Why Aulax?
          </Link>
          <Link
            href="#partner"
            className="px-6 py-4 text-base font-medium text-[#374151] hover:bg-gray-50 hover:text-[#006a4e] active:bg-gray-100 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Become a Partner
          </Link>
          <Link
            href="#partners"
            className="px-6 py-4 text-base font-medium text-[#374151] hover:bg-gray-50 hover:text-[#006a4e] active:bg-gray-100 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Partners
          </Link>
          
          {/* Download Aulax Button - At the end of mobile menu */}
          <div className="px-6 py-4 mt-2">
            <Link
              href="#download"
              className="w-full flex items-center justify-center bg-[#006a4e] text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-[#005a42] active:bg-[#004a35] transition-colors shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Aulax
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
