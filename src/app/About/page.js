// import React from "react";
// import {
//   FaLaptopCode,
//   FaGlobe,
//   FaCloud,
//   FaTools,
//   FaHeadset,
//   FaDatabase,
// } from "react-icons/fa";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: <FaLaptopCode />,
//       title: "Software Development",
//       desc: "We design and build scalable, high-quality software solutions tailored to your business needs.",
//     },
//     {
//       icon: <FaGlobe />,
//       title: "Global Software Distribution",
//       desc: "We distribute and deliver innovative software solutions across industries worldwide.",
//     },
//     {
//       icon: <FaCloud />,
//       title: "Web-Based Applications",
//       desc: "Robust and scalable web applications to strengthen your digital presence.",
//     },
//     {
//       icon: <FaTools />,
//       title: "IT Solutions",
//       desc: "Flexible onsite and offshore IT services with modern infrastructure.",
//     },
//     {
//       icon: <FaHeadset />,
//       title: "IT-Enabled Services",
//       desc: "Call center, data processing, and back-office solutions for businesses.",
//     },
//     {
//       icon: <FaDatabase />,
//       title: "Data Warehousing",
//       desc: "Efficient data storage, management, and analytics solutions.",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      
//       {/* Container */}
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-[#ED5808] font-semibold uppercase tracking-wider">
//             Our Services
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#003C78] mt-2">
//             What We Do
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 
//               hover:shadow-xl transition duration-300 group"
//             >
//               {/* Icon */}
//               <div className="text-3xl mb-4 text-[#ED5808] group-hover:text-[#003C78] transition">
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-[#003C78] mb-2">
//                 {service.title}
//               </h3>

//               {/* Desc */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {service.desc}
//               </p>

//               {/* Bottom Accent */}
//               <div className="mt-4 h-1 w-10 bg-[#ED5808] group-hover:w-16 transition-all duration-300"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import Image from "next/image";
import {
  FaLaptopCode,
  FaGlobe,
  FaCloud,
  FaTools,
  FaHeadset,
  FaDatabase,
} from "react-icons/fa";

export default function AboutAndServices() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      desc: "We design and build scalable, high-quality software solutions tailored to your business needs.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Software Distribution",
      desc: "We distribute and deliver innovative software solutions across industries worldwide.",
    },
    {
      icon: <FaCloud />,
      title: "Web-Based Applications",
      desc: "Robust and scalable web applications to strengthen your digital presence.",
    },
    {
      icon: <FaTools />,
      title: "IT Solutions",
      desc: "Flexible onsite and offshore IT services with modern infrastructure.",
    },
    {
      icon: <FaHeadset />,
      title: "IT-Enabled Services",
      desc: "Call center, data processing, and back-office solutions for businesses.",
    },
    {
      icon: <FaDatabase />,
      title: "Data Warehousing",
      desc: "Efficient data storage, management, and analytics solutions.",
    },
  ];

  return (
    <>
      {/* 🔥 TOP IMAGE SECTION */}
      <section className="bg-gray-50">
        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px]">
          <Image
            src="/pro.webp"
            alt="PromoterIndia Banner"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              PromoterIndia
            </h1>
            <p className="mt-3 text-white text-sm sm:text-lg max-w-2xl">
              Driving Growth Through Smart Digital Marketing & IT Solutions
            </p>
          </div>
        </div>

        {/* 🔥 CONTAINED PARAGRAPH (NOW ABOVE SERVICES) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            <span className="font-semibold text-[#003C78]">
              PromoterIndia
            </span>{" "}
            is a leading digital marketing and IT solutions company focused on
            helping businesses grow their online presence and achieve measurable
            success. From SEO and branding to website and application
            development, we deliver innovative, result-driven solutions tailored
            to modern business needs.
          </p>
        </div>
      </section>

      {/* 🔥 SERVICES SECTION (NOW BELOW) */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-[#ED5808] font-semibold uppercase tracking-wider">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003C78] mt-2">
              What We Do
            </h2>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 
                hover:shadow-xl hover:-translate-y-2 transition duration-300 group"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 text-[#ED5808] group-hover:text-[#003C78] transition">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#003C78] mb-2">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-4 h-1 w-10 bg-[#ED5808] group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}