"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCamera, FaBoxOpen, FaLightbulb } from "react-icons/fa";

const faqs = [
  {
    question: "What is product photoshoot?",
    answer:
      "Product photoshoot involves capturing high-quality images of your products for marketing, eCommerce, and branding purposes.",
  },
  {
    question: "Why is product photography important?",
    answer:
      "It enhances brand value, improves conversions, and builds trust with customers through professional visuals.",
  },
  {
    question: "Do you provide studio & outdoor shoots?",
    answer:
      "Yes, we offer both studio-based and lifestyle/outdoor product photography.",
  },
  {
    question: "How long does a shoot take?",
    answer:
      "It depends on product quantity and complexity, usually 1–3 days.",
  },
];

export default function ProductPhotoshootSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* HERO */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/brand phots shuit.jpg')" }}
      >
        <div className="">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Product Photoshoot Services
          </h1>
          <p className="mt-4 text-gray-700">
            Capture stunning visuals that elevate your brand and boost sales.
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
                <li>📸 Product Photography</li>
                <li>🎥 Video Shoots</li>
                <li>🛍️ eCommerce Images</li>
                <li>🌆 Lifestyle Shoots</li>
                <li>🎨 Editing & Retouching</li>
              </ul>
            </div>

            <div className="bg-[#FFEDE5] border-l-4 border-[#EC5609] p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900">
                Book Your Shoot Today!
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
              src="/OIP.jpg"
              alt="Product Shoot"
              width={800}
              height={400}
              className="rounded-xl"
            />

            {/* TEXT */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Professional Product Photography
              </h2>
              <p className="text-gray-700">
                We create high-quality product visuals that help your brand stand
                out. From Amazon listings to social media campaigns, our photos
                are designed to convert viewers into buyers.
              </p>
            </div>

            {/* STEPS */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Our Process in 3 Steps
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="p-4 border rounded-xl shadow-sm">
                  <FaBoxOpen className="text-[#EC5609] text-3xl mb-2" />
                  <p className="text-[#EC5609] font-bold text-sm">STEP 01</p>
                  <h4 className="font-semibold">Product Planning</h4>
                  <p className="text-sm text-gray-600">
                    Understand product features and define shoot style.
                  </p>
                </div>

                <div className="p-4 border rounded-xl shadow-sm">
                  <FaCamera className="text-[#EC5609] text-3xl mb-2" />
                  <p className="text-[#EC5609] font-bold text-sm">STEP 02</p>
                  <h4 className="font-semibold">Photoshoot Execution</h4>
                  <p className="text-sm text-gray-600">
                    Capture high-quality images with professional setup.
                  </p>
                </div>

                <div className="p-4 border rounded-xl shadow-sm">
                  <FaLightbulb className="text-[#EC5609] text-3xl mb-2" />
                  <p className="text-[#EC5609] font-bold text-sm">STEP 03</p>
                  <h4 className="font-semibold">Editing & Delivery</h4>
                  <p className="text-sm text-gray-600">
                    Enhance visuals and deliver ready-to-use images.
                  </p>
                </div>

              </div>
            </div>

            {/* FAQ */}
            <div className="pt-10">
              <h3 className="text-2xl font-bold mb-6">
                FAQs: Product Photoshoot
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