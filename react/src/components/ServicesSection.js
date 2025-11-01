"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star, Code, Smartphone, Globe, Database, Cloud, Shield, CircleCheckBig, ArrowRight, ClipboardCheck, Lightbulb, Wrench, Rocket, } from "lucide-react";
// ✅ Service Card Component
const ServiceCard = ({ title, description, price, features, icon, popular, }) => (_jsxs("div", { className: "rounded-lg bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 relative hover:-translate-y-1", children: [popular && (_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: _jsxs("div", { className: "inline-flex items-center rounded-full text-xs font-semibold bg-orange-500 text-white px-4 py-1", children: [_jsx(Star, { className: "h-3 w-3 mr-1" }), " Popular"] }) })), _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "bg-orange-500/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4", children: icon }), _jsx("h3", { className: "font-semibold text-xl mb-2", children: title }), _jsx("p", { className: "text-gray-300 mb-6", children: description }), _jsx("ul", { className: "space-y-2 mb-6", children: features.map((feature, idx) => (_jsxs("li", { className: "flex items-center text-gray-300", children: [_jsx(CircleCheckBig, { className: "h-4 w-4 text-orange-400 mr-2" }), feature] }, idx))) }), _jsxs("p", { className: "text-orange-400 font-semibold mb-4", children: ["Starting from $", price] }), _jsxs("button", { className: "w-full bg-orange-500 hover:bg-orange-600 transition rounded-md py-2 text-white font-medium flex items-center justify-center gap-2", children: ["Learn More ", _jsx(ArrowRight, { className: "h-4 w-4" })] })] })] }));
// ✅ Services Data
const servicesData = [
    {
        title: "Custom Software Development",
        description: "Fully tailored software built for business growth.",
        price: "25,000",
        features: [
            "Full-stack development",
            "API integration",
            "Testing & deployment",
            "Maintenance",
        ],
        icon: _jsx(Code, { className: "h-6 w-6 text-white" }),
        popular: true,
    },
    {
        title: "Mobile App Development",
        description: "iOS & Android apps with smooth UI and performance.",
        price: "18,000",
        features: [
            "Cross-platform options",
            "User-friendly design",
            "Push notifications",
            "App publishing",
        ],
        icon: _jsx(Smartphone, { className: "h-6 w-6 text-white" }),
    },
    {
        title: "Web Development",
        description: "High-performance websites optimized for conversion & SEO.",
        price: "13,000",
        features: [
            "Responsive design",
            "SEO Optimization",
            "High performance",
            "Secure hosting",
        ],
        icon: _jsx(Globe, { className: "h-6 w-6 text-white" }),
    },
    {
        title: "Database Solutions",
        description: "Secure, scalable and optimized database systems.",
        price: "12,000",
        features: [
            "Performance tuning",
            "Backup strategies",
            "Data migration",
            "Admin dashboards",
        ],
        icon: _jsx(Database, { className: "h-6 w-6 text-white" }),
    },
    {
        title: "Cloud Architecture",
        description: "Cloud hosting, infrastructure & DevOps automation.",
        price: "24,000",
        features: [
            "Cloud migration",
            "CI/CD automation",
            "Monitoring & alerts",
        ],
        icon: _jsx(Cloud, { className: "h-6 w-6 text-white" }),
        popular: true,
    },
    {
        title: "Cybersecurity",
        description: "Protection against threats & vulnerabilities.",
        price: "23,000",
        features: [
            "Security audits",
            "Risk assessments",
            "Implementation",
            "Compliance",
        ],
        icon: _jsx(Shield, { className: "h-6 w-6 text-white" }),
    },
];
// ✅ Process Steps
const processSteps = [
    {
        icon: _jsx(Lightbulb, { className: "h-8 w-8 text-orange-400" }),
        title: "Discovery",
        desc: "We understand your goals, needs, and challenges.",
    },
    {
        icon: _jsx(ClipboardCheck, { className: "h-8 w-8 text-orange-400" }),
        title: "Planning",
        desc: "We design a smart strategy tailored to your business.",
    },
    {
        icon: _jsx(Wrench, { className: "h-8 w-8 text-orange-400" }),
        title: "Development",
        desc: "We build high-quality solutions that scale.",
    },
    {
        icon: _jsx(Rocket, { className: "h-8 w-8 text-orange-400" }),
        title: "Launch & Support",
        desc: "We deploy and support your product long-term.",
    },
];
// ✅ Page Layout
const ServicesSection = () => (_jsxs("main", { className: "bg-gradient-to-r from-[#1c2b4d] to-[#465669]\n text-white", children: [_jsxs("section", { className: "text-center py-32 px-4", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: ["Our ", _jsx("span", { className: "text-orange-400", children: "Services" })] }), _jsx("p", { className: "text-lg max-w-3xl mx-auto text-gray-200 mb-8", children: "Professional solutions that help your business thrive in the digital world." }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [_jsx("a", { href: "/contact", children: _jsxs("button", { className: "font-bold bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md flex items-center gap-2", children: ["Get Started ", _jsx(ArrowRight, { className: "h-5 w-5" })] }) }), _jsx("a", { href: "/projects", children: _jsx("button", { className: "border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-8 py-3 rounded-md", children: "View Our Work" }) })] })] }), _jsxs("section", { className: "py-20 px-4 max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-center text-3xl font-bold mb-12", children: "What We Offer" }), _jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: servicesData.map((service, idx) => (_jsx(ServiceCard, { ...service }, idx))) })] }), _jsxs("section", { className: "py-24 border-t border-white/10", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-16", children: "Our Process" }), _jsx("div", { className: "grid md:grid-cols-4 gap-12 max-w-6xl mx-auto px-4", children: processSteps.map((step, i) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-white/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 border border-orange-400/40", children: step.icon }), _jsx("h3", { className: "text-xl font-semibold text-orange-400 mb-2", children: step.title }), _jsx("p", { className: "text-gray-300", children: step.desc })] }, i))) })] }), _jsxs("section", { className: "py-20 text-center", children: [_jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-6", children: "Ready to build your future?" }), _jsx("p", { className: "text-gray-200 mb-8 max-w-2xl mx-auto", children: "Let's transform your idea into an impactful digital product." }), _jsx("a", { href: "/contact", children: _jsxs("button", { className: "bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-lg font-semibold text-white flex items-center gap-2 mx-auto", children: ["Get Free Consultation ", _jsx(ArrowRight, { className: "h-5 w-5" })] }) })] })] }));
export default ServicesSection;
