// import { FaFileAlt, FaRocket, FaChartLine, FaLightbulb, FaCog } from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     icon: <FaFileAlt size={28} className="text-orange-500" />,
//     title: "Content Marketing",
//     desc: "Content marketing isn’t just about words; it’s about connection. By help into loyal customers.",
//   },
//   {
//     id: 2,
//     icon: <FaRocket size={28} className="text-orange-500" />,
//     title: "SEO Optimization",
//     desc: "We optimize every click, every keyword, and every page to a brand of search results.",
//   },
//   {
//     id: 3,
//     icon: <FaChartLine size={28} className="text-orange-500" />,
//     title: "Analytics & Report",
//     desc: "Our analytics and reporting give a clear picture of your opportunities to grow.",
//   },
//   {
//     id: 4,
//     icon: <FaLightbulb size={28} className="text-orange-500" />,
//     title: "Brand Strategy",
//     desc: "Your brand’s journey starts with a powerful strategy aligning vision with impact.",
//   },
//   {
//     id: 5,
//     icon: <FaCog size={28} className="text-orange-500" />,
//     title: "Influencer Marketing",
//     desc: "We connect influence to impact and align your brand with the right audience.",
//   },
// ];

// export default function OurServices() {
//   return (
//     <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-20 relative overflow-hidden">
//       {/* Background dots or stars (optional) */}
//       <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />

//       {/* Title */}
//       <div className="relative z-10 text-center mb-12">
//         <p className="text-orange-500 uppercase font-semibold tracking-wider mb-2">Our Services</p>
//         <h2 className="text-3xl md:text-4xl font-bold leading-tight">
//           Achieve Top Rankings with Cutting-Edge SEO Services!
//         </h2>
//       </div>

//       {/* Cards Grid */}
//       <div className="relative z-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             className="bg-[#1a1a1a] border border-orange-500 rounded-xl p-6 shadow-lg transition hover:scale-105 hover:shadow-orange-500/30"
//           >
//             <div className="flex items-start justify-between mb-3">
//               {service.icon}
//               <span className="text-sm text-orange-400 font-semibold">0{index + 1}.</span>
//             </div>
//             <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
//             <p className="text-sm text-gray-300">{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { FaFileAlt, FaRocket, FaChartLine, FaLightbulb, FaCog } from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     icon: <FaFileAlt size={30} className="text-orange-500" />,
//     title: "Content Marketing",
//     desc: "Content marketing isn’t just about words; it’s about connection. By help into loyal customers.",
//   },
//   {
//     id: 2,
//     icon: <FaRocket size={30} className="text-orange-500" />,
//     title: "SEO Optimization",
//     desc: "We optimize every click, every keyword, and every page to a brand of search results.",
//   },
//   {
//     id: 3,
//     icon: <FaChartLine size={30} className="text-orange-500" />,
//     title: "Analytics & Report",
//     desc: "Our analytics and reporting, you’ll gain a clear picture of your the opportunities to grow.",
//   },
//   {
//     id: 4,
//     icon: <FaLightbulb size={30} className="text-orange-500" />,
//     title: "Brand Strategy",
//     desc: "Your brand’s journey starts with a powerful strategy aligns vision with impact your unique story.",
//   },
//   {
//     id: 5,
//     icon: <FaCog size={30} className="text-orange-500" />,
//     title: "Influencer Marketing",
//     desc: "Turn influence into impact of With influencer marketing, we connect and your driving and brand",
//   },
// ];

// export default function OurServices() {
//   return (
//     <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
//       {/* Dotted background */}
//       <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />

//       {/* Title */}
//       <div className="relative z-10 text-center mb-16">
//         <p className="text-orange-500 uppercase font-semibold tracking-widest mb-2">Our Services</p>
//         <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
//           Cutting-Edge SEO Services!
//         </h2>
//       </div>

//       {/* Services Grid */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             className="bg-gradient-to-b from-[#1a1a1a] to-[#2a1a0a] border border-orange-500 rounded-2xl p-6 flex flex-col justify-between shadow-lg transition hover:scale-105 hover:shadow-orange-400/30"
//           >
//             {/* Top Row */}
//             <div className="flex items-start justify-between mb-4">
//               <div>{service.icon}</div>
//               <span className="text-sm text-orange-400 font-semibold">0{index + 1}.</span>
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-bold leading-snug text-white mb-3">
//               {service.title.split(" ")[0]}{" "}
//               <span className="block">{service.title.split(" ").slice(1).join(" ")}</span>
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-gray-300 leading-relaxed">{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import Image from "next/image";

// const MarketingFeatures = () => {
//   const cards = [
//     {
//       id: "01",
//       title: "Content Marketing",
//       desc: "It aims to build brand awareness, trust, and authority by offering content that educates.",
//       icon: "/public/icons/content.svg", // optional SVG icon path
//       button: "Read More →",
//       image: "/digital9.jpg",
//     },
//     {
//       id: "02",
//       image: "/digital11.webp",
//       title: "SEO Optimization",
//       desc: "Regularly updating content and making it user-centric ensures better search engine rankings.",
//       icon: "/icons/rocket.svg",
//       button: "Read More →",
//     },
//     {
//       id: "03",
//       title: "Analytics & Report",
//       desc: "Detailed reports also break down audience demographics, traffic sources, and device.",
//       icon: "/icons/analytics.svg",
//       button: "Read More →",
//       image: "/digital12.webp",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16">
//       <div className="grid md:grid-cols-3 gap-6">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="bg-[#FAF8F6] rounded-3xl p-6 flex flex-col justify-between shadow-md"
//           >
//             <div>
//               {/* Top Icon */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="bg-white p-2 rounded-full shadow-sm">
//                   <Image src={card.icon} alt={card.title} width={30} height={30} />
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>

//               {/* Description */}
//               <p className="text-sm text-gray-600 mt-2">{card.desc}</p>

//               {/* Read More Button */}
//               <button className="mt-4 inline-flex items-center text-sm text-orange-600 border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-50 transition">
//                 {card.button}
//               </button>
//             </div>

//             {/* Bottom Image */}
//             <div className="mt-6 rounded-xl overflow-hidden">
//               <Image
//                 src={card.image}
//                 alt={`${card.title} image`}
//                 width={600}
//                 height={400}
//                 className="w-full h-48 object-cover"
//               />
//             </div>

//             {/* Large Faded Step Number */}
//             <div className="absolute text-[80px] font-bold text-gray-100 -z-10 top-6 right-6 opacity-30">
//               {card.id}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MarketingFeatures;




// // last try 
// import React from "react";
// import { FaFileAlt, FaRocket, FaChartLine, FaLightbulb, FaUsersCog } from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     title: "Content Marketing",
//     icon: <FaFileAlt className="text-orange-500 text-3xl mb-4" />,
//     description:
//       "Content marketing isn’t just about words; it’s about connection. By help into loyal customers.",
//   },
//   {
//     id: 2,
//     title: "SEO Optimization",
//     icon: <FaRocket className="text-orange-500 text-3xl mb-4" />,
//     description:
//       "We optimize every click, every keyword, and every page to a brand of search results.",
//   },
//   {
//     id: 3,
//     title: "Analytics & Report",
//     icon: <FaChartLine className="text-orange-500 text-3xl mb-4" />,
//     description:
//       "Our analytics and reporting, you’ll gain a clear picture of your the opportunities to grow.",
//   },
//   {
//     id: 4,
//     title: "Brand Strategy",
//     icon: <FaLightbulb className="text-orange-500 text-3xl mb-4" />,
//     description:
//       "Your brand’s journey starts with a powerful strategy aligns vision with impact your unique story.",
//   },
//   {
//     id: 5,
//     title: "Influencer Marketing",
//     icon: <FaUsersCog className="text-orange-500 text-3xl mb-4" />,
//     description:
//       "Turn influence into impact of With influencer marketing, we connect and your driving and brand.",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     // <section className="bg-black text-white py-16 px-4">
//     //   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//     //     {services.map((service, index) => (
//     //       <div
//     //         key={service.id}
//     //         className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl p-6 shadow-md border border-zinc-700 flex flex-col items-start justify-between h-full transition-transform hover:-translate-y-1 hover:shadow-lg"
//     //       >
//     //         <span className="text-sm text-orange-500 font-semibold mb-2">
//     //           {`0${index + 1}.`}
//     //         </span>
//     //         {service.icon}
//     //         <h3 className="text-lg font-bold mb-2">{service.title}</h3>
//     //         <p className="text-sm text-zinc-300 leading-relaxed">
//     //           {service.description}
//     //         </p>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </section>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const statsData = [
  { value: 100, label: "Trained Students" },
  { value: 50, label: "Live Projects" },
  { value: 20, label: "Expert Mentors" },
  { value: 40, label: "Workshops Conducted" },
  { value: 30, label: "Industry Collaborations" },
  { value: 60, label: "Successful Projects" },
];

const Statistics = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#003C78]">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Empowering learners with cutting-edge IT training and hands-on projects.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {statsData.map((stat, index) => (
          <div
            key={`${key}-${index}`}
            className="w-80 h-40 rounded-2xl shadow-lg flex flex-col justify-center items-center transition hover:scale-105 hover:shadow-xl"
            style={{
              background: index % 2 === 0 ? "#ED5808" : "#003C78",
            }}
          >
            {/* Number */}
            <h2 className="text-5xl font-bold text-white">
              <CountUp key={key} start={0} end={stat.value} duration={2.5} />
              +
            </h2>

            {/* Label */}
            <p className="text-lg text-white font-semibold mt-2 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;