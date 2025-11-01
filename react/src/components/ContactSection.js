import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        details: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thanks for reaching out! We'll get back to you soon.");
    };
    return (_jsx("section", { className: "py-24 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-8", children: "Let's Start Building Something Amazing Together" }), _jsx("p", { className: "text-xl text-gray-300 mb-10 leading-relaxed", children: "Ready to transform your business with cutting-edge technology? Get in touch with our experts and let's discuss how we can bring your vision to life." }), _jsx("div", { className: "space-y-6", children: [
                                    {
                                        icon: _jsx(Phone, { className: "h-6 w-6 text-white" }),
                                        title: "Call Us",
                                        info: "+91 820 917 5003",
                                    },
                                    {
                                        icon: _jsx(Mail, { className: "h-6 w-6 text-white" }),
                                        title: "Email Us",
                                        info: "info@atsglobaltech.com",
                                    },
                                    {
                                        icon: _jsx(MapPin, { className: "h-6 w-6 text-white" }),
                                        title: "Visit Us",
                                        info: "codercom building, A4, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur Vaishali Nagar, Jaipur (302021)",
                                    },
                                ].map((item, idx) => (_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full", children: item.icon }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: item.title }), _jsx("p", { className: "text-gray-300", children: item.info })] })] }, idx))) })] }), _jsxs("div", { className: "rounded-lg shadow-2xl bg-gradient-to-br from-gray-800 to-gray-700", children: [_jsxs("div", { className: "p-6 text-center", children: [_jsx("h3", { className: "font-semibold tracking-tight text-2xl mb-2 text-white", children: "Get Free Consultation" }), _jsx("p", { className: "text-sm text-gray-300", children: "Fill out the form below and we'll get back to you within 24 hours" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "p-6 pt-0 space-y-6", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                            {
                                                name: "firstName",
                                                placeholder: "Your good name...",
                                                label: "First Name",
                                            },
                                            {
                                                name: "lastName",
                                                placeholder: "Last name",
                                                label: "Last Name",
                                            },
                                        ].map((field) => (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: field.label }), _jsx("input", { name: field.name, value: formData[field.name], onChange: handleChange, placeholder: field.placeholder, className: "flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 text-white px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-orange-500" })] }, field.name))) }), [
                                        {
                                            name: "email",
                                            type: "email",
                                            label: "Email",
                                            placeholder: "email@example.com",
                                        },
                                        {
                                            name: "phone",
                                            type: "tel",
                                            label: "Phone",
                                            placeholder: "+91 (983) 123-4567",
                                        },
                                        {
                                            name: "company",
                                            type: "text",
                                            label: "Company",
                                            placeholder: "Your Company Name",
                                        },
                                    ].map((field) => (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: field.label }), _jsx("input", { type: field.type, name: field.name, value: formData[field.name], onChange: handleChange, placeholder: field.placeholder, className: "flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 text-white px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-orange-500" })] }, field.name))), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: "Project Details" }), _jsx("textarea", { name: "details", value: formData.details, onChange: handleChange, placeholder: "Tell us about your project requirements...", rows: 4, className: "flex w-full min-h-[80px] rounded-md border border-gray-600 bg-gray-800 text-white px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-orange-500" })] }), _jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 w-full rounded-md font-medium text-white h-12 px-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-200", children: [_jsx(Send, { className: "h-5 w-5 mr-2" }), "Send Message"] })] })] })] }) }) }));
};
export default ContactSection;
