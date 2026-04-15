"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide Trademark Registration, MSME Registration, Food License, and Insurance Services.",
  },
  {
    question: "Is MSME registration beneficial?",
    answer:
      "Yes, MSME helps you get government benefits, loans, and subsidies.",
  },
  {
    question: "Why is a food license important?",
    answer:
      "It ensures your business follows food safety laws and builds trust.",
  },
  {
    question: "What types of insurance do you offer?",
    answer:
      "We offer Health, Life, and Vehicle Insurance.",
  },
];

export default function BusinessServices() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      {/* HERO */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/digital15.webp')" }}

      >
        <div className="p-10 rounded-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black">
            Our Business Services
          </h1>
          <p className="mt-4 text-gray-700">
            Trademark, MSME, Food License & Insurance – Everything in one place.
          </p>
        </div>
      </div>

      {/* MAIN */}
      <section className="w-full px-4 py-10 lg:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-white border rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">
                Services List
              </h3>
              <ul className="space-y-2 text-sm">
                <li>✔ Trademark Registration</li>
                <li>✔ MSME Registration</li>
                <li>✔ Food License (FSSAI)</li>
                <li>✔ Health Insurance</li>
                <li>✔ Life Insurance</li>
                <li>✔ Vehicle Insurance</li>
              </ul>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900">
                Start Your Business Today!
              </h4>
              {/* <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full">
                Contact Us
              </button> */}
              <div className="flex gap-4">
  
  <a href="tel:9555436528">
    <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
      📞 9555436528
    </button>
  </a>

  <a href="tel:9548833414">
    <button className="bg-blue-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
      📞 9548833414
    </button>
  </a>

</div>
            </div>

          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            <Image
              src="/servies.jpg"
              alt="Business Services"
              width={800}
              height={400}
              className="rounded-xl"
            />

            <div>
              <h2 className="text-2xl font-bold mb-2">
                Complete Business Solutions Under One Roof
              </h2>

              <p className="text-gray-700">
                We provide all essential business services including Trademark Registration,
                MSME Certification, Food License (FSSAI), and Insurance solutions.
                Our goal is to help your business grow legally, safely, and successfully.
              </p>
            </div>

            {/* STEPS */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Our Process
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="p-4 border rounded-xl">
                  <p className="text-orange-500 font-bold text-sm">STEP 01</p>
                  <h4 className="font-semibold">Consultation</h4>
                  <p className="text-sm text-gray-600">
                    We understand your business needs and suggest the right service.
                  </p>
                </div>

                <div className="p-4 border rounded-xl">
                  <p className="text-orange-500 font-bold text-sm">STEP 02</p>
                  <h4 className="font-semibold">Documentation</h4>
                  <p className="text-sm text-gray-600">
                    We collect and process all required documents.
                  </p>
                </div>

                <div className="p-4 border rounded-xl">
                  <p className="text-orange-500 font-bold text-sm">STEP 03</p>
                  <h4 className="font-semibold">Approval</h4>
                  <p className="text-sm text-gray-600">
                    Get your certificate or license quickly.
                  </p>
                </div>

              </div>
            </div>

            {/* FAQ */}
            <div className="pt-10">
              <h3 className="text-2xl font-bold mb-6">
                FAQs
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