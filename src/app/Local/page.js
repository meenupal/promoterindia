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
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/digital17.jpg')" }}
      >
        <div className="bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl sm:text-5xl text-black font-extrabold">
            Local SEO Services
          </h1>
          <p className="text-lg mt-4 text-black font-medium">
            Improve your visibility in local searches and attract customers in
            your area with targeted SEO strategies.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="w-full px-4 py-10 lg:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Services List
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Google Business Optimization</li>
                <li>Local Keyword Research</li>
                <li>NAP Consistency</li>
                <li>Local Citations</li>
                <li>Review Management</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-3 shadow-sm text-center">
                <p className="text-xs text-gray-500">SEO Guide</p>
                <p className="font-semibold">local-seo-guide.pdf</p>
              </div>
              <div className="bg-white border rounded-xl p-3 shadow-sm text-center">
                <p className="text-xs text-gray-500">Audit Report</p>
                <p className="font-semibold">site-audit.pdf</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900">
                Let’s Elevate Your Local Visibility!
              </h4>
              <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/digital18.webp"
                alt="Local SEO"
                width={500}
                height={200}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get Discovered Locally
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Local SEO empowers businesses to connect with nearby customers
                through optimized local search strategies. By enhancing your
                digital presence in local directories and search results, we
                ensure your business stands out when it matters most.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How We Do It
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Step 1 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">
                    STEP 01
                  </p>
                  <h4 className="text-lg font-semibold mb-2">
                    Audit & Research
                  </h4>
                  <p className="text-sm text-gray-700">
                    We start with a detailed audit of your local presence and
                    perform keyword research relevant to your location and
                    industry.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">
                    STEP 02
                  </p>
                  <h4 className="text-lg font-semibold mb-2">
                    Optimize Listings
                  </h4>
                  <p className="text-sm text-gray-700">
                    We enhance your Google Business Profile, local citations,
                    and ensure accurate NAP across all platforms.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">
                    STEP 03
                  </p>
                  <h4 className="text-lg font-semibold mb-2">
                    Track & Improve
                  </h4>
                  <p className="text-sm text-gray-700">
                    Performance is tracked via analytics, call tracking, and
                    keyword rankings to continuously improve visibility and ROI.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-2 pt-10">
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
                      {openIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
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
                <span className="cursor-pointer hover:underline">
                  Google Business
                </span>
                <span className="cursor-pointer hover:underline">
                  Local Listings
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
