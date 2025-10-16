
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-2 px-2 border-t-2 border-orange-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
        {/* Logo + Description */}
        <div className="flex-1 max-w-xs">
          <div className="mb-5">
            <img
              src="/assets/images/icons/logo.kideen.png"
              alt="Kidden Logo"
              className="h-16 mb-2 p-3 drop-shadow"
            />
          </div>
          <p className="text-gray-600 text-lg p-3 font-comic mb-8">
            Kindden is an early childhood education school where all children,
            typically aged 4 to 6, begin their learning journey.
          </p>
          <div className="flex space-x-4 mt-3 p-3">
            {/* Social Buttons with improved style and hover */}
            <a
              href="https://www.facebook.com"
              target="blank"
              className="bg-gray-100 rounded-xl w-12 h-12 flex items-center justify-center transition-all hover:bg-orange-500 group"
              aria-label="Facebook"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                className="transition-colors"
              >
                <path
                  d="M9 8h-2V6c0-1.104.896-2 2-2h2V2h2v2h2v2h-2v2h2v2h-2v2h2v2H9v-2H7v-2h2V8zm2 10v-4h2v4h-2z"
                  fill="currentColor"
                  className="group-hover:fill-orange"
                />
              </svg>
            </a>
            <a
              href="https://www.x.com"
              target="blank"
              className="bg-gray-100 rounded-xl w-12 h-12 flex items-center justify-center transition-all hover:bg-orange-500 group"
              aria-label="X"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                className="transition-colors"
              >
                <path
                  d="M7 7l10 10M17 7L7 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com"
              target="blank"
              className="bg-gray-100 rounded-xl w-12 h-12 flex items-center justify-center transition-all hover:bg-orange-500 group"
              aria-label="TikTok"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                className="transition-colors"
              >
                <path
                  d="M8 12a4 4 0 1 0 8 0h-1v-6h-2v6h-1a2 2 0 1 1-4 0v-2h2v-2H8v2z"
                  fill="currentColor"
                  className="group-hover:fill-orange"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="blank"
              className="bg-gray-100 rounded-xl w-12 h-12 flex items-center justify-center transition-all hover:bg-orange-500 group"
              aria-label="YouTube"
            >
              <svg
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="transition-colors group-hover:fill-orange"
              >
                <rect x="4" y="8" width="20" height="12" rx="4" />
                <polygon points="12,11 17,14 12,17 12,11" fill="#fff" />
              </svg>
            </a>
          </div>
        </div>
        {/* Information Links */}
        <div className="flex-1 min-w-[160px]">
          <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
            Information
          </h3>
          <div className="border-b-4 border-orange-500 w-16 mb-4"></div>
          <ul className="space-y-3 font-comic text-lg text-gray-700">
            <li>
              <a href="about" className="hover:text-orange-600">
                Kindergarten
              </a>
            </li>
            <li>
              <a href="team" className="hover:text-orange-600">
                Our Teachers
              </a>
            </li>
            <li>
              <a href="blog" className="hover:text-orange-600">
                Blog Page
              </a>
            </li>
            <li>
              <a href="help" className="hover:text-orange-600">
                Help And Faqs
              </a>
            </li>
            <li>
              <a href="contact" className="hover:text-orange-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
            Contact Us
          </h3>
          <div className="border-b-4 border-orange-500 w-16 mb-4"></div>
          <div className="text-gray-700 font-comic text-lg space-y-5">
            <div>
              <span className="text-orange-500 font-bold">Address:</span> <br />
              Germany — 785 15h Street, Office 478
              <br />
              Berlin, De 81566
            </div>
            <div>
              <span className="text-orange-500 font-bold">Phone:</span> <br />
              (704) 555-0127
            </div>
            <div>
              <span className="text-orange-500 font-bold">Mail Us:</span> <br />
              <a href="mailto:kidden@example.com" className="hover:underline">
                kidden@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex-1 min-w-[240px]">
          <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
            Newsletter Signup
          </h3>
          <div className="border-b-4 border-orange-500 w-24 mb-4"></div>

          <form className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-full bg-gray-100 py-3 px-6 pr-16 text-lg font-comic placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

          <p className="text-gray-600 font-comic text-base">
            Get the latest updates and offers for business services yearly.
          </p>
        </div>
      </div>
      <div className="mt-2 mb-20 flex justify-center">
      </div>
      {/* Copyright */}
      <div className="text-center text-white text-sm font-comic font-bold bg-orange-600 py-6 mt-[-40px]">
         &copy; Copyright 2025 Thekmar. All Rights Reserved.
      </div>
    </footer>
  );
}
