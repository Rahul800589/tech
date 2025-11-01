import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, CircleCheckBig, Lightbulb, Users, Rocket, TrendingUp, } from "lucide-react";
const WhyChooseUs = () => {
    const features = [
        { text: "24/7 Technical Support & Maintenance" },
        { text: "Agile Development Methodology" },
        { text: "Comprehensive Quality Assurance" },
        { text: "Scalable & Future-Proof Architecture" },
        { text: "Modern Technology Stack" },
        { text: "Cost-Effective Solutions" },
        { text: "Regular Progress Updates" },
        { text: "Post-Launch Support & Training" },
    ];
    const cards = [
        {
            title: "Innovation First",
            description: "We stay ahead of technology trends and implement cutting-edge solutions that give you a competitive advantage.",
            icon: _jsx(Lightbulb, { className: "h-6 w-6 text-orange-400" }),
            videoPoster: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
        },
        {
            title: "Expert Team",
            description: "Our team consists of senior developers, architects, and consultants with 10+ years of industry experience.",
            icon: _jsx(Users, { className: "h-6 w-6 text-orange-400" }),
            videoPoster: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
        },
        {
            title: "Rapid Delivery",
            description: "Agile methodology ensures faster time-to-market without compromising on quality or functionality.",
            icon: _jsx(Rocket, { className: "h-6 w-6 text-orange-400" }),
            videoPoster: "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
        },
        {
            title: "Scalable Solutions",
            description: "All our solutions are built to scale with your business growth and handle increased demand seamlessly.",
            icon: _jsx(TrendingUp, { className: "h-6 w-6 text-orange-400" }),
            videoPoster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        },
    ];
    return (_jsx("section", { className: "py-24 bg-gradient-to-r from-[#1a2e49] to-[#32445b]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-8", children: "Why Choose ATS GLOBAL TECH?" }), _jsx("p", { className: "text-xl text-gray-300 mb-10 leading-relaxed", children: "We combine deep technical expertise with strategic business insights to deliver solutions that not only meet your immediate needs but position you for long-term success in the digital landscape." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10", children: features.map((feature, index) => (_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(CircleCheckBig, { className: "h-6 w-6 text-green-500 flex-shrink-0 mt-1" }), _jsx("span", { className: "text-gray-200 font-medium", children: feature.text })] }, index))) }), _jsxs("button", { className: "inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-500 text-white h-11 rounded-md px-10 py-4 text-lg font-medium transition-all duration-300", children: ["Learn More About Us", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] })] }), _jsx("div", { className: "grid grid-cols-2 gap-8", children: cards.map((card, index) => (_jsxs("div", { className: "bg-[#1e293b] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group", children: [_jsxs("div", { className: "relative h-40 overflow-hidden", children: [_jsx("img", { src: card.videoPoster, alt: card.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }), _jsx("div", { className: "absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-xl", children: card.icon })] }), _jsxs("div", { className: "p-6 text-center", children: [_jsx("h3", { className: "font-bold text-white mb-3 text-lg", children: card.title }), _jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: card.description })] })] }, index))) })] }) }) }));
};
export default WhyChooseUs;
