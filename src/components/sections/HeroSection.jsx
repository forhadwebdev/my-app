"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center text-white px-6 md:px-16 lg:px-24 overflow-hidden relative pb-24 md:pb-32 pt-10 bg-[#0B1120] z-0">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[30vw] min-w-[400px] min-h-[200px] bg-red-600/15 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side Text (সাইজ আগের মতোই ছোট এবং লোগোর সাথে এলাইন করা) */}
        <div className="w-full md:w-1/2 max-w-[550px] space-y-3 text-center md:text-left z-10 mt-12 md:mt-0">
          <p className="text-gray-400 text-base md:text-lg">Hi There! I'm</p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Full Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 font-extrabold">
              Web
            </span>{" "}
            <br />
            Developer
          </h1>

          <p className="text-gray-400 mt-3 text-sm md:text-base lg:text-md leading-relaxed md:pr-4">
            Hello, I'm Forhad, a passionate web design and development
            professional dedicated to crafting visually compelling and highly
            functional websites. I focus on delivering seamless user
            experiences, combining aesthetic design with robust performance to
            meet diverse digital needs.
          </p>

          <div className="mt-6">
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-7 py-3 rounded-full text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:from-red-700 hover:to-red-900 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 ease-in-out">
              Let's Talk
            </button>
          </div>
        </div>

        {/* Right Side - Profile + Orbit (আগের ছোট সাইজে ফিরিয়ে আনা হয়েছে) */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center mt-10 md:mt-0 overflow-visible">
          {/* Outer container (নির্দিষ্ট সাইজ দেওয়া হয়েছে যাতে বড় না হয়) */}
          <div className="relative w-[70vw] sm:w-[80vw] md:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center overflow-visible">
            {/* Profile Image */}
            <div className="relative w-[62%] aspect-square rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,0,0,0.8)] z-10">
              <Image
                src="/images/forhad.jpg"
                alt="Md Forhad Hossen"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>

            {/* Orbit Rings */}
            <div className="absolute inset-0 flex items-center justify-center overflow-visible">
              <div className="w-[85%] max-[550px]:w-[95%] aspect-square border border-gray-700 rounded-full animate-[spin_40s_linear_infinite] relative overflow-visible">
                {/* 🌍 Earth */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <Image
                      src="/images/earth.png"
                      alt="Earth"
                      width={35}
                      height={35}
                      className="rounded-full max-[550px]:w-[25px] max-[550px]:h-[25px]"
                    />

                    {/* 🌙 Moon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] aspect-square rounded-full animate-[spin_8s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src="/images/moon.png"
                          alt="Moon"
                          width={15}
                          height={15}
                          className="rounded-full md:w-[20px] md:h-[20px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 🪐 Saturn */}
                <span className="absolute bottom-[8%] right-[5%] sm:bottom-[5%] translate-x-1/2 translate-y-1/2">
                  <Image
                    src="/images/saturn.png"
                    alt="Saturn"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                </span>

                {/* 🌕 Jupiter */}
                <span className="absolute top-[10%] right-[10%] sm:top-[5%] sm:right-[15%] translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/images/jupiter.png"
                    alt="Jupiter"
                    width={50}
                    height={50}
                    className="rounded-full sm:w-[60px] sm:h-[60px] md:w-[50px] md:h-[50px]"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
