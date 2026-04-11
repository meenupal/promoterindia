"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is SEO and why is it important?",
    answer:
      "SEO stands for Search Engine Optimization. It involves optimizing content, keywords, and technical aspects of a website to align with search engine algorithms and improve visibility in search results.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "Typically, noticeable improvements take 3 to 6 months, but timelines vary depending on competition, strategy, and website history.",
  },
  {
    question: "What is the difference between SEO and PPC?",
    answer:
      "SEO generates organic traffic over time, while PPC (Pay-Per-Click) provides instant visibility by paying for ad placements in search results.",
  },
  {
    question: "How do you measure the success of SEO campaigns?",
    answer:
      "We track rankings, organic traffic, conversion rates, and use tools like Google Analytics, Search Console, and SEMrush to report performance.",
  },
  {
    question: "How much do your SEO services cost?",
    answer:
      "Our pricing varies based on the scope of work, competition, and goals. Contact us for a custom quote tailored to your business.",
  },
];

export default function MarketingSection() {
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
        <div className="bg-black bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Search Engine Optimization
          </h1>
          <p className="text-lg mt-4 font-medium">
            Elevate your online visibility and improve your search engine
            rankings with professional SEO services.
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
                <li>Content Marketing</li>
                <li>Analytics & Report</li>
                <li>SEO Optimization</li>
                <li>Influencer Marketing</li>
                <li>Project Planning</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-3 shadow-sm text-center">
                <p className="text-xs text-gray-500">Business Brochure</p>
                <p className="font-semibold">dec 01.pdf</p>
              </div>
              <div className="bg-white border rounded-xl p-3 shadow-sm text-center">
                <p className="text-xs text-gray-500">Company Flow</p>
                <p className="font-semibold">pdf</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900">
                Start Your Journey to Success!
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
                src="/digital12.webp"
                alt="Marketing"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Engage and Grow Your Audience
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Consistently providing useful information and sincere
                interaction encourages people to return and interact with your
                brand. Social media provides a powerful medium for engagement,
                allowing businesses to directly connect with followers through
                comments, polls, and visual interactions. Additionally,
                personalized communication, such as email marketing or custom
                offers, helps build stronger connections. Leveraging
                user-generated content can further enhance trust.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Create Valuable Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">
                    STEP 01
                  </p>
                  <h4 className="text-lg font-semibold mb-2">
                    Attract Quality Leads
                  </h4>
                  <p className="text-sm text-gray-700">
                    It begins with understanding your ideal customer profile and
                    targeting prospects who are more likely to convert into
                    loyal.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">
                    STEP 02
                  </p>
                  <h4 className="text-lg font-semibold mb-2">
                    Paid Search Ads
                  </h4>
                  <p className="text-sm text-gray-700">
                    These ads are displayed when users search for relevant
                    terms, allowing businesses to target high-intent audiences.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  <p className="text-orange-500 font-bold text-sm mb-2">
                    STEP 03
                  </p>
                  <h4 className="text-lg font-semibold mb-2">
                    PPC Advertising
                  </h4>
                  <p className="text-sm text-gray-700">
                    This model allows businesses to gain immediate visibility on
                    search engines, social media platforms, and other online
                    spaces.
                  </p>
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
                  Digital Marketing
                </span>
                <span className="cursor-pointer hover:underline">
                  SEO Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

