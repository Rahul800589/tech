import { FC } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

const projects: Project[] = [
  {
    category: "Web Development",
    title: "AI-Powered E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=672&h=375&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "TensorFlow"],
    link: "/work/projects",
  },
  {
    category: "Mobile App",
    title: "Secure Banking Mobile App",
    description:
      "Cross-platform mobile banking application with biometric authentication, real-time transactions, and advanced security features.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=672&h=375&fit=crop",
    techStack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    link: "/work/projects",
  },
  {
    category: "Cloud Solutions",
    title: "Enterprise Cloud Migration",
    description:
      "Complete cloud migration project for multinational corporation with zero downtime and 60% cost reduction.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=672&h=375&fit=crop",
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform"],
    link: "/work/projects",
  },
  {
    category: "Healthcare Tech",
    title: "Healthcare Data Analytics Platform",
    description:
      "HIPAA-compliant healthcare analytics platform with real-time patient monitoring and predictive health insights.",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    techStack: ["Python", "React", "PostgreSQL", "Docker"],
    link: "/work/projects",
  },
  {
    category: "AI & ML",
    title: "AI-Driven Marketing Automation",
    description:
      "AI-powered marketing automation platform with personalized email campaigns, lead scoring, and customer segmentation.",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=672&h=375&fit=crop",
    techStack: ["Python", "TensorFlow", "React", "MongoDB"],
    link: "/work/projects",
  },
  {
    category: "IoT Solutions",
    title: "Smart City IoT Platform",
    description:
      "IoT platform for smart city initiatives with real-time sensor data, predictive maintenance, and energy optimization.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=672&h=375&fit=crop",
    techStack: ["Node.js", "MQTT", "PostgreSQL", "AWS IoT"],
    link: "/work/projects",
  },
];

interface Tech {
  name: string;
  image: string;
}

const technologies: Tech[] = [
  {
    name: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
  },
  {
    name: "Node.js",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop",
  },
  {
    name: "Python",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop",
  },
  {
    name: "Java",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop",
  },
  {
    name: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=100&h=100&fit=crop",
  },
  {
    name: "PHP",
    image:
      "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=100&h=100&fit=crop",
  },
  {
    name: "Flutter",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
  },
  {
    name: "React Native",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop",
  },
  {
    name: "MySQL",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop",
  },
  {
    name: "HTML",
    image:
      "https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "CSS",
    image:
      "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1332&auto=format&fit=crop",
  },
  {
    name: "Next.js",
    image:
      "https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Django",
    image:
      "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "AI",
    image:
      "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Machine Learning",
    image:
      "https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600&auto=format&fit=crop&q=60",
  },
];

const Portfolio: FC = () => {
  return (
    <>
     <section class=" lg:py-20 bg-gradient-to-r from-[#1a2940] to-[#24344d]
 lg:h-[450px] sm:h-[550px] text-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
        <p>
          Our
          <span class="ml-6 text-orange-400">Portfolio</span>
        </p>
      </h1>
      <p class="text-xl mb-12 max-w-3xl mx-auto opacity-90 text-gray-200">
        Discover our innovative solutions and successful projects that
        have transformed businesses across various industries. Each
        project represents our commitment to excellence and
        cutting-edge technology.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact">
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-colors bg-white text-[#1c2b4d] hover:bg-gray-100 h-11 rounded-md px-8 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c2b4d]"
          >
            Start Your Project
          </button>
        </a>

        <a href="/services">
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold border border-white text-white hover:bg-white hover:text-[#1c2b4d] h-11 rounded-md px-8 py-3 transition-colors"
          >
            View Services
          </button>
        </a>
      </div>
    </div>
  </div>
</section>

     <section class="py-16 bg-gradient-to-r from-[#1a2940] to-[#24344d]
 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div class="text-center">
        <div class="text-4xl font-bold text-orange-400 mb-2">15+</div>
        <div class="text-gray-200 font-medium">Projects Completed</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-orange-400 mb-2">50+</div>
        <div class="text-gray-200 font-medium">Happy Clients</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-orange-400 mb-2">50+</div>
        <div class="text-gray-200 font-medium">Team Members</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-orange-400 mb-2">7</div>
        <div class="text-gray-200 font-medium">Years Experience</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-orange-400 mb-2">100%</div>
        <div class="text-gray-200 font-medium">Client Satisfaction</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-orange-400 mb-2">24/7</div>
        <div class="text-gray-200 font-medium">Support Available</div>
      </div>
    </div>
  </div>
</section>

      <section class="py-12 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-amber-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-center gap-4">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
              All
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
              Web Development
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
              Mobile App
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
              Cloud Solutions
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
              Healthcare Tech
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
              AI &amp; ML
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
              IoT Solutions
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-[#1a2940] to-[#24344d]
" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Portfolio
        </h2> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] rounded-2xl shadow-md overflow-hidden border border-gray-100 transition hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg text-amber-50 font-semibold text-white-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg px-4 py-2 transition"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="technologies"
        className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-amber-50 md:text-4xl font-bold text-white-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We leverage the latest technologies to deliver cutting-edge
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="text-center group">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-16 h-16 mx-auto mb-2 rounded-full transition-transform transform group-hover:scale-110 shadow-sm"
                />
                <p className="text-gray-300 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#40556e]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Our Development Process
            </h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">
              We follow a proven process to ensure successful project delivery
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
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
                  class="lucide lucide-eye w-8 h-8"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 class="font-bold text-amber-200 text-lg mb-2">Discovery &amp; Planning</h3>
              <p class="text-gray-400">
                We start by understanding your business goals and project
                requirements to create a detailed plan.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
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
                  class="lucide lucide-palette w-8 h-8"
                >
                  <circle
                    cx="13.5"
                    cy="6.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="17.5"
                    cy="10.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle
                    cx="6.5"
                    cy="12.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-amber-200  text-lg mb-2">Design &amp; Prototyping</h3>
              <p class="text-gray-400">
                Our design team creates wireframes and prototypes to ensure the
                solution meets your expectations.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
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
                  class="lucide lucide-code w-8 h-8"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 class="font-bold text-amber-200  text-lg mb-2">Development &amp; Testing</h3>
              <p class="text-gray-400">
                Our expert developers build the solution using the latest
                technologies and conduct rigorous testing.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
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
                  class="lucide lucide-cloud w-8 h-8"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-amber-200  text-lg mb-2">Deployment &amp; Support</h3>
              <p class="text-gray-400">
                We deploy the solution to your environment and provide ongoing
                support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-20 bg-gradient-to-r from-[#0a1a3d] to-[#303e4f] text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Let's discuss your project and explore how our expertise can help
            you achieve your goals.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 py-3 bg-white text-orange-600 hover:bg-orange-50">
                Get In Touch
              </button>
            </a>
            <a href="/services">
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary h-11 rounded-md px-8 py-3 border-white text-black bg-amber-500 hover:bg-white hover:text-orange-600">
                View Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
