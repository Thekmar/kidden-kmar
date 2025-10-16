import React from "react";

const testimonials = [
  {
    name: "Fiorella Ibáñez",
    role: "Pharmacist",
    roleColor: "text-orange-500",
    image: "/assets/images/team/team-2.jpg",
    bgColor: "bg-blue-100",
    textColor: "text-gray-700",
    stars: 5,
    quote:
      "love this kindergarten! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children. The curriculum is well-rounded.",
  },
  {
    name: "Abraham McGraw",
    role: "Journalist",
    roleColor: "text-orange-500",
    image: "/assets/images/team/team-3.jpg",
    bgColor: "bg-green-100",
    textColor: "text-gray-700",
    stars: 5,
    quote:
      "love this kindergarten! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children. The curriculum is well-rounded.",
  },
  {
    name: "Scott Gonzalez",
    role: "Businessman",
    roleColor: "text-orange-500",
    image: "/assets/images/team/team-4.jpg",
    bgColor: "bg-orange-100",
    textColor: "text-gray-700",
    stars: 5,
    quote:
      "love this kindergarten! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children. The curriculum is well-rounded.",
  },
];

function StarRow({ stars = 5 }) {
  return (
    <div className="flex mt-6">
      {[...Array(stars)].map((_, i) => (
        <svg key={i} className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <polygon points="10 2 12.59 7.36 18.51 7.98 14 12.2 15.18 18.02 10 15.09 4.82 18.02 6 12.2 1.49 7.98 7.41 7.36 10 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h6 className="text-orange-600 font-bold">Testimonials!</h6>
        <h2 className="text-4xl font-poppins font-bold text-black mb-5">What Do Parents <br />
          Say About Us!</h2>
        <p className="text-gray-500 text-xl mb-12 font-comic">
          Kindergarten is an early childhood educational environment where most <br /> young children engage in foundational learning experiences.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className={`${testimonial.bgColor} ${testimonial.textColor} rounded-[6rem] flex flex-col items-start px-10 pt-12 pb-10 shadow-lg w-full md:w-1/3 min-h-[420px] relative`}
            >
              {/* Row for Image + Name + Role */}
              <div className="flex flex-row items-center w-full mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg mr-6"
                  style={{ flex: "none" }}
                />
                <div>
                  <div className="font-poppins font-bold text-xl text-gray-900 text-left">{testimonial.name}</div>
                  <div className={`font-bold mt-1 text-xl ${testimonial.roleColor} text-left`}>{testimonial.role}</div>
                </div>
              </div>
              {/* Quote Text */}
              <p className="font-comic text-lg leading-8 text-left">
                {testimonial.quote}
              </p>
              {/* Stars */}
              <StarRow stars={testimonial.stars} />
              {/* (Optional) Bottom left and right quote icons, if you want */}
              {/* <div className="absolute bottom-2 left-6 text-6xl text-gray-400 opacity-20">“</div> */}
              {/* <div className="absolute bottom-2 right-6 text-6xl text-gray-400 opacity-20">”</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
