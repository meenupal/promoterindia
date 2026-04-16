import React from "react";

const Privacy = () => {
  const services = [
    "SEO",
    "Public Relations",
    "Social Media Marketing",
    "Brand Photoshoot",
    "Local SEO Services",
    "Marketing",
    "Brand Awareness",
    "Website Development",
    "Application Development",
    "Business Services",
    "Celebrity Endorsement",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#82361B] mb-6">
          Privacy Policy
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* Intro */}
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          <strong>PromoterIndia</strong> ("we", "us", or "our") operates the website{" "}
          <a
            href="https://promoterindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium underline"
          >
            promoterindia.com
          </a>.  
          We are committed to protecting your personal information and your right to privacy.
        </p>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#82361B] mb-6 text-center">
            Our Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-orange-50 border border-orange-100 text-gray-800 p-4 rounded-xl text-center font-medium hover:bg-orange-100 transition"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8 text-gray-700">

          {/* Section */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-[#82361B] mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-[#82361B] mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>To respond to your inquiries</li>
              <li>To provide service updates</li>
              <li>To improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-[#82361B] mb-3">
              3. Sharing Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>We do not sell your personal data</li>
              <li>Shared only with trusted partners</li>
              <li>Only when legally required</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-[#82361B] mb-3">
              4. Data Security
            </h2>
            <p>
              We use industry-standard security measures to protect your personal information.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-[#82361B] mb-3">
              5. Your Rights
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access your personal data</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
            <h2 className="text-xl font-semibold text-[#82361B] mb-3">
              6. Contact Us
            </h2>
            <p className="mb-2"><strong>Company:</strong> PromoterIndia</p>
            <p className="mb-2"><strong>Director:</strong> digi</p>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919837218345" className="text-orange-600">
                +91 98372 18345
              </a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:promoterindia@gmail.com" className="text-orange-600">
                promoterindia@gmail.com
              </a>
            </p>
            <p><strong>Location:</strong> Dehradun, India</p>
          </div>

          {/* Update */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-[#82361B] mb-3">
              7. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Please review it periodically.
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t pt-6">
          ⚠️ This policy is for informational purposes. Consult a legal expert for compliance.
        </div>

      </div>
    </div>
  );
};

export default Privacy;