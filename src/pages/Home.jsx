import { useState, useRef, useCallback } from "react";
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
    const [isLoading, setIsLoading] = useState(false);
    const sentinelRef = useRef(null);

    const loadMore = useCallback(() => {
        if (step < 5 && !isLoading) {
            setIsLoading(true);

            // Имитация задержки подгрузки контента
            setTimeout(() => {
                setStep((prev) => prev + 1);
                setIsLoading(false);
            }, 300); // Оптимальная задержка для плавности
        }
    }, [step, isLoading]);

    useInfiniteScroll(loadMore, sentinelRef);

    return (
        <div className="overflow-x-hidden">
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

            {/* Lazy-loaded sections with smooth transitions */}
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

            {/* Loading indicator */}
            {isLoading && (
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}

            <div ref={sentinelRef} className="h-20" />
        </div>
    );
};

export default Home;