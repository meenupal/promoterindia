"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-[#82361B] text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Optional: background dots animation can be added here */}
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Contact */}
        <div>
          {/* <h1 className="text-3xl font-extrabold flex items-center gap-2 mb-6">
            SEO 
            <span className="text-orange-500">⦿</span>
            NUX
          </h1> */}
          <Link href="/">
          {/* <Image
            src="/logo.png"
            width={160}
            height={120}
            alt="Logo"
            className="cursor-pointer"
          /> */}
           <Image
        src="/logo.png"
        width={160}
        height={120}
        alt="Logo"
        className="h-14 w-auto"
      />
        </Link>

          <div className="mb-6">
            <p className="uppercase text-xs font-semibold mb-1">24/7 Call Us</p>
            <p className="text-gray-300 mb-4">9555436528</p>

            <p className="uppercase text-xs font-semibold mb-1">24/7 Email Us</p>
            <p className="text-gray-300">info@example.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <FaFacebookF />, label: 'Facebook', href: 'https://www.facebook.com/share/1FKzhPFC81/' },
              { icon: <FaTwitter />, label: 'Twitter', href: '' },
              { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/promoter_india55?igsh=bTNqZjEyaGczdnZn' },
              { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
              { icon: <FaYoutube />, label: 'YouTube', href: '#' },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center gap-1 px-3 py-1.5 border border-orange-500 rounded-full text-sm hover:bg-orange-500 hover:text-black transition"
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quicklinks */}
        <div>
          <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <span className="text-orange-500">•</span> Quicklinks
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              'About Us',
              'Testimonials',
              'Our Team',
              'Latest Articles',
              'Privacy Policy',
              'Refund & Returns Policy',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                <span className="text-orange-500">{'›'}</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <span className="text-orange-500">•</span> Our Services
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              'Business Development',
              'Digital Marketing',
              'Investment Strategies',
              'Market Analysis',
              'Project Management',
              'Web Development',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                <span className="text-orange-500">{'›'}</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Get Updates */}
        <div>
          <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <span className="text-orange-500">•</span> Get Updates
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to Seolnux, Signup For Our Latest news &amp; Article. We Won't give you spam mail and irrelevant messages.
          </p>

          <form onSubmit={handleSubmit} className="flex max-w-md">
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-md border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-orange-500 hover:bg-orange-600 px-4 flex items-center justify-center rounded-r-md transition"
            >
              <FiSend className="text-white w-6 h-6" />
            </button>
          </form>

          <p className="mt-8 text-gray-400 text-sm flex items-center gap-2">
            <span role="img" aria-label="award" className="text-orange-500">🔔</span>
            Best Agency Award Winner – Business Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
