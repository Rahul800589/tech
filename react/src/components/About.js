import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Linkedin, Github, Mail } from "lucide-react";
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    const teamMembers = [
        {
            name: 'Pramod Saini',
            role: 'Senior Frontend Developer',
            description: '6 months in frontend development with strong UI experience.',
            imgSrc: './src/assets/Pramod.png',
            imgAlt: 'Pramod Saini',
            linkedin: 'https://www.linkedin.com/in/pramod-saini-0577a5229/',
            mail: 'mailto:pramod@ats global tech.com',
            github: 'https://github.com/Pramod-saini',
            navigationPath: '/team-members',
        },
        {
            name: 'Aadarsh Sharma',
            role: 'Senior Frontend Developer',
            description: 'Expert in React JS & modern web design.',
            imgSrc: 'src/assets/Aadarsh.png',
            imgAlt: 'Aadarsh Sharma',
            linkedin: 'https://www.linkedin.com/in/aadarsh-sharma-4a5aba336/',
            mail: 'mailto:aadarsh@ats global tech.com',
            github: 'https://github.com/Aadarsh1511',
            navigationPath: '/team-members2',
        },
        {
            name: 'Aakash Kumawat',
            role: 'Senior Backend Developer',
            description: 'Backend developer with enterprise-level experience.',
            imgSrc: 'src/assets/Aakash.jpeg',
            imgAlt: 'Aakash Kumawat',
            linkedin: 'https://linkedin.com/in/akshmat243',
            mail: 'mailto:aakash@ats global tech.com',
            github: 'https://github.com/akshmat243',
            navigationPath: '/team-members3',
        },
        {
            name: 'Ram Parik',
            role: ' Backend Developer',
            description: 'Passion for clean & scalable backend development.',
            imgSrc: 'src/assets/Ram.png',
            imgAlt: 'Ram Parik',
            linkedin: 'https://www.linkedin.com/in/ram-parik -22411a308',
            mail: 'mailto:raj@ats global tech.com',
            github: 'https://share.google/tKqAjkPqBtKgtdqOJ',
            navigationPath: '/team-members4',
        },
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-r from-[#1a2e49] to-[#32445b]\n\u00A0 text-white", children: [_jsx("section", { className: "py-32 lg:py-28 text-white text-center", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: ["About ", _jsx("span", { className: "text-orange-400", children: "ATS GLOBAL TECH" })] }), _jsx("p", { className: "text-xl mb-8 max-w-3xl mx-auto", children: "We are a team of passionate technologists, designers, and innovators committed to transforming businesses through cutting-edge technology solutions." })] }) }), _jsx("section", { className: "py-20 bg-white/10 backdrop-blur-sm rounded-3xl max-w-7xl mx-auto my-12 text-gray-100 shadow-lg", children: _jsxs("div", { className: "grid grid-cols-1 gap-12 px-6 lg:px-8", children: [_jsxs("div", { className: "rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/20", children: [_jsx("h3", { className: "text-2xl font-semibold text-orange-400 mb-4 text-center", children: "Our Vision" }), _jsx("p", { className: "text-lg text-gray-200 leading-relaxed text-center", children: "To be the world's most trusted technology partner, recognized for our innovation, integrity, and impact. We envision a future where every business can leverage technology to create meaningful value." })] }), _jsxs("div", { className: "rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/20", children: [_jsx("h3", { className: "text-2xl font-semibold text-orange-400 mb-4 text-center", children: "Our Mission" }), _jsx("p", { className: "text-lg text-gray-200 leading-relaxed text-center", children: "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and transformation. We make advanced tech accessible to organizations of all sizes." })] })] }) }), _jsx("section", { className: "py-20 max-w-7xl mx-auto px-6 lg:px-8 my-12 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 text-gray-100", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsx("div", { className: "relative", children: _jsx("img", { src: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", alt: "Aryan Singh - CEO", className: "w-full max-w-md mx-auto rounded-2xl shadow-xl" }) }), _jsxs("div", { children: [_jsx("div", { className: "mb-8", children: _jsx("blockquote", { className: "text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed mb-6", children: "\"Technology should empower businesses to achieve their wildest dreams. At ats global tech, we don't just build software \u2013 we craft digital experiences that transform industries.\"" }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-3xl font-bold text-gray-100 mb-2", children: "Aryan Singh" }), _jsx("p", { className: "text-xl text-orange-600 font-semibold mb-4", children: "CEO & Founder" })] }), _jsxs("div", { className: "prose prose-lg text-gray-400", children: [_jsxs("p", { className: "mb-4", children: ["With over 15 years of experience in the technology industry, Aryan founded ats global tech with a vision to bridge the gap between innovative technology and practical business solutions. As a former senior engineer at", " ", _jsxs("span", { className: "text-orange-500 text-xl underline", children: [" ", "Infosys"] }), ", he brings deep technical expertise combined with strategic business acumen."] }), _jsx("p", { className: "mb-4", children: "Under Aryan's leadership, ats global tech has grown from a two-person startup to a globally recognized technology consultancy, serving Fortune 500 companies and innovative startups alike. His passion for emerging technologies and commitment to excellence has been the driving force behind the company's success." }), _jsx("p", { children: "Aryan holds a Master's degree in Computer Science from Stanford University and is a frequent speaker at technology conferences worldwide. When he's not revolutionizing businesses through technology, you can find him mentoring young entrepreneurs or exploring the latest in AI and machine learning." })] }), _jsxs("div", { className: "flex items-center space-x-4 pt-4", children: [_jsx("a", { href: "#", className: "text-orange-600 hover:text-orange-800 transition-colors", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-linkedin h-6 w-6", children: [_jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }), _jsx("rect", { width: "4", height: "12", x: "2", y: "9" }), _jsx("circle", { cx: "4", cy: "4", r: "2" })] }) }), _jsx("a", { href: "mailto:alex@ats global tech.com", className: "text-orange-600 hover:text-orange-800 transition-colors", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-mail h-6 w-6", children: [_jsx("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }), _jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })] }) }), _jsx("a", { href: "#", className: "text-orange-600 hover:text-orange-800 transition-colors", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-github h-6 w-6", children: [_jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }), _jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })] }) })] }), _jsxs("div", { className: "grid grid-cols-3 gap-4 pt-6", children: [_jsxs("div", { className: "text-center p-4 bg-gray-500 rounded-lg shadow-md", children: [_jsx("div", { className: "text-2xl font-bold text-orange-600", children: "15+" }), _jsx("div", { className: "text-sm text-gray-200", children: "Years Experience" })] }), _jsxs("div", { className: "text-center p-4 bg-gray-500 rounded-lg shadow-md", children: [_jsx("div", { className: "text-2xl font-bold text-orange-600", children: "500+" }), _jsx("div", { className: "text-sm text-gray-200", children: "Projects Led" })] }), _jsxs("div", { className: "text-center p-4 bg-gray-500 rounded-lg shadow-md", children: [_jsx("div", { className: "text-2xl font-bold text-orange-600", children: "50+" }), _jsx("div", { className: "text-sm text-gray-200", children: "Speaking Events" })] })] })] })] })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-[#1a2940] to-[#24344d]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-100 mb-4", children: "Meet Our Team" }), _jsx("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto", children: "The brilliant minds behind ats global tech - experts in their fields, passionate about innovation." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: teamMembers.map((member) => (_jsxs("div", { className: "rounded-lg bg-white/10 backdrop-blur-sm text-center  shadow-lg hover:shadow-xl transition duration-300 p-6", children: [_jsx("div", { className: "w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden", children: _jsx("img", { src: member.imgSrc, alt: member.imgAlt, className: "w-full h-full object-cover" }) }), _jsx("h3", { className: "font-semibold text-xl", children: member.name }), _jsx("p", { className: "text-sm text-orange-600 font-medium mb-4", children: member.role }), _jsx("p", { className: "text-gray-300 mb-4", children: member.description }), _jsxs("div", { className: "flex justify-center space-x-4 mb-4", children: [_jsx("a", { href: member.linkedin, target: "_blank", rel: "noopener noreferrer", className: "text-orange-600 hover:text-orange-800", children: _jsx(Linkedin, { className: "w-5 h-5" }) }), _jsx("a", { href: member.mail, className: "text-orange-600 hover:text-orange-800", children: _jsx(Mail, { className: "w-5 h-5 " }) }), _jsx("a", { href: member.github, target: "_blank", rel: "noopener noreferrer", className: "text-orange-600 hover:text-orange-800", children: _jsx(Github, { className: "w-5 h-5" }) })] }), _jsx("button", { onClick: () => navigate(member.navigationPath), className: "bg-orange-600 text-white px-4 py-2 text-sm rounded-md hover:bg-orange-700 transition duration-150", children: "View Portfolio" })] }, member.name))) })] }) }), _jsxs("section", { className: "py-20 max-w-7xl mx-auto px-6 lg:px-8 my-12 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 text-gray-100", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-orange-400 mb-4", children: "Our Core Values" }), _jsx("p", { className: "text-lg text-gray-200 max-w-2xl mx-auto", children: "These values guide every decision we make and every solution we deliver." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
                            {
                                title: "Innovation",
                                desc: "We explore new technologies and methods to deliver cutting-edge solutions.",
                            },
                            {
                                title: "Quality",
                                desc: "We deliver high-quality products that exceed expectations.",
                            },
                            {
                                title: "Collaboration",
                                desc: "We partner with clients for long-term success.",
                            },
                            {
                                title: "Growth",
                                desc: "We focus on scalable, future-ready solutions.",
                            },
                        ].map((value, i) => (_jsxs("div", { className: "rounded-xl bg-white/10 p-6 text-center border border-white/10 hover:bg-white/20 transition", children: [_jsx("h3", { className: "text-xl font-semibold text-orange-400 mb-2", children: value.title }), _jsx("p", { className: "text-gray-200 text-sm", children: value.desc })] }, i))) })] }), _jsxs("section", { className: "py-20 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6 text-orange-400", children: "Join Our Journey" }), _jsx("p", { className: "text-lg mb-8 max-w-2xl mx-auto text-gray-200", children: "Whether you're looking for a career opportunity or want to partner with us \u2014 we\u2019d love to hear from you." }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [_jsx("a", { href: "/contact", children: _jsx("button", { className: "bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition", children: "Get In Touch" }) }), _jsx("a", { href: "/careers", children: _jsx("button", { className: "bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-md transition border border-white/30", children: "View Careers" }) })] })] })] }));
};
export default About;
