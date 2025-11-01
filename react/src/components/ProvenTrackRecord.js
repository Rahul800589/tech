import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Briefcase, Users, Award, Trophy, HeartHandshake, Clock, } from "lucide-react";
const stats = [
    { icon: Briefcase, value: "15+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Team Members" },
    { icon: Trophy, value: "7", label: "Years Experience" },
    { icon: HeartHandshake, value: "100%", label: "Client Satisfaction" },
    { icon: Clock, value: "24/7", label: "Support Available" },
];
const ProvenTrackRecord = () => {
    return (_jsx("section", { className: "py-20 bg-gradient-to-r from-[#15243d] to-[#2d3d55]\n relative overflow-hidden", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Proven Track Record" }), _jsx("p", { className: "text-xl text-gray-300", children: "Numbers that speak for our excellence" })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8", children: stats.map(({ icon: Icon, value, label }) => (_jsxs("div", { className: "text-center group", children: [_jsxs("div", { className: "bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden group-hover:scale-110 transition-transform shadow-lg hover:shadow-xl", children: [_jsx("span", { className: "absolute inset-0 bg-gradient-to-r \n                    from-red-500 via-blue-500 to-purple-600 \n                    animate-gradient-x opacity-80" }), _jsx(Icon, { className: "h-10 w-10 text-white relative z-10" })] }), _jsx("div", { className: "text-3xl md:text-4xl font-bold mb-2 \n                  bg-gradient-to-r from-red-500 via-blue-500 to-purple-600 \n                  bg-clip-text text-transparent animate-gradient-x", children: value }), _jsx("div", { className: "text-gray-300 font-medium", children: label })] }, label))) })] }) }));
};
export default ProvenTrackRecord;
