import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { MapPin, Clock, DollarSign, Briefcase, Heart, Coffee, GraduationCap, Gamepad2, Gift, Users, Zap, Trophy, Target } from "lucide-react";
const jobs = [
    {
        title: "Senior Full Stack Developer",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
        description: "Lead the development of scalable web applications and mentor junior developers.",
        tags: ["React", "Node.js", "TypeScript", "AWS"],
        location: "Jaipur, Rajasthan",
        type: "Full-time",
        salary: "12k - 16k",
        experience: "5+ years",
    },
    {
        title: "DevOps Engineer",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
        description: "Design and maintain CI/CD pipelines and cloud infrastructure.",
        tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
        location: "Remote",
        type: "Full-time",
        salary: "10k - 14k",
        experience: "3+ years",
    },
    {
        title: "UI/UX Designer",
        category: "Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        description: "Create intuitive and beautiful user experiences for our products.",
        tags: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
        location: "Jaipur, Rajasthan",
        type: "Full-time",
        salary: "8k - 10k",
        experience: "3+ years",
    },
    {
        title: "Data Scientist",
        category: "Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        description: "Analyze complex data sets and build predictive models.",
        tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
        location: "Jaipur, Rajasthan",
        type: "Full-time",
        salary: "10k - 15k",
        experience: "4+ years",
    },
    {
        title: "Product Manager",
        category: "Product",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        description: "Drive product vision and strategy for our key initiatives.",
        tags: ["Product Strategy", "Agile", "Analytics", "Leadership"],
        location: "Jaipur, Rajasthan",
        type: "Full-time",
        salary: "13k - 17k",
        experience: "5+ years",
    },
    {
        title: "Cybersecurity Specialist",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        description: "Protect our systems and ensure compliance with security standards.",
        tags: ["Penetration Testing", "CISSP", "Network Security", "Compliance"],
        location: "Jaipur, Rajasthan",
        type: "Full-time",
        salary: "9k - 13k",
        experience: "3+ years",
    },
];
const benefits = [
    {
        icon: _jsx(Heart, { className: "h-16 w-16 text-orange-600 mx-auto mb-6" }),
        title: "Health & Wellness",
        description: "Comprehensive medical, dental, and vision coverage",
    },
    {
        icon: _jsx(Coffee, { className: "h-16 w-16 text-orange-600 mx-auto mb-6" }),
        title: "Flexible Work",
        description: "Hybrid work options and flexible scheduling",
    },
    {
        icon: (_jsx(GraduationCap, { className: "h-16 w-16 text-orange-600 mx-auto mb-6" })),
        title: "Learning & Development",
        description: "$5,000 annual learning budget per employee",
    },
    {
        icon: _jsx(Gamepad2, { className: "h-16 w-16 text-orange-600 mx-auto mb-6" }),
        title: "Work-Life Balance",
        description: "Unlimited PTO and mental health support",
    },
    {
        icon: _jsx(Gift, { className: "h-16 w-16 text-orange-600 mx-auto mb-6" }),
        title: "Competitive Compensation",
        description: "Market-leading salaries and equity packages",
    },
    {
        icon: _jsx(Users, { className: "h-16 w-16 text-orange-600 mx-auto mb-6" }),
        title: "Team Building",
        description: "Regular team events and company retreats",
    },
];
const values = [
    {
        icon: _jsx(Zap, { className: "h-8 w-8 text-orange-600" }),
        title: "Innovation First",
        description: "We embrace cutting-edge technologies and encourage creative problem-solving.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        alt: "Innovation First",
    },
    {
        icon: _jsx(Users, { className: "h-8 w-8 text-orange-600" }),
        title: "Collaborative Spirit",
        description: "We believe in the power of teamwork and open communication.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        alt: "Collaborative Spirit",
    },
    {
        icon: _jsx(Trophy, { className: "h-8 w-8 text-orange-600" }),
        title: "Excellence",
        description: "We strive for excellence in everything we do and celebrate achievements.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
        alt: "Excellence",
    },
    {
        icon: _jsx(Target, { className: "h-8 w-8 text-orange-600" }),
        title: "Customer Focus",
        description: "Our customers' success drives our passion and innovation.",
        image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop",
        alt: "Customer Focus",
    },
];
const Careers = () => {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "relative py-32 lg:py-32 overflow-hidden bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white", children: _jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 text-center", children: [_jsxs("h1", { className: "text-3xl md:text-7xl font-bold mb-6 leading-tight", children: ["Join Our ", _jsx("span", { className: "text-yellow-400", children: "Amazing Team" })] }), _jsx("p", { className: "text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed", children: "Build the future of technology with passionate innovators who are shaping tomorrow's digital landscape. Explore roles where creativity and growth thrive together." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsx("button", { className: "inline-flex items-center justify-center gap-2 h-12 px-10 py-4 text-lg font-semibold\r\n        bg-gradient-to-r from-yellow-500 to-orange-500 \r\n        hover:from-yellow-600 hover:to-orange-600 \r\n        shadow-[0_0_12px_rgba(251,146,60,0.6)]\r\n        hover:shadow-[0_0_25px_rgba(251,146,60,1)]\r\n        text-slate-900 rounded-xl transition-all duration-300 hover:-translate-y-1", children: "View Open Positions" }), _jsx("button", { className: "inline-flex items-center justify-center gap-2 h-12 px-10 py-4 text-lg font-medium\r\n        border border-yellow-500/40 bg-white/5 backdrop-blur-lg \r\n        hover:bg-white/10 hover:border-yellow-400 hover:text-yellow-300 \r\n        transition-all duration-300 rounded-xl hover:-translate-y-1", children: "Learn About Our Culture" })] })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-[#141e34] to-[#1e293b] text-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-10 text-center", children: [
                            { value: "20+", label: "Team Members" },
                            { value: "15+", label: "Open Positions" },
                            { value: "98%", label: "Employee Satisfaction" },
                            { value: "15+", label: "Projects" },
                        ].map((item, i) => (_jsxs("div", { className: "group", children: [_jsx("div", { className: "text-4xl font-extrabold text-yellow-400 mb-2 group-hover:scale-110 transition-all", children: item.value }), _jsx("div", { className: "text-gray-300", children: item.label })] }, i))) }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-r from-[#1a2940] to-[#24344d]\r\n-light", children: _jsxs("div", { className: " max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: " text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-100 mb-6", children: "Open Positions" }), _jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "Join our team of passionate professionals and help us build the future of technology" })] }), _jsx("div", { className: " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: jobs.map((job, index) => (_jsxs("div", { className: " rounded-lg text-card-foreground hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-0 shadow-lg overflow-hidden group", children: [_jsxs("div", { className: " relative h-48 overflow-hidden", children: [_jsx("img", { src: job.image, alt: job.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" }), _jsx("div", { className: " absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsx("div", { className: "absolute top-4 left-4", children: _jsx("div", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-600 text-white", children: job.category }) })] }), _jsxs("div", { className: "flex flex-col space-y-1.5 p-6 pb-4", children: [_jsx("h3", { className: "font-semibold tracking-tight text-xl text-gray-200", children: job.title }), _jsx("p", { className: "text-sm text-gray-300", children: job.description })] }), _jsxs("div", { className: "p-6 pt-0 space-y-4", children: [_jsx("div", { className: "flex flex-wrap gap-2", children: job.tags.map((tag, i) => (_jsx("div", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-orange-600", children: tag }, i))) }), _jsxs("div", { className: "space-y-2 text-sm text-gray-300", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(MapPin, { className: "h-4 w-4 text-orange-500" }), _jsx("span", { children: job.location })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Clock, { className: "h-4 w-4 text-orange-500" }), _jsx("span", { children: job.type })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(DollarSign, { className: "h-4 w-4 text-orange-500" }), _jsx("span", { children: job.salary })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Briefcase, { className: "h-4 w-4 text-orange-500" }), _jsx("span", { children: job.experience })] })] }), _jsx("a", { href: "/contact", children: _jsx("button", { className: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white h-10 px-4 py-2 w-full hover:opacity-90 transition", children: "Apply Now" }) })] })] }, index))) })] }) }), _jsx("section", { className: "py-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Why Work With Us?" }), _jsx("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: "We provide powerful growth opportunities, supportive leadership, and a culture where innovation thrives every day." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: benefits.map((benefit, index) => (_jsxs("div", { className: "text-center p-10 rounded-2xl\r\n          bg-white/5 backdrop-blur-xl border border-white/10\r\n          hover:border-yellow-400/80 hover:bg-white/10\r\n          shadow-lg hover:shadow-2xl\r\n          transition-all duration-300 ease-in-out group\r\n          hover:-translate-y-3", children: [_jsx("div", { className: "w-14 h-14 rounded-full \r\n          bg-gradient-to-r from-yellow-500 to-orange-500\r\n          flex items-center justify-center mx-auto mb-6\r\n          shadow-[0_0_15px_rgba(251,146,60,0.8)]\r\n          group-hover:shadow-[0_0_25px_rgba(251,146,60,1)]\r\n          transition-all duration-300", children: React.cloneElement(benefit.icon, {
                                            className: "w-7 h-7 text-white"
                                        }) }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors", children: benefit.title }), _jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: benefit.description })] }, index))) })] }) }), _jsx("section", { className: "py-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Our Culture & Values" }), _jsx("p", { className: "text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed", children: "Discover what makes ATS GLOBAL TECH a great place to work and grow your career." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-14", children: values.map((value, index) => (_jsxs("div", { className: "flex flex-col md:flex-row items-start gap-8 \r\n          p-6 rounded-2xl bg-white/5 backdrop-blur-xl \r\n          border border-white/10 hover:border-yellow-400/70\r\n          hover:bg-white/10 shadow-lg hover:shadow-2xl\r\n          transition-all duration-300 group", children: [_jsx("img", { src: value.image, alt: value.alt, className: "w-52 h-40 object-cover rounded-xl shadow-md \r\n            group-hover:shadow-yellow-500/50 transition-all" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "w-12 h-12 flex items-center justify-center rounded-full\r\n              bg-gradient-to-r from-yellow-500 to-orange-500\r\n              shadow-[0_0_12px_rgba(251,146,60,0.7)]\r\n              group-hover:shadow-[0_0_22px_rgba(251,146,60,1)]\r\n              transition-all", children: _jsx("span", { className: "scale-75", children: value.icon }) }), _jsx("h3", { className: "text-2xl font-bold text-white \r\n              group-hover:text-yellow-400 transition-colors", children: value.title })] }), _jsx("p", { className: "text-gray-300 text-base leading-relaxed", children: value.description })] })] }, index))) })] }) }), _jsx("section", { className: "py-24 bg-gradient-to-r from-[#1a2940] to-[#24344d]\r\n text-white", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-8", children: "Ready to Start Your Journey?" }), _jsx("p", { className: "text-xl mb-12 opacity-90 max-w-3xl mx-auto", children: "Don't see the perfect role? We're always looking for talented individuals to join our team. Send us your resume and let's explore opportunities together." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsx("button", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-white text-orange-600 hover:bg-orange-50 px-12 py-6 text-xl font-semibold", children: "Submit Your Resume" }), _jsx("button", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 border border-white text-orange-600 bg-white hover:bg-orange-50 px-12 py-6 text-xl font-semibold rounded-md backdrop-blur-sm", children: "Contact HR Team" })] })] }) })] }));
};
export default Careers;
