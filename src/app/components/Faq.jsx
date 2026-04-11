// 'use client';

// import { useState } from 'react';
// import { FaHeadphonesAlt, FaComments, FaChevronDown, FaArrowRight } from 'react-icons/fa';

// const faqs = [
//   {
//     question: 'What is SEO and why is it important?',
//     answer:
//       'The practice of optimizing your website and content to improve its visibility on search engines like Google, Bing, and Yahoo. It involves a combination of strategies.',
//   },
//   { question: 'How long does it take to see results from SEO?',
//   answer:
//   'The practice of optimizing your website and content to improve its visibility on search engines like Google, Bing, and Yahoo. It involves a combination of strategies.',
//    },
//   { question: 'What is the difference between SEO and PPC?' },
//   { question: 'How do you measure the success of SEO campaigns?' },
//   { question: 'How much do your SEO services cost?' },
//   { question: 'What other digital marketing services do you offer?' },
//   { question: 'How do you determine the right keywords for my business?' },
// ];

// export default function FaqSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <section className="bg-orange-50 mt-4 py-16 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//         {/* Left Panel */}
//         <div className="bg-white rounded-3xl shadow-md p-8 relative">
//           <div className="absolute -top-6 left-6 text-orange-500 text-xl font-bold">FAQs</div>
//           <h2 className="text-3xl font-semibold mt-4 mb-2">Frequently Asked Questions</h2>
//           <p className="text-gray-600 mb-8">We have professional experts around world.</p>

//           <div className="space-y-4">
//             <div className="flex items-center bg-white border border-orange-500 rounded-xl p-4 shadow hover:shadow-md transition">
//               <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
//                 <FaHeadphonesAlt size={20} />
//               </div>
//               <span className="font-medium text-lg text-orange-700">Help center</span>
//             </div>

//             <div className="flex items-center bg-white border border-orange-500 rounded-xl p-4 shadow hover:shadow-md transition">
//               <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
//                 <FaComments size={20} />
//               </div>
//               <span className="font-medium text-lg text-orange-700">Community</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="lg:col-span-2">
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="border-b border-gray-300 pb-4 cursor-pointer"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <div className="flex justify-between items-center text-lg font-medium">
//                   <div
//                     className={
//                       activeIndex === index ? 'text-orange-600 font-semibold' : 'text-black'
//                     }
//                   >
//                     {faq.question}
//                   </div>
//                   <div className="text-orange-500">
//                     {activeIndex === index ? <FaChevronDown /> : <FaArrowRight />}
//                   </div>
//                 </div>
//                 {activeIndex === index && faq.answer && (
//                   <p className="text-gray-600 mt-2 text-base leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { MdHelp, MdForum } from 'react-icons/md';

const faqs = [
  {
    question: 'What is SEO and why is it important?',
    answer:
      'The practice of optimizing your website and content to improve its visibility on search engines like Google, Bing, and Yahoo. It involves a combination of strategies.',
  },
  {
    question: 'How long does it take to see results from SEO?',
    answer:
      'SEO results typically start showing in 3 to 6 months depending on competition and content quality.',
  },
  {
    question: 'What is the difference between SEO and PPC?',
    answer:
      'SEO focuses on organic rankings through content and optimization, while PPC involves paid advertising on platforms like Google Ads.',
  },
  {
    question: 'How do you measure the success of SEO campaigns?',
    answer:
      'Success is measured using KPIs like organic traffic, keyword rankings, conversions, and bounce rate.',
  },
  {
    question: 'How much do your SEO services cost?',
    answer:
      'Pricing depends on the scope of the project. We offer customizable plans to fit your needs.',
  },
  {
    question: 'What other digital marketing services do you offer?',
    answer:
      'We offer social media marketing, content creation, PPC, email marketing, and web analytics.',
  },
  {
    question: 'How do you determine the right keywords for my business?',
    answer:
      'We use tools like SEMrush, Ahrefs, and Google Keyword Planner combined with competitor analysis to identify the best keywords.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full px-4 md:px-16 py-16 bg-gradient-to-b from-orange-50 via-white to-white text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Panel */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 shadow-lg border border-dashed border-orange-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm">
              <FaQuestionCircle />
              <span>FAQS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-500 mt-2">
              We have professional experts around the world.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-orange-100 rounded-xl hover:bg-orange-200 cursor-pointer">
              <MdHelp className="text-orange-600 text-xl" />
              <span className="font-medium">Help center</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-orange-100 rounded-xl hover:bg-orange-200 cursor-pointer">
              <MdForum className="text-orange-600 text-xl" />
              <span className="font-medium">Community</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-2/3">
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="border-b border-gray-200 pb-4 cursor-pointer transition"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-orange-500 transition">
                  <span className="text-orange-500 text-lg">➤</span>
                  {faq.question}
                </div>
                {openIndex === index && faq.answer && (
                  <p className="mt-2 text-gray-600 text-sm pl-6">{faq.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
