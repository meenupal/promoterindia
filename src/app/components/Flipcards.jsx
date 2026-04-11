// 'use client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFlip, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-flip';
// import { motion } from 'framer-motion';
// import { FaBell, FaCogs, FaSearch, FaShieldAlt } from 'react-icons/fa';

// const cardData = [
//   {
//     icon: <FaCogs size={28} />,
//     title: 'Maximizing Results',
//     subtitle: 'with Strategies Services',
//   },
//   {
//     icon: <FaSearch size={28} />,
//     title: 'Efficient Marketing',
//     subtitle: 'for Real Business Growth',
//   },
//   {
//     icon: <FaBell size={28} />,
//     title: 'Smarter Marketing',
//     subtitle: 'for Sustainable Growth',
//   },
//   {
//     icon: <FaShieldAlt size={28} />,
//     title: 'Efficiency Meets',
//     subtitle: 'in Digital Marketing',
//   },
// ];

// const Flipcards = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-orange-900 to-black text-white py-20 px-4 md:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto text-center z-10 relative">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold mb-4"
//         >
//           Stay Ahead of the Competition<br />Smart Digital Marketing
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-lg md:text-xl text-gray-300 mb-6"
//         >
//           Social Media Integration — Expand your brand’s reach through strategic social media marketing
//         </motion.p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition mb-10"
//         >
//           GET START FOR FREE →
//         </motion.button>
//       </div>

//       {/* Card Highlights */}
//       <div className="w-full flex justify-center mb-10">
//         <div className="bg-neutral-900 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg text-sm sm:text-base">
//           Highlight specific projects or results achieved for clients.
//           <span className="text-orange-400">★★★★★</span>
//         </div>
//       </div>

//       {/* Flip Cards with Swiper */}
//       <Swiper
//         effect={'flip'}
//         grabCursor={true}
//         pagination={true}
//         modules={[EffectFlip, Pagination]}
//         className="max-w-xl md:max-w-4xl"
//       >
//         {cardData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white text-black rounded-2xl shadow-lg p-8 text-center flex flex-col items-center justify-center min-h-[250px]">
//               <div className="text-orange-500 mb-4">{card.icon}</div>
//               <h3 className="text-xl font-bold">{card.title}</h3>
//               <p className="text-gray-600">{card.subtitle}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Flipcards;

// 'use client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFlip, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-flip';
// import 'swiper/css/pagination';
// import { motion } from 'framer-motion';
// import { FaCogs, FaSearch, FaBell, FaShieldAlt } from 'react-icons/fa';

// const cardData = [
//   {
//     icon: <FaCogs size={36} />,
//     title: 'Maximizing Results',
//     subtitle: 'with Strategies Services',
//   },
//   {
//     icon: <FaSearch size={36} />,
//     title: 'Efficient Marketing',
//     subtitle: 'for Real Business Growth',
//   },
//   {
//     icon: <FaBell size={36} />,
//     title: 'Smarter Marketing',
//     subtitle: 'for Sustainable Growth',
//   },
//   {
//     icon: <FaShieldAlt size={36} />,
//     title: 'Efficiency Meets',
//     subtitle: 'in Digital Marketing',
//   },
// ];

// export default function DigiwaveFlipCards() {
//   return (
//     <section className="relative bg-gradient-to-b from-orange-900 to-black text-white py-20 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold mb-4"
//         >
//           Stay Ahead of the Competition<br />Smart Digital Marketing
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-lg md:text-xl text-gray-300 mb-6"
//         >
//           Social Media Integration — Expand your brand’s reach through strategic social media marketing
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg mb-10 transition"
//         >
//           GET START FOR FREE →
//         </motion.button>
//       </div>

//       {/* Rating Bar */}
//       <div className="w-full flex justify-center mb-10">
//         <div className="bg-neutral-900 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md text-sm sm:text-base">
//           Highlight specific projects or results achieved for clients.
//           <span className="text-orange-400">★★★★★</span>
//         </div>
//       </div>

//       {/* Grid of 4 Flip Swipers */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//         {cardData.map((card, idx) => (
//           <div key={idx} className="w-full">
//             <Swiper
//               effect="flip"
//               grabCursor={true}
//               pagination={{ clickable: true }}
//               modules={[EffectFlip, Pagination]}
//               className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
//             >
//               <SwiperSlide>
//                 <div className="bg-white text-black rounded-2xl p-8 flex flex-col items-center min-h-[260px] justify-center text-center">
//                   <div className="text-orange-500 mb-4">{card.icon}</div>
//                   <h3 className="text-xl font-semibold">{card.title}</h3>
//                   <p className="text-gray-600 mt-2">{card.subtitle}</p>
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaSearch, FaBell, FaShieldAlt } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaCogs size={36} />,
    title: 'Maximizing Results',
    subtitle: 'with Strategies Services',
    backText: 'We help you grow with strong digital strategies.',
  },
  {
    icon: <FaSearch size={36} />,
    title: 'Efficient Marketing',
    subtitle: 'for Real Business Growth',
    backText: 'Targeted solutions to maximize your ROI.',
  },
  {
    icon: <FaBell size={36} />,
    title: 'Smarter Marketing',
    subtitle: 'for Sustainable Growth',
    backText: 'Think long-term. Market smarter, not harder.',
  },
  {
    icon: <FaShieldAlt size={36} />,
    title: 'Efficiency Meets',
    subtitle: 'in Digital Marketing',
    backText: 'Secure, scalable, efficient digital tools.',
  },
];

export default function DigiwaveThreeFlipCards() {
  const [flipState, setFlipState] = useState(
    cardData.map(() => ({ flipped: false }))
  );

  const handleFlip = (index) => {
    const updated = [...flipState];
    updated[index].flipped = !updated[index].flipped;
    setFlipState(updated);
  };

  return (
    <section className="bg-gradient-to-b bg-[#d2843f] to-black text-white py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Stay Ahead of the Competition<br />Smart Digital Marketing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          Social Media Integration — Expand your brand’s reach through strategic social media marketing
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg mb-10 transition"
        >
          GET START FOR FREE →
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="perspective w-full max-w-sm mx-auto cursor-pointer"
            onMouseEnter={() => handleFlip(idx)}
            onMouseLeave={() => handleFlip(idx)}
          >
            <div
              className={`relative w-full h-64 transform-style-preserve-3d transition-transform duration-700 ${
                flipState[idx].flipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-white text-black rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl">
                <div className="text-orange-500 mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.subtitle}</p>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-orange-500 text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl">
                <p className="text-lg text-center">{card.backText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}






// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaCogs, FaSearch, FaBell, FaShieldAlt } from 'react-icons/fa';

// const cardData = [
//   {
//     icon: <FaCogs size={36} />,
//     title: 'Maximizing Results',
//     subtitle: 'with Strategies Services',
//     backText: 'We help you grow with strong digital strategies.',
//   },
//   {
//     icon: <FaSearch size={36} />,
//     title: 'Efficient Marketing',
//     subtitle: 'for Real Business Growth',
//     backText: 'Targeted solutions to maximize your ROI.',
//   },
//   {
//     icon: <FaBell size={36} />,
//     title: 'Smarter Marketing',
//     subtitle: 'for Sustainable Growth',
//     backText: 'Think long-term. Market smarter, not harder.',
//   },
//   {
//     icon: <FaShieldAlt size={36} />,
//     title: 'Efficiency Meets',
//     subtitle: 'in Digital Marketing',
//     backText: 'Secure, scalable, efficient digital tools.',
//   },
// ];

// export default function DigiwaveThreeFlipCards() {
//   const [flipState, setFlipState] = useState(
//     cardData.map(() => ({ flipped: false, count: 0 }))
//   );

//   const handleFlip = (index) => {
//     const updated = [...flipState];
//     if (updated[index].count < 3) {
//       updated[index].flipped = !updated[index].flipped;
//       updated[index].count += 1;
//       setFlipState(updated);
//     }
//   };

//   return (
//     <section className="bg-gradient-to-b bg-[#d2843f] to-black text-white py-20 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold mb-4"
//         >
//           Stay Ahead of the Competition<br />Smart Digital Marketing
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-lg md:text-xl text-gray-300 mb-6"
//         >
//           Social Media Integration — Expand your brand’s reach through strategic social media marketing
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg mb-10 transition"
//         >
//           GET START FOR FREE →
//         </motion.button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//         {cardData.map((card, idx) => (
//           <div
//             key={idx}
//             className="perspective w-full max-w-sm mx-auto"
//             onMouseEnter={() => handleFlip(idx)}
//           >
//             <div
//               className={`relative w-full h-64 transform-style-preserve-3d transition-transform duration-700 ${
//                 flipState[idx].flipped ? 'rotate-y-180' : ''
//               }`}
//             >
//               {/* Front */}
//               <div className="absolute w-full h-full backface-hidden bg-white text-black rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl">
//                 <div className="text-orange-500 mb-4">{card.icon}</div>
//                 <h3 className="text-xl font-semibold">{card.title}</h3>
//                 <p className="text-gray-600 mt-2">{card.subtitle}</p>
//               </div>

//               {/* Back */}
//               <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-orange-500 text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl">
//                 <p className="text-lg text-center">{card.backText}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .perspective {
//           perspective: 1000px;
//         }
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .rotate-y-260 {
//           transform: rotateY(260deg);
//         }
//         .rotate-y-360 {
//           transform: rotateY(360deg);
//         }
//       `}</style>
//     </section>
//   );
// }


