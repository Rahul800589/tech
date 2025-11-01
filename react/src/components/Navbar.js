import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/ats-logo.png";
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [workOpen, setWorkOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    const closeAll = () => {
        setMobileOpen(false);
        setServicesOpen(false);
        setWorkOpen(false);
    };
    const isActive = (path) => location.pathname.startsWith(path)
        ? "text-orange-400 font-semibold"
        : "text-white";
    const servicesLinks = [
        { name: "All Services", to: "/services" },
        { name: "Solutions", to: "/services/mobile" },
        { name: "Industries", to: "/services/industries" },
    ];
    const workLinks = [
        { name: "Projects", to: "/work/projects" },
        { name: "Portfolio", to: "/work/portfolio" },
        { name: "Case Studies", to: "/work/case-studies" },
    ];
    return (_jsx("header", { className: "fixed top-0 w-full z-50 bg-gradient-to-r from-[#1a2940] to-[#24344d] shadow-md", children: _jsxs("nav", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-center justify-between h-20", children: [_jsxs(Link, { to: "/", onClick: closeAll, className: "flex items-center gap-3", children: [_jsx("img", { src: Logo, className: "h-14 w-14 object-contain" }), _jsx("span", { className: "text-xl font-bold text-white hidden xl:block", children: "ATS GLOBAL TECH" })] }), _jsxs("div", { className: "hidden lg:flex items-center gap-1 whitespace-nowrap", children: [_jsx(NavItem, { to: "/", isActive: isActive, children: "Home" }), _jsx(NavItem, { to: "/about", isActive: isActive, children: "About" }), _jsx(Dropdown, { title: "Services", open: servicesOpen, setOpen: setServicesOpen, children: servicesLinks.map((item) => (_jsx(DropdownItem, { to: item.to, closeAll: closeAll, children: item.name }, item.name))) }), _jsx(NavItem, { to: "/products", isActive: isActive, children: "Products" }), _jsx(Dropdown, { title: "Work", open: workOpen, setOpen: setWorkOpen, children: workLinks.map((item) => (_jsx(DropdownItem, { to: item.to, closeAll: closeAll, children: item.name }, item.name))) }), _jsx(NavItem, { to: "/testimonials", isActive: isActive, children: "Testimonials" }), _jsx(NavItem, { to: "/blogs", isActive: isActive, children: "Blogs" }), _jsx(NavItem, { to: "/careers", isActive: isActive, children: "Careers" }), _jsx(NavItem, { to: "/contact", isActive: isActive, children: "Contact" })] }), _jsx("button", { onClick: () => setMobileOpen(!mobileOpen), className: "lg:hidden p-2 text-white rounded-md hover:bg-white/10", children: mobileOpen ? _jsx(X, {}) : _jsx(Menu, {}) })] }), mobileOpen && (_jsxs("div", { className: "lg:hidden bg-[#0f172a] p-3 mt-2 rounded-lg space-y-1 shadow-lg", children: [_jsx(MobileLink, { to: "/", closeAll: closeAll, children: "Home" }), _jsx(MobileLink, { to: "/about", closeAll: closeAll, children: "About" }), _jsx(MobileDropdown, { title: "Services", isOpen: servicesOpen, toggle: () => setServicesOpen(!servicesOpen), children: servicesLinks.map((item) => (_jsx(MobileDropdownLink, { to: item.to, closeAll: closeAll, children: item.name }, item.name))) }), _jsx(MobileLink, { to: "/products", closeAll: closeAll, children: "Products" }), _jsx(MobileDropdown, { title: "Work", isOpen: workOpen, toggle: () => setWorkOpen(!workOpen), children: workLinks.map((item) => (_jsx(MobileDropdownLink, { to: item.to, closeAll: closeAll, children: item.name }, item.name))) }), _jsx(MobileLink, { to: "/testimonials", closeAll: closeAll, children: "Testimonials" }), _jsx(MobileLink, { to: "/blogs", closeAll: closeAll, children: "Blogs" }), _jsx(MobileLink, { to: "/careers", closeAll: closeAll, children: "Careers" }), _jsx(MobileLink, { to: "/contact", closeAll: closeAll, children: "Contact" })] }))] }) }));
}
/* ✅ Sub Components */
const NavItem = ({ to, children, isActive }) => (_jsx(Link, { to: to, className: `text-white hover:text-orange-400 px-3 py-2 ${isActive(to)}`, children: children }));
const Dropdown = ({ title, open, setOpen, children }) => (_jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: () => setOpen(!open), className: "text-white flex gap-1 items-center px-3 py-2 hover:text-orange-400", children: [title, _jsx(ChevronDown, { className: `h-4 w-4 transition ${open ? "rotate-180" : ""}` })] }), _jsx("div", { className: `absolute bg-[#0f172a] w-48 rounded-lg shadow-lg py-2 mt-2 transition-all duration-200 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`, children: children })] }));
const DropdownItem = ({ to, children, closeAll }) => (_jsx(Link, { to: to, onClick: closeAll, className: "text-white block px-4 py-2 text-sm hover:bg-orange-600/20", children: children }));
const MobileLink = ({ to, children, closeAll }) => (_jsx(Link, { to: to, onClick: closeAll, className: "text-white block px-4 py-2 rounded-md hover:bg-orange-600/20", children: children }));
const MobileDropdown = ({ title, isOpen, toggle, children }) => (_jsxs("div", { children: [_jsxs("button", { onClick: toggle, className: "text-white flex justify-between items-center w-full px-4 py-2 hover:bg-orange-600/20", children: [title, _jsx(ChevronDown, { className: `h-4 w-4 transition ${isOpen ? "rotate-180" : ""}` })] }), isOpen && _jsx("div", { className: "pl-4 space-y-1", children: children })] }));
const MobileDropdownLink = ({ to, children, closeAll }) => (_jsx(Link, { to: to, onClick: closeAll, className: "text-white block px-4 py-2 rounded-md hover:bg-orange-600/20 text-sm", children: children }));
