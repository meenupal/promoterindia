"use client";

import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Trademark Registration Complete Guide",
    slug: "trademark-registration",
    description: "Learn how to legally protect your brand name and logo with trademark registration.",
    image: "/trek.webp",
  },
  {
    id: 2,
    title: "MSME Registration Benefits",
    slug: "msme-registration",
    description: "Discover the benefits of MSME registration for small and medium-sized businesses.",
    image: "/MSME.jpeg",
  },
  {
    id: 3,
    title: "Food License (FSSAI) Guide",
    slug: "food-license",
    description: "Understand why an FSSAI license is essential for starting and running a food business.",
    image: "/food.jpg",
  },
  {
    id: 4,
    title: "What is Health Insurance?",
    slug: "health-insurance",
    description: "Learn how health insurance helps cover medical expenses during emergencies.",
    image: "/health.jpg",
  },
  {
    id: 5,
    title: "Importance of Life Insurance",
    slug: "life-insurance",
    description: "Explore how life insurance ensures financial security for your family.",
    image: "/life.jpg",
  },
  {
    id: 6,
    title: "Vehicle Insurance Guide",
    slug: "vehicle-insurance",
    description: "Understand the benefits and rules of car and bike insurance coverage.",
    image: "/auto.jpg",
  },
];

// const blogPosts = [
//   {
//     id: 1,
//     title: "Trademark Registration Complete Guide",
//     slug: "trademark-registration",
//     description: "Apne brand name aur logo ko legally protect kaise kare.",
//     image: "/trek.webp",
//   },
//   {
//     id: 2,
//     title: "MSME Registration Benefits",
//     slug: "msme-registration",
//     description: "Small business ke liye MSME registration ke fayde.",
//     image: "/MSME.jpeg",
//   },
//   {
//     id: 3,
//     title: "Food License (FSSAI) Kaise Le",
//     slug: "food-license",
//     description: "Food business ke liye license lena kyu zaroori hai.",
//     image: "/food.jpg",
//   },
//   {
//     id: 4,
//     title: "Health Insurance Kya Hai",
//     slug: "health-insurance",
//     description: "Medical emergency me insurance kaise help karta hai.",
//     image: "/health.jpg",
//   },
//   {
//     id: 5,
//     title: "Life Insurance Importance",
//     slug: "life-insurance",
//     description: "Family financial security ke liye life insurance.",
//     image: "/life.jpg",
//   },
//   {
//     id: 6,
//     title: "Vehicle Insurance Guide",
//     slug: "vehicle-insurance",
//     description: "Car ya bike insurance ke benefits aur rules.",
//     image: "/auto.jpg",
//   },
// ];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔥 Top Image Banner */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/blog.jpg"
          alt="Blog Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Our Services Blog
          </h1>
        </div>
      </div>

      {/* 🔹 Sub Heading */}
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">
          TRADEMARK | MSME | FOOD LICENSE | INSURANCE SERVICES
        </p>
      </div>

      {/* 🔹 Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-bold mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.description}
              </p>

              <Link href={`/blog/${post.slug}`}>
                {/* <button className="bg-[#F54A00] text-white px-4 py-2 rounded-lg">
                  Read More
                </button> */}
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}