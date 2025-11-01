import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, Code, Briefcase, Heart, Mail, Phone, MapPin, Zap, Star, ExternalLink, TrendingUp, BookOpen, Globe, } from 'lucide-react';
// --- 1. STATIC DATA DEFINITIONS ---
const profileData = {
    name: 'Pramod Saini',
    title: 'BCA Graduate | Front-End Developer',
    location: 'Jaipur, India',
    joinedYear: '2021',
    contact: {
        email: 'pramodsaini189@gmail.com',
        phone: '+91 820 917 5003',
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/pramod-saini-0577a5229/',
        github: 'https://github.com/Pramod-saini',
        website: 'https://alexjohnson.dev',
    },
    about: 'A **Graduate** passionate about **front-end development** with solid skills in **HTML, CSS, JavaScript, and ReactJS**. Strong analytical thinking and a desire to build user-friendly web interfaces.',
    profileImageUrl: './src/assets/Pramod.png',
    bannerImageUrl: 'https://images.unsplash.com/photo-1761319914911-71b059a655d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000',
};
const featuredProjects = [
    {
        title: 'E-Commerce Web Application',
        role: 'Frontend Developer',
        description: 'Developed a shopping app using React to provide a smooth user experience including browsing, cart management, secure checkout, and order tracking.',
        imageUrl: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg',
        imageAlt: 'E-Commerce Web Application',
        skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
        stats: [
            'Built mobile-friendly layout',
            'Integrated dummy product API',
            'Responsive user cart and checkout UI',
        ],
        liveLink: '#',
        caseStudyLink: '#',
    },
    {
        title: 'Paper Game Web Application',
        role: 'Game Developer',
        description: 'Created a browser-based game using JavaScript where players guide a character through obstacles to increase score.',
        imageUrl: 'https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg',
        imageAlt: 'Paper Game Web Application',
        skills: ['HTML', 'CSS', 'JavaScript'],
        stats: ['Implemented jump/slide actions', 'Score tracker logic', 'Responsive gameplay on different devices'],
        caseStudyLink: '#',
    },
    {
        title: 'AI-Powered Learning Platform',
        role: 'Tech Lead',
        description: 'Built personalized learning platform with AI tutoring, progress tracking, and collaborative features.',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        imageAlt: 'AI-Powered Learning Platform',
        skills: ['React', 'TypeScript', 'Node.js', 'TensorFlow', 'WebRTC'],
        stats: [
            '500K+ active students',
            '85% course completion rate',
            '92% student satisfaction score',
        ],
        liveLink: '#',
    },
];
const workExperience = [
    {
        title: 'Frontend Developer (Intern)',
        company: 'SudoTechLabs',
        duration: 'Jun 2023 - Aug 2023 • Remote',
        bulletPoints: [
            'Contributed to frontend UI development for internal tools',
            'Collaborated with senior devs to fix bugs and write modular React components',
            'Improved component reusability and reduced styling issues using Bootstrap',
        ],
    },
    {
        title: 'Project Contributor',
        company: 'Open Source Projects',
        duration: '2022 - Present • Remote',
        bulletPoints: [
            'Participated in GitHub projects and improved code readability',
            'Learned agile collaboration and version control practices',
            'Actively contributed to small utilities in JavaScript',
        ],
    },
];
const technicalSkills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap', 'Tailwind CSS', 'SASS'],
    backend: ['Node.js', 'Python', 'Express.js', 'Django', 'GraphQL', 'REST APIs'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    cloud: ['AWS', 'Docker', 'Kubernetes', 'Serverless', 'CI/CD'],
    tools: ['VSCode', 'Git', 'GitHub', 'Strapi', 'Jest', 'Cypress', 'Figma', 'Jira'],
};
const educationData = [
    { degree: 'Bachelor of Computer Applications (BCA)', institution: 'University of Rajasthan', years: '2021–2024' },
    { degree: 'High School (12th Grade)', institution: 'Govt. Senior Secondary School', years: '2021' },
];
const interestsData = [
    'Open Source Contribution',
    'Learning New Frameworks',
    'Functional Programming',
    'UI/UX Design',
    'Technical Blogging',
];
const testimonials = [
    {
        quote: 'Pramod is a quick learner and shows great enthusiasm in frontend projects. His dedication to refining his skills is commendable.',
        name: 'Sarah Chen',
        title: 'CTO, SudoTechLabs',
    },
    {
        quote: 'Working with Pramod was an absolute pleasure. He brought a fresh perspective to our UI challenges and executed tasks efficiently.',
        name: 'Michael Rodriguez',
        title: 'Project Manager, RetailMax',
    },
];
const SkillTag = ({ children }) => (_jsx("div", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-orange-300 text-orange-600 text-xs bg-orange-50/50", children: children }));
const StatItem = ({ children }) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-green-500" }), _jsx("span", { className: "text-sm text-gray-600", children: children })] }));
const ProjectCard = ({ title, role, description, imageUrl, skills, stats, liveLink, caseStudyLink, }) => (_jsx("div", { className: "bg-white/10 backdrop-blur-md border border-orange-200/40 rounded-xl p-6 hover:shadow-lg transition-shadow", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [_jsx("img", { src: imageUrl, alt: title, className: "w-full md:w-48 h-32 object-cover rounded-lg" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsx("h3", { className: "text-xl font-bold text-white", children: title }), _jsx("div", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-800", children: role })] }), _jsx("p", { className: "text-gray-200 mb-4", children: description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: skills.map((skill) => (_jsx(SkillTag, { children: skill }, skill))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" }), _jsxs("div", { className: "flex gap-3", children: [liveLink && (_jsxs("a", { href: liveLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-3 text-white transition-colors", children: [_jsx(ExternalLink, { className: "h-4 w-4" }), " View Live"] })), caseStudyLink && (_jsx("a", { href: caseStudyLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 text-sm font-medium border bg-background hover:bg-orange-50 h-9 rounded-md px-3 border-orange-300 text-orange-600 transition-colors", children: "Case Study" }))] })] })] }) }));
// Work Experience Item
const ExperienceItem = ({ title, company, duration, bulletPoints, isLast, }) => (_jsxs("div", { className: `relative pl-8 border-l-2 border-orange-400 ${isLast ? 'last:border-l-0' : ''}`, children: [_jsx("div", { className: "absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full" }), _jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "text-xl font-bold text-white", children: title }), _jsx("p", { className: "text-orange-300 font-semibold", children: company }), _jsx("p", { className: "text-gray-300", children: duration })] }), _jsx("ul", { className: "space-y-2", children: bulletPoints.map((point, index) => (_jsxs("li", { className: "flex items-start gap-3", children: [_jsx(Star, { className: "h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-gray-200", children: point })] }, index))) })] }));
// --- SIDEBAR CARDS ---
const ContactCard = () => (_jsx("section", { className: "rounded-lg bg-white/10 backdrop-blur-md text-white border-0 shadow-lg sticky top-8", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-bold text-orange-300 mb-4", children: "Contact Information" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Mail, { className: "h-4 w-4 text-orange-500" }), " ", _jsxs("a", { href: `mailto:${profileData.contact.email}`, className: "hover:text-orange-400", children: [" ", profileData.contact.email, " "] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Phone, { className: "h-4 w-4 text-orange-500" }), " ", _jsxs("a", { href: `tel:${profileData.contact.phone}`, className: "hover:text-orange-400", children: [" ", profileData.contact.phone, " "] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(MapPin, { className: "h-4 w-4 text-orange-500" }), " ", _jsx("span", { children: profileData.location })] })] })] }) }));
const SkillsCard = () => (_jsx("section", { className: "rounded-lg bg-white/10 backdrop-blur-md text-white border-0 shadow-lg", children: _jsxs("div", { className: "p-6", children: [_jsxs("h3", { className: "text-lg font-bold text-orange-300 mb-4 flex items-center gap-2", children: [_jsx(Zap, { className: "h-5 w-5 text-orange-500" }), " Technical Skills"] }), _jsx("div", { className: "space-y-4", children: Object.entries(technicalSkills).map(([category, skills]) => (_jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-orange-200 capitalize mb-2", children: category }), _jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((skill) => (_jsx(SkillTag, { children: skill }, skill))) })] }, category))) })] }) }));
const EducationCard = () => (_jsx("section", { className: "rounded-lg bg-white/10 backdrop-blur-md text-white border-0 shadow-lg", children: _jsxs("div", { className: "p-6", children: [_jsxs("h3", { className: "text-lg font-bold text-orange-300 mb-4 flex items-center gap-2", children: [_jsx(BookOpen, { className: "h-5 w-5 text-orange-500" }), " Education"] }), _jsx("div", { className: "space-y-4", children: educationData.map((edu, index) => (_jsxs("div", { className: "border-l-4 border-orange-400 pl-3", children: [_jsx("p", { className: "font-semibold text-white", children: edu.degree }), _jsx("p", { className: "text-gray-300", children: edu.institution }), _jsx("p", { className: "text-sm text-gray-400", children: edu.years })] }, index))) })] }) }));
const InterestsCard = () => (_jsx("section", { className: "rounded-lg bg-white/10 backdrop-blur-md text-white border-0 shadow-lg", children: _jsxs("div", { className: "p-6", children: [_jsxs("h3", { className: "text-lg font-bold text-orange-300 mb-4 flex items-center gap-2", children: [_jsx(Heart, { className: "h-5 w-5 text-orange-500" }), " Interests & Hobbies"] }), _jsx("div", { className: "flex flex-wrap gap-2", children: interestsData.map((interest, index) => (_jsx(SkillTag, { children: interest }, index))) })] }) }));
// --- MAIN COMPONENT ---
const TeamMembers = () => {
    return (_jsxs("section", { className: "min-h-screen bg-gradient-to-r from-[#1a2940] to-[#24344d] text-white", children: [_jsxs("section", { className: "relative", children: [_jsx("div", { className: "h-96 bg-cover bg-center relative", style: { backgroundImage: `url('${profileData.bannerImageUrl}')` } }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32", children: _jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-end gap-8", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: profileData.profileImageUrl, alt: profileData.name, className: "w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover" }), _jsx("div", { className: "absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white" })] }), _jsx("section", { className: "flex-1 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 lg:mb-8", children: _jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold text-white", children: profileData.name }), _jsx("p", { className: "text-xl text-orange-300 font-semibold mb-4", children: profileData.title }), _jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-4 w-4" }), " ", _jsx("span", { children: profileData.location })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("svg", { width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "h-4 w-4", children: [_jsx("path", { d: "M8 2v4" }), _jsx("path", { d: "M16 2v4" }), _jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }), _jsx("path", { d: "M3 10h18" })] }), _jsxs("span", { children: ["Joined ", profileData.joinedYear] })] })] })] }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("button", { className: "inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-4 text-white", children: [_jsx(Mail, { className: "h-4 w-4" }), " Contact"] }), _jsxs("div", { className: "flex gap-4 justify-center lg:justify-end text-white", children: [_jsx("a", { href: profileData.social.linkedin, target: "_blank", className: "hover:text-orange-400", rel: "noreferrer", children: _jsxs("svg", { width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "h-5 w-5", children: [_jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }), _jsx("rect", { width: "4", height: "12", x: "2", y: "9" }), _jsx("circle", { cx: "4", cy: "4", r: "2" })] }) }), _jsx("a", { href: profileData.social.github, target: "_blank", className: "hover:text-orange-400", rel: "noreferrer", children: _jsxs("svg", { width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "h-5 w-5", children: [_jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }), _jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })] }) }), _jsx("a", { href: profileData.social.website, target: "_blank", className: "hover:text-orange-400", rel: "noreferrer", children: _jsx(Globe, { className: "h-5 w-5" }) })] })] })] }) })] }) })] }), _jsx("section", { className: "py-16", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [_jsxs("section", { className: "lg:col-span-2 space-y-12", children: [_jsx("section", { className: "rounded-lg bg-white/10 backdrop-blur-md text-white shadow-lg", children: _jsxs("div", { className: "p-8", children: [_jsxs("h2", { className: "text-2xl font-bold flex items-center gap-3 text-orange-300", children: [_jsx(Users, { className: "h-6 w-6" }), " About Me"] }), _jsx("p", { className: "text-gray-200 mt-4 leading-relaxed", dangerouslySetInnerHTML: {
                                                        __html: profileData.about.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                                                    } })] }) }), _jsx("section", { className: "rounded-lg bg-white/10 backdrop-blur-md shadow-lg", children: _jsxs("div", { className: "p-8", children: [_jsxs("h2", { className: "text-2xl font-bold text-orange-300 mb-8 flex items-center gap-3", children: [_jsx(Code, { className: "h-6 w-6" }), " Featured Projects"] }), _jsx("div", { className: "space-y-8", children: featuredProjects.map((project, index) => (_jsx(ProjectCard, { ...project }, index))) })] }) }), _jsx("section", { className: "rounded-lg bg-white/10 backdrop-blur-md shadow-lg", children: _jsxs("div", { className: "p-8", children: [_jsxs("h2", { className: "text-2xl font-bold text-orange-300 mb-8 flex items-center gap-3", children: [_jsx(Briefcase, { className: "h-6 w-6" }), " Work Experience"] }), _jsx("div", { className: "space-y-8", children: workExperience.map((exp, index) => (_jsx(ExperienceItem, { ...exp, isLast: index === workExperience.length - 1 }, index))) })] }) }), _jsx("section", { className: "rounded-lg bg-white/10 backdrop-blur-md shadow-lg", children: _jsxs("div", { className: "p-8", children: [_jsxs("h2", { className: "text-2xl font-bold text-orange-300 mb-8 flex items-center gap-3", children: [_jsx(Heart, { className: "h-6 w-6" }), " What Colleagues Say"] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: "bg-orange-50/20 backdrop-blur p-6 rounded-lg", children: [_jsxs("p", { className: "text-gray-200 italic mb-4", children: ["\"", testimonial.quote, "\""] }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: testimonial.name }), _jsx("p", { className: "text-sm text-orange-300", children: testimonial.title })] })] }, index))) })] }) })] }), _jsxs("section", { className: "lg:col-span-1 space-y-8", children: [_jsx(ContactCard, {}), _jsx(SkillsCard, {}), _jsx(EducationCard, {}), _jsx(InterestsCard, {})] })] }) }) })] }));
};
export default TeamMembers;
