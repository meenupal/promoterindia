"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What types of applications do you develop?",
    answer:
      "We specialize in web apps, mobile apps (iOS & Android), SaaS platforms, and custom business software tailored to your unique needs.",
  },
  {
    question: "Do you offer full-stack development?",
    answer:
      "Yes, our team handles both frontend and backend development, including UI/UX, API integrations, and cloud deployments.",
  },
  {
    question: "Can you redesign an existing app?",
    answer:
      "Absolutely. We offer app audits and modernize legacy apps with improved performance, security, and user experience.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on complexity. Most app development projects range from 6 to 16 weeks from discovery to launch.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and scaling support to ensure your application continues to grow successfully.",
  },
];

export default function ApplicationDevelopmentSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Application.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-100 bg-opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Application Development Services
            </h1>
            <p className="mt-4 text-lg text-gray-800 font-medium">
              Build scalable, secure, and user-friendly applications tailored to your business needs.
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
                <li>Custom Web Apps</li>
                <li>Mobile App Development</li>
                <li>SaaS Platform Development</li>
                <li>UI/UX Design</li>
                <li>App Testing & QA</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-4 shadow-md text-center">
                <p className="text-xs text-gray-500">Development Plan</p>
                <p className="font-semibold text-sm">dev-roadmap.pdf</p>
              </div>
              <div className="bg-white border rounded-xl p-4 shadow-md text-center">
                <p className="text-xs text-gray-500">Design Toolkit</p>
                <p className="font-semibold text-sm">ui-kit.pdf</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900">Have a Project in Mind?</h4>
              <button className="mt-4 w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Let's Talk
              </button>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/digital28.jpg"
                alt="Application Development"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Bring Your App Ideas to Life</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                From discovery to deployment, we create high-performing applications that solve real business challenges.
                Our agile approach ensures flexibility, innovation, and faster time to market.
              </p>
            </div>

            {/* Strategy Steps */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Development Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "STEP 01",
                    title: "Project Discovery",
                    desc: "We understand your goals, target audience, and technical needs to shape a solid development blueprint.",
                  },
                  {
                    step: "STEP 02",
                    title: "Design & Development",
                    desc: "Our team designs intuitive UIs and builds robust, scalable applications using modern tech stacks.",
                  },
                  {
                    step: "STEP 03",
                    title: "Launch & Support",
                    desc: "We test rigorously, deploy securely, and offer post-launch support and upgrades as your app grows.",
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
                <span className="cursor-pointer hover:underline">UI/UX Design</span>
                <span className="cursor-pointer hover:underline">Backend Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
