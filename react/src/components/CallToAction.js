import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, MessageSquare, Calendar, Target } from "lucide-react";
const CallToAction = () => {
    return (_jsxs("section", { className: "py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-10 bg-cover bg-center", style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop')",
                } }), _jsxs("div", { className: "relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl md:text-6xl font-bold mb-8", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed", children: "Join hundreds of successful companies who have partnered with us to achieve digital transformation. Let's discuss how we can accelerate your growth and create solutions that drive real business value." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center mb-12", children: [_jsx("a", { href: "/contact", children: _jsxs("button", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white text-black h-12 rounded-md px-12 py-3 text-xl font-semibold hover:bg-orange-50 transition-all duration-300", children: ["Start Your Project Today", _jsx(ArrowRight, { className: "ml-2 h-6 w-6" })] }) }), _jsx("a", { href: "/services", children: _jsx("button", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white/80 text-black h-12 rounded-md px-12 py-3 text-xl font-medium hover:bg-orange-50 transition-all duration-300", children: "Explore Our Services" }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center", children: [
                            {
                                icon: _jsx(MessageSquare, { className: "h-12 w-12 mx-auto mb-4" }),
                                title: "Free Consultation",
                                desc: "Get expert advice tailored to your needs",
                            },
                            {
                                icon: _jsx(Calendar, { className: "h-12 w-12 mx-auto mb-4" }),
                                title: "Quick Response",
                                desc: "We respond within 24 hours",
                            },
                            {
                                icon: _jsx(Target, { className: "h-12 w-12 mx-auto mb-4" }),
                                title: "Customized Solutions",
                                desc: "Solutions designed specifically for you",
                            },
                        ].map((feature, idx) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6", children: [feature.icon, _jsx("h3", { className: "font-bold text-lg mb-2", children: feature.title }), _jsx("p", { children: feature.desc })] }, idx))) })] })] }));
};
export default CallToAction;
