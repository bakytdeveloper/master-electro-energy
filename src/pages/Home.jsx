import React, { useState, useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";

import heroBg from "../assets/hero-energy.jpg";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../pages/Projects";
import AboutSection from "../pages/About";
import ContactSection from "../pages/Contact";

const Home = () => {
    const [step, setStep] = useState(1);
    const sentinelRef = useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && step < 5) {
                    setStep(prev => prev + 1);
                }
            },
            { threshold: 0.1 }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [step]);

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <ParallaxBanner
                layers={[{ image: heroBg, speed: -20 }]}
                className="h-[90vh] flex items-center justify-center"
            >
                <div className="bg-white/70 p-8 rounded-lg shadow-lg max-w-2xl text-center animate-fade-in">
                    <h2 className="text-4xl font-bold text-warm-500 mb-4">
                        Надёжные решения в сфере электроэнергетики
                    </h2>
                    <p className="text-lg text-gray-700">
                        Мы — эксперты в электромонтаже, наладке оборудования, строительстве ЛЭП и подстанций.
                        Гарантируем эффективность и безопасность на каждом этапе.
                    </p>
                </div>
            </ParallaxBanner>

            {/* Sections */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {step >= 2 && <ServicesSection />}
                {step >= 3 && <ProjectsSection />}
                {step >= 4 && <AboutSection />}
                {step >= 5 && <ContactSection />}
            </motion.div>

            <div ref={sentinelRef} />
        </div>
    );
};

export default Home;