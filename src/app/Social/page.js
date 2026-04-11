"use client";

import Image from 'next/image';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Social Media Marketing (SMM)?",
    answer:
      "SMM involves using social media platforms to promote products, services, and brands to reach and engage with target audiences.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "We manage Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok, depending on your audience and campaign goals.",
  },
  {
    question: "How often should we post on social media?",
    answer:
      "Consistency is key. We recommend at least 3-5 posts per week, but the frequency can vary depending on your strategy and platform.",
  },
  {
    question: "Do you create content for social media?",
    answer:
      "Yes, we provide custom content including graphics, videos, and copywriting to align with your brand voice and objectives.",
  },
  {
    question: "How do you measure SMM performance?",
    answer:
      "We track engagement rates, follower growth, reach, conversions, and use analytics tools to report performance and optimize strategies.",
  },
];

export default function SocialMediaSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/digital16.webp')" }}
      >
        <div className=" bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl sm:text-5xl text-black font-extrabold">Social Media Marketing</h1>
          <p className="text-lg mt-4 font-medium">
            Build brand awareness, drive traffic, and boost engagement across your social media platforms.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="w-full px-4 py-10 lg:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Services List</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Content Creation</li>
                <li>Social Media Strategy</li>
                <li>Community Management</li>
                <li>Ad Campaigns</li>
                <li>Performance Analytics</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-3 shadow-sm text-center">
                <p className="text-xs text-gray-500">SMM Calendar</p>
                <p className="font-semibold">monthly.pdf</p>
              </div>
              <div className="bg-white border rounded-xl p-3 shadow-sm text-center">
                <p className="text-xs text-gray-500">Media Kit</p>
                <p className="font-semibold">media-kit.pdf</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900">Let’s Boost Your Social Game!</h4>
              <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-xl overflow-hidden">
              <Image src="/digital15.webp" alt="Social Media Marketing" width={500} height={200} className="w-full h-auto object-cover rounded-xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Grow Your Brand's Online Presence</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Social media marketing allows your business to connect with its audience where they spend most of their time—online. Through a combination of strategic planning, engaging content, and timely interaction, brands can cultivate a loyal following, encourage word-of-mouth, and build credibility. From daily posts to sponsored ads, every effort counts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drive Real Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">STEP 01</p>
                  <h4 className="text-lg font-semibold mb-2">Build Your Strategy</h4>
                  <p className="text-sm text-gray-700">We begin by understanding your brand voice, audience, and goals to craft a tailored content calendar.</p>
                </div>

                {/* Card 2 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">STEP 02</p>
                  <h4 className="text-lg font-semibold mb-2">Engage Authentically</h4>
                  <p className="text-sm text-gray-700">Real-time replies, stories, polls, and creative visuals encourage two-way engagement and trust.</p>
                </div>

                {/* Card 3 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">STEP 03</p>
                  <h4 className="text-lg font-semibold mb-2">Analyze & Improve</h4>
                  <p className="text-sm text-gray-700">We review campaign metrics and audience insights to refine your approach and boost ROI.</p>
                </div>

              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto  px-2 pt-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                FAQs: Your Questions Answered
              </h3>

              <ul className="space-y-4">
                {faqs.map((faq, index) => (
                  <li key={index} className="border-b pb-4">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex justify-between items-center text-left text-gray-800 font-semibold text-base md:text-lg"
                    >
                      <span>{faq.question}</span>
                      {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {openIndex === index && (
                      <p className="mt-2 text-gray-600 text-sm md:text-base">
                        {faq.answer}
                      </p>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mt-8 text-sm text-blue-600">
                <span className="cursor-pointer hover:underline">Content Strategy</span>
                <span className="cursor-pointer hover:underline">Community Engagement</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
