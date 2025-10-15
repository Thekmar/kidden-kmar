
import React from "react";

// Dummy icons as inline SVG; replace with your actual SVG assets or components
const icons = [
  <svg key="ico1" className="w-20 h-20 text-orange-500" fill="none" viewBox="0 0 64 64" stroke="currentColor">
    <circle cx="32" cy="32" r="30" strokeWidth="4" />
    <path d="M32 18v12m0 0l-7-7m7 7l7-7" strokeWidth="4" strokeLinecap="round" />
  </svg>,
  <svg key="ico2" className="w-20 h-20 text-sky-400" fill="none" viewBox="0 0 64 64" stroke="currentColor">
    <rect x="12" y="12" width="40" height="40" rx="8" strokeWidth="4" />
    <circle cx="32" cy="32" r="10" strokeWidth="4" />
    <path d="M32 22v10l7 7" strokeWidth="4" strokeLinecap="round" />
  </svg>,
  <svg key="ico3" className="w-20 h-20 text-lime-600" fill="none" viewBox="0 0 64 64" stroke="currentColor">
    <rect x="12" y="20" width="40" height="28" rx="4" strokeWidth="4" />
    <path d="M24 32h16m-8-8v16" strokeWidth="4" strokeLinecap="round" />
  </svg>
];

const backgrounds = [
  '/assets/images/classes/class-1.jpg',
  '/assets/images/classes/class-2.jpg',
  '/assets/images/classes/class-3.jpg',
];

const navColors = [
  'bg-orange-500 hover:bg-orange-600',
  'bg-sky-400 hover:bg-sky-500',
  'bg-lime-600 hover:bg-lime-700',
];

const serviceCards = [
  {
    icon: icons[0],
    bg: backgrounds[0],
    color: 'text-orange-500',
    navColor: navColors[0],
    title: (
      <>
        Introducing Basic <br />
        Academics
      </>
    ),
    desc: "Kindergarten is an early childhood educational environment where most young children engage."
  },
  {
    icon: icons[1],
    bg: backgrounds[1],
    color: 'text-sky-400',
    navColor: navColors[1],
    title: (
      <>
        Creativity And <br />
        Imagination
      </>
    ),
    desc: "Kindergarten is an early childhood educational environment where most young children engage."
  },
  {
    icon: icons[2],
    bg: backgrounds[2],
    color: 'text-lime-600',
    navColor: navColors[2],
    title: (
      <>
        Problem Solving <br />
        Development
      </>
    ),
    desc: "Kindergarten is an early childhood educational environment where most young children engage."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f7f6f3] py-12 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="text-orange-500 font-bold text-2xl font-comic pb-2">
            Learning Is Adventure! 
          </div>
           <h2 className="font-poppins font-black text-6xl sm:text-3xl text-gray-900 leading-tight mb-2">
            Enrol Your Child In<br />
            <span className="relative inline-block">
              A Session Now!
              <span
                className="block absolute left-0 right-0 h-2 bg-yellow-400 rounded-full -bottom-1"
                style={{ zIndex: -1 }}
              ></span>
            </span>
          </h2>
          <div className="mt-1 text-gray-500 text-2xl font-comic max-w-4xl mx-auto">
            Kindergarten is an early childhood educational environment where most young children engage in foundational learning experiences.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex gap-8 justify-center">
        {serviceCards.map(({ icon, bg, color, navColor, title, desc }, i) => (
          <div
            key={i}
            className="relative rounded-3xl overflow-hidden flex-1 min-w-[340px] max-w-[420px] flex flex-col items-center shadow-lg bg-white"
            style={{ minHeight: "510px", marginRight: i !== serviceCards.length - 1 ? "16px" : "0" }}
          >
            {/* Top image preview */}
            <div className="w-full h-[250px] relative">
              <img
                src={bg}
                alt="service"
                className="w-full h-full object-cover"
              />
            </div>
            {/* White cloud/curve SVG overlay at top */}
            <svg
              className="absolute top-[205px] left-0 w-full h-20"
              viewBox="0 0 400 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 80c25-45 90-60 130-30s60 15 90 0 80-25 110 0 55 40 70 30v80H0V80Z"
                fill="#fff"
              />
            </svg>
            {/* Feature icon (circled, prominent, overlays curve) */}
            <div className={`absolute top-[170px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center`}>
              <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl text-white ${color} bg-white border-8 border-white`}>
                {icon}
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col items-center px-6 pt-20 pb-8 flex-grow relative z-10">
              <div className="text-gray-900 text-xl font-black font-poppins text-center mb-3">
                {title}
              </div>
              <div className="text-gray-500 text-lg font-comic text-center">
                {desc}
              </div>
            </div>
            {/* Navigation button at bottom center */}
            <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 z-30">
              <button className={`${navColor} w-16 h-16 flex items-center justify-center rounded-full shadow-lg transition`}>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white">
                  <path d="M8 12h8m-4-4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
