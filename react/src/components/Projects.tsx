import { FC } from "react";
import { useNavigate } from "react-router-dom";


interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform Modernization",
    description: "Transforming retail with high-performance cloud commerce.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "/ai-page",
  },
  {
    title: "Healthcare Management System",
    description: "Next-gen healthcare data analytics and patient care.",
    image:
      "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=1200&auto=format&fit=crop&q=80",
    link: "/health-page",
  },
  {
    title: "FinTech Mobile Banking App",
    description: "Secure mobile-first banking with fast transactions.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80",
    link: "/fintech-page",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Full visibility into revenue, KPIs, and insights.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&auto=format&fit=crop&q=80",
    link: "/saas-page",
  },
  {
    title: "Travel Booking Platform",
    description: "Smart travel booking with price prediction.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    link: "/travel-page",
  },
  {
    title: "AI-Powered Chat Assistant",
    description: "Context-aware customer support automation.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    link: "/aichat-page",
  },
];


// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// const projects: Project[] = [
//   {
//     title: "E-Commerce Platform Modernization",
//     description:
//       "Revamped the front-end and back-end for a leading retailer, improving speed and UX by 40%.",
//     image: "	https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
//     link: "#",
//   },
//   {
//     title: "Healthcare Management System",
//     description:
//       "Built a secure platform for hospitals to manage patient data and streamline workflows.",
//     image: "	https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
//     link: "#",
//   },
//   {
//     title: "FinTech Mobile Banking App",
//     description:
//       "Designed and developed a mobile-first banking experience with robust API integration.",
//     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
//     link: "#",
//   },
//   {
//     title: "SaaS Analytics Dashboard",
//     description:
//       "Developed an interactive analytics dashboard with real-time data visualization for startups.",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
//     link: "#",
//   },
//   {
//     title: "Travel Booking Platform",
//     description:
//       "Created a fast, modern, and responsive platform for users to book global travel packages.",
//     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
//     link: "#",
//   },
//   {
//     title: "AI-Powered Chat Assistant",
//     description:
//       "Built a conversational AI chatbot with natural language understanding for customer support.",
//     image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
//     link: "#",
//   },
// ];

const Projects: FC = () => {
    const navigate = useNavigate();

  return (
    <>
     <section class="py-32 lg:py-32 bg-gradient-to-r from-[#1a2940] to-[#24344d]
 h-[400px]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
        Our<span class="ml-6 text-orange-400">Projects</span>
      </h1>
      <p class="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
        Explore our portfolio of successful projects that showcase our
        expertise in delivering innovative solutions across various
        industries.
      </p>
    </div>
  </div>
</section>

    <section class="py-16 bg-gradient-to-r from-[#1c2b4d] to-[#1e2a38]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
          15+
        </div>
        <div class="text-white/80">Projects Completed</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
          50+
        </div>
        <div class="text-white/80">Happy Clients</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-bold text-indigo-300 mb-2">
          5+
        </div>
        <div class="text-white/80">Industries Served</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-bold text-green-400 mb-2">
          98%
        </div>
        <div class="text-white/80">Success Rate</div>
      </div>
    </div>
  </div>
</section>

      <section class="py-8 bg-gradient-to-r from-[#19243d] to-[#2d3a4a] text-amber-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-center gap-2">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 bg-gradient-to-r from-yellow-600 to-orange-600">
              All
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Web Application
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Mobile Application
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Data Analytics
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Healthcare Software
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Education Technology
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              IoT Platform
            </button>
          </div>
        </div>
      </section>
      {/* <section className="py-16 bg-gradient-to-r from-[#1c2b4d] to-[#2e3e51] text-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white-900">Our Projects</h2>
            <p className="mt-4 text-gray-400">
              A selection of our most impactful work, showcasing innovation,
              design, and results.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 p-6"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Case Study →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}
       <section className="py-16 bg-gradient-to-r from-[#1c2b4d] to-[#2e3e51] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <p className="mt-4 text-gray-300">
            A selection of our most impactful work, showcasing innovation,
            design, and results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#253547] rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 p-6"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
                loading="lazy"
              />

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

              {/* Navigation Button */}
              <button
                onClick={() => navigate(project.link)}
                className="text-orange-500 hover:text-orange-300 font-medium"
              >
                View Case Study →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
      <section class="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#1a2532] text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      Ready to Start Your Project?
    </h2>
    <p class="text-xl mb-8 opacity-90">
      Let's discuss your project requirements and create something amazing
      together. We're excited to bring your vision to life.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact">
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c2b4d] bg-white text-[#1c2b4d] hover:bg-gray-100 h-11 rounded-md px-8 py-3"
        >
          Start Your Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right ml-2 h-5 w-5"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </a>

      <a href="/services">
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-colors border border-white text-white hover:bg-white hover:text-[#1c2b4d] h-11 rounded-md px-8 py-3"
        >
          View Services
        </button>
      </a>
    </div>
  </div>
</section>


    </>
  );
};

export default Projects;
