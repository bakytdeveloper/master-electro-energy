import { useState, useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import heroBg from "../assets/hero-energy.jpg";
import ServicesSection from "../pages/Services";
import ProjectsSection from "../pages/Projects";
import AboutSection from "../pages/About";
import ContactSection from "../pages/Contact";

const Home = () => {
    const [step, setStep] = useState(1);
    const sentinelRef = useRef(null);

    useInfiniteScroll(() => {
        if (step < 5) setStep((prev) => prev + 1);
    }, sentinelRef);

    return (
        <div>
            {/* Hero Section */}
            <ParallaxBanner
                layers={[{ image: heroBg, speed: -20 }]}
                className="h-[90vh] flex items-center justify-center" >
                <div className="bg-white/70 p-8 rounded-lg shadow-lg max-w-2xl text-center animate-fade-in">
                    <h2 className="text-4xl font-bold text-warm-500 mb-4">
                        Надёжные решения в сфере электроэнергетики
                    </h2> <p className="text-lg text-gray-700">
                    Мы — эксперты в электромонтаже, наладке оборудования, строительстве ЛЭП и подстанций.
                    Гарантируем эффективность и безопасность на каждом этапе.
            </p>
            </div>
            </ParallaxBanner>

            {/* Lazy-loaded sections */}
            {step >= 2 && <ServicesSection />}
            {step >= 3 && <ProjectsSection />}
            {step >= 4 && <AboutSection />}
            {step >= 5 && <ContactSection />}
            <div ref={sentinelRef} className="h-1" />
        </div>
    );
};

export default Home;
