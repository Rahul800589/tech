import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, Cpu, Cloud, BarChart3, Shield, Smartphone, Code, CheckCircle, } from "lucide-react";
const solutions = [
    {
        title: "AI Solutions",
        description: "Leverage Artificial Intelligence and Machine Learning to automate, optimize, and scale your business operations.",
        icon: _jsx(Cpu, { className: "w-8 h-8" }),
        color: "indigo",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        items: ["Predictive Analytics", "Chatbots & NLP", "AI-Powered Automation"],
    },
    {
        title: "Cloud Computing",
        description: "Scalable cloud infrastructure for seamless deployment, management, and collaboration across platforms.",
        icon: _jsx(Cloud, { className: "w-8 h-8" }),
        color: "blue",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
        items: ["Cloud Migration", "DevOps & CI/CD", "Multi-Cloud Solutions"],
    },
    {
        title: "Data Analytics",
        description: "Transform data into actionable insights with advanced analytics and business intelligence tools.",
        icon: _jsx(BarChart3, { className: "w-8 h-8" }),
        color: "amber",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        items: ["BI Dashboards", "Predictive Modeling", "Data Warehousing"],
    },
    {
        title: "Cybersecurity",
        description: "Protect your digital assets with advanced security frameworks and real-time threat detection.",
        icon: _jsx(Shield, { className: "w-8 h-8" }),
        color: "red",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
        items: ["Network Security", "Data Encryption", "Risk Assessment"],
    },
    {
        title: "Mobile Development",
        description: "Build high-performance, cross-platform mobile apps that engage and convert users.",
        icon: _jsx(Smartphone, { className: "w-8 h-8" }),
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
        description: "Develop modern, scalable, and SEO-optimized web applications with exceptional user experiences.",
        icon: _jsx(Code, { className: "w-8 h-8" }),
        color: "purple",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        items: ["Responsive Design", "E-commerce Platforms", "Web App Development"],
    },
];
const Solution = () => {
    return (_jsxs("div", { className: "py-16 min-h-screen bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white", children: [_jsx("section", { className: "relative  lg:py-16 overflow-hidden", children: _jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsxs("h1", { className: "text-5xl md:text-7xl font-bold mb-6 leading-tight", children: ["Innovative Solutions", _jsx("span", { className: "block text-3xl md:text-5xl mt-2 font-normal text-gray-200", children: "for Modern Challenges" })] }), _jsx("p", { className: "text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed", children: "Discover our comprehensive suite of technology solutions designed to accelerate your digital transformation, enhance operational efficiency, and drive sustainable business growth in today's competitive landscape." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsxs("button", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-semibold shadow-lg transition-colors", children: ["Explore Solutions", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx("button", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-medium border border-orange-200 backdrop-blur-sm transition-colors", children: "Schedule Consultation" })] })] }) }), _jsx("section", { id: "solutions", className: "py-20 bg-white/10 backdrop-blur-sm rounded-t-3xl", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Comprehensive Solutions" }), _jsx("p", { className: "text-lg text-gray-200 max-w-3xl mx-auto", children: "Empowering your business with cutting-edge digital solutions tailored to your unique needs." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: solutions.map((solution, index) => (_jsxs("div", { className: "group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden", children: [_jsx("div", { className: "h-40 overflow-hidden", children: _jsx("img", { src: solution.image, alt: solution.title, className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" }) }), _jsxs("div", { className: "p-8 relative z-10", children: [_jsx("div", { className: "w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6", children: solution.icon }), _jsx("h3", { className: "text-2xl font-semibold mb-3", children: solution.title }), _jsx("p", { className: "text-gray-200 mb-4", children: solution.description }), _jsx("ul", { className: "space-y-2 text-gray-300 mb-6", children: solution.items.map((item, i) => (_jsxs("li", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-orange-400" }), item] }, i))) }), _jsxs("a", { href: "#", className: "inline-flex items-center text-orange-400 font-medium hover:underline", children: ["Learn More", _jsx(ArrowRight, { className: "w-4 h-4 ml-1" })] })] })] }, index))) })] }) })] }));
};
export default Solution;
