// // import React, { useEffect, useState } from "react";
// // import { X, Send } from "lucide-react";

// // interface ContactModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// // }

// // const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     company: "",
// //     details: "",
// //   });

// //   // Prevent background scroll when modal is open
// //   useEffect(() => {
// //     if (isOpen) {
// //       document.body.style.overflow = "hidden";
// //       document.documentElement.style.overflow = "hidden";
// //     } else {
// //       document.body.style.overflow = "auto";
// //       document.documentElement.style.overflow = "auto";
// //     }
// //     return () => {
// //       document.body.style.overflow = "auto";
// //       document.documentElement.style.overflow = "auto";
// //     };
// //   }, [isOpen]);

// //   if (!isOpen) return null;

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     alert("Thanks for reaching out! We'll get back to you soon.");
// //     console.log("Form Submitted:", formData);
// //   };

// //   return (
// //     <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-3">
// //       <div
// //         className="
// //           relative 
// //           w-[90%] sm:w-[80%] md:w-[55%] lg:w-[40%]
// //           bg-gradient-to-br from-gray-800 to-gray-700 
// //           rounded-2xl shadow-2xl 
// //           animate-fadeInUp 
// //           p-4 sm:p-6 md:p-8
// //           my-6 sm:my-10
// //           max-h-[85vh]
// //           overflow-hidden
// //           flex flex-col justify-center
// //         "
// //       >
// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition"
// //         >
// //           <X className="w-5 h-5" />
// //         </button>

// //         {/* Modal Content */}
// //         <div className="flex flex-col justify-center my-28">
// //           <h3 className="text-base sm:text-xl font-semibold text-white mb-2 text-center">
// //             Get Free Consultation
// //           </h3>
// //           <p className="text-xs sm:text-sm text-gray-400 text-center mb-5 sm:mb-6">
// //             Fill out the form and we’ll get back to you within 24 hours
// //           </p>

// //           <form
// //             onSubmit={handleSubmit}
// //             className="space-y-3 sm:space-y-4 text-xs sm:text-sm"
// //           >
// //             {/* Name Fields */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //               {[
// //                 { name: "firstName", label: "First Name" },
// //                 { name: "lastName", label: "Last Name" },
// //               ].map((f) => (
// //                 <div key={f.name}>
// //                   <label className="block text-xs font-medium text-gray-300 mb-1">
// //                     {f.label}
// //                   </label>
// //                   <input
// //                     name={f.name}
// //                     value={formData[f.name as keyof typeof formData]}
// //                     onChange={handleChange}
// //                     placeholder={`Enter ${f.label}`}
// //                     className="w-full h-8 rounded-md border border-gray-600 bg-gray-800 text-white px-2 text-xs focus-visible:ring-2 focus-visible:ring-orange-500"
// //                   />
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Contact Fields */}
// //             {[
// //               { name: "email", label: "Email", type: "email" },
// //               { name: "phone", label: "Phone", type: "tel" },
// //               { name: "company", label: "Company", type: "text" },
// //             ].map((f) => (
// //               <div key={f.name}>
// //                 <label className="block text-xs font-medium text-gray-300 mb-1">
// //                   {f.label}
// //                 </label>
// //                 <input
// //                   type={f.type}
// //                   name={f.name}
// //                   value={formData[f.name as keyof typeof formData]}
// //                   onChange={handleChange}
// //                   placeholder={`Enter ${f.label}`}
// //                   className="w-full h-8 rounded-md border border-gray-600 bg-gray-800 text-white px-2 text-xs focus-visible:ring-2 focus-visible:ring-orange-500"
// //                 />
// //               </div>
// //             ))}

// //             {/* Project Details */}
// //             <div>
// //               <label className="block text-xs font-medium text-gray-300 mb-1">
// //                 Project Details
// //               </label>
// //               <textarea
// //                 name="details"
// //                 value={formData.details}
// //                 onChange={handleChange}
// //                 placeholder="Tell us about your project..."
// //                 rows={3}
// //                 className="w-full rounded-md border border-gray-600 bg-gray-800 text-white px-2 py-1 text-xs resize-none focus-visible:ring-2 focus-visible:ring-orange-500"
// //               />
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full flex items-center justify-center gap-1 rounded-md font-medium text-white h-6 sm:h-12 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all text-xs sm:text-sm"
// //             >
// //               <Send className="h-4 w-4" />
// //               Send
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactModal;








// import React, { useEffect, useState } from "react";
// import { X, Send } from "lucide-react";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     details: "",
//   });

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Thanks for reaching out! We'll get back to you soon.");
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-3">
//       <div
//         className="
//           relative
//           w-[95%] sm:w-[90%] md:w-[70%] lg:w-[55%]
//           max-h-[92vh] h-auto
//           bg-gradient-to-br from-gray-800 to-gray-700
//           rounded-2xl shadow-2xl
//           animate-fadeInUp
//           p-5 sm:p-8 md:p-10
//           my-10 sm:my-14
//           overflow-y-auto
//           flex flex-col justify-start
//         "
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Modal Content */}
//         <div className="flex flex-col justify-center mt-10 mb-5">
//           <h3 className="text-base sm:text-xl font-semibold text-white mb-2 text-center">
//             Get Free Consultation
//           </h3>
//           <p className="text-xs sm:text-sm text-gray-400 text-center mb-6">
//             Fill out the form and we’ll get back to you within 24 hours
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-3 sm:space-y-4 text-xs sm:text-sm"
//           >
//             {/* Name Fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {[
//                 { name: "firstName", label: "First Name" },
//                 { name: "lastName", label: "Last Name" },
//               ].map((f) => (
//                 <div key={f.name}>
//                   <label className="block text-xs font-medium text-gray-300 mb-1">
//                     {f.label}
//                   </label>
//                   <input
//                     name={f.name}
//                     value={formData[f.name as keyof typeof formData]}
//                     onChange={handleChange}
//                     placeholder={`Enter ${f.label}`}
//                     className="w-full h-12 rounded-md border border-gray-600 bg-gray-800 text-white px-2 text-xs focus-visible:ring-2 focus-visible:ring-orange-500"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Contact Fields */}
//             {[
//               { name: "email", label: "Email", type: "email" },
//               { name: "phone", label: "Phone", type: "tel" },
//               { name: "company", label: "Company", type: "text" },
//             ].map((f) => (
//               <div key={f.name}>
//                 <label className="block text-xs font-medium text-gray-300 mb-1">
//                   {f.label}
//                 </label>
//                 <input
//                   type={f.type}
//                   name={f.name}
//                   value={formData[f.name as keyof typeof formData]}
//                   onChange={handleChange}
//                   placeholder={`Enter ${f.label}`}
//                   className="w-full h-12 rounded-md border border-gray-600 bg-gray-800 text-white px-2 text-xs focus-visible:ring-2 focus-visible:ring-orange-500"
//                 />
//               </div>
//             ))}

//             {/* Project Details */}
//             <div>
//               <label className="block text-xs font-medium text-gray-300 mb-1">
//                 Project Details
//               </label>
//               <textarea
//                 name="details"
//                 value={formData.details}
//                 onChange={handleChange}
//                 placeholder="Tell us about your project..."
//                 rows={4}
//                 className="w-full rounded-md border border-gray-600 bg-gray-800 text-white px-2 py-2 text-xs resize-none focus-visible:ring-2 focus-visible:ring-orange-500"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-1 rounded-md font-medium text-white h-8 sm:h-10 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all text-xs sm:text-sm"
//             >
//               <Send className="h-4 w-4" />
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactModal;


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
