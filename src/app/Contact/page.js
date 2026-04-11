// // app/components/ConsultationSection.tsx
// "use client";

// import Image from "next/image";
// import { FaMapMarkerAlt, FaHeadphonesAlt, FaClock } from "react-icons/fa";

// const infoCards = [
//   {
//     icon: <FaMapMarkerAlt size={24} />,
//     title: "Office Address",
//     subtitle: "132, Tic St, Kingston, New York 12401 USA.",
//     description: "We’re passionate about helping businesses succeed in the digital space.",
//   },
//   {
//     icon: <FaHeadphonesAlt size={24} />,
//     title: "24/7 Customer Support",
//     subtitle: "+(528) 456–7592, info@example.com",
//     description: "We’re passionate about helping businesses succeed in the digital space.",
//   },
//   {
//     icon: <FaClock size={24} />,
//     title: "Business Hours",
//     subtitle: "Sat – Mon 10 am – 8 pm | Fri Off – Day",
//     description: "We’re passionate about helping businesses succeed in the digital space.",
//   },
// ];

// export default function ConsultationSection() {
//   return (
//     <>
//     <div
//         className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('/digital16.jpg')" }} // Replace with your PPC banner
//       >
//         <div className=" bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-4xl text-gray-600 sm:text-5xl font-extrabold">
//             Pay Per Click (PPC) Advertising
//           </h1>
//           <p className="text-lg mt-4 font-medium text-gray-600">
//             Maximize ROI with expertly managed Google Ads & social media campaigns.
//           </p>
//         </div>
//       </div>
//     <section className="bg-white w-full px-4 py-12 md:py-16">
//       {/* Info Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         {infoCards.map((card, idx) => (
//           <div
//             key={idx}
//             className="bg-neutral-50 border rounded-xl shadow-md p-6 text-center space-y-3"
//           >
//             <div className="bg-black text-white w-12 h-12 mx-auto flex items-center justify-center rounded-lg">
//               {card.icon}
//             </div>
//             <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
//             <p className="text-sm text-gray-600">{card.subtitle}</p>
//             <p className="text-xs text-gray-500">{card.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Consultation Form + Image */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-neutral-50 rounded-2xl overflow-hidden">
//         {/* Form */}
//         <div className="p-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
//             Free Consultation
//           </h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Name *"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="email"
//                 placeholder="Email *"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Subject *"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>
//             <textarea
//               rows={4}
//               placeholder="Message"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full text-sm transition"
//             >
//               SEND MESSAGE
//             </button>
//           </form>
//         </div>

//         {/* Image */}
//         <div className="relative h-[250px] md:my-6 sm:h-[300px] md:h-[500px]  rounded-lg shadow-md overflow-hidden mx-4 sm:mx-6 md:mx-10 xl:mx-20 mb-12">
//         <iframe
//           title="Company Location"
//            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.879468599418!2d78.04414837535522!3d30.297492774797092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929bd7e229489%3A0xd4e15727fc25d529!2sDigiwave!5e0!3m2!1sen!2sin!4v1747827496183!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//       </div>

//       </div>
//     </section>
//     </>
//   );
// }

// app/components/ConsultationSection.tsx
"use client";

import Image from "next/image";
import { FaMapMarkerAlt, FaHeadphonesAlt, FaClock } from "react-icons/fa";

const infoCards = [
  {
    icon: <FaMapMarkerAlt size={24} />,
    title: "Office Address",
    subtitle: "Digiwave, Mothorowala Rd, opp. PNB Bank, Dharmpur, Ajabpur Kalan, Dehradun, Uttarakhand 248121",
    // description:
    //   "We’re passionate about helping businesses succeed in the digital space.",
  },
  {
    icon: <FaHeadphonesAlt size={24} />,
    title: "24/7 Customer Support",
    subtitle: "+(528) 456–7592, info@example.com",
    // description:
    //   "We’re passionate about helping businesses succeed in the digital space.",
  },
  {
    icon: <FaClock size={24} />,
    title: "Business Hours",
    subtitle: "Sat – Mon 10 am – 8 pm | Fri Off – Day",
    // description:
    //   "We’re passionate about helping businesses succeed in the digital space.",
  },
];

export default function ConsultationSection() {
  return (
    <section className="bg-white">
      {/* Hero Banner */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-center relative"
        style={{ backgroundImage: "url('/contact2.jpg')" }}
      >
        <div className=" bg-opacity-80 p-8 rounded-xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Contact Us
          </h1>
          <p className="text-lg mt-4 text-white font-medium">
            Maximize ROI with expertly managed Google Ads & social media
            campaigns.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-neutral-50 border rounded-xl shadow-md p-6 text-center space-y-3"
          >
            <div className="bg-black text-white w-12 h-12 mx-auto flex items-center justify-center rounded-lg">
              {card.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.subtitle}</p>
            <p className="text-xs text-gray-500">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Form + Map Section */}
      <div className="max-w-7xl mx-auto  px-4 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-neutral-50 rounded-2xl">
        {/* Form */}
        <div className="p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Free Consultation
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Subject *"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full text-sm transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-full p-4 md:p-6">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.879468599418!2d78.04414837535522!3d30.297492774797092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929bd7e229489%3A0xd4e15727fc25d529!2sDigiwave!5e0!3m2!1sen!2sin!4v1747827496183!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
