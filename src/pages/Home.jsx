import { ParallaxBanner } from "react-scroll-parallax";
import heroBg from "../assets/hero-energy.jpg";

const Home = () => {
    return (
        <ParallaxBanner
            layers={[{ image: heroBg, speed: -20 }]}
            className="h-[90vh] flex items-center justify-center"
        >
            <div className="bg-white/70 p-8 rounded-lg shadow-lg max-w-2xl text-center animate-fade-in">
                <h2 className="text-4xl font-bold text-warm-500 mb-4">
                    Надёжные решения в сфере электроэнергетики
                </h2>
                <p className="text-lg text-gray-700">
                    Мы — эксперты в электромонтаже, наладке оборудования, строительстве ЛЭП и подстанций. Гарантируем эффективность и безопасность на каждом этапе.
                </p>
            </div>
        </ParallaxBanner>
    );
};

export default Home;
