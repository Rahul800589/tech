import { FC } from "react";
import {
  Heart,
  Banknote,
  GraduationCap,
  Building,
  Truck,
  House,
  Gamepad2,
  ShoppingCart,
  Zap,
  CircleCheckBig,
  Target,
  TrendingUp,
  ArrowRight,
  Star,
Users,
    Shield,  Download,
    Smartphone,
    ChartNoAxesColumnIncreasing,
    Cloud,
    Award,

} from "lucide-react";

interface Product {
  id: number;
  title: string;
  category: string;
  icon: JSX.Element;
  description: string;
  rating: number;
  users: string;
  price: string;
  free?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "Hospital Management System",
    category: "Workflow Automation",
    icon: <Zap className="h-5 w-5 text-white" />,
    description:
      "Streamline your business processes with intelligent automation and workflow management.",
    rating: 4.8,
    users: "10K+",
    price: "Free",
    free: true,
  },
  {
    id: 2,
    title: "Hotel & Restaurant Management System",
    category: "Security Management",
    icon: <Shield className="h-5 w-5 text-white" />,
    description:
      "Enterprise-grade security solution for protecting sensitive data and managing access controls.",
    rating: 4.9,
    users: "5K+",
    price: "$49/month",
  },
  {
    id: 3,
    title: "Learning Management System",
    category: "Mobile Development",
    icon: <Smartphone className="h-5 w-5 text-white" />,
    description:
      "Rapid mobile app development framework with pre-built components and templates.",
    rating: 4.7,
    users: "15K+",
    price: "Free",
    free: true,
  },
  {
    id: 4,
    title: "POS (Billing Management System)",
    category: "Data Analytics",
    icon: <ChartNoAxesColumnIncreasing className="h-5 w-5 text-white" />,
    description:
      "Comprehensive data analytics platform for business intelligence and reporting.",
    rating: 4.6,
    users: "8K+",
    price: "$59/month",
  },
  {
    id: 5,
    title: "Real Estate Management System",
    category: "Cloud Management",
    icon: <Cloud className="h-5 w-5 text-white" />,
    description:
      "Multi-cloud management platform for seamless cloud operations and cost optimization.",
    rating: 4.8,
    users: "3K+",
    price: "$79/month",
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    category: "Collaboration",
    icon: <Users className="h-5 w-5 text-white" />,
    description:
      "All-in-one team collaboration platform with project management and communication tools.",
    rating: 4.5,
    users: "25K+",
    price: "Free",
    free: true,
  },
];
const Products: FC = () => {
    
  return (
    <>
      <section className="py-32 lg:py-32 bg-gradient-to-r from-[#1a2940] to-[#24344d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <p>
                {" "}
                Our<span className="m-6 text-orange-500">Products</span>
              </p>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Discover our suite of innovative software products designed to
              streamline your business operations and drive digital
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-11 rounded-md text-black bg-orange-200 font-bold hover:opacity-80 px-8 py-3">
                Explore Products
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
                  className="lucide lucide-arrow-right ml-2 h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md border-orange-200 font-bold text-orange-600 hover:bg-orange-100 px-8 py-3">
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
                  className="lucide lucide-play mr-2 h-5 w-5"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Featured Products
      </h2>
      <p className="text-xl text-white/80 max-w-2xl mx-auto">
        Our most popular and innovative solutions trusted by thousands of
        businesses.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Product Card 1 */}
      <div className="rounded-lg bg-white/10 backdrop-blur-sm text-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
        {/* Featured Label */}
        <div className="absolute -top-4 -right-4">
          <div className="inline-flex items-center border text-xs font-semibold border-transparent bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-full">
            <Star className="h-3 w-3 mr-1" /> Featured
          </div>
        </div>

        {/* Image */}
        <div className="aspect-video relative overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1747949065380-72eb5f00750c?w=600&auto=format&fit=crop&q=60"
            alt="Hospital Management System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/90 text-gray-900">
              Workflow Automation
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold tracking-tight text-xl text-white">
              Hospital Management System
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-white/70">4.8</span>
            </div>
          </div>
          <p className="text-white/80 text-base">
            Streamline hospital operations with intelligent automation,
            appointment scheduling, and analytics dashboards.
          </p>
        </div>

        {/* Features */}
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">
                Key Features:
              </h4>
              <ul className="space-y-1">
                {[
                  "Drag & Drop Builder",
                  "Integration APIs",
                  "Real-time Analytics",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-white/80"
                  >
                    <CircleCheckBig className="h-3 w-3 text-orange-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <div>
                <p className="text-sm text-white/70">10K+ users</p>
                <p className="font-semibold text-orange-400">
                  Free tier available
                </p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-500 h-10 px-4 py-2 text-white hover:opacity-90">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Card 2 */}
      <div className="rounded-lg bg-white/10 backdrop-blur-sm text-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
            alt="Learning Management System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/90 text-gray-900">
              Education Technology
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-semibold tracking-tight text-xl text-white mb-2">
            Learning Management System
          </h3>
          <p className="text-white/80 text-base mb-4">
            Empower schools and enterprises with scalable e-learning tools,
            analytics, and progress tracking.
          </p>

          <ul className="space-y-1 mb-6">
            {[
              "Interactive Courses",
              "AI-Based Grading",
              "Certification Tools",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-white/80">
                <CircleCheckBig className="h-3 w-3 text-orange-400 mr-2" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div>
              <p className="text-sm text-white/70">25K+ learners</p>
              <p className="font-semibold text-orange-400">99.9% uptime</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-500 h-10 px-4 py-2 text-white hover:opacity-90">
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Card 3 */}
      <div className="rounded-lg bg-white/10 backdrop-blur-sm text-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=60"
            alt="E-commerce Platform"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/90 text-gray-900">
              Retail & E-commerce
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-semibold tracking-tight text-xl text-white mb-2">
            E-commerce Platform
          </h3>
          <p className="text-white/80 text-base mb-4">
            Create seamless omnichannel shopping experiences with AI-powered
            recommendations and analytics.
          </p>

          <ul className="space-y-1 mb-6">
            {[
              "Inventory Management",
              "Customer Analytics",
              "Mobile Commerce",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-white/80">
                <CircleCheckBig className="h-3 w-3 text-orange-400 mr-2" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div>
              <p className="text-sm text-white/70">40+ brands</p>
              <p className="font-semibold text-orange-400">98% uptime</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-500 h-10 px-4 py-2 text-white hover:opacity-90">
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="py-20 bg-gradient-to-r from-[#1a2940] to-[#24344d]
">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Complete Product Suite
      </h2>
      <p className="text-xl text-white/80 max-w-2xl mx-auto">
        Comprehensive solutions for every aspect of your business
      </p>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex flex-col space-y-1.5 p-6 pb-4">
            {/* Icon + Title */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-orange-400 to-amber-500 w-10 h-10 rounded-lg flex items-center justify-center">
                {product.icon}
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-lg text-white">
                  {product.title}
                </h3>
                <div className="inline-flex items-center rounded-full border border-orange-400/60 px-2.5 py-0.5 text-xs font-semibold text-orange-300">
                  {product.category}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80">{product.description}</p>
          </div>

          {/* Card Footer */}
          <div className="p-6 pt-0 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white/80">{product.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-white/70" />
                <span className="text-white/80">{product.users}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-orange-400">
                  {product.price}
                </p>
                {product.free && (
                  <p className="text-xs text-white/60">Free tier available</p>
                )}
              </div>

              <div className="flex space-x-2">
                <button className="inline-flex items-center justify-center gap-1 border border-orange-400 text-orange-300 hover:bg-orange-500/10 h-9 rounded-md px-3 text-sm font-medium transition">
                  <Download className="h-3 w-3 mr-1" /> Try
                </button>
                <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:opacity-90 h-9 rounded-md px-3 text-sm font-medium transition">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#1a2633] text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Transform Your Business?
    </h2>
    <p className="text-xl mb-8 text-white/80">
      Choose from our comprehensive suite of products or let us build a
      custom solution for you.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c2b4d] bg-white text-[#1c2b4d] hover:bg-white/90 h-11 rounded-md px-8 py-3">
          Get Custom Solution
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </a>

      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c2b4d] bg-orange-600 hover:bg-orange-700 text-white h-11 rounded-md px-8 py-3">
        <Award className="mr-2 h-5 w-5" />
        Enterprise Demo
      </button>
    </div>
  </div>
</section>



    </>
  );
};

export default Products;
