// "use client";
// import Image from "next/image";

// export default function ExpoGallery() {
//   const images = [
//     "/expo.jpeg",
//     "/expo1.jpeg",
//     "/expo2.jpeg",
//     "/expo3.jpeg",
//     "/expo4.jpeg",
//     "/expo5.jpeg",
//     "/expo6.jpeg",


//   ];

//   return (
//     <div className="bg-gradient-to-br from-[#0f172a] via-[#eef0fa] to-white py-20 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
//           Expo Highlights
//         </h2>
//         <p className="text-center text-gray-400 mb-14">
//           Experience our exhibitions through stunning moments
//         </p>

//         {/* Masonry Layout */}
//         <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="relative group break-inside-avoid overflow-hidden rounded-2xl"
//             >
//               {/* Image */}
//               <Image
//                 src={src}
//                 alt="expo"
//                 width={500}
//                 height={500}
//                 className="w-full h-auto rounded-2xl object-cover 
//                 transition duration-500 ease-in-out 
//                 group-hover:scale-110"
//               />

//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               {/* Text Overlay */}
//               <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-500">
//                 <p className="text-white font-semibold text-sm">
//                   Expo Moment #{index + 1}
//                 </p>
//               </div>

//               {/* Glow Shadow Effect */}
//               <div className="absolute inset-0 rounded-2xl shadow-[0_0_25px_rgba(255,115,0,0.3)] opacity-0 group-hover:opacity-100 transition duration-500"></div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import Image from "next/image";

// export default function ExpoGallery() {
//   const images = [
//     "/expo.jpeg",
//     "/expo1.jpeg",
//     "/expo2.jpeg",
//     "/expo3.jpeg",
//     "/expo4.jpeg",
//     "/expo5.jpeg",
//     "/expo6.jpeg",
//   ];

//   return (
//     <div className="bg-gradient-to-br from-[#0f172a] via-[#eef0fa] to-white py-20">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
//           Expo Highlights
//         </h2>
//         <p className="text-center text-gray-600 mb-12">
//           Experience our exhibitions through stunning moments
//         </p>

//         {/* Slider */}
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{ delay: 2500 }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {images.map((src, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative group overflow-hidden rounded-2xl shadow-xl">

//                 <Image
//                   src={src}
//                   alt="expo"
//                   width={500}
//                   height={500}
//                   className="w-full h-[350px] object-cover 
//                   transition duration-500 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

//                 {/* Text */}
//                 <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
//                   <p className="text-white font-semibold">
//                     Expo Moment #{index + 1}
//                   </p>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </div>
//   );
// }




// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay, Navigation } from "swiper/modules";
// import Image from "next/image";

// export default function ExpoGallery() {
//   const images = [
//     "/expo.jpeg",
//     "/expo1.jpeg",
//     "/expo2.jpeg",
//     "/expo3.jpeg",
//     "/expo4.jpeg",
//     "/expo5.jpeg",
//     "/expo6.jpeg",
//   ];

//   return (
//     <div className="bg-gradient-to-br from-[#0f172a] via-[#eef0fa] to-white py-20">
//       <div className="max-w-7xl mx-auto px-4 relative">

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
//           Expo Highlights
//         </h2>
//         <p className="text-center text-gray-600 mb-12">
//           Experience our exhibitions through stunning moments
//         </p>

//         {/* Navigation Buttons */}
//         <div className="swiper-button-prev custom-btn"></div>
//         <div className="swiper-button-next custom-btn"></div>

//         {/* Slider */}
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           loop={true}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {images.map((src, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition">

//                 {/* Image */}
//                 <Image
//                   src={src}
//                   alt="expo"
//                   width={500}
//                   height={500}
//                   onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
//                   className="w-full h-[350px] object-cover bg-gray-200 rounded-2xl 
//                   transition duration-500 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//                 {/* Text */}
//                 <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-500">
//                   <p className="text-white font-semibold">
//                     Expo Moment #{index + 1}
//                   </p>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>

//       {/* Custom Button Styling */}
//       <style jsx global>{`
//         .custom-btn {
//           background: white;
//           width: 45px;
//           height: 45px;
//           border-radius: 50%;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//         }

//         .custom-btn::after {
//           font-size: 18px;
//           color: black;
//         }

//         .custom-btn:hover {
//           background: #ff7a00;
//         }

//         .custom-btn:hover::after {
//           color: white;
//         }
//       `}</style>
//     </div>
//   );
// }




"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ExpoGallery() {
  const images = [
    "/expo.jpeg",
    "/expo1.jpeg",
    "/expo2.jpeg",
    "/expo3.jpeg",
    "/expo4.jpeg",
    "/expo12.jpeg",
    "/expo6.jpeg",
  ];

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#eef0fa] to-white py-20">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#003C78] mb-4">
        Our Exhibition Journey
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Experience our exhibitions through stunning moments
        </p>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev custom-btn"></div>
        <div className="swiper-button-next custom-btn"></div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition">

                {/* Image */}
                <Image
                  src={src}
                  alt="expo"
                  width={500}
                  height={500}
                  onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
                  className="w-full h-[350px] object-cover bg-gray-200 rounded-2xl 
                  transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Text */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-500">
                  <p className="text-white font-semibold">
                    Expo Moment #{index + 1}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Custom Button Styling */}
      <style jsx global>{`
        .custom-btn {
          background: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .custom-btn::after {
          font-size: 18px;
          color: black;
        }

        .custom-btn:hover {
          background: #ff7a00;
        }

        .custom-btn:hover::after {
          color: white;
        }
      `}</style>
    </div>
  );
}