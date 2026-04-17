
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setMobileDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const services = [
    { name: "SEO", link: "/Seo" },
    { name: "Public Relations", link: "/Public" },
    { name: "Social Media Marketing", link: "/Social" },
    { name: "Brand Photoshoot", link: "/Brandproduct" },
    { name: "Local SEO Services", link: "/Local" },
    { name: "Marketing", link: "/Marketing" },
    { name: "Brand Awareness", link: "/Brand" },
    { name: "Website Development", link: "/Websites" },
    { name: "Application Development", link: "/App" },
    { name: "BusinessServices", link: "/BusinessServices" },
    { name: "Celebrity Endorsement", link: "/CelebrityEndorsement" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <Link href="/" onClick={closeMenus}>
          <Image
            src="/logo.png"
            width={160}
            height={120}
            alt="Logo"
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-gray-700"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-semibold text-lg">

          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About Us</Link></li>

          {/* Desktop Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center gap-1">
              Services
              <FaChevronDown className={dropdownOpen ? "rotate-180" : ""} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-60">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.link}
                    onClick={closeMenus}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/Contact2">Contact Us</Link></li>

          {/* ✅ CONTACT BUTTONS (DESKTOP) */}
          <li className="flex gap-2">
            <a
              href="tel:+919555436528"
              className="bg-[#ED5808] hover:bg-[#d94f07] text-white px-3 py-2 rounded-lg text-sm"
            >
              📞 9555436528
            </a>

            <a
              href="tel:+919548833414"
              className="bg-[#003C78] hover:bg-[#002f5c] text-white px-3 py-2 rounded-lg text-sm"
            >
              📞 9548833414
            </a>
          </li>

        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto p-6">
          <ul className="space-y-4 text-lg">

            <li><Link href="/" onClick={closeMenus}>Home</Link></li>
            <li><Link href="/About" onClick={closeMenus}>About Us</Link></li>

            {/* Mobile Dropdown */}
            <li>
              <button
                onClick={() => setMobileDropdownOpen(prev => !prev)}
                className="flex justify-between w-full"
              >
                Services
                <FaChevronDown className={mobileDropdownOpen ? "rotate-180" : ""} />
              </button>

              {mobileDropdownOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.link}
                        onClick={closeMenus}
                        className="block text-gray-600"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

        

{/* Mobile */}
<li><Link href="/blog" onClick={closeMenus}>Blog</Link></li>
            {/* <li><Link href="/blog" onClick={closeMenus}>Blog</Link></li> */}
            {/* <li><Link href="/Blog" onClick={closeMenus}>Blog</Link></li> */}
            <li><Link href="/Contact2" onClick={closeMenus}>Contact Us</Link></li>

            {/* ✅ CONTACT BUTTONS (MOBILE) */}
            <li className="flex flex-col gap-3 mt-6 pt-4 border-t">
              <a
                href="tel:+919555436528"
                className="bg-[#ED5808] text-white px-4 py-3 rounded-lg text-center"
                onClick={closeMenus}
              >
                📞 Call 9555436528
              </a>

              <a
                href="tel:+919548833414"
                className="bg-[#003C78] text-white px-4 py-3 rounded-lg text-center"
                onClick={closeMenus}
              >
                📞 Call 9548833414
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}


