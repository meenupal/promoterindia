"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is brand awareness?",
    answer:
      "Brand awareness is the extent to which your target audience recognizes and remembers your brand. It's a key factor in gaining customer trust and loyalty.",
  },
  {
    question: "Why is brand consistency important?",
    answer:
      "Consistent branding builds trust and recognition, helping customers connect emotionally with your brand across all platforms and campaigns.",
  },
  {
    question: "Do you offer social media branding?",
    answer:
      "Yes, we create cohesive and impactful social media strategies that reinforce your brand identity and voice across channels.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Building brand awareness takes time, but with the right strategy, most clients see noticeable engagement and recognition growth within 3-6 months.",
  },
  {
    question: "Can you help with rebranding?",
    answer:
      "Absolutely. We guide you through a complete rebranding process, from visual identity and messaging to marketing execution.",
  },
];

export default function BrandAwarenessSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/digital21.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Brand Awareness Services
            </h1>
            <p className="mt-4 text-lg text-gray-800 font-medium">
              Elevate your brand presence and connect meaningfully with your audience across all platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="w-full px-4 py-12 lg:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white border rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Services List</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Brand Strategy</li>
                <li>Visual Identity</li>
                <li>Social Media Presence</li>
                <li>Influencer Marketing</li>
                <li>Content Campaigns</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-4 shadow-md text-center">
                <p className="text-xs text-gray-500">Brand Kit</p>
                <p className="font-semibold text-sm">brand-assets.pdf</p>
              </div>
              <div className="bg-white border rounded-xl p-4 shadow-md text-center">
                <p className="text-xs text-gray-500">Strategy Outline</p>
                <p className="font-semibold text-sm">brand-strategy.pdf</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900">Want to Boost Brand Visibility?</h4>
              <button className="mt-4 w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Contact Us
              </button>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/digital22.webp"
                alt="Brand Awareness Strategy"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Make Your Brand Unforgettable</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                We help businesses craft a memorable identity that leaves a lasting impression. From strategy to social media
                and influencer campaigns, we build brand trust and recognition that turns followers into advocates.
              </p>
            </div>

            {/* Strategy Steps */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Awareness Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "STEP 01",
                    title: "Brand Discovery",
                    desc: "We analyze your current presence, competitors, and audience to define your unique brand voice and position.",
                  },
                  {
                    step: "STEP 02",
                    title: "Engagement Plan",
                    desc: "We craft a multi-platform content and media strategy to drive recognition and customer interaction.",
                  },
                  {
                    step: "STEP 03",
                    title: "Measure & Evolve",
                    desc: "We track awareness metrics, refine messaging, and scale winning tactics for long-term impact.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 border rounded-xl bg-white shadow-sm">
                    <p className="text-orange-500 font-bold text-sm mb-1">{item.step}</p>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="pt-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                FAQs: Everything You Need to Know
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
                      <p className="mt-2 text-gray-600 text-sm md:text-base">{faq.answer}</p>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mt-8 text-sm text-blue-600">
                <span className="cursor-pointer hover:underline">Influencer Partnerships</span>
                <span className="cursor-pointer hover:underline">Social Campaigns</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
