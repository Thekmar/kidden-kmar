import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-[#f7f6f3] w-full py-4 px-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-10">
        {/* Left: Kid, alligator, background */}
        <div className="relative min-w-[340px] flex-col flex justify-center items-center py-4 h-[430px]">
          {/* Green background blob */}
          <div className="absolute left-0 top-14 z-0">
            <svg
              width="395"
              height="395"
              className="opacity-80"
              viewBox="0 0 395 395"
              fill="none"
            >
              <ellipse cx="210" cy="235" rx="185" ry="160" fill="#D2E98B" />
            </svg>
          </div>

          {/* Alligator cartoon image (use your SVG or PNG for accuracy) */}
          <img
            src="/assets/images/animals/alligator.png"
            alt="Alligator"
            className="absolute left-0 bottom-0 w-[220px] h-auto z-20"
            style={{ transform: "translateY(10%)" }}
          />
          {/* Kid image */}
          <img
            src="/assets/images/about/about-boy.png"
            alt="Student"
            className="relative z-10 w-[290px] md:w-[340px] h-auto object-contain"
            style={{ marginLeft: "12px", marginTop: "24px" }}
          />
        </div>
        {/* Right: Text content and progress bars */}
        <div className="flex-1 pl-0 md:pl-8 z-[1] max-w-2xl flex flex-col items-start">
          {/* Orange label */}
          <div className="text-orange-600 font-bold text-lg font-comic mb-2">
            Learning Is An Adventure!
          </div>
          {/* Heading with underline */}
          <h2 className="font-poppins font-black text-4xl sm:text-5xl text-gray-900 leading-tight mb-2">
            A Safe Place To
            <br />
            Learn And{" "}
            <span className="relative inline-block">
              Grow!
              <span
                className="block absolute left-0 right-0 h-2 bg-yellow-400 rounded-full -bottom-1"
                style={{ zIndex: -1 }}
              />
            </span>
          </h2>
          {/* Subtitle */}
          <p className="text-2xl text-gray-500 mt-2 mb-8 font-comic">
            Kindergarten is an early childhood educational environment where
            most young children engage in foundational learning experiences.
          </p>
          {/* Experience Bar */}
          <div className="w-full mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold font-comic text-gray-700 text-xl">
                Experiences
              </span>
              <span className="bg-orange-500 text-white font-bold rounded-lg px-3 py-1 text-lg">
                90%
              </span>
            </div>
            <div className="relative w-full h-5 rounded-full bg-[#ededed] overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{
                  width: "90%",
                  background: "#D2E98B",
                  transition: "width 1s cubic-bezier(.68,-0.55,.27,1.55)",
                }}
              ></div>
            </div>
          </div>
          {/* Creativity Bar */}
          <div className="w-full mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold font-comic text-gray-700 text-xl">
                Creativity
              </span>
              <span className="bg-orange-500 text-white font-bold rounded-lg px-3 py-1 text-lg">
                75%
              </span>
            </div>
            <div className="relative w-full h-5 rounded-full bg-[#ededed] overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{
                  width: "75%",
                  background: "#FDB62B",
                  transition: "width 1s cubic-bezier(.68,-0.55,.27,1.55)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* Top right snake+branch cartoon (optional, add if you want) */}
      {/* 
      <img
        src="/assets/images/about/branch-snake.png"
        alt="Snake"
        className="absolute top-0 right-0 w-64 z-20"
      />
      */}
    </section>
  );
}
