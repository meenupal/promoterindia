// "use client";

// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { ArrowRight } from "lucide-react"; // optional arrow icon
// // import { cn } from "@/lib/utils"; // if using utility merge, otherwise remove

// const steps = [
//   {
//     id: "01",
//     title: "Competitor analysis and keyword research",
//   },
//   { 
//     id: "02",
//     title: "Craft a tailored SEO and digital plan",
//   },
//   {
//     id: "03",
//     title: "Optimize your website for search engines",
//   },
//   {
//     id: "04",
//     title: "Focus on long-term success & sustainable growth",
//   },
// ];

// function HeroBanner() {
//   return (
//     <>
//     <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center md:text-left px-6">
//       {/* Background Image */}
//       <Image
//         src="/digital2.jpg" // Ensure this image is in the public folder
//         alt="Hero Background"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//         className="z-0"
//         priority
//       />

//       {/* Dark Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

//       {/* Text Content */}
//       <div className="relative z-20 max-w-4xl text-white">
//         <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
//           Take Your Business
//         </p>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
//           <TypeAnimation
//             sequence={[
//               "Boost Your Online Presence Today!",
//               2000,
//               "Grow Your Brand with Us!",
//               2000,
//               "Skyrocket Digital Engagement!",
//               2000,
//             ]}
//             speed={50}
//             repeat={Infinity}
//           />
//         </h1>
//         <p className="text-gray-200 text-lg max-w-xl mx-auto md:mx-0 mb-6">
//           Let’s transform your online potential into measurable growth!
//         </p>
//         <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg font-medium rounded-md transition duration-300">
//           Learn More
//         </button>
//       </div>
//     </div>


  
  

//     <section className="w-full bg-gradient-to-b from-[#fff7f0] to-white py-20 px-6 sm:px-10 lg:px-24">
//       {/* Header */}
//       <div className="max-w-3xl mx-auto text-center mb-16">
//         <p className="text-orange-500 uppercase text-sm font-semibold tracking-wide mb-3">
//           How It Works
//         </p>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//           Our Step-by-Step Marketing Process
//         </h2>
//       </div>

//       {/* Steps Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto relative">
//         {steps.map((step, index) => (
//           <div key={step.id} className="flex flex-col items-center text-center space-y-5 relative">
//             {/* Connector Line */}
//             {index !== steps.length - 1 && (
//               <>
//                 {/* Horizontal line for large screens */}
//                 <div className="hidden lg:block absolute top-1/2 right-[-60px] w-[120px] h-1 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 rounded-full"></div>
//                 {/* Arrow on the line */}
//                 <div className="hidden lg:block absolute top-1/2 right-[-10px] transform -translate-y-1/2">
//                   <ArrowRight className="text-orange-500 w-7 h-7" />
//                 </div>
//               </>
//             )}

//             {/* Circle + Arc */}
//             <div className="relative w-28 h-28 flex items-center justify-center">
//               <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
//                 <div className="text-orange-400 font-extrabold text-2xl select-none">
//                   {step.id}.
//                 </div>
//               </div>

//               {/* SVG Arc */}
//               <svg
//                 className="absolute top-0 left-0 w-full h-full z-0"
//                 viewBox="0 0 100 100"
//                 fill="none"
//               >
//                 <path
//                   d="M 5,50 A 45,45 0 0 1 95,50"
//                   stroke="#f4a261"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                 />
//                 <circle cx="5" cy="50" r="3" fill="#f4a261" />
//                 <polygon points="95,50 88,45 88,55" fill="#f4a261" />
//               </svg>
//             </div>

//             {/* Step Title */}
//             <p className="text-gray-900 font-semibold text-lg max-w-[250px] leading-relaxed">
//               {step.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>



//     </>
//   );
// }

// export default HeroBanner;


"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    text: "DISCOVER INCREDIBLE INDIA",
    description: "Experience the diverse beauty and rich culture of Bharat.",
    color: "text-yellow-500",
  },
  {
    id: 2,
    text: "ADVENTURE AWAITS",
    description: "From the Himalayas to the beaches, explore breathtaking landscapes.",
    color: "text-blue-500",
  },
  {
    id: 3,
    text: "CULTURE & HERITAGE",
    description: "Immerse yourself in India's ancient traditions and history.",
    color: "text-red-500",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[31rem] md:h-[37rem] lg:h-[50rem]  ">
      {/* Background Video */}
      <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/video.mp4" type="video/mp4" />
</video>

      {/* Black Overlay */}
      {/* <div className="absolute inset-0 bg-opacity-70"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  space-y-4 px-4 md:px-8 lg:px-16 pt-20">
        {/* <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-5000 ${slides[currentSlide].color}`}
        >
          {slides[currentSlide].text}
        </h1> */}
        {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
          {slides[currentSlide].description}
        </p> */}
      </div>
    </div>
  
  );
}








