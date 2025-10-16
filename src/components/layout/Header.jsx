
import React from "react";

// NAV BAR
export function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 flex items-center justify-between py-6 px-8 bg-white shadow font-poppins text-xl ">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/assets/images/icons/logo.kideen.png" alt="Kidden Logo" className="h-12" />
      </div>
      {/* Navigation */}
      <div className="flex items-center space-x-8 text-black">
        <a href="#" className="font-bold hover:text-orange-500">Home</a>
        <a href="#" className="font-bold hover:text-orange-500">Pages</a>
        <a href="#" className="font-bold hover:text-orange-500">Programs</a>
        <a href="#" className="font-bold hover:text-orange-500">Events</a>
        <a href="#" className="font-bold hover:text-orange-500">Blog</a>
        <a href="#" className="font-bold hover:text-orange-500">Contact</a>
        {/* Enroll Button */}
        <a href="#" className="ml-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-600 transition"
        style={{ boxShadow: "0 4px 0 #fbbf24" }}
        >
          Online Admission
        </a>
      </div>
    </nav>
  )
}

// HERO / TOP SECTION
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFE39E] relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Hero Content */}
      <section className="flex flex-col lg:flex-row items-center justify-between pt-16 pb-8 max-w-7xl mx-auto px-6 relative z-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start max-w-2xl">
          <span className="text-orange-500 font-bold text-lg mb-1 font-comic">
            Learning Is An Adventure!
          </span>
          <h1 className="text-[2.8rem] md:text-6xl font-black font-poppins text-gray-800 mb-3 leading-tight">
            Where Every Child<br />
            Plays To <span className="relative text-[#333]">
              Learn!
              <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-400 rounded-full z-[-1]" style={{ zIndex: -1 }}></span>
            </span>
          </h1>
          <p className="text-gray-700 text-xl mb-8 font-comic max-w-lg">
            Kindergarten is an early childhood educational environment where most young children engage in learning experiences.
          </p>
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-2xl text-xl shadow-lg transition drop-shadow"
            style={{ boxShadow: "0 4px 0 #fbbf24" }}
          >
            Enroll Your Kid!
          </a>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center items-end relative min-h-[400px]">
          
          <img
            src="/assets/images/about/hero-boy.png"
            alt="Kids"
            className="w-[420px] h-[425px] object-contain z-10"
            style={{ marginRight: "0px" }}
          />
          <img
            src="/assets/images/about/hero-girl.png"
            alt="Kids"
            className="w-[420px] h-[425px] object-contain z-5"
            style={{ marginRight: "0px" }}
          />
        
          <div className="absolute z-0 w-full h-full right-0 top-0 pointer-events-none">
     
          </div>
        
          <div className="absolute left-6 top-52 z-20 flex items-center">
            <span className="bg-yellow-400 text-black font-extrabold px-4 py-2 text-2xl rounded-r-xl" style={{ letterSpacing: 2 }}></span>

            <span className="bg-[#2D180E] text-white font-black text-3xl px-4 py-2 rounded-l-xl -ml-4">NOW</span>
          </div>
        </div>
      </section>
    </div>
  );
}
