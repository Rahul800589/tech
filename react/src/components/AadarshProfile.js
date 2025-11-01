import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, Code, Briefcase, Heart, Mail, Phone, MapPin, Zap, ExternalLink, Star, TrendingUp, Linkedin, Github, Globe, Calendar, } from 'lucide-react';
// --- Utility Components (Simplified Placeholders for Readability) ---
const SkillTag = ({ children }) => (_jsx("div", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-white", children: children }));
const StatItem = ({ children }) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-green-400" }), _jsx("span", { className: "text-sm text-gray-200", children: children })] }));
const ProjectCard = ({ title, role, description, imageUrl, imageAlt, skills, stats, liveLink, caseStudyLink, }) => (_jsx("div", { className: "border border-orange-300 rounded-xl p-6 bg-white/10 backdrop-blur shadow-md text-white", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [_jsx("img", { src: imageUrl, alt: imageAlt, className: "w-full md:w-48 h-32 rounded-lg object-cover" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsx("h3", { className: "text-xl font-bold mb-1", children: title }), _jsx("div", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-600 text-white", children: role })] }), _jsx("p", { className: "text-gray-200 mb-4", children: description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: skills.map((skill) => (_jsx(SkillTag, { children: skill }, skill))) }), stats && stats.length > 0 && (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [_jsx("div", { className: "space-y-2", children: stats.slice(0, 2).map((stat) => (_jsx(StatItem, { children: stat }, stat))) }), _jsx("div", { className: "space-y-2", children: stats.slice(2).map((stat) => (_jsx(StatItem, { children: stat }, stat))) })] })), _jsxs("div", { className: "flex gap-3", children: [_jsxs("a", { href: liveLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-3 text-white transition-colors", children: [_jsx(ExternalLink, { className: "h-4 w-4" }), "View Live"] }), caseStudyLink && (_jsx("a", { href: caseStudyLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 text-sm font-medium border bg-white/5 hover:bg-white/10 h-9 rounded-md px-3 border-orange-300 text-white transition-colors", children: "Case Study" }))] })] })] }) }));
const ExperienceItem = ({ title, company, duration, location, bulletPoints, isLast, }) => (_jsxs("div", { className: `relative pl-8 border-l-2 border-orange-400 ${isLast ? 'last:border-l-0' : ''}`, children: [_jsx("div", { className: "absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full" }), _jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "text-xl font-bold text-white", children: title }), _jsx("p", { className: "text-orange-300 font-semibold", children: company }), _jsxs("p", { className: "text-gray-300", children: [duration, " \u2022 ", location] })] }), _jsx("ul", { className: "space-y-2", children: bulletPoints.map((point, index) => (_jsxs("li", { className: "flex items-start gap-3", children: [_jsx(Star, { className: "h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-gray-200", children: point })] }, index))) })] }));
// --- Data Structure (Extracted from HTML Snippet) ---
const featuredProjects = [
    {
        title: 'Internet Banking System',
        role: 'Java Developer',
        description: 'Simulated core banking functionality using Java Swing and JDBC. Features include user authentication, fund transfer, and transaction history with an admin dashboard.',
        imageUrl: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&h=400&fit=crop',
        imageAlt: 'Internet Banking System',
        skills: ['Java', 'MySQL', 'Swing'],
        stats: [], // Stats were empty in the original HTML
        liveLink: '#',
        caseStudyLink: '#',
    },
    {
        title: 'Men Salon Appointment System',
        role: 'Full Stack Developer',
        description: 'Web-based appointment booking system for salons with customer login, service selection, and admin schedule management.',
        imageUrl: 'https://images.pexels.com/photos/34488687/pexels-photo-34488687.jpeg',
        imageAlt: 'Men Salon Appointment System',
        skills: ['HTML', 'CSS', 'PHP', 'MySQL'],
        stats: [], // Stats were empty in the original HTML
        liveLink: '#',
        caseStudyLink: '#',
    },
    {
        title: 'Innomind B2B Informatic Website',
        role: 'Frontend Developer',
        description: 'Developed a B2B website for showcasing electrical, lighting, and retrofitting solutions. Designed with React and Tailwind for clean structure and responsiveness.',
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
        imageAlt: 'Innomind B2B Informatic Website',
        skills: ['React', 'Tailwind CSS', 'JavaScript'],
        stats: [
            'Improved inquiry rate by 35%',
            'SEO-optimized structure with service-specific pages',
            'Deployed lightweight UI for fast load times',
        ],
        liveLink: '#',
        caseStudyLink: '#',
    },
    {
        title: 'SudoTechlabs IT Website',
        role: 'Frontend Developer',
        description: 'Worked on the main corporate website redesign using React + Tailwind. Focused on reusable UI blocks, mobile-first design, and smooth animations.',
        imageUrl: 'https://media.istockphoto.com/id/964435456/photo/workplace-of-manometer-plant-staff.jpg?b=1&s=612x612&w=0&k=20&c=ERrO1EsQaTZXboG890w6G0Ky2A46_XefLShOU5dRkqU=',
        imageAlt: 'SudoTechlabs IT Website',
        skills: ['React', 'Tailwind CSS', 'JavaScript'],
        stats: [
            'Reduced bounce rate by 45%',
            'Enabled dark/light theme support',
            'Integrated performance monitoring tools',
        ],
        liveLink: '#',
        caseStudyLink: '#',
    },
];
const workExperience = [
    {
        title: 'Frontend Developer Intern',
        company: 'SudoTechlabs',
        duration: 'March 2025 – Present',
        location: 'Jaipur, Rajasthan',
        bulletPoints: [
            'Built responsive dashboards and full websites using React.js and Tailwind CSS',
            'Created reusable components and integrated APIs',
            'Improved UI performance and collaborated with cross-functional teams',
        ],
        isLast: false,
    },
    {
        title: 'Java Programming Intern',
        company: 'Softhunters Technology',
        duration: 'Oct 2024 – Dec 2024',
        location: 'Jaipur, Rajasthan',
        bulletPoints: [
            'Built an Internet Banking System with Java and MySQL',
            'Implemented secure login, fund transfer, and admin panels',
            'Increased project efficiency by 25% through optimized logic',
        ],
        isLast: true,
    },
];
const technicalSkills = {
    frontend: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Redux', 'TypeScript'],
    backend: ['Node.js', 'Express.js', 'Python', 'Java', 'PHP'],
    database: ['MySQL', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jira'],
};
// --- Main Component ---
const AadarshProfile = () => {
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-r from-[#1a2940] to-[#24344d] text-white", children: [_jsxs("section", { className: "relative", children: [_jsx("div", { className: "h-96 bg-cover bg-center relative", style: {
                            backgroundImage: 'url("https://images.unsplash.com/photo-1761319914911-71b059a655d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000")',
                        }, children: _jsx("div", { className: "absolute inset-0 " }) }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32", children: _jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-end gap-8", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: "./src/assets/Aadarsh.png" // IMPORTANT: Update path if not in /public
                                            , alt: "Aadarsh Sharma", className: "w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover" }), _jsx("div", { className: "absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white" })] }), _jsx("div", { className: "flex-1 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 lg:mb-8", children: _jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold mb-2", children: "Aadarsh Sharma" }), _jsx("p", { className: "text-xl text-orange-300 font-semibold mb-4", children: "Frontend Developer | React & Tailwind Specialist" }), _jsxs("div", { className: "flex flex-wrap items-center gap-4 text-gray-200", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-4 w-4" }), _jsx("span", { children: "Jaipur, Rajasthan, India" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "h-4 w-4" }), _jsx("span", { children: "Joined March 2025" })] })] })] }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("div", { className: "flex gap-3", children: _jsxs("button", { className: "inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-3 text-white", children: [_jsx(Mail, { className: "h-4 w-4 mr-2" }), "Contact"] }) }), _jsxs("div", { className: "flex gap-3 justify-center lg:justify-end text-white", children: [_jsx("a", { href: "https://www.linkedin.com/in/aadarsh-sharma-4a5aba336/", className: "hover:text-orange-300", target: "_blank", rel: "noopener noreferrer", children: _jsx(Linkedin, { className: "h-5 w-5" }) }), _jsx("a", { href: "https://github.com/Aadarsh1511", className: "hover:text-orange-300", target: "_blank", rel: "noopener noreferrer", children: _jsx(Github, { className: "h-5 w-5" }) }), _jsx("a", { href: "https://aadarshsharma.dev", className: "hover:text-orange-300", target: "_blank", rel: "noopener noreferrer", children: _jsx(Globe, { className: "h-5 w-5" }) })] })] })] }) })] }) })] }), _jsx("section", { className: "py-16", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [_jsxs("div", { className: "lg:col-span-2 space-y-12", children: [_jsx("div", { className: "rounded-lg bg-white/5 border-0 shadow-lg", children: _jsxs("div", { className: "p-8", children: [_jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-3", children: [_jsx(Users, { className: "h-6 w-6 text-orange-300" }), "About Me"] }), _jsxs("p", { className: "text-gray-200 text-lg leading-relaxed", children: ["Dedicated and detail-oriented ", _jsx("strong", { children: "Frontend Developer" }), " with hands-on experience in building responsive web interfaces using ", _jsx("strong", { children: "React.js" }), " and ", _jsx("strong", { children: "Tailwind CSS" }), ". Skilled in creating clean, scalable components and integrating APIs to enhance user experience. Strong foundation in ", _jsx("strong", { children: "Java" }), ", ", _jsx("strong", { children: "Python" }), ", and modern development practices. Known for delivering high-quality, maintainable code and collaborating effectively within cross-functional teams to meet project goals."] })] }) }), _jsx("div", { className: "rounded-lg bg-white/5 border-0 shadow-lg", children: _jsxs("div", { className: "p-8", children: [_jsxs("h2", { className: "text-2xl font-bold mb-8 flex items-center gap-3", children: [_jsx(Code, { className: "h-6 w-6 text-orange-300" }), "Featured Projects"] }), _jsx("div", { className: "space-y-8", children: featuredProjects.map((project, index) => (_jsx(ProjectCard, { ...project }, index))) })] }) }), _jsx("div", { className: "rounded-lg bg-white/5 border-0 shadow-lg", children: _jsxs("div", { className: "p-8", children: [_jsxs("h2", { className: "text-2xl font-bold mb-8 flex items-center gap-3", children: [_jsx(Briefcase, { className: "h-6 w-6 text-orange-300" }), "Work Experience"] }), _jsx("div", { className: "space-y-8", children: workExperience.map((exp, index) => (_jsx(ExperienceItem, { ...exp }, index))) })] }) }), _jsx("div", { className: "rounded-lg bg-white/5 border-0 shadow-lg", children: _jsxs("div", { className: "p-8", children: [_jsxs("h2", { className: "text-2xl font-bold mb-8 flex items-center gap-3", children: [_jsx(Heart, { className: "h-6 w-6 text-orange-300" }), "What Colleagues Say"] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-orange-50/10 p-6 rounded-lg", children: [_jsx("p", { className: "text-gray-200 italic mb-4", children: "\"Aadarsh is a fast learner and a dedicated team player. His attention to UI detail and clean component structure greatly improved our delivery speed.\"" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: "Rahul Mehta" }), _jsx("p", { className: "text-sm text-orange-300", children: "Team Lead, SudoTechlabs" })] })] }), _jsxs("div", { className: "bg-orange-50/10 p-6 rounded-lg", children: [_jsx("p", { className: "text-gray-200 italic mb-4", children: "\"Aadarsh brought energy and reliability to the internship. His React codebase was highly reusable and cleanly written.\"" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: "Kavita Sharma" }), _jsx("p", { className: "text-sm text-orange-300", children: "Frontend Lead, Innomind" })] })] })] })] }) })] }), _jsxs("div", { className: "space-y-8", children: [_jsx("div", { className: "rounded-lg bg-white/5 border-0 shadow-lg", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-bold mb-4", children: "Contact Information" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Mail, { className: "h-4 w-4 text-orange-300" }), _jsx("span", { className: "text-sm text-gray-200", children: "sharmaaadarsh04@gmail.com" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Phone, { className: "h-4 w-4 text-orange-300" }), _jsx("span", { className: "text-sm text-gray-200", children: "+91 820 917 5003" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(MapPin, { className: "h-4 w-4 text-orange-300" }), _jsx("span", { className: "text-sm text-gray-200", children: "Jaipur, Rajasthan, India" })] })] })] }) }), _jsx("div", { className: "rounded-lg bg-white/5 border-0 shadow-lg", children: _jsxs("div", { className: "p-6", children: [_jsxs("h3", { className: "text-lg font-bold mb-4 flex items-center gap-2", children: [_jsx(Zap, { className: "h-5 w-5 text-orange-300" }), "Technical Skills"] }), _jsx("div", { className: "space-y-4", children: Object.entries(technicalSkills).map(([category, skills]) => (_jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-orange-300 capitalize mb-2", children: category }), _jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((skill) => (_jsx(SkillTag, { children: skill }, skill))) })] }, category))) })] }) })] })] }) }) })] }));
};
export default AadarshProfile;
