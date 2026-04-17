// import Image from "next/image";

// export default function Team() {
//   const team = [
//     {
//       name: "Meenu Pal",
//       role: "Web Developer",
//       image: "/user.jpg",
//     },
//     {
//       name: "Saad Shafi",
//       role: "Video Editor",
//       image: "/user.jpg",
//     },
//     {
//       name: "Fatima",
//       role: "Graphic Designer",
//       image: "/user.jpg",
//     },
//     {
//       name: "Gaurav Sir",
//       role: "Marketing Manager",
//       image: "/user.jpg",
//     },
//     {
//       name: "Deepa",
//       role: "Marketing Executive",
//       image: "/user.jpg",
//     },
//     {
//       name: "Khushi",
//       role: "Team Member",
//       image: "/user.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5">
//       <h1 className="text-3xl font-bold text-center mb-10">
//         Our Team
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {team.map((member, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg p-5 text-center hover:shadow-2xl transition duration-300"
//           >
//             <div className="w-32 h-32 mx-auto mb-4 relative">
//               <Image
//                 src={member.image}
//                 alt={member.name}
//                 fill
//                 className="rounded-full object-cover"
//               />
//             </div>

//             <h2 className="text-xl font-semibold">
//               {member.name}
//             </h2>
//             <p className="text-gray-500">
//               {member.role}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Meenu Pal",
      role: "Web Developer",
      desc: "Building fast, modern and responsive web applications using latest technologies.",
      image: "/user.jpg",
    },
    {
      name: "Saad Shafi",
      role: "Video Editor",
      desc: "Crafting engaging videos with smooth transitions and creative storytelling.",
      image: "/user.jpg",
    },
    {
      name: "Fatima",
      role: "Graphic Designer",
      desc: "Designing visually stunning graphics and brand identities.",
      image: "/user.jpg",
    },
    {
      name: "Gaurav Sir",
      role: "Marketing Manager",
      desc: "Driving growth through strategic marketing and brand positioning.",
      image: "/user.jpg",
    },
    {
      name: "Deepa",
      role: "Marketing Executive",
      desc: "Executing campaigns and managing client communications effectively.",
      image: "/user.jpg",
    },
    {
      name: "Khushi",
      role: "Team Member",
      desc: "Supporting team operations and ensuring smooth workflow.",
      image: "/user.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-14 px-6">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Meet Our Team
      </h1>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 w-full max-w-xs mx-auto"
          >
            {/* Image */}
            <div className="w-28 h-28 mx-auto mb-4 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-orange-500"
              />
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold">
              {member.name}
            </h2>

            {/* Role */}
            <p className="text-sm text-orange-600 font-medium mb-2">
              {member.role}
            </p>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {member.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}