import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star } from "lucide-react";
const testimonials = [
    {
        id: 1,
        name: "Aditya Sharma",
        role: "CEO, TechCorp Industries",
        company: "TechCorp Industries",
        image: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60",
        quote: "ATS GLOBAL TECH transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance dramatically.",
        rating: 5,
    },
    {
        id: 2,
        name: "Saroj Gupta",
        role: "CTO, InnovateLtd",
        company: "InnovateLtd",
        image: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg",
        quote: "Working with ATS GLOBAL TECH was a game-changer. They delivered a complex AI-powered platform ahead of schedule and below budget. Exceptional team!",
        rating: 5,
    },
    {
        id: 3,
        name: "Milan Patel",
        role: "Founder, StartupX",
        company: "StartupX",
        image: "https://images.pexels.com/photos/7580971/pexels-photo-7580971.jpeg",
        quote: "From MVP to enterprise-scale solution, ATS GLOBAL TECH has been our technology partner every step of the way. Their scalable solutions grew with our business.",
        rating: 5,
    },
    {
        id: 4,
        name: "Esha Verma",
        role: "VP Technology, DataFlow",
        company: "DataFlow",
        image: "https://images.pexels.com/photos/32251444/pexels-photo-32251444.jpeg",
        quote: "The mobile app they developed for us has over 100K downloads and 4.8 stars on app stores. Outstanding user experience and rock-solid performance.",
        rating: 5,
    },
];
const ClientTestimonials = () => {
    return (_jsx("section", { className: "py-24 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-20", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "What Our Clients Say" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Don't just take our word for it \u2014 hear from our satisfied clients who have experienced remarkable growth through our solutions" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: testimonials.map((testimonial) => (_jsx("div", { className: "rounded-lg bg-[#1e293b] shadow-xl hover:shadow-2xl transition-all duration-300", children: _jsxs("div", { className: "p-10", children: [_jsx("div", { className: "flex justify-center mb-6", children: Array.from({ length: testimonial.rating }).map((_, i) => (_jsx(Star, { className: "w-6 h-6 text-yellow-400 fill-current" }, i))) }), _jsxs("blockquote", { className: "text-gray-300 text-lg italic mb-8 leading-relaxed", children: ["\u201C", testimonial.quote, "\u201D"] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-16 h-16 rounded-full border-4 border-orange-600 object-cover" }), _jsxs("div", { children: [_jsx("h4", { className: "font-bold text-white text-lg", children: testimonial.name }), _jsx("p", { className: "text-orange-400 font-medium", children: testimonial.role }), _jsx("p", { className: "text-gray-400 text-sm", children: testimonial.company })] })] })] }) }, testimonial.id))) })] }) }));
};
export default ClientTestimonials;
