"use client";

const HeroSection = () => {
  return (
    <section className="relative px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          WE ARE DIGIWAVE – A TEAM OF DIGITAL MARKETING EXPERTS
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          At Digiwave, we are dedicated to providing outstanding digital marketing solutions.
          Rather than following temporary trends, we emphasize strategic, data-driven methods
          that yield tangible results. Our team is passionate about assisting businesses in
          their growth by utilizing innovative marketing strategies, advanced technology, 
          and compelling storytelling.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
