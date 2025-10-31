import React from "react";

interface Tech {
  name: string;
  category: string;
  image: string;
}

const techStack: Tech[] = [
  {
    name: "React",
    category: "Frontend",
    image:
      "/images/home6.jpeg",
  },
  {
    name: "Node.js",
    category: "Backend",
    image:
      "/images/home7.jpeg",
  },
  {
    name: "Python",
    category: "Backend",
    image:
      "/images/home8.jpeg",
  },
  {
    name: "Java",
    category: "Backend",
    image:
      "/images/home9.jpeg",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    image:
      "/images/home10.jpeg",
  },
  {
    name: "PHP",
    category: "Backend",
    image:
      "/images/home11.jpeg",
  },
  {
    name: "Flutter",
    category: "Mobile",
    image:
      "/images/home12.jpeg",
  },
  {
    name: "React Native",
    category: "Mobile",
    image:
      "/images/home13.jpeg",
  },
  {
    name: "MySQL",
    category: "Database",
    image:
      "/images/home14.jpeg",
  },
  {
    name: "HTML",
    category: "Frontend",
    image:
      "/images/home15.jpeg",
  },
  {
    name: "CSS",
    category: "Frontend",
    image:
      "/images/home16.jpeg",
  },
  {
    name: "JavaScript",
    category: "Backend",
    image:
      "/images/home17.jpeg",
  },
  {
    name: "Next.js",
    category: "Backend",
    image:
      "/images/home18.jpeg",
  },
  {
    name: "Django",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "AI",
    category: "Frontend",
    image:
      "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Machine Learning",
    category: "Backend",
    image:
      "https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600&auto=format&fit=crop&q=60",
  },
];

const TechnologyStack: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#1c2b4d] to-[#465669]
">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build robust,
            scalable, and future-proof solutions
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {/* React */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop"
                alt="React"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Frontend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              React
            </p>
          </div>

          {/* Node.js */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop"
                alt="Node.js"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Backend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              Node.js
            </p>
          </div>

          {/* Python */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop"
                alt="Python"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Backend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              Python
            </p>
          </div>

          {/* Java */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop"
                alt="Java"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Backend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              Java
            </p>
          </div>

          {/* TypeScript */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=100&h=100&fit=crop"
                alt="TypeScript"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Frontend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              TypeScript
            </p>
          </div>

          {/* PHP */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=100&h=100&fit=crop"
                alt="PHP"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Backend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              PHP
            </p>
          </div>

          {/* Flutter */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
                alt="Flutter"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Mobile
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              Flutter
            </p>
          </div>

          {/* React Native */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop"
                alt="React Native"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Mobile
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              React Native
            </p>
          </div>

          {/* MySQL */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop"
                alt="MySQL"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Database
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              MySQL
            </p>
          </div>

          {/* HTML */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?w=600&auto=format&fit=crop&q=60"
                alt="HTML"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Frontend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              HTML
            </p>
          </div>

          {/* CSS */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=600&auto=format&fit=crop&q=60"
                alt="CSS"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Frontend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              CSS
            </p>
          </div>

          {/* JavaScript */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1332&auto=format&fit=crop"
                alt="JavaScript"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Frontend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              JavaScript
            </p>
          </div>

          {/* Next.js */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?w=600&auto=format&fit=crop&q=60"
                alt="Next.js"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Frontend/Backend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              Next.js
            </p>
          </div>

          {/* Django */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=600&auto=format&fit=crop&q=60"
                alt="Django"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Backend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              Django
            </p>
          </div>

          {/* AI */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=600&auto=format&fit=crop&q=60"
                alt="AI"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                AI
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              AI
            </p>
          </div>

          {/* Machine Learning */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600&auto=format&fit=crop&q=60"
                alt="Machine Learning"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Backend
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
              Machine Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
