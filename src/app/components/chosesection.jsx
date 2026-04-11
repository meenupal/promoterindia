"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaShieldAlt, FaProjectDiagram, FaUsers } from "react-icons/fa";

export default function WhyChooseUsSection() {
  const items = [
    {
      id: "01.",
      icon: <FaShieldAlt className="text-[#EC5609] text-5xl" />,
      title: "Transparency & Communication",
      description:
        "Transparency ensures that information is shared openly, creating a sense of accountability and inclusiveness.",
    },
    {
      id: "02.",
      icon: <FaProjectDiagram className="text-[#EC5609] text-5xl" />,
      title: "Cutting-Edge Tools & Techniques",
      description:
        "These innovations leverage advanced technologies like artificial intelligence, machine learning, and automation.",
    },
    {
      id: "03.",
      icon: <FaShieldAlt className="text-[#EC5609] text-5xl" />,
      title: "Dedicated Support & Expertise",
      description:
        "Experts not only solve problems but also provide valuable insights, guiding better decision-making and innovation.",
    },
    {
      id: "04.",
      icon: <FaUsers className="text-[#EC5609] text-5xl" />,
      title: "Results-Oriented Culture",
      description:
        "Clear objectives, metrics, and expectations guide individuals and teams, ensuring alignment with organizational goals.",
    },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <section className="bg-[#faf7f3] py-20 px-4 sm:px-6 lg:px-16 text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          
          {/* Left */}
          <div className="space-y-6">
            <p className="text-[#EC5609] font-semibold uppercase tracking-widest">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Where Expertise Meets Exceptional Results
            </h2>

            <p className="text-gray-600 max-w-md">
              Where expertise drives innovation and passion fuels performance. We bring deep knowledge and unparalleled dedication to every project, delivering exceptional results that exceed expectations.
            </p>

            <button className="bg-[#EC5609] hover:bg-[#D94E08] text-white font-semibold px-6 py-3 rounded-full transition">
              CONTACT US ↗
            </button>
          </div>

          {/* Right Timeline */}
          <div className="relative pl-6">
            <div className="absolute top-0 left-4 w-1 h-full bg-[#FFEDE5]"></div>

            <div className="space-y-12">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  {/* Circle */}
                  <div className="absolute -left-6 top-2 w-10 h-10 bg-white border-2 border-[#EC5609] rounded-full flex items-center justify-center text-[#EC5609] font-bold z-10 shadow-md">
                    {item.id}
                  </div>

                  {/* Card */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#FFE5D9] max-w-xl">
                    <div className="flex items-start gap-4">
                      {item.icon}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-[#faf9f7] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center"
          >
            <Image
              src="/digital8.jpg"
              alt="Rocket Strategy"
              width={400}
              height={400}
              className="mb-8"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-sm uppercase tracking-wide text-[#EC5609] font-medium mb-2">
              Our Strategy
            </p>

            <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
              Strategic Marketing Tailored <br className="hidden md:block" />
              for Time and Your Growth
            </h2>

            <p className="text-gray-600 mb-6">
              Time is valuable, and growth is essential. That’s why our strategic marketing approach is crafted to fit your unique needs.
            </p>

            <ul className="space-y-4 text-base text-gray-800 font-medium">
              <li className="flex items-start">
                <span className="text-[#EC5609] mr-2">✔</span>
                Research to understand your business, competitors, and audience
              </li>
              <li className="flex items-start">
                <span className="text-[#EC5609] mr-2">✔</span>
                Unique strategy tailored to your specific goals and industry
              </li>
              <li className="flex items-start">
                <span className="text-[#EC5609] mr-2">✔</span>
                Track performance and continuously optimize campaigns
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-[#EC5609] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#D94E08] transition"
            >
              Learn More →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}