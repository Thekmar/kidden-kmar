
import React from "react";

const teamMembers = [
  {
    name: "Stephen Miller",
    role: "Literacy Teacher",
    image: "/assets/images/team/team-1.jpg",
    roleColor: "text-orange-500",
  },
  {
    name: "Abraham McGraw",
    role: "Preschool Teacher",
    image: "/assets/images/team/team-3.jpg",
    roleColor: "text-orange-500",
  },
  {
    name: "Fiorella Ibáñez",
    role: "Music Teacher",
    image: "/assets/images/team/team-2.jpg",
    roleColor: "text-orange-500",
  },
  {
    name: "Scott Gonzalez",
    role: "Learning Teacher",
    image: "/assets/images/team/team-4.jpg",
    roleColor: "text-orange-500",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f7f6f3] py-12 px-4 w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top Content Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h6 className="text-orange-600 font-bold">Learning Is An Adventure!</h6>
        <h2 className="text-4xl font-poppins font-bold text-black mb-5">Enrol Your Child In <br />
          A Session Now!</h2>
          <p className="text-gray-600 text-lg mb-6 font-comic leading-relaxed">
            Kindergarten is an early childhood educational environment where most young children engage in foundational learning experiences.
          </p>
          {/* <h2 className="text-5xl font-black font-poppins tracking-tight text-gray-900 leading-tight">
            Meet Our Amazing Teachers
          </h2> */}
        </div>

        {/* Team Cards */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center items-stretch">
          {teamMembers.map(({ name, role, image, roleColor }) => (
            <div
              key={name}
              className="bg-white rounded-3xl shadow-lg flex flex-col items-center w-full sm:w-[330px] max-w-xs  relative overflow-visible min-h-[480px]"
              style={{ minWidth: "290px", maxWidth: "350px" }}
            >
              <div className="w-full h-[320px] rounded-t-3xl overflow-hidden relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "1.5rem 1.5rem 0 0" }}
                />
              </div>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="48"
                viewBox="0 0 400 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ minWidth: "290px", maxWidth: "350px" }}
              >
                <path
                  d="M0 40c20-24 80-24 100 0s70 24 90 0 80-24 100 0 70 24 110 0v8H0v-8Z"
                  fill="#fff"
                />
              </svg>
              <div
                className="w-full pt-10 pb-8 flex flex-col items-center bg-white z-10"
                style={{ marginTop: "-28px", borderRadius: "0 0 1.5rem 1.5rem" }}
              >
                <div className="font-poppins font-bold text-2xl text-gray-900 mb-2 whitespace-nowrap">{name}</div>
                <div className={`font-comic text-lg ${roleColor}`}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


