"use client";

import {
  Globe,
  Search,
  Megaphone,
  Star,
  Camera,
  Share2,
} from "lucide-react";

const services = [
  { name: "Website Design", icon: Globe },
  { name: "Website SEO", icon: Search },
  { name: "AdWords", icon: Megaphone },
  { name: "Celebrity Endorsement", icon: Star },
  { name: "Product Photoshoot", icon: Camera },
  { name: "Social Media Management", icon: Share2 },
];

export default function Marquee() {
  return (
    <div className="relative bg-[#1E4E8C] overflow-hidden py-3">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#1E4E8C] to-transparent z-10"></div>

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#1E4E8C] to-transparent z-10"></div>

      {/* MARQUEE */}
      <div className="flex whitespace-nowrap group">
        <div className="flex group-hover:[animation-play-state:paused] animate-[marquee_18s_linear_infinite]">

          {[...services, ...services].map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex items-center mx-10 space-x-3 text-white hover:text-[#F36C21] transition duration-300 cursor-pointer"
              >
                {/* ICON */}
                <Icon className="w-5 h-5 text-yellow-300" />

                {/* TEXT */}
                <span className="text-sm font-semibold tracking-wider uppercase">
                  {service.name}
                </span>

                {/* SEPARATOR */}
                <span className="text-white/40">➜</span>
              </div>
            );
          })}

        </div>
      </div>

      {/* INLINE STYLE (no tailwind.config needed) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}