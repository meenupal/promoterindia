"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa";

const faqs = [
  {
    question: "What is celebrity endorsement?",
    answer:
      "Celebrity endorsement is a marketing strategy where famous personalities promote your brand to increase trust and visibility.",
  },
  {
    question: "How does it benefit my business?",
    answer:
      "It boosts brand credibility, increases reach, and attracts more customers through influencer trust.",
  },
  {
    question: "Which celebrities can you provide?",
    answer:
      "We connect brands with actors, influencers, athletes, and public figures based on your niche.",
  },
  {
    question: "Is it suitable for small businesses?",
    answer:
      "Yes, we offer scalable solutions including micro-influencers for smaller budgets.",
  },
];

export default function CelebrityEndorsement() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* HERO */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/cele.jpg')" }}
      >
        <div className=" p-10 rounded-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Celebrity Endorsement Services
          </h1>
          <p className="mt-4 text-gray-700">
            Build trust and boost brand visibility with powerful celebrity collaborations.
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="w-full px-4 py-12 lg:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-white border rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Services List</h3>
              <ul className="space-y-2 text-sm">
                <li>⭐ Celebrity Promotions</li>
                <li>📢 Brand Campaigns</li>
                <li>👥 Influencer Marketing</li>
                <li>🎬 Video Endorsements</li>
                <li>📱 Social Media Collaborations</li>
              </ul>
            </div>

            <div className="bg-[#FFEDE5] border-l-4 border-[#EC5609] p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900">
                Book Celebrity Campaign Today!
              </h4>
              <button className="mt-4 px-4 py-2 bg-[#EC5609] text-white rounded-full hover:bg-[#D94E08] transition">
                Contact Us
              </button>
            </div>

          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE */}
            <Image
              src="/promo.jpg"

              alt="Celebrity Endorsement"
              width={800}
              height={400}
              className="rounded-xl"
            />

            {/* TEXT */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Elevate Your Brand with Celebrity Power
              </h2>
              <p className="text-gray-700">
                Our celebrity endorsement services connect your brand with influential personalities.
                From actors to influencers, we help you reach massive audiences and build trust instantly.
              </p>
            </div>

            {/* STEPS */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Our Process in 3 Steps
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="p-4 border rounded-xl shadow-sm">
                  <FaUsers className="text-[#EC5609] text-3xl mb-2" />
                  <p className="text-[#EC5609] font-bold text-sm">STEP 01</p>
                  <h4 className="font-semibold">Celebrity Selection</h4>
                  <p className="text-sm text-gray-600">
                    We match your brand with the right celebrity or influencer.
                  </p>
                </div>

                <div className="p-4 border rounded-xl shadow-sm">
                  <FaBullhorn className="text-[#EC5609] text-3xl mb-2" />
                  <p className="text-[#EC5609] font-bold text-sm">STEP 02</p>
                  <h4 className="font-semibold">Campaign Execution</h4>
                  <p className="text-sm text-gray-600">
                    Launch powerful campaigns across digital & media platforms.
                  </p>
                </div>

                <div className="p-4 border rounded-xl shadow-sm">
                  <FaStar className="text-[#EC5609] text-3xl mb-2" />
                  <p className="text-[#EC5609] font-bold text-sm">STEP 03</p>
                  <h4 className="font-semibold">Performance Growth</h4>
                  <p className="text-sm text-gray-600">
                    Track engagement and maximize brand visibility.
                  </p>
                </div>

              </div>
            </div>

            {/* FAQ */}
            <div className="pt-10">
              <h3 className="text-2xl font-bold mb-6">
                FAQs: Celebrity Endorsement
              </h3>

              {faqs.map((faq, index) => (
                <div key={index} className="border-b py-4">
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between w-full font-semibold"
                  >
                    {faq.question}
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {openIndex === index && (
                    <p className="mt-2 text-gray-600 text-sm">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}