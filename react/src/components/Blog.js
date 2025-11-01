import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Eye, MessageCircle, User } from "lucide-react";
const articles = [
    {
        id: 1,
        title: "Building Scalable Cloud Architecture: Best Practices Guide",
        description: "Learn the essential principles for designing cloud architecture that can scale with your business growth and handle increasing demand.",
        category: "Cloud Computing",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        author: "Michael Rodriguez",
        readTime: "6 min read",
        date: "December 12, 2024",
        views: "1.8K",
        comments: "15",
    },
    {
        id: 2,
        title: "Cybersecurity in the Age of Remote Work",
        description: "With remote work becoming the norm, organizations need to adapt their security strategies. Here's how to protect your business in the digital age.",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop",
        author: "Emily Davis",
        readTime: "7 min read",
        date: "December 10, 2024",
        views: "2.1K",
        comments: "18",
    },
    {
        id: 3,
        title: "Mobile-First Development: Why It Matters in 2024",
        description: "Mobile traffic continues to dominate. Learn why mobile-first development is crucial for your business success and how to implement it effectively.",
        category: "Mobile Development",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        author: "Alex Johnson",
        readTime: "5 min read",
        date: "December 8, 2024",
        views: "1.6K",
        comments: "12",
    },
    {
        id: 4,
        title: "Data Analytics: Turning Information into Business Intelligence",
        description: "Discover how modern data analytics tools can transform raw data into actionable insights that drive business growth and decision-making.",
        category: "Data Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        author: "David Kim",
        readTime: "9 min read",
        date: "December 6, 2024",
        views: "1.9K",
        comments: "21",
    },
    {
        id: 5,
        title: "The Rise of Low-Code Development Platforms",
        description: "Low-code platforms are changing how applications are built. Explore the benefits, limitations, and best use cases for low-code development.",
        category: "Development Tools",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        author: "Lisa Wang",
        readTime: "6 min read",
        date: "December 4, 2024",
        views: "1.4K",
        comments: "9",
    },
    {
        id: 6,
        title: "DevOps Best Practices for Faster Software Delivery",
        description: "Streamline your development process with proven DevOps practices that reduce deployment time and improve software quality.",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=250&fit=crop",
        author: "James Mitchell",
        readTime: "8 min read",
        date: "December 2, 2024",
        views: "2.3K",
        comments: "17",
    },
];
const Blog = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim())
            return alert("Please enter a valid email.");
        alert(`Subscribed successfully with: ${email}`);
        setEmail("");
    };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "py-32 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Ready to Join Our Success Stories?" }), _jsx("p", { className: "text-xl mb-10 text-gray-300", children: "Let us help you achieve similar results. Start your digital transformation journey today and become our next success story." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs("a", { href: "/contact", className: "inline-flex items-center justify-center gap-2 text-sm font-semibold\r\n        bg-gradient-to-r from-[#2468fb] to-[#536ea9]\r\n        hover:from-[#4365a8] hover:to-[#354c6e]\r\n        shadow-[0_0_10px_rgba(251,146,60,0.6)]\r\n        hover:shadow-[0_0_25px_rgba(255,177,71,0.9)]\r\n        transition-all duration-300 text-slate-200\r\n        h-12 rounded-xl px-8 py-3\r\n        hover:-translate-y-1", children: ["Start Your Project", _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "ml-2", children: [_jsx("path", { d: "M5 12h14" }), _jsx("path", { d: "m12 5 7 7-7 7" })] })] }), _jsx("a", { href: "/projects", className: "inline-flex items-center justify-center gap-2 text-sm font-medium\r\n        border border-white/30 backdrop-blur-xl\r\n        bg-white/5 hover:bg-white/10\r\n        hover:border-[#fbbf24] hover:text-[#fbbf24]\r\n        transition-all duration-300\r\n        h-12 rounded-xl px-8 py-3", children: "View Our Work" })] })] }) }), _jsx("section", { className: "py-8 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] border-b", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [_jsx("button", { className: "inline-flex items-center justify-center gap-2 text-sm font-semibold h-10 rounded-full px-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:shadow-blue-500/40 transition-all duration-300", children: "All" }), [
                                "Artificial Intelligence",
                                "Cloud Computing",
                                "Cybersecurity",
                                "Mobile Development",
                                "Data Analytics",
                                "Development Tools",
                                "DevOps",
                            ].map((item) => (_jsx("button", { className: "inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-full px-5 bg-white/10 text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white backdrop-blur-md border border-white/20 transition-all duration-300", children: item }, item)))] }) }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("span", { className: "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md", children: "Featured Article" }), _jsx("h2", { className: "text-3xl font-bold mt-4", children: "Editor's Pick" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 bg-[#1b273b]/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-400/30 transition-all duration-500 border border-white/10", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop", alt: "AI Trends 2024", className: "w-full h-80 object-cover" }), _jsx("div", { className: "absolute top-4 left-4", children: _jsx("span", { className: "px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow", children: "Artificial Intelligence" }) })] }), _jsxs("div", { className: "p-8 flex flex-col justify-center", children: [_jsx("h3", { className: "font-bold text-2xl lg:text-3xl mb-3 leading-tight", children: "The Future of AI in Software Development: Trends for 2024" }), _jsx("p", { className: "text-gray-200 text-lg mb-6", children: "Discover how AI innovations like code automation, smart debugging and predictive development are shaping the future software industry." }), _jsxs("div", { className: "flex items-center flex-wrap gap-4 text-sm text-gray-300 mb-6", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(User, { className: "w-4 h-4" }), " Sarah Chen"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4" }), " December 15, 2024"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4" }), " 8 min read"] })] }), _jsxs("div", { className: "flex items-center gap-6 text-sm text-gray-300 mb-6", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Eye, { className: "w-4 h-4" }), " 2.5K"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(MessageCircle, { className: "w-4 h-4" }), " 24"] })] }), _jsxs("button", { className: "inline-flex items-center gap-2 rounded-md text-sm font-medium px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300", children: ["Read Full Article", _jsx(ArrowRight, { className: "w-4 h-4" })] })] })] })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-[#172443] to-[#303e4f]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Latest Articles" }), _jsx("p", { className: "text-xl text-gray-200 max-w-2xl mx-auto", children: "Discover the latest trends, tutorials, and insights from our team of experts." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: articles.map((article) => (_jsxs("div", { className: "rounded-xl bg-[#1b273b]/70 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-cyan-300/30 transition-all duration-500 group overflow-hidden hover:-translate-y-1", children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: article.image, alt: article.title, className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" }), _jsx("div", { className: "absolute top-4 left-4", children: _jsx("span", { className: "inline-flex rounded-full bg-cyan-500/90 text-white px-2.5 py-0.5 text-xs font-semibold shadow-sm", children: article.category }) })] }), _jsxs("div", { className: "p-6 space-y-3", children: [_jsx("h3", { className: "font-semibold text-xl text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2", children: article.title }), _jsx("p", { className: "text-sm text-gray-300 line-clamp-3", children: article.description }), _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-400", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(User, { className: "h-4 w-4" }), _jsx("span", { children: article.author })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "h-4 w-4" }), _jsx("span", { children: article.readTime })] })] }), _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-400", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "h-4 w-4" }), _jsx("span", { children: article.date })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Eye, { className: "h-4 w-4" }), _jsx("span", { children: article.views })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(MessageCircle, { className: "h-4 w-4" }), _jsx("span", { children: article.comments })] })] })] }), _jsxs("button", { className: "mt-4 inline-flex items-center justify-center gap-2 w-full h-10 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-colors duration-300 border border-transparent", children: ["Read More", _jsx(ArrowRight, { className: "h-4 w-4" })] })] })] }, article.id))) }), _jsx("div", { className: "text-center mt-12", children: _jsx("button", { className: "inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md px-8 bg-cyan-500 hover:bg-cyan-400 text-white transition-colors duration-300", children: "Load More Articles" }) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-[#253353] to-[#303e4f] text-white", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Stay Updated with Tech Insights" }), _jsx("p", { className: "text-xl mb-8 opacity-90", children: "Subscribe to our newsletter and get the latest articles, tutorials, and industry insights delivered directly to your inbox." }), _jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto", children: [_jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email...", className: "flex-1 px-4 py-3 rounded-lg text-gray-100 placeholder-gray-300 bg-[#1b273b]/70 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition", required: true }), _jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 bg-cyan-500 hover:bg-cyan-400 text-white h-11 rounded-lg px-8 py-3 whitespace-nowrap shadow-lg hover:shadow-cyan-400/40", children: ["Subscribe Now", _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] })] }), _jsx("p", { className: "text-sm mt-4 opacity-75", children: "No spam, unsubscribe at any time. We respect your privacy." })] }) })] }));
};
export default Blog;
