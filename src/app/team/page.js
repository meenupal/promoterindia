import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Meenu Pal",
      role: "Web Developer",
      image: "/team/meenu.jpg",
    },
    {
      name: "Saad Shafi",
      role: "Video Editor",
      image: "/team/saad.jpg",
    },
    {
      name: "Fatima",
      role: "Graphic Designer",
      image: "/team/fatima.jpg",
    },
    {
      name: "Gaurav Sir",
      role: "Marketing Manager",
      image: "/team/gaurav.jpg",
    },
    {
      name: "Deepa",
      role: "Marketing Executive",
      image: "/team/deepa.jpg",
    },
    {
      name: "Khushi",
      role: "Team Member",
      image: "/team/khushi.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 text-center hover:shadow-2xl transition duration-300"
          >
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold">
              {member.name}
            </h2>
            <p className="text-gray-500">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}