// import React from "react";
// import {
//   ArrowRight,
//   Cpu,
//   Cloud,
//   BarChart3,
//   Shield,
//   Smartphone,
//   Code,
//   CheckCircle,
// } from "lucide-react";

// const solutions = [
//   {
//     title: "AI Solutions",
//     description:
//       "Leverage Artificial Intelligence and Machine Learning to automate, optimize, and scale your business operations.",
//     icon: <Cpu className="w-8 h-8" />,
//     color: "indigo",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
//     items: ["Predictive Analytics", "Chatbots & NLP", "AI-Powered Automation"],
//   },
//   {
//     title: "Cloud Computing",
//     description:
//       "Scalable cloud infrastructure for seamless deployment, management, and collaboration across platforms.",
//     icon: <Cloud className="w-8 h-8" />,
//     color: "blue",
//     image:
//       "	https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
//     items: ["Cloud Migration", "DevOps & CI/CD", "Multi-Cloud Solutions"],
//   },
//   {
//     title: "Data Analytics",
//     description:
//       "Transform data into actionable insights with advanced analytics and business intelligence tools.",
//     icon: <BarChart3 className="w-8 h-8" />,
//     color: "amber",
//     image:
//       "	https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
//     items: ["BI Dashboards", "Predictive Modeling", "Data Warehousing"],
//   },
//   {
//     title: "Cybersecurity",
//     description:
//       "Protect your digital assets with advanced security frameworks and real-time threat detection.",
//     icon: <Shield className="w-8 h-8" />,
//     color: "red",
//     image:
//       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
//     items: ["Network Security", "Data Encryption", "Risk Assessment"],
//   },
//   {
//     title: "Mobile Development",
//     description:
//       "Build high-performance, cross-platform mobile apps that engage and convert users.",
//     icon: <Smartphone className="w-8 h-8" />,
//     color: "green",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
//     items: [
//       "iOS & Android Apps",
//       "Flutter & React Native",
//       "App Store Optimization",
//     ],
//   },
//   {
//     title: "Web Development",
//     description:
//       "Develop modern, scalable, and SEO-optimized web applications with exceptional user experiences.",
//     icon: <Code className="w-8 h-8" />,
//     color: "purple",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
//     items: ["Responsive Design", "E-commerce Platforms", "Web App Development"],
//   },
// ];

// const Solution: React.FC = () => {
//   return (
//     <>
//       <section classNameName="relative py-24 lg:py-16 overflow-hidden bg-gradient-to-r from-orange-400 to-red-300 sm:h-[550px] lg:h-[450px]">
//         <div classNameName="absolute inset-0" />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             Innovative Solutions
//             <span className="block text-3xl md:text-5xl mt-2 font-normal">
//               for Modern Challenges
//             </span>
//           </h1>

//           <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
//             Discover our comprehensive suite of technology solutions designed to
//             accelerate your digital transformation, enhance operational
//             efficiency, and drive sustainable business growth in today&apos;s
//             competitive landscape.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-semibold shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
//               Explore Solutions
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>

//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-medium border border-orange-200 backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
//               Schedule Consultation
//             </button>
//           </div>
//         </div>
//       </section>
//       <section
//         id="solutions"
//         className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
//       >
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Comprehensive Technology Solutions
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Empowering your business with cutting-edge digital solutions
//               tailored to your unique needs.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {solutions.map((solution, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
//               >
//                 {/* Image */}
//                 <div className="h-40 overflow-hidden">
//                   <img
//                     src={solution.image}
//                     alt={solution.title}
//                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-8 relative z-10">
//                   <div
//                     className={`w-16 h-16 bg-${solution.color}-100 dark:bg-${solution.color}-900/30 text-${solution.color}-600 dark:text-${solution.color}-400 rounded-2xl flex items-center justify-center mb-6`}
//                   >
//                     {solution.icon}
//                   </div>

//                   <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
//                     {solution.title}
//                   </h3>

//                   <p className="text-gray-600 dark:text-gray-300 mb-4">
//                     {solution.description}
//                   </p>

//                   <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
//                     {solution.items.map((item, i) => (
//                       <li key={i} className="flex items-center gap-2">
//                         <CheckCircle
//                           className={`w-4 h-4 text-${solution.color}-500`}
//                         />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>

//                   <a
//                     href="#"
//                     className={`inline-flex items-center text-${solution.color}-600 dark:text-${solution.color}-400 font-medium hover:underline`}
//                   >
//                     Learn More
//                     <ArrowRight className="w-4 h-4 ml-1" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 gradient-orange-light">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Our Solution Process
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We follow a proven methodology to ensure successful solution
//               delivery and maximum business impact
//             </p>
//           </div>
//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-300 hidden lg:block"></div>
//             <div className="space-y-12">
//               <div className="flex items-center space-x-8 lg:flex-row">
//                 <div className="flex-1 lg:text-right">
//                   <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="bg-orange-100 p-3 rounded-xl">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           className="lucide lucide-target h-6 w-6 text-orange-600"
//                         >
//                           <circle cx="12" cy="12" r="10"></circle>
//                           <circle cx="12" cy="12" r="6"></circle>
//                           <circle cx="12" cy="12" r="2"></circle>
//                         </svg>
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-orange-600 mb-1">
//                           Step 01
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">
//                           Discovery &amp; Analysis
//                         </h3>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">
//                       We analyze your business needs, current systems, and goals
//                       to create a comprehensive solution strategy.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="hidden lg:flex w-16 h-16 bg-orange-600 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg z-10">
//                   01
//                 </div>
//                 <div className="flex-1"></div>
//               </div>
//               <div className="flex items-center space-x-8 lg:flex-row-reverse">
//                 <div className="flex-1 lg:text-left">
//                   <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="bg-orange-100 p-3 rounded-xl">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           className="lucide lucide-lightbulb h-6 w-6 text-orange-600"
//                         >
//                           <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
//                           <path d="M9 18h6"></path>
//                           <path d="M10 22h4"></path>
//                         </svg>
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-orange-600 mb-1">
//                           Step 02
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">
//                           Solution Design
//                         </h3>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">
//                       Our experts design a custom solution architecture tailored
//                       to your specific requirements and objectives.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="hidden lg:flex w-16 h-16 bg-orange-600 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg z-10">
//                   02
//                 </div>
//                 <div className="flex-1"></div>
//               </div>
//               <div className="flex items-center space-x-8 lg:flex-row">
//                 <div className="flex-1 lg:text-right">
//                   <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="bg-orange-100 p-3 rounded-xl">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           className="lucide lucide-code h-6 w-6 text-orange-600"
//                         >
//                           <polyline points="16 18 22 12 16 6"></polyline>
//                           <polyline points="8 6 2 12 8 18"></polyline>
//                         </svg>
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-orange-600 mb-1">
//                           Step 03
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">
//                           Development &amp; Testing
//                         </h3>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">
//                       We build and rigorously test your solution using agile
//                       methodologies and industry best practices.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="hidden lg:flex w-16 h-16 bg-orange-600 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg z-10">
//                   03
//                 </div>
//                 <div className="flex-1"></div>
//               </div>
//               <div className="flex items-center space-x-8 lg:flex-row-reverse">
//                 <div className="flex-1 lg:text-left">
//                   <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="bg-orange-100 p-3 rounded-xl">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           className="lucide lucide-rocket h-6 w-6 text-orange-600"
//                         >
//                           <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
//                           <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
//                           <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
//                           <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
//                         </svg>
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-orange-600 mb-1">
//                           Step 04
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">
//                           Deployment &amp; Launch
//                         </h3>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">
//                       We deploy your solution with minimal disruption and
//                       provide comprehensive training and support.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="hidden lg:flex w-16 h-16 bg-orange-600 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg z-10">
//                   04
//                 </div>
//                 <div className="flex-1"></div>
//               </div>
//               <div className="flex items-center space-x-8 lg:flex-row">
//                 <div className="flex-1 lg:text-right">
//                   <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="bg-orange-100 p-3 rounded-xl">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           className="lucide lucide-settings h-6 w-6 text-orange-600"
//                         >
//                           <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
//                           <circle cx="12" cy="12" r="3"></circle>
//                         </svg>
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-orange-600 mb-1">
//                           Step 05
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">
//                           Ongoing Support
//                         </h3>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">
//                       We provide continuous monitoring, maintenance, and
//                       optimization to ensure peak performance.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="hidden lg:flex w-16 h-16 bg-orange-600 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg z-10">
//                   05
//                 </div>
//                 <div className="flex-1"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section class="py-24 gradient-orange text-white">
//         <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 class="text-4xl md:text-5xl font-bold mb-8">
//             Ready to Transform Your Business?
//           </h2>
//           <p class="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
//             Let's discuss how our innovative solutions can help you overcome
//             challenges, optimize operations, and achieve your business
//             objectives faster than ever before.
//           </p>
//           <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md bg-white text-orange-600 hover:bg-orange-50 px-12 py-6 text-xl font-semibold">
//               Get Started Today
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="lucide lucide-arrow-right ml-2 h-6 w-6"
//               >
//                 <path d="M5 12h14"></path>
//                 <path d="m12 5 7 7-7 7"></path>
//               </svg>
//             </button>
//             <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:text-accent-foreground h-11 rounded-md bg-white text-orange-600 hover:bg-orange-50 px-12 py-6 text-xl backdrop-blur-sm">
//               Request Demo
//             </button>
//           </div>
//           <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="lucide lucide-users h-12 w-12 mx-auto mb-4"
//               >
//                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="9" cy="7" r="4"></circle>
//                 <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//               </svg>
//               <h3 class="font-bold text-lg mb-2">Expert Consultation</h3>
//               <p class="text-white/80">
//                 Get personalized recommendations from our solution experts
//               </p>
//             </div>
//             <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="lucide lucide-zap h-12 w-12 mx-auto mb-4"
//               >
//                 <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
//               </svg>
//               <h3 class="font-bold text-lg mb-2">Rapid Implementation</h3>
//               <p class="text-white/80">
//                 Fast deployment with minimal business disruption
//               </p>
//             </div>
//             <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="lucide lucide-shield h-12 w-12 mx-auto mb-4"
//               >
//                 <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//               </svg>
//               <h3 class="font-bold text-lg mb-2">Ongoing Support</h3>
//               <p class="text-white/80">
//                 24/7 support and maintenance for peace of mind
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Solution;










import React from "react";
import {
  ArrowRight,
  Cpu,
  Cloud,
  BarChart3,
  Shield,
  Smartphone,
  Code,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    title: "AI Solutions",
    description:
      "Leverage Artificial Intelligence and Machine Learning to automate, optimize, and scale your business operations.",
    icon: <Cpu className="w-8 h-8" />,
    color: "indigo",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    items: ["Predictive Analytics", "Chatbots & NLP", "AI-Powered Automation"],
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure for seamless deployment, management, and collaboration across platforms.",
    icon: <Cloud className="w-8 h-8" />,
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    items: ["Cloud Migration", "DevOps & CI/CD", "Multi-Cloud Solutions"],
  },
  {
    title: "Data Analytics",
    description:
      "Transform data into actionable insights with advanced analytics and business intelligence tools.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "amber",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    items: ["BI Dashboards", "Predictive Modeling", "Data Warehousing"],
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with advanced security frameworks and real-time threat detection.",
    icon: <Shield className="w-8 h-8" />,
    color: "red",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    items: ["Network Security", "Data Encryption", "Risk Assessment"],
  },
  {
    title: "Mobile Development",
    description:
      "Build high-performance, cross-platform mobile apps that engage and convert users.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "green",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    items: [
      "iOS & Android Apps",
      "Flutter & React Native",
      "App Store Optimization",
    ],
  },
  {
    title: "Web Development",
    description:
      "Develop modern, scalable, and SEO-optimized web applications with exceptional user experiences.",
    icon: <Code className="w-8 h-8" />,
    color: "purple",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    items: ["Responsive Design", "E-commerce Platforms", "Web App Development"],
  },
];

const Solution: React.FC = () => {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white">
      {/* Hero Section */}
      <section className="relative  lg:py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Innovative Solutions
            <span className="block text-3xl md:text-5xl mt-2 font-normal text-gray-200">
              for Modern Challenges
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of technology solutions designed to
            accelerate your digital transformation, enhance operational
            efficiency, and drive sustainable business growth in today&apos;s
            competitive landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-semibold shadow-lg transition-colors">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-medium border border-orange-200 backdrop-blur-sm transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-20 bg-white/10 backdrop-blur-sm rounded-t-3xl"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Solutions</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Empowering your business with cutting-edge digital solutions
              tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    {solution.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-3">
                    {solution.title}
                  </h3>

                  <p className="text-gray-200 mb-4">{solution.description}</p>

                  <ul className="space-y-2 text-gray-300 mb-6">
                    {solution.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center text-orange-400 font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
