import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        details: "",
    });
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);
    if (!isOpen)
        return null;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for reaching out! We'll get back to you soon.");
        console.log("Form Submitted:", formData);
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-3", children: _jsxs("div", { className: "relative w-[90%] sm:w-[400px] bg-gray-800 rounded-2xl p-6 shadow-xl animate-fadeInUp", children: [_jsx("button", { onClick: onClose, className: "absolute top-3 right-3 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white", children: _jsx(X, { className: "w-5 h-5" }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-4 text-center", children: "Contact Us" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-3 text-sm", children: [_jsxs("div", { children: [_jsx("label", { className: "text-gray-300 text-xs", children: "Full Name" }), _jsx("input", { name: "fullName", value: formData.fullName, onChange: handleChange, placeholder: "Enter Full Name", className: "w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-2" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-gray-300 text-xs", children: "Email" }), _jsx("input", { name: "email", type: "email", value: formData.email, onChange: handleChange, placeholder: "Enter Email", className: "w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-2" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-gray-300 text-xs", children: "Phone" }), _jsx("input", { name: "phone", type: "tel", value: formData.phone, onChange: handleChange, placeholder: "Enter Phone Number", className: "w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-2" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-gray-300 text-xs", children: "Company" }), _jsx("input", { name: "phone", type: "tel", value: formData.company, onChange: handleChange, placeholder: "Enter Company Name", className: "w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-2" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-gray-300 text-xs", children: "Project Details" }), _jsx("textarea", { name: "details", rows: 3, value: formData.details, onChange: handleChange, placeholder: "Tell us about your project...", className: "w-full rounded-md border border-gray-600 bg-gray-700 text-white px-2 py-1 resize-none" })] }), _jsxs("button", { type: "submit", className: "w-full h-10 rounded-md bg-gradient-to-r from-orange-600 to-red-600 text-white flex justify-center items-center gap-2 hover:opacity-90 transition", children: [_jsx(Send, { className: "w-4 h-4" }), "Send Message"] })] })] }) }));
};
export default ContactModal;
