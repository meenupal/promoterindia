import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsSection() {
  return (
    <>
      <section className="bg-[#fdfbf9] py-12 px-4 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
          
          {/* Left Column */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative z-10">
              <Image
                src="/digital3.jpg"
                alt="Happy client using laptop"
                width={430}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Stats Box */}
            <div className="absolute bottom-0 z-20 bg-[#EA5508] text-white px-6 py-4 rounded-lg shadow-lg text-center max-w-[280px]">
              <p className="text-3xl font-bold">$777.6</p>
              <p className="text-sm mt-1">
                Helped 4k businesses achieve top rankings
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            
            {/* About Tag */}
            <p className="text-[#EA5508] uppercase font-semibold mb-2 tracking-wider flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#EA5508] rounded-full" />
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Driving Growth with Our <br /> Expertise and Passion
            </h2>

            <p className="text-gray-600 mt-4 mb-6 text-base md:text-lg">
              At the core of our journey lies a commitment to driving growth fueled by a
              combination of expertise and passion. We believe growth is not just about numbers—
              it’s about creating meaningful impact, fostering innovation, and building relationships
              that last.
            </p>

            {/* Feature Card */}
            <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col md:flex-row gap-6">
              
              {/* Left Block */}
              <div className="flex-1">
                <h3 className="text-black font-semibold text-lg mb-1">
                  Need Custom?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We completed 85% success project in business
                </p>

                <Link
                  href="/Seo"
                  className="bg-[#EA5508] hover:bg-[#C94706] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
                >
                  Learn More →
                </Link>
              </div>

              {/* Right List */}
              <div className="flex-1 grid grid-cols-1 gap-2 text-sm text-gray-700">
                <p>✔️ Marketing professional</p>
                <p>✔️ Help businesses increase</p>
                <p>✔️ Latest technologies</p>
                <p>✔️ Measurable results</p>

                {/* Live Chat */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFEDE3] text-[#EA5508] text-xl">
                    💬
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      Live Chat
                    </p>
                    <p className="text-xs text-gray-500">
                      Connect with Us
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}