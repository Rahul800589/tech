
import React from "react";
import heroBg from "../assets/hero-bg.jpg";

const HeroSection: React.FC = () => {
  const handleOpenContact = () => {
    const event = new CustomEvent("openContactModal");
    window.dispatchEvent(event);
  };

  return (
    <section
      id="home"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6">
          ✨ Leading Digital Transformation Partner
        </div>

    <h1 className="text-center font-bold text-white my-10 leading-snug">
  <span className="text-4xl md:text-7xl block">
    Building Tomorrow&apos;s
  </span>

  <span className="flex justify-center flex-wrap items-center gap-3 mt-2 leading-normal">
    <span className="bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-sky-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x text-4xl md:text-7xl font-bold leading-normal">
      Digital Solutions
    </span>
    <span className="text-4xl md:text-7xl font-bold leading-normal">
      Today
    </span>
  </span>
</h1>




        <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
          ATS GLOBAL TECH is your trusted partner in digital innovation. We create
          scalable, secure, and intelligent software solutions that transform
          businesses and drive sustainable growth in the digital economy.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={handleOpenContact}
            className="relative inline-flex items-center justify-center gap-2 font-medium h-12 rounded-md px-8 py-3 text-lg text-white overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-sky-400 to-purple-600 animate-gradient-x transition-transform duration-500 group-hover:scale-110"></span>
            <span className="relative z-10">Start Your Project</span>
          </button>

          <a href="/work/projects">
            <button className="inline-flex items-center justify-center gap-2 font-medium h-11 rounded-md px-10 py-4 text-lg text-white border hover:bg-white/10 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
              Explore Our Works
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


