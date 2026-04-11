"use client";
import React from "react";

export default function ContactPage() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-20">

      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#003C78] mb-12">
          Contact PromoterIndia
        </h1>

        {/* Map + Floating Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">

          {/* Google Map (Replace with your embed if needed) */}
          <iframe
            src="https://maps.google.com/maps?q=Noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] md:h-[500px]"
            loading="lazy"
          ></iframe>

          {/* Floating Card */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 top-6 bg-white p-6 rounded-xl shadow-xl w-[90%] md:w-80">

            <h2 className="text-xl font-bold text-[#003C78] mb-3">
              PromoterIndia Office
            </h2>

            <p className="text-gray-600 mb-3 text-sm">
              D Block, Noida Sector - 3 <br />
              Uttar Pradesh, India <br />
              Pin Code - 201301
            </p>

            <p className="text-gray-700 text-sm mb-3">
              <strong>Email:</strong> info@promoterindia.com <br />
              <strong>Email:</strong> sales@promoterindia.com <br />
              <strong>Phone:</strong> +91 9555436528 <br />
              <strong>Alt Phone:</strong> +91 9548833414
            </p>

            <h3 className="font-semibold text-[#003C78] mb-2">
              Business Hours
            </h3>

            <p className="text-gray-600 text-sm">
              Mon - Fri: 9:00 AM - 6:00 PM <br />
              Sat: 10:00 AM - 4:00 PM <br />
              Sun: Closed
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#003C78] mb-2">
              Email Us
            </h3>
            <p className="text-gray-600 mb-2">
              Reach out anytime
            </p>
            <a
              href="mailto:info@promoterindia.com"
              className="text-[#ED5808] font-semibold block"
            >
              info@promoterindia.com
            </a>
            <a
              href="mailto:sales@promoterindia.com"
              className="text-[#ED5808] font-semibold block"
            >
              sales@promoterindia.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#003C78] mb-2">
              Call Us
            </h3>
            <p className="text-gray-600 mb-2">
              We're here to help
            </p>
            <a
              href="tel:+919555436528"
              className="text-[#ED5808] font-semibold block"
            >
              +91 9555436528
            </a>
            <a
              href="tel:+919548833414"
              className="text-[#ED5808] font-semibold block"
            >
              +91 9548833414
            </a>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#003C78] mb-2">
              Visit Office
            </h3>
            <p className="text-gray-600 text-sm">
              D Block, Sector - 3 <br />
              Noida, Uttar Pradesh <br />
              India - 201301
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}