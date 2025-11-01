import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProvenTrackRecord from "./components/ProvenTrackRecord";
import TechnologyServices from "./components/TechnologyServices";
import TechnologyStack from "./components/TechnologyStack";
import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
import ClientTestimonials from "./components/ClientTestimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import InnovationJourney from "./components/InnovationJourney";
import ContactSection from "./components/ContactSection";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import Solution from "./components/Solution";
import Industries from "./components/Industries";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import TeamMembers from "./components/TeamMembers";
import AadarshProfile from "./components/AadarshProfile";
import Profile from "./components/Profile";
import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";
import AiPage from "./components/AiPage";
import SecureBankingApp from "./components/SecureBankingApp";
import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
import TravelBookingPlatform from "./components/TravelBookingPlatform";
import AIChatAssistant from "./components/AIChatAssistant";
function App() {
    const [openModal, setOpenModal] = useState(false);
    // ✅ Auto open after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpenModal(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    // ✅ Button from Hero triggers modal
    useEffect(() => {
        const handleOpenModal = () => setOpenModal(true);
        window.addEventListener("openContactModal", handleOpenModal);
        return () => window.removeEventListener("openContactModal", handleOpenModal);
    }, []);
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen flex flex-col bg-[#111827]", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-grow", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(HeroSection, {}), _jsx(ProvenTrackRecord, {}), _jsx(TechnologyServices, {}), _jsx(TechnologyStack, {}), _jsx(FeaturedSuccessStories, {}), _jsx(ClientTestimonials, {}), _jsx(WhyChooseUs, {}), _jsx(InnovationJourney, {}), _jsx(ContactSection, {}), _jsx(CallToAction, {})] }) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/team-members", element: _jsx(TeamMembers, {}) }), _jsx(Route, { path: "/team-members2", element: _jsx(AadarshProfile, {}) }), _jsx(Route, { path: "/team-members3", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/team-members4", element: _jsx(RajSinghShekhawatProfile, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServicesSection, {}) }), _jsx(Route, { path: "/services/mobile", element: _jsx(Solution, {}) }), _jsx(Route, { path: "/services/industries", element: _jsx(Industries, {}) }), _jsx(Route, { path: "/products", element: _jsx(Products, {}) }), _jsx(Route, { path: "/work/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/work/portfolio", element: _jsx(Portfolio, {}) }), _jsx(Route, { path: "/work/case-studies", element: _jsx(CaseStudies, {}) }), _jsx(Route, { path: "/testimonials", element: _jsx(Testimonials, {}) }), _jsx(Route, { path: "/blogs", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/careers", element: _jsx(Careers, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/ai-page", element: _jsx(AiPage, {}) }), _jsx(Route, { path: "/secure-page", element: _jsx(SecureBankingApp, {}) }), _jsx(Route, { path: "/cloud-page", element: _jsx(EnterpriseCloudMigration, {}) }), _jsx(Route, { path: "/health-page", element: _jsx(HealthcareAnalyticsPlatform, {}) }), _jsx(Route, { path: "/fintech-page", element: _jsx(FinTechMobileBankingApp, {}) }), _jsx(Route, { path: "/saas-page", element: _jsx(SaaSAnalyticsDashboard, {}) }), _jsx(Route, { path: "/travel-page", element: _jsx(TravelBookingPlatform, {}) }), _jsx(Route, { path: "/aichat-page", element: _jsx(AIChatAssistant, {}) })] }) }), _jsx(Footer, {}), _jsx(ContactModal, { isOpen: openModal, onClose: () => setOpenModal(false) })] }) }));
}
export default App;
