// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleMobileMenu = () => {
//     setIsOpen(!isOpen);
//     setDropdownOpen(false);
//   };

//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

//   const closeMenus = () => {
//     setIsOpen(false);
//     setDropdownOpen(false);
//   };

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const services = [
//     { name: "SEO", link: "/Seo" },
//     { name: "Public Relations", link: "/Public" },
//     { name: "Social Media Marketing", link: "/Social" },
//     { name: "Brand Photoshoot", link: "/Brandproduct" },
//     { name: "Local SEO Services", link: "/Local" },
//     { name: "Marketing", link: "/Marketing" },
//     { name: "Brand Awareness", link: "/Brand" },
//     { name: "Website Development", link: "/Websites" },
//     { name: "Application Development", link: "/App" }, 
//     { name: "CelebrityEndorsement", link:"/CelebrityEndorsement"},

//   ];

//   return (
//     <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/promoter-india.png"
//             width={160}
//             height={120}
//             alt="Company Logo"
//             className="cursor-pointer w-auto h-14"
//             priority
//           />
//         </Link>

//         {/* Mobile Toggle */}
//         <button
//           onClick={toggleMobileMenu}
//           className="md:hidden text-2xl text-gray-700"
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
//           <li className="hover:text-blue-600 transition">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="hover:text-blue-600 transition">
//             <Link href="/aboutus">About Us</Link>
//           </li>

//           {/* Clickable Dropdown */}
//           <li className="relative" ref={dropdownRef}>
//             <button
//               onClick={toggleDropdown}
//               className="flex items-center space-x-1 hover:text-blue-600 transition"
//               aria-haspopup="true"
//               aria-expanded={dropdownOpen}
//             >
//               <span>Services</span>
//               <FaChevronDown
//                 className={`text-sm transition-transform duration-300 ${
//                   dropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute top-full left-0 mt-3 bg-white shadow-xl rounded-xl w-64 z-50 animate-fade-in-up">
//                 <ul className="divide-y divide-gray-200">
//                   {services.map((service) => (
//                     <li key={service.name}>
//                       <Link
//                         href={service.link}
//                         onClick={closeMenus}
//                         className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition duration-200"
//                       >
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </li>

//           <li className="hover:text-blue-600 transition">
//             <Link href="/industries">Industries</Link>
//           </li>
//           <li>
//             <Link
//               href="/Contact"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <a
//               href="tel:+918868857038"
//               className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition"
//             >
//               📞 Call Now
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-white z-40 p-6 overflow-y-auto shadow-md transition-all">
//           <ul className="flex flex-col space-y-4 text-lg text-gray-800 font-medium">
//             <li>
//               <Link href="/" onClick={closeMenus}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/aboutus" onClick={closeMenus}>
//                 About Us
//               </Link>
//             </li>

//             {/* Mobile Dropdown */}
//             <li>
//               <button
//                 onClick={toggleDropdown}
//                 className="flex justify-between items-center w-full text-left"
//               >
//                 <span>Services</span>
//                 <FaChevronDown
//                   className={`transform transition-transform ${
//                     dropdownOpen ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               {dropdownOpen && (
//                 <ul className="ml-4 mt-2 space-y-2 text-base text-gray-700">
//                   {services.map((service) => (
//                     <li key={service.name}>
//                       <Link
//                         href={service.link}
//                         onClick={closeMenus}
//                         className="block px-2 py-1 hover:bg-blue-100 rounded transition"
//                       >
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             <li>
//               <Link href="/industries" onClick={closeMenus}>
//                 Industries
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" onClick={closeMenus}>
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <a
//                 href="tel:+918868857038"
//                 onClick={closeMenus}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg block text-center transition"
//               >
//                 📞 Call Now
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const closeMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
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
    { name: "Celebrity Endorsement", link: "/CelebrityEndorsement" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/promoter-india.png"
            width={160}
            height={120}
            alt="Logo"
            className="h-14 w-auto"
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
        <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold text-lg lg:text-xl">

          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About Us</Link></li>

          {/* Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-[#003C78]"
            >
              Services
              <FaChevronDown className={`${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-3 bg-white shadow-xl rounded-xl w-64 z-50">
                <ul className="divide-y">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.link}
                        onClick={closeMenus}
                        className="block px-5 py-3 hover:bg-blue-50 hover:text-[#003C78]"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li><Link href="/industries">Blog</Link></li>

          {/* Contact Button */}
          <li>
            <Link
              href="/Contact2"
              className="  text-black px-4 py-2 rounded-lg"
            >
              Contact Us
            </Link>
          </li>

          {/* Phone Numbers */}
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
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-white p-6">
          <ul className="flex flex-col space-y-4 text-lg font-medium">

            <li><Link href="/" onClick={closeMenus}>Home</Link></li>
            <li><Link href="/aboutus" onClick={closeMenus}>About Us</Link></li>

            <li>
              <button onClick={toggleDropdown} className="flex justify-between w-full">
                Services <FaChevronDown />
              </button>

              {dropdownOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link href={service.link} onClick={closeMenus}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link href="/industries" onClick={closeMenus}>Industries</Link></li>
            <li><Link href="/contact" onClick={closeMenus}>Contact</Link></li>

            {/* Phone Numbers Mobile */}
            <li className="flex flex-col gap-3 mt-4">
              <a
                href="tel:+919555436528"
                className="bg-[#ED5808] text-white px-4 py-2 rounded-lg text-center"
              >
                📞 9555436528
              </a>

              <a
                href="tel:+919548833414"
                className="bg-[#003C78] text-white px-4 py-2 rounded-lg text-center"
              >
                📞 9548833414
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}




// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsOpen(!isOpen);
//     setDropdownOpen(false);
//   };

//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

//   const services = [
//     { name: "SEO", link: "/Seo" },
//     { name: "Public Relations", link: "/Public" },
//     { name: "Social Media Marketing", link: "/Social" },
//     { name: "Pay Per Click", link: "/Payper" },
//     { name: "Local SEO Services", link: "/Local" },
//     { name: "Marketing", link: "/Marketing" },
//     { name: "Brand Awareness", link: "/Brand" },
//     { name: "Website Development", link: "/Websites" },
//     { name: "Application Development", link: "/App" },
//   ];

//   return (
//     <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/logo.jpg"
//             width={160}
//             height={120}
//             alt="Company Logo"
//             className="cursor-pointer w-auto h-14"
//             priority
//           />
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={toggleMobileMenu}
//           className="md:hidden text-2xl text-gray-700"
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/aboutus">About Us</Link></li>

//           {/* Desktop Dropdown */}
//           <li
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button
//               className="flex items-center space-x-1 focus:outline-none"
//               aria-haspopup="true"
//               aria-expanded={dropdownOpen}
//             >
//               <span>Services</span>
//               <FaChevronDown className="text-sm" />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-64 z-50">
//                 <ul className="divide-y divide-gray-200">
//                   {services.map((service) => (
//                     <li key={service.name}>
//                       <Link
//                         href={service.link}
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </li>

//           <li><Link href="/industries">Industries</Link></li>
//           <li>
//             <Link
//               href="/Contact"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <a href="tel:+918868857038">
//               <button className="bg-blue-600 hover:bg-orange-400 text-white px-2 py-1 rounded-lg transition">
//                 📞 Call Now
//               </button>
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-white z-40 p-6 overflow-y-auto shadow-md">
//           <ul className="flex flex-col space-y-4 text-lg text-gray-800 font-medium">
//             <li><Link href="/" onClick={toggleMobileMenu}>Home</Link></li>
//             <li><Link href="/aboutus" onClick={toggleMobileMenu}>About Us</Link></li>

//             {/* Mobile Dropdown Toggle */}
//             <li>
//               <button
//                 onClick={toggleDropdown}
//                 className="flex justify-between items-center w-full text-left"
//               >
//                 <span>Services</span>
//                 <FaChevronDown
//                   className={`transform transition-transform ${
//                     dropdownOpen ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               {dropdownOpen && (
//                 <ul className="ml-4 mt-2 space-y-2 text-base text-gray-700">
//                   {services.map((service) => (
//                     <li key={service.name}>
//                       <Link
//                         href={service.link}
//                         onClick={toggleMobileMenu}
//                         className="block px-2 py-1 hover:bg-gray-100 rounded"
//                       >
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             <li><Link href="/industries" onClick={toggleMobileMenu}>Industries</Link></li>
//             <li><Link href="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
//             <li>
//               <a
//                 href="tel:+918868857038"
//                 onClick={toggleMobileMenu}
//                 className="bg-blue-600 hover:bg-orange-400 text-white px-2 py-1 rounded-lg block text-center"
//               >
//                 📞 Call Now
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
