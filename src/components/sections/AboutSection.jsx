import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUserCheck,
  FaMapMarkerAlt,
  FaLanguage,
  FaFlag,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-[#0B1120] text-white flex flex-col items-center justify-center px-6 py-12 md:py-20 relative z-0 overflow-hidden">
      {/* Background Ambient Glows (Purple/Blue Theme) */}
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Heading */}
      <div className="mb-10 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
          About <span className="text-red-500">Me</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Learn more about my skills, experience, and personal background.
        </p>
      </div>

      {/* Main Section (Changed to lg:items-stretch to make heights equal) */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-stretch items-center max-w-6xl w-full gap-8 md:gap-12 z-10">
        {/* Left Side: Image & Social Links inside the Box */}
        <div className="lg:w-2/5 w-full flex justify-center relative">
          {/* Subtle Image Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          {/* Main Image Box (Added h-full and flex-col to stretch properly) */}
          <div className="w-full h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl shadow-xl p-5 md:p-6 relative group z-10 flex flex-col">
            {/* Image Container (Takes available space at the top) */}
            <div className="relative w-full min-h-[300px] md:min-h-[350px] lg:h-full rounded-2xl overflow-hidden mb-auto">
              <Image
                src="/images/about-images.png"
                alt="Md Forhad Hossen"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Social Media Section (Pushed to the bottom) */}
            <div className="flex flex-col items-center mt-8">
              {/* Social Media Title */}
              <h4 className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
                Connect With Me
              </h4>

              {/* Social Media Links */}
              <div className="flex gap-6">
                <Link
                  href="https://facebook.com/forhadwebdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <FaFacebook size={26} />
                </Link>

                <Link
                  href="https://instagram.com/forhadwebdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <FaInstagram size={26} />
                </Link>

                <Link
                  href="https://linkedin.com/in/forhadwebdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <FaLinkedin size={26} />
                </Link>
              </div>
            </div>

            {/* Corner Borders */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-[3px] border-l-[3px] border-red-500 rounded-tl-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3px] border-r-[3px] border-red-500 rounded-br-3xl opacity-50"></div>
          </div>
        </div>

        {/* Right Side: Text Info Box (Added h-full) */}
        <div className="lg:w-3/5 w-full h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl shadow-xl p-6 md:p-8 text-gray-200 flex flex-col justify-center space-y-5">
          <h3 className="text-xl md:text-2xl font-semibold text-white inline-block">
            I'm{" "}
            <span className="text-red-500 border-b-2 border-red-500 pb-1">
              Forhad
            </span>
          </h3>

          <div className="space-y-3 text-gray-300 leading-relaxed text-sm">
            <p>
              A passionate web designer and developer with experience in
              creating modern, responsive, and user-friendly websites. I
              specialize in both front-end and back-end development, ensuring
              seamless functionality and visually appealing designs.
            </p>
            <p>
              My expertise includes HTML, CSS, JavaScript, and frameworks like
              React, Next.js, and Tailwind CSS. On the backend, I work with
              Node.js, Express, and MongoDB (MERN Stack) to build dynamic and
              efficient web applications.
            </p>
            <p>
              With a strong eye for design and attention to detail, I focus on
              crafting websites that provide excellent user experiences while
              maintaining optimal performance.
            </p>
          </div>

          {/* Personal Info Box (Compact Grid) */}
          <div className="bg-[#0B1120] border border-slate-700/50 rounded-2xl p-5 mt-2 grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaCalendarAlt className="text-red-500 text-base min-w-[16px]" />
                <span>
                  <span className="font-semibold text-gray-100">
                    Date Of Birth:
                  </span>{" "}
                  <span className="text-gray-400">16 July 2003</span>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaUserCheck className="text-red-500 text-base min-w-[16px]" />
                <span>
                  <span className="font-semibold text-gray-100">
                    Freelancer:
                  </span>{" "}
                  <span className="text-green-400 font-medium">Available</span>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500 text-base min-w-[16px]" />
                <span>
                  <span className="font-semibold text-gray-100">Address:</span>{" "}
                  <span className="text-gray-400">Rajshahi, BD</span>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaLanguage className="text-red-500 text-base min-w-[16px]" />
                <span>
                  <span className="font-semibold text-gray-100">
                    Languages:
                  </span>{" "}
                  <span className="text-gray-400">English, Bengali</span>
                </span>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaFlag className="text-red-500 text-base min-w-[16px]" />
                <span>
                  <span className="font-semibold text-gray-100">
                    Nationality:
                  </span>{" "}
                  <span className="text-gray-400">Bangladeshi</span>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-500 text-base min-w-[16px]" />
                <span>
                  <span className="font-semibold text-gray-100">Phone:</span>{" "}
                  <span className="text-gray-400">+8801568183554</span>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-500 text-base min-w-[16px]" />
                <span className="truncate max-w-[150px] sm:max-w-[180px]">
                  <span className="font-semibold text-gray-100">Email:</span>{" "}
                  <a
                    href="mailto:forhadwebdev@gmail.com"
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    forhadwebdev@gmail...
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaLinkedin className="text-red-500 text-base min-w-[16px]" />
                <span>
                  <span className="font-semibold text-gray-100">LinkedIn:</span>{" "}
                  <a
                    href="https://linkedin.com/in/forhadwebdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    forhadwebdev
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
