


import React, { useState } from "react";
import { Play } from "lucide-react";

const InnovationJourney: React.FC = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Experience Our Innovation Journey
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Take a behind-the-scenes look at our development process, company
          culture, and the passionate team that brings cutting-edge solutions to
          life.
        </p>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-4xl mx-auto">
          {!play ? (
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=500&fit=crop"
                alt="Company Video"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center">
                  <button
                    onClick={() => setPlay(true)}
                    className="inline-flex items-center justify-center gap-3 h-12 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-12 rounded-full text-lg font-medium transition-all duration-300"
                  >
                    <Play className="h-6 w-6" />
                    Watch Our Story
                  </button>
                  <p className="text-white/80 mt-4 text-sm">
                    3 minutes – Behind the scenes at ATS GLOBAL TECH
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/YykjpeuMNEk?autoplay=1&rel=0"
                title="ATS GLOBAL TECH Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InnovationJourney;
