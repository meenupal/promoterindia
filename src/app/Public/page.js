"use client";

import Image from 'next/image';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Public Relations (PR)?",
    answer:
      "PR involves managing a company's reputation through media coverage, strategic communication, and relationship building with stakeholders and the public.",
  },
  {
    question: "How does PR differ from advertising?",
    answer:
      "Advertising is paid promotion, while PR focuses on earned media and public perception through trust-building and credibility.",
  },
  {
    question: "Why is PR important for businesses?",
    answer:
      "PR helps build brand reputation, manage crises, and foster trust with customers, investors, and the public.",
  },
  {
    question: "What channels are used in PR strategies?",
    answer:
      "Common channels include press releases, media interviews, events, social media, newsletters, and influencer partnerships.",
  },
  {
    question: "Do you offer crisis communication services?",
    answer:
      "Yes, we help clients prepare for and manage crises through strategic messaging and real-time media handling.",
  },
];
 

export default function PublicRelationsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className=" bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Public Relations (PR)</h1>
          <p className="text-lg mt-4 font-medium">
            Enhance your brand's image and credibility through expert public relations strategies.
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
                <li>Media Relations</li>
                <li>Brand Positioning</li>
                <li>Crisis Management</li>
                <li>Event Management</li>
                <li>Reputation Monitoring</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-3 shadow-sm text-center">
                <p className="text-xs text-gray-500">PR Toolkit</p>
                <p className="font-semibold">resources.pdf</p>
              </div>
              <div className="bg-white border rounded-xl p-3 shadow-sm text-center">
                <p className="text-xs text-gray-500">Strategy Plan</p>
                <p className="font-semibold">plan.pdf</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900">Let’s Build Your Brand!</h4>
              <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-xl overflow-hidden">
              <Image src="/digital11.webp" alt="Public Relations" width={800} height={400} className="w-full h-auto object-cover rounded-xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Build Trust and Credibility</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                PR is the voice of your brand that shapes public perception and builds authentic relationships. Whether through media outreach, thought leadership, or storytelling, a well-executed PR strategy establishes credibility and connects your business with its audience. Effective public relations also enhances brand recall and helps position your company as an industry leader.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Effective PR in Action</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">STEP 01</p>
                  <h4 className="text-lg font-semibold mb-2">Craft the Message</h4>
                  <p className="text-sm text-gray-700">Create compelling press releases, brand narratives, and statements that reflect your values and goals.</p>
                </div>

                {/* Card 2 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">STEP 02</p>
                  <h4 className="text-lg font-semibold mb-2">Media Outreach</h4>
                  <p className="text-sm text-gray-700">Connect with journalists, bloggers, and influencers to get your brand featured in reputable publications.</p>
                </div>

                {/* Card 3 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">STEP 03</p>
                  <h4 className="text-lg font-semibold mb-2">Monitor & Respond</h4>
                  <p className="text-sm text-gray-700">Track brand mentions, measure public sentiment, and respond proactively to media or customer feedback.</p>
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
                <span className="cursor-pointer hover:underline">Media Outreach</span>
                <span className="cursor-pointer hover:underline">Reputation Management</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
