
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden w-full pb-12 pt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center min-h-[590px] w-full px-6">
        {/* Girl with Bag */}
        <div className="relative flex flex-col items-center w-full h-full">
          <div className="absolute left-0 top-0 w-full h-full z-0 flex">
           
            <div className="w-[420px] h-[460px] bg-yellow-100 rounded-[36%] z-0 absolute top-10 left-0" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            {/* Main image: girl with bag */}
            <img
              src="/assets/images/about/about-girl.png"
              alt="Hero Girl"
              className="w-[340px] h-[420px] object-contain"
              style={{
                marginBottom: "-90px",
                marginLeft: "40px",
                zIndex: 2,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            />
            {/* Overlapping Giraffe */}
            <img
              src="/assets/images/animals/giraffe.png"
              className="absolute left-[220px] bottom-0 w-36"
              alt="Cartoon Giraffe"
              style={{ zIndex: 4 }}
            />
    
            <img
              src="/assets/images/about/hatt3.png"
              className="absolute left-[50px] top-0 w-[90px] z-10"
              alt="Hat"
            />
            <img
              src="/assets/images/about/slate3.png"
              className="absolute left-[10px] bottom-0 w-[90px] z-10"
              alt="Tablet"
            />
            
            <img
              src="/assets/images/about/ink3.png"
              className="absolute left-[-20px] bottom-[-10px] w-[78px] z-10"
              alt="Ink"
            />
            
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-col justify-center items-start mt-12 lg:mt-0">
          {/* Top Feature Tag */}
          <div className="text-orange-500 font-bold text-lg mb-3 font-comic">
            Learning Is An Adventure!
          </div>
          {/* Heading */}
          <h1 className="mb-2 text-6xl md:text-5xl font-black font-poppins text-gray-900 leading-tight">
            Where Little Hands
            <br />
            Create Big <span className="relative">
            Dreams!
            <span className="absolute inset-x-0 bottom-0 h-2 bg-yellow-400 rounded-full z-[-1]" />
            </span>
          </h1>
          {/* Description */}
          <div className="mt-5 text-gray-500 text-lg font-comic max-w-2xl mb-7">
            Kindergarten is an early childhood educational environment where most young children, typically aged 4 to 6, engage in foundational learning experiences. The focus is on fostering social, emotional, cognitive, and physical development through a mix of structured activities and play.
          </div>

          {/* Feature Icons and Text */}
          <div className="flex items-center gap-10 mt-2 mb-7">
            <div className="flex items-center gap-2">
              <span className="text-4xl text-orange-400">
                
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="10" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 4L2 14h20L12 4z" fill="none" stroke="#fb923c" strokeWidth="2"/>
                </svg>
              </span>
              <span className="font-bold text-lg font-poppins text-gray-700">
                Fully Home Like Environment
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl text-orange-400">
              
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <rect x="5" y="12" width="14" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 12V4" stroke="#fb923c" strokeWidth="2"/>
                </svg>
              </span>
              <span className="font-bold text-lg font-poppins text-gray-700">
                100% Quaty Safety <br />And Security
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 mt-2">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-5 rounded-2xl text-lg font-poppins shadow-lg transition"
              style={{ boxShadow: "0 4px 0 #fbbf24" }}
            >
              More About Us!
            </a>
            <div className="flex flex-col gap-0 items-start">
              <span className="font-bold text-gray-600 text-md font-poppins flex items-center">
                <svg width="28" height="28" className="mr-2 text-orange-400" fill="none" viewBox="0 0 24 24">
                  <path d="M2 7l10 5 10-5" stroke="#fb923c" strokeWidth="2" fill="none"/>
                  <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Call For Booking
              </span>
              <span className="text-3xl font-black text-yellow-400 tracking-tight">123-456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
