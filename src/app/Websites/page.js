"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What does website development include?",
    answer:
      "Website development includes designing, coding, and deploying responsive websites tailored to your business goals using the latest technologies.",
  },
  {
    question: "Do you offer custom website design?",
    answer:
      "Yes, we specialize in custom website designs that align with your brand identity and deliver exceptional user experiences.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All our websites are fully responsive, ensuring seamless performance across desktops, tablets, and smartphones.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Yes, we can integrate a user-friendly CMS like WordPress or headless solutions, allowing you to manage content without technical knowledge.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer ongoing maintenance, including updates, backups, security patches, and performance monitoring.",
  },
];

export default function WebsiteDevelopmentSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      {/* Hero Section */}
      {/* <div
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/digital24.webp')" }}
      >
        <div className="absolute inset-0 bg-gray-100 bg-opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Website Development Services
            </h1>
            <p className="mt-4 text-lg text-gray-800 font-medium">
              Build a high-performance, scalable, and engaging website that powers your digital presence.
            </p>
          </div>
        </div>
      </div> */}
       <div
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/digital25.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white ">
            Website Development Services
            </h1>
            <p className="mt-4 text-lg text-white font-medium">
            Build a high-performance, scalable, and engaging website that powers your digital presence.
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
                <li>Custom Web Design</li>
                <li>Responsive Development</li>
                <li>E-commerce Solutions</li>
                <li>CMS Integration</li>
                <li>Website Maintenance</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-4 shadow-md text-center">
                <p className="text-xs text-gray-500">Design Portfolio</p>
                <p className="font-semibold text-sm">design-showcase.pdf</p>
              </div>
              <div className="bg-white border rounded-xl p-4 shadow-md text-center">
                <p className="text-xs text-gray-500">Dev Checklist</p>
                <p className="font-semibold text-sm">web-dev-checklist.pdf</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900">Ready to Launch Your Website?</h4>
              <button className="mt-4 w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Contact Us
              </button>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/digital27.jpg"
                alt="Website Development"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Craft a Site That Converts</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our team designs and develops custom websites that captivate users and drive results. Whether you're
                launching a new product, building an online store, or upgrading your existing site, we bring your vision
                to life with modern design and robust functionality.
              </p>
            </div>

            {/* Strategy Steps */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Development Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "STEP 01",
                    title: "Planning & Strategy",
                    desc: "We begin with discovery and planning, outlining site goals, audience, and features before moving to design.",
                  },
                  {
                    step: "STEP 02",
                    title: "Design & Build",
                    desc: "Custom UI/UX design followed by development using modern frameworks for speed, responsiveness, and SEO.",
                  },
                  {
                    step: "STEP 03",
                    title: "Launch & Maintain",
                    desc: "After testing, we deploy your site and offer continuous support for updates, security, and improvements.",
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
                <span className="cursor-pointer hover:underline">Responsive Design</span>
                <span className="cursor-pointer hover:underline">WordPress & CMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
