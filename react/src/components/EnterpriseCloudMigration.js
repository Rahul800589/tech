import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CloudFeature = ({ title, desc, img, }) => (_jsxs("div", { className: "bg-[#162532] rounded-xl overflow-hidden shadow hover:shadow-lg transition border border-[#1e3546]", children: [_jsx("img", { src: img, alt: title, className: "w-full h-44 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "font-semibold text-lg text-blue-300 mb-2", children: title }), _jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: desc })] })] }));
export default function EnterpriseCloudMigration() {
    return (_jsx("main", { className: "bg-gradient-to-b from-[#0c1b29] to-[#12283a] text-white min-h-screen py-32 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("section", { className: "grid gap-10 lg:grid-cols-2 items-center mb-20", children: [_jsxs("div", { children: [_jsx("span", { className: "text-sm bg-blue-900/40 text-blue-300 px-4 py-1 rounded-full", children: "Cloud Solutions \u00B7 Enterprise" }), _jsx("h1", { className: "text-4xl md:text-5xl font-bold leading-tight mt-3 mb-6", children: "Enterprise Cloud Migration" }), _jsx("p", { className: "text-lg text-gray-300 leading-relaxed mb-8 max-w-xl", children: "High-scale cloud transformation ensuring performance, security, and cost efficiency. From legacy infra to modern cloud-native architecture \u2014 seamlessly executed with zero downtime strategy." })] }), _jsx("img", { src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1400", alt: "Cloud Migration", className: "rounded-2xl shadow-lg w-full h-80 object-cover" })] }), _jsx("section", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20", children: [
                        { label: "Infra Cost Savings", value: "60%" },
                        { label: "Downtime Reduced", value: "95%" },
                        { label: "Faster Deployment", value: "4x" },
                        { label: "Microservices Shift", value: "100%" },
                    ].map((stat) => (_jsxs("div", { children: [_jsx("p", { className: "text-3xl font-bold text-blue-400", children: stat.value }), _jsx("p", { className: "text-xs text-gray-400", children: stat.label })] }, stat.label))) }), _jsxs("section", { className: "mb-20", children: [_jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Why Cloud Migration?" }), _jsxs("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [_jsx(CloudFeature, { title: "Scalability & Flexibility", desc: "Auto-scaling ensures performance under heavy loads while optimizing costs.", img: "https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&w=1200" }), _jsx(CloudFeature, { title: "Improved Performance", desc: "Reduced latency with globally distributed compute and storage solutions.", img: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200" }), _jsx(CloudFeature, { title: "Strong Security Layer", desc: "IAM, Zero Trust architecture & compliance-driven access policies.", img: "https://images.pexels.com/photos/5965892/pexels-photo-5965892.jpeg?auto=compress&cs=tinysrgb&w=1200" })] })] }), _jsxs("section", { className: "mb-20", children: [_jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Migration Process" }), _jsx("div", { className: "grid gap-8 md:grid-cols-4", children: [
                                {
                                    title: "1️⃣ Assessment",
                                    detail: "Application audit & TCO estimation to form transformation roadmap.",
                                },
                                {
                                    title: "2️⃣ Planning",
                                    detail: "Architecting cloud-native solution using best practices & compliance.",
                                },
                                {
                                    title: "3️⃣ Migration",
                                    detail: "Lift & shift → Replatforming → Microservices decomposition.",
                                },
                                {
                                    title: "4️⃣ Optimization",
                                    detail: "FinOps monitoring, auto-scaling & performance refinement.",
                                },
                            ].map((step) => (_jsxs("div", { className: "p-6 border border-[#1c3344] bg-[#0d2030] rounded-xl", children: [_jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: step.title }), _jsx("p", { className: "text-sm text-gray-300", children: step.detail })] }, step.title))) })] }), _jsxs("section", { className: "mb-20", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Technologies Used" }), _jsx("div", { className: "flex gap-3 flex-wrap", children: [
                                "AWS",
                                "Docker",
                                "Kubernetes",
                                "Terraform",
                                "MongoDB",
                                "Kafka",
                                "CI/CD Pipelines",
                                "Serverless",
                            ].map((item) => (_jsx("span", { className: "px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200", children: item }, item))) })] }), _jsxs("section", { className: "p-10 text-center bg-[#0e1d2b] border border-[#1f3a51] rounded-2xl", children: [_jsx("h3", { className: "text-2xl font-semibold mb-3", children: "Ready for Cloud?" }), _jsx("p", { className: "text-gray-300 mb-6 max-w-xl mx-auto", children: "Transform your infrastructure with future-proof cloud modernization." }), _jsx("button", { className: "bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-full font-semibold", children: "Book Consultation" })] })] }) }));
}
