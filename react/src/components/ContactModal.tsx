


import React, { useEffect, useState } from "react";
import { X, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-3">
      <div className="relative w-[90%] sm:w-[400px] bg-gray-800 rounded-2xl p-6 shadow-xl animate-fadeInUp">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-semibold text-white mb-4 text-center">
          Contact Us
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">

          {/* Full Name */}
          <div>
            <label className="text-gray-300 text-xs">Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-xs">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-300 text-xs">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-2"
            />
          </div>
          <div>
            <label className="text-gray-300 text-xs">Company</label>
            <input
              name="phone"
              type="tel"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter Company Name"
              className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-2"
            />
          </div>

          {/* Project Details */}
          <div>
            <label className="text-gray-300 text-xs">Project Details</label>
            <textarea
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full rounded-md border border-gray-600 bg-gray-700 text-white px-2 py-1 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-10 rounded-md bg-gradient-to-r from-orange-600 to-red-600 text-white flex justify-center items-center gap-2 hover:opacity-90 transition"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactModal;
