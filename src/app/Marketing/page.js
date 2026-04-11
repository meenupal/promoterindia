"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Local SEO?",
    answer:
      "Local SEO is the process of optimizing your online presence to attract more business from relevant local searches on Google and other search engines.",
  },
  {
    question: "How does Local SEO differ from general SEO?",
    answer:
      "Local SEO focuses on optimizing for location-specific searches and involves strategies like Google Business Profile optimization, local citations, and location-based keywords.",
  },
  {
    question: "Can Local SEO help my small business?",
    answer:
      "Absolutely. Local SEO improves your visibility in local search results, increasing traffic from nearby customers and helping you stand out among local competitors.",
  },
  {
    question: "Do you handle Google Business Profile optimization?",
    answer:
      "Yes, we optimize and manage your Google Business Profile to improve local visibility, encourage reviews, and provide accurate business info to users.",
  },
  {
    question: "How do you track the success of Local SEO efforts?",
    answer:
      "We use analytics tools to monitor local search rankings, map views, direction requests, phone calls, and other relevant metrics to evaluate performance.",
  },
];

export default function LocalSEOSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      {/* Hero Section */}
      {/* <div className="relative h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/digital19.jpg')" }}>
        <div className="absolute inset-0 bg-gray-100 bg-opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Local SEO Services</h1>
            <p className="mt-4 text-lg text-gray-800 font-medium">
              Improve your visibility in local searches and attract customers in your area with targeted SEO strategies.
            </p>
          </div>
        </div>
      </div> */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/digital19.jpg')" }} // Replace with your PPC banner
      >
        <div className=" bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl text-gray-600 sm:text-5xl font-extrabold">
          Social Media Marketing
          </h1>
          <p className="text-lg mt-4 font-medium text-gray-600">
          Boost your brand's visibility online with effective social media marketing strategies.
          </p>
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
                <li>Google Business Optimization</li>
                <li>Local Keyword Research</li>
                <li>NAP Consistency</li>
                <li>Local Citations</li>
                <li>Review Management</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-4 shadow-md text-center">
                <p className="text-xs text-gray-500">SEO Guide</p>
                <p className="font-semibold text-sm">local-seo-guide.pdf</p>
              </div>
              <div className="bg-white border rounded-xl p-4 shadow-md text-center">
                <p className="text-xs text-gray-500">Audit Report</p>
                <p className="font-semibold text-sm">site-audit.pdf</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900">Let’s Elevate Your Local Visibility!</h4>
              <button className="mt-4 w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Contact Us
              </button>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/digital20.jpg"
                alt="Local SEO"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Discovered Locally</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Local SEO empowers businesses to connect with nearby customers through optimized local search strategies.
                By enhancing your digital presence in local directories and search results, we ensure your business
                stands out when it matters most.
              </p>
            </div>

            {/* Strategy Steps */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Do It</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "STEP 01",
                    title: "Audit & Research",
                    desc: "We start with a detailed audit of your local presence and perform keyword research relevant to your location and industry.",
                  },
                  {
                    step: "STEP 02",
                    title: "Optimize Listings",
                    desc: "We enhance your Google Business Profile, local citations, and ensure accurate NAP across all platforms.",
                  },
                  {
                    step: "STEP 03",
                    title: "Track & Improve",
                    desc: "Performance is tracked via analytics, call tracking, and keyword rankings to continuously improve visibility and ROI.",
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
                      <p className="mt-2 text-gray-600 text-sm md:text-base">{faq.answer}</p>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mt-8 text-sm text-blue-600">
                <span className="cursor-pointer hover:underline">Google Business</span>
                <span className="cursor-pointer hover:underline">Local Listings</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
