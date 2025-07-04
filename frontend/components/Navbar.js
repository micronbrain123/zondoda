import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "DE", name: "Deutsch", flag: "🇩🇪" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Cars" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#182219] text-white shadow-lg relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={95}
                className="drop-shadow-sm"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 text-white font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-green-400 hover:bg-[#253326] px-3 py-2 rounded-md transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="bg-[#253326] text-green-400 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-2"
              >
                <Globe size={18} />
                <span>{selectedLang}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#182219] border border-[#82b674] rounded-md shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-white hover:bg-green-700 hover:text-white flex items-center space-x-3 first:rounded-t-md last:rounded-b-md"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}

              {isLangOpen && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsLangOpen(false)}
                />
              )}
            </div>

            {/* Join Now Button */}
            <Link
              href="/signup/join"
              className="bg-green-600 text-white hover:bg-green-700 font-semibold px-6 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg border border-[#82b674]"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="text-white hover:text-green-400 transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="pt-4 pb-3 space-y-1 border-t border-[#253326] mt-3">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block px-3 py-3 text-base font-semibold text-white hover:text-green-400 hover:bg-[#253326] rounded-md transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="px-3 py-2">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="w-full bg-[#253326] text-green-400 hover:bg-green-700 hover:text-white px-3 py-3 rounded-md transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Globe size={18} />
                  <span>Language ({selectedLang})</span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangOpen && (
                <div className="mt-2 bg-[#253326] border border-[#82b674] rounded-md shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-white hover:bg-green-700 hover:text-white flex items-center space-x-3 first:rounded-t-md last:rounded-b-md transition-colors duration-200"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Join Now Button */}
            <div className="px-3 pt-2">
              <Link
                href="/signup/join"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-green-600 text-white hover:bg-green-700 font-semibold px-6 py-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg border border-[#82b674]"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
