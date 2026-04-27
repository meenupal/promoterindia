

"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const statsData = [
  { value: 100, label: "Happy Clients" },
  { value: 50, label: "Projects Delivered" },
  { value: 20, label: "Industry Experts" },
  { value: 40, label: "Training Sessions" },
  { value: 30, label: "Strategic Partnerships" },
  { value: 60, label: "Successful Deliveries" },
];

const Statistics = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#003C78]">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Empowering learners with cutting-edge IT training and hands-on projects.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {statsData.map((stat, index) => (
          <div
            key={`${key}-${index}`}
            className="w-80 h-40 rounded-2xl shadow-lg flex flex-col justify-center items-center transition hover:scale-105 hover:shadow-xl"
            style={{
              background: index % 2 === 0 ? "#ED5808" : "#003C78",
            }}
          >
            {/* Number */}
            <h2 className="text-5xl font-bold text-white">
              <CountUp key={key} start={0} end={stat.value} duration={2.5} />
              +
            </h2>

            {/* Label */}
            <p className="text-lg text-white font-semibold mt-2 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;